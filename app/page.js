import "./fff.css"



export default function Page(){
    return <div>
    {/* slider section */}
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail-box">
                    <h1>
                    YOUR FEET <br/> DESERVE
                    THE <br /> BEST 
                      
                    </h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

}