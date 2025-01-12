import { useEffect, useState } from 'react';

const PaymentMethod = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="paypal"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    const loadPayPalScript = () => {
      try {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AdfQZoGxDBEW5WtHP5DGIftQWRT5rfDddZ4akJa6qw1TOyDCUW4toU_7SDlLioGcz37s5BW5K8DWxXA0&currency=USD&intent=capture`;
        script.async = true;
        
        script.onload = () => {
          setScriptLoaded(true);
          if (window.paypal) {
            window.paypal.Buttons({
              style: {
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal'
              },
              
              createOrder: (data, actions) => {
                const usdAmount = 2
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: usdAmount,
                      currency_code: 'USD'
                    },
                    description: "Spider-Man: Far from Home - Adult Ticket (x4)"
                  }]
                });
              },
              
              onApprove: async (data, actions) => {
                try {
                  const order = await actions.order.capture();
                  console.log("Payment successful!", order);
                  // Add success handling here
                  alert("Payment successful! Order ID: " + order.id);
                } catch (error) {
                  console.error("Payment failed:", error);
                  setScriptError(true);
                }
              },
              
              onError: (err) => {
                console.error("PayPal Error:", err);
                setScriptError(true);
              }
            }).render('#paypal-button-container')
              .catch(err => {
                console.error("Render error:", err);
                setScriptError(true);
              });
          }
        };

        script.onerror = () => {
          console.error("PayPal script failed to load");
          setScriptError(true);
        };

        document.body.appendChild(script);
      } catch (error) {
        console.error("Script loading error:", error);
        setScriptError(true);
      }
    };

    loadPayPalScript();

    return () => {
      const script = document.querySelector('script[src*="paypal"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="payment-section">
      <h2 className="text-white text-2xl font-bold mb-6">SELECT YOUR PAYMENT MODE</h2>
      <div className="bg-[#2a2a2a] p-6 rounded-lg">
        <div id="paypal-button-container" className="max-w-md mx-auto" />
        {scriptError && (
          <div className="text-red-500 text-center mt-4">
          </div>
        )}
        {!scriptLoaded && !scriptError && (
          <div className="text-gray-400 text-center mt-4">
            Loading payment options...
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;