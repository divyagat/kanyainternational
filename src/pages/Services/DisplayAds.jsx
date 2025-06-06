
const DisplayAds = () => {

  return (
    <>

      <div className="container-fluid" id="DisplayAds">

        <div className="container-fluid">
          <h1>DisplayAds</h1>
          <img src="public/dis&classAds.jpeg" alt="" className="text-center w-100 " />
        </div>

      </div>
      <div className="container text-center mt-5">
        <img src="public/dAds1.jpeg" alt="" />
        <div className="d-flex flex-wrap justify-content-center align-items-start gap-5 mt-5">
          <img src="public/dads2.jpeg" alt="Display Ad 2" className="img-fluid rounded shadow" style={{ maxWidth: '100%', height: 'auto' }} />
          <img src="public/dads3.jpeg" alt="Display Ad 3" className="img-fluid rounded shadow" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

      </div>
    </>
  )
}
export default DisplayAds;