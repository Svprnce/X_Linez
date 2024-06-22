import { Component } from "react";

export class Service extends Component {

    render() {
        return (
            <>
                <div className="pt-5 mt-5 mb-5 pb-5">
                    <div className="pt-5 py-5 py-xl-8" data-aos="fade-down">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                    <h2 className="mb-4 display-5 text-center" style={{ color: "#a40000" }}>Our Services</h2>
                                    {/* <h1 class="text-center" style="color: #a40000; font-weight: bold">
          Our Services
        </h1> */}
                                    <p className="text-secondary mb-5 text-center">
                                        We have a team of experienced and talented professionals who can help
                                        you with every aspect of theensuring efficient and streamlined
                                        solutions for the movement and management of goods across various
                                        supply chain stages.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="container overflow-hidden">
                            <div className="row gy-5">
                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/import.jpg" alt="ekart logistics" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            International Freight Forwarding
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            International freight forwarding encompasses the coordination and
                                            management of shipping logistics for the seamless movement of goods
                                            across borders, utilizing various transportation modes to ensure
                                            timely and efficient delivery.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/meeting.jpg" alt="Supply Chain Management in Nagercoil" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            Customs Clearance
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            Customs clearance is the formal process of facilitating the import
                                            or export of goods, ensuring compliance with regulations and
                                            obtaining necessary approvals from customs authorities.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/warehouse.jpg" alt="best Logistics Services in Nagercoil" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            Warehousing and Distribution
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            Warehousing and distribution involve the storage and systematic
                                            movement of goods to meet supply chain demands efficiently,
                                            optimizing inventory management and order fulfillment
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/delivery.jpg" alt="Logistics Services" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            Door-to-Door Delivery
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            Door-to-door delivery involves picking up goods from the sender and
                                            delivering them directly to the recipient's specified location,
                                            ensuring end-to-end logistics convenience.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/handling.jpg" alt="www.thexlinez.com" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            Project Cargo Handling
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            Cargo handling involves the expert management and transportation of
                                            oversized or complex goods for large-scale projects, ensuring safe
                                            and efficient delivery.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-down">
                                    <div className="text-start px-xl-2">
                                        <div className="card">
                                            <img src="../../assets/images/container.jpg" alt="xlinez" />
                                        </div>

                                        <h5 className="mt-2" style={{ color: "#a40000", fontWeight: "bold" }}>
                                            Shipping Consultation
                                        </h5>
                                        <p className="m-0 text-secondary">
                                            Shipping consultation offers expert guidance on logistics, customs,
                                            and supply chain management to optimize operations for businesses in
                                            international trade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*} <div class="pt-5 py-5 py-xl-8" data-aos="fade-down">
  <div class="container">
    <div class="row justify-content-md-center mb-5">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
         <h2 class="mb-4 display-5 text-center" style="color: #a40000;">Happy Clients</h2> 
        <!--<h1 class="text-center" style="color: #a40000; font-weight: bold">
          Happy Clients
        </h1>- ->
      </div>
    </div>
  </div>

  <div class="container pt-5 pb-5" style="background-color: seashell">
    <div class="row">
      <div class="col-md-12">
        <div id="testimonial-slider" class="owl-carousel">

          <div class="testimonial">
            <div class="testimonial-content">
              <div class="card testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
                X linez shipping company in Nagercoil provided exceptional
                service! Their efficient and reliable shipping solutions made my
                experience stress-free. I highly recommend their services to
                anyone in need of shipping assistance. Thank you for your
                outstanding service!
              </p>
            </div>
            <h3 class="title">Samantha</h3>
          </div>

          <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
                X linez shipping company in Nagercoil is top-notch! Their
                efficient service and friendly staff made my shipping experience
                hassle-free. I highly recommend them for all your shipping
                needs. Thank you, X linez!
              </p>
            </div>
            <h3 class="title">Patel</h3>
            <!-- <span class="post">Web Developer</span> -->
          </div>

          <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
                X linez provided exceptional shipping services. Their team
                was efficient and professional, ensuring my package arrived on
                time and in perfect condition. I highly recommend their services
                and will definitely use them again in the future. Thank you for
                the great experience!
              </p>
            </div>
            <h3 class="title">Kristina</h3>
          </div>

          <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
                X Linez provided exceptional logistics services in
                Tuticorin! Their team was efficient, reliable, and handled our
                shipments with utmost care. I am grateful for their
                professionalism and timely delivery.
              </p>
            </div>
            <h3 class="title">williamson</h3>
            {/* <span class="post">Web Developer</span> * /}
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}</div>
            </>
        )
    }
}