import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../css/Homenowshowing.css';

import nextArrow from '../../assets/arrownext.png';
import prevArrow from '../../assets/arrowprevios.png';

const Homenowshowing = () => {
  const settings = {
    infinite: false, // Set to false to prevent infinite scrolling
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const movies = [
    {
      title: "Red One",
      duration: "2HR 30MIN",
      rating: "PG-13",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZmFkMjE4NjQtZTVmZS00MDZjLWE2ZmEtZTkzODljNjhlNWUxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Smile 2",
      duration: "2HR 30MIN",
      rating: "R",
      imageUrl: "https://resizing.flixster.com/gZtomMQp1wjKcCrcWSIBhY8EPBo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlM2VjZGZjLWI3ZDEtNGFjYS05ODFjLTQwZGUyYmMwODcwYy5qcGc=",
    },
    {
      title: "Lucky Bhaskar",
      duration: "2HR 30MIN",
      rating: "PG",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Venom: The Last Dance",
      duration: "2HR 30MIN",
      rating: "PG-13",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmamDHfLyB1LF8rmqol5WIkAN6NEfd8LoBg&s",
    },
    {
      title: "Mission Impossible",
      duration: "2HR 18MIN",
      rating: "PG-13",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Black Panther",
      duration: "2HR 41MIN",
      rating: "PG-13",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Batman",
      duration: "2HR 56MIN",
      rating: "PG-13",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      duration: "2HR 6MIN",
      rating: "PG-13",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    },
    {
      title: "Spider-Man",
      duration: "2HR 28MIN",
      rating: "PG-13",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    },
  ];
  


  return (
    <div className="movie-slider">
      <h2>Now Showing</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.duration} | {movie.rating}</p>
            <button>Buy Tickets</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <img className='nextarrow' src={nextArrow} alt="Next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <img className='prevarrow' src={prevArrow} alt="Previous" />
    </div>
  );
}

export default Homenowshowing;
