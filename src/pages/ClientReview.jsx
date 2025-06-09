import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const settings = {
    dots: true,             // show navigation dots
    infinite: true,         // loop the slides
    speed: 500,             // transition speed
    slidesToShow: 4,        // number of cards to show
    slidesToScroll: 1,      // number of cards to scroll
    autoplay: true,         // enable auto slide
    autoplaySpeed: 3000,    // 3 seconds
    pauseOnHover: true,     // optional: pause when hovered
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      img: 'public/AdprintCard-1.jpeg',
    },
    {
      img: 'public/AdprintCard-2.jpeg',
    },
    {
      img: 'public/Adprintcard-3.jpeg',
    },
    {
      img: 'public/AdprintCard-4.jpeg',
    },
    {
      img: 'public/AdprintCard-5.jpeg',
    },
    {
      img: 'public/AdprintCard-6.jpeg',
    },
    {
      img: 'public/AdprintCard-7.jpeg',
    },
    {
      img: 'public/AdprintCard-8.jpeg',
    },
    {
      img: 'public/AdprintCard-9.jpeg',
    },
  ];

  return (


    <>
      <div className="container-fluid py-5 bg-light" id="KanyaInternational">

        <h2 className='text-center'>Our Visiting Cards Design</h2>
        <div
          className="container-fluid cards shadow-lg rounded-4 p-4 text-center mt-3"
          data-aos="zoom-in"
        >
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-2">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={review.img}
                    className="card-img-top"
                    alt={`Client Review ${index + 1}`}
                  />
                </div>
              </div>

            ))}
          </Slider>
          <button className="btn btn-primary mt-5  mx-auto">More</button>
        </div>
      </div>



      <section className=" py-5 px-4 text-center ClientReview" style={{ background: "#FCEAED", height: "60vh" }}>
        <div className="max-w-xl mx-auto">
          <img
            src="/testimonial-avatar.jpg" // Replace with actual image path
            alt="Client"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">Ruth A. Flora</h3>
          <div className="text-red-500 mb-4">
            {'★'.repeat(5)}
          </div>
          <p className="text-lg mb-6 " style={{ fontSize: "25px" }}>
            <p>You can showcase a client review here.Make it nice</p>
            <p>and short, then use this button to send them to</p>
            <p>your reviews or services page.</p>
          </p>
          <button
            className="transition duration-300  hover:bg-red hover:text-white"
            style={{
              background: "#FCEAED",
              padding: "5px 10px",
              borderRadius: "7px",
              height: "60px",
              width: "275px",
              fontSize: "20px",
              fontWeight: "600",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            What My Clients Say
          </button>

        </div>
      </section>
    </>


  );
};

export default ClientReview;
