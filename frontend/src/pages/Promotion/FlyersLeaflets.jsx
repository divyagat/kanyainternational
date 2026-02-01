import React from "react";

const FlyersLeaflets = () => {
  const images = [
    "/Leaflet-1.jpeg",
    "/Leaflet-2.jpeg",
    "/Leaflet-3.jpeg",
    "/flyers-1.jpeg",
    "/flyers-2.jpeg",
    "/flyers-3.jpeg",
    "/flyers-4.jpeg",
    "/flyers-5.jpeg",
    "/flyers-6.jpeg",
    "/flyers-7.jpeg",
    "/flyers-8.jpeg",
  ];

  return (
    <>
      <div
        className="container-fluid py-5"
        id="FlyersLeaflets"
        style={{ background: "linear-gradient(135deg, #e0f7fa, #ffffff)" }}
      >
        <div className="container text-center mb-5">
          <h1 className="display-5 fw-bold text-success mb-3">
            Flyers & Leaflets
          </h1>
          <div
            style={{
              height: "4px",
              width: "80px",
              backgroundColor: "#28a745",
              margin: "0 auto 20px",
              borderRadius: "2px",
            }}
          />
          <p className="text-muted fs-5">
            Beautifully designed flyers and leaflets for your business
          </p>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {images.map((src, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="image-wrapper shadow-sm rounded overflow-hidden">
                  <img
                    src={src}
                    alt={`Flyer or Leaflet ${index + 1}`}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-wrapper {
          height: 400px;
          width: 100%;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border-radius: 12px;
        }

        .image-wrapper img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(40, 167, 69, 0.4);
          z-index: 10;
        }

        .image-wrapper:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default FlyersLeaflets;
