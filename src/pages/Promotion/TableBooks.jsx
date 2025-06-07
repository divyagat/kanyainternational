const TableBooks = () => {
  return (
    <>
      <div className="container-fluid" id="TableBooks">
        <h1>TableBooks</h1>

        <div className="container">
          <div className="row g-4">
            {["TableBooks1.jpeg", "TableBooks2.jpeg", "TableBooks3.jpeg", "TableBooks4.jpeg", "TableBooks5.jpeg"].map((img, index) => (
              <div className="col-md-4" key={index}>
                <div style={{ height: '300px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
                  <img
                    src={`public/${img}`}
                    alt={`TableBooks${index + 1}`}
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

export default TableBooks;
