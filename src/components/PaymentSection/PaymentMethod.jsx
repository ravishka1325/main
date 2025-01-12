import { useEffect, useState } from 'react';

const PaymentMethod = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="paypal"]');
    
    const handleScriptLoad = () => {
      setScriptLoaded(true);
      if (window.paypal) {
        const buttonContainer = document.getElementById('paypal-button-container');
        if (buttonContainer) {
          buttonContainer.innerHTML = '';
        }
        window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal'
          },
          createOrder: (data, actions) => {
            const usdAmount = 2;
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

    const handleScriptError = () => {
      console.error("PayPal script failed to load");
      setScriptError(true);
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=AdfQZoGxDBEW5WtHP5DGIftQWRT5rfDddZ4akJa6qw1TOyDCUW4toU_7SDlLioGcz37s5BW5K8DWxXA0&currency=USD&intent=capture`;
      script.async = true;
      script.onload = handleScriptLoad;
      script.onerror = handleScriptError;
      document.body.appendChild(script);
    } else {
      handleScriptLoad();
    }
  }, []);

  return (
    <div className="payment-section">
      <h2 className="text-white text-2xl font-bold mb-6">SELECT YOUR PAYMENT MODE</h2>
      <div className="bg-[#2a2a2a] p-6 rounded-lg">
        <div id="paypal-button-container" className="max-w-md mx-auto" />
        {scriptError && (
          <div className="text-red-500 text-center mt-4">
            Something went wrong. Please try again later.
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
