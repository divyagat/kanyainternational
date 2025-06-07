const Catalogues = () => {
  const images = [
    "Catlogues1.jpeg",
    "Catlogues2.jpeg",
    "Catlogues3.jpeg",
    "Catlogues4.jpeg",
    "Catlogues5.jpeg"
  ];

  return (
    <>
      <div className="container-fluid" id="Catalogues">
        <h1>Catalogues</h1>

        <div className="container">
          <div className="row g-4">
            {images.map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  style={{
                    height: '300px',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px'
                  }}
                >
                  <img
                    src={`public/${img}`}
                    alt={`Catalogue ${index + 1}`}
                    className="w-100"
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogues;
