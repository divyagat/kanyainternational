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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    { img: '/AdprintCard-1.jpeg' },
    { img: '/AdprintCard-2.jpeg' },
    { img: '/Adprintcard-3.jpeg' },
    { img: '/AdprintCard-4.jpeg' },
    { img: '/AdprintCard-5.jpeg' },
    { img: '/AdprintCard-6.jpeg' },
    { img: '/AdprintCard-7.jpeg' },
    { img: '/AdprintCard-8.jpeg' },
    { img: '/AdprintCard-9.jpeg' },
  ];

  return (
    <>
      <div className="container-fluid py-5 bg-light" id="KanyaInternational">
        <h2 className="text-center fw-bold mb-4">Our Visiting Cards Design</h2>
        <div
          className="container cards shadow-lg rounded-4  text-center"
          data-aos="zoom-in"
        >
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={review.img}
                    className="card-img-top img-fluid"
                    alt={`Client Review ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-4">
            <button className="btn btn-primary px-4 py-2">More</button>
          </div>
        </div>
      </div>

      <section
        className="py-5 px-3 text-center"
        style={{
          background: '#FCEAED',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <img
                src="/testimonial-avatar.jpg"
                alt="Client"
                className="rounded-circle mb-4"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <h3 className="fw-bold">Ruth A. Flora</h3>
              <div className="text-danger mb-3" style={{ fontSize: '1.2rem' }}>
                {'★'.repeat(5)}
              </div>
              <p className="fs-5 text-muted mb-4">
                You can showcase a client review here. Make it nice and short,
                then use this button to send them to your reviews or services page.
              </p>
              <button
                className="btn"
                style={{
                  background: '#FCEAED',
                  padding: '10px 20px',
                  borderRadius: '7px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: '1px solid black',
                }}
              >
                What My Clients Say
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientReview;
