import React, { useState, useEffect } from "react";
import Homemain from "../Yokis/Homemain";

const slides = [
  {
    id: 1,
    title: "Red One",
    description: "When a villain kidnaps Santa Claus from the North Pole, an E.L.F. (Extremely Large and Formidable) operative joins forces with the world's most accomplished tracker to find him and save Christmas.",
    imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/stranger-things-cartoon.jpg"
  },
  {
    id: 2,
    title: "Holiday Adventure",
    description: "Join the most epic holiday adventure of the year as our heroes race against time to save the spirit of Christmas.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:13000/1*O7VIrvdMHe0Jg6CAOJ4x9Q.jpeg"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {slides.map((slide, index) => (
        <Homemain
          key={slide.id}
          title={slide.title}
          description={slide.description}
          imageUrl={slide.imageUrl} // Pass the image URL
          isActive={index === activeSlide} // Show active slide
        />
      ))}
    </div>
  );
};

export default Home;
