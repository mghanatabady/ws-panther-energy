import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header2'
import Footer from '../layout/footer2'
import HomeSlider from '../element/homeslider1'
import { homeSliderContent2 } from '../element/SliderContent'
import ScrollToTop from '../element/scrollToTop';
import ServicesSlider1 from '../element/servicesSlider1';
import { servicesContent4 } from '../element/SliderContent'
import PartnerSlider from '../element/partnerSlider';
import BlogSlider1 from '../element/blogSlider1'

// import '../../css/skin/skin-2.css';


class Index2 extends Component {

    render() {
        return (
            <div className="skin-2">
                <Header />

                <HomeSlider
                    data={homeSliderContent2}
                    contentWrapperCls="sliderStyle2"
                    btnText="Read More"
                    hideBtn
                />

                <div className="page-content bg-white">
                    <div className="content-block">
                        <div className="section-full">
                            <div className="row spno about-industry">
                                <div className="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div className="dlab-post-media dlab-img-effect zoom">
                                        <img src={require("../../images/our-work/oilgas/pic1.jpg")} alt="" className="img-cover" />
                                    </div>
                                </div>
                                <div className="col-lg-4 bg-white wow fadeIn" id="about" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div className="service-box style2">
                                        <div>
                                            <h3 className="title text-black">
                                                About
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: 'bold' }}>Panther Energy Petroleum Company (PEP)</span>  specializes in technical solutions by providing specialty instrumentation, valves, Automation, safety, and other piping related products that We represent industry-leading companies.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 'bold' }}>PEP</span> has a team of professionals with diversified experience in services as well as in equipment supplies. These professionals may quickly understand the clients’ requirement and have good ability to respond in the same manner.
                                            </p>
                                            {/* <Link to="/services-2" className="site-button outline outline-2 btnhover11">ABOUT US</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="dlab-post-media dlab-img-effect zoom">
                                        <img src={require("../../images/our-work/oilgas/pic2.jpg")} alt="" className="img-cover" />
                                    </div>
                                </div>
                                <div className="col-lg-4 bg-secondry text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Core Operations</span></h2>
                                            <p>We offer premium engineering and consultancy, handling installations and commissioning proficiently. We're a trusted supplier of diverse products and conduct precise inspections, tests, and calibrations. Our expertise extends to oil field services and operations and maintenance, promising clients superior performance and sustainability.</p>
                                            {/* <Link to="/services-2" className="site-button outline white outline-2 btnhover11">ABOUT US</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div className="dlab-post-media dlab-img-effect zoom">
                                        <img src={require("../../images/our-work/oilgas/pic3.jpg")} alt="" className="img-cover" />
                                    </div>
                                </div>
                                <div className="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Gas </span>Equipment</h2>
                                            <p>
                                                We specialize in the sales and service of Measurement, Control and Distribution products for the natural gas distribution and transmission markets.Our equipment is mainly destined for L.P.G. and natural gas installations (domestic, commercial and industrial systems) with products ranging from L.P.G. storage tanks, valves and regulators, gas meters and flow meters, gas monitoring systems, gas detectors, vaporizers and S.N.G. mixers, pipes and fittings as well as numerous other accessories.
                                            </p>
                                            {/* <Link to="/services-2" className="site-button outline white outline-2 btnhover11">ABOUT US</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="dlab-post-media dlab-img-effect zoom">
                                        <img src={require("../../images/our-work/oilgas/pic4.jpg")} alt="" className="img-cover" />
                                    </div>
                                </div>
                                <div className="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Supply</span> Chain</h2>
                                            <p>
                                                PE is supply chain provider of industrial instrumentation worldwide. Our company offers actuators, chart recorders, differential pressure units (DPU), flow computers & automation parts, flow meters, indicators, switches, transmitters and valves.We are an authorized distributor for globally recognized manufacturers of measurement, control & calibration equipment for pressure, temperature, flow, humidity & level instrumentation.
                                                Utilities( Water, Waste Water, Natural Gas, Electric Generation, Power Plants and Pipelines)
                                            </p>
                                            {/* <Link to="/services-2" className="site-button outline white outline-2 btnhover11">ABOUT US</Link> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title text-black"><span>Automative  </span> <br/>Manufacturing.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="/services-2" className="site-button outline outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div className="dlab-post-media dlab-img-effect zoom"> 
                                        <img src={require("../../images/our-work/oilgas/pic5.jpg")} alt="" className="img-cover"/>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="page-content bg-white">
                    <div className="content-block">
                        <div id="services" className="section-full bg-gray content-inner about-carousel-ser">
                            <div className="container">
                                <div  className="section-head text-center">
                                    <h2 className="title">Integrated Industrial Solutions & <br /><span className="text-primary">Other Process Measurement Equipments</span></h2>
                                    {/* <p>Offering a broad range of industrial solutions,
                                         from Valve & Actuation to Electrical Equipment Automation and Water Treatment. Our expertise ensures high efficiency and performance across multiple sectors.</p> */}
                                </div>

                                <ServicesSlider1
                                    slidesToShow={3}
                                    data={servicesContent4} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full bg-gray content-inner" id="products">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title" > Products Categories</h2>
                            {/* <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
                        </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic1.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Gas Equipment</Link></h4>
                                                <p>We specialize in LPG and natural gas fittings, providing full range of regulators and changeover units and equipment items, mainly for L.P.G. and Natural Gas in Domestic, Commercial and Industrial Systems.</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic2.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Valves, Actuators</Link></h4>
                                                <p>Our products and services include Manual & Pneumatic/Electrically Actuated Butterfly Valves, Actuated Ball Valves, Check Valves, Gate Valves, Plug Valves & Control Valves with materials such as Cast/Ductile Iron, Carbon Steel, Stainless Steel, Bronze & Aluminium Bronze, Plastic(PVC,CPVC,PVDF).</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic3.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Fire Protection Equipment</Link></h4>
                                                <p>UL listed and FM approved Fire Solutions Valve, Pumps ,Fire Hydrants , Fire detection and Sprinkler systems , Bladder Tanks ,Control Systems.</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic4.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Instrumentation, Measurement & Control</Link></h4>
                                                <p>We offer Products that include process control instrumentation and valve solutions to measure and control your critical pressure, temperature, level, flow and analytical process parameters as below A)Flame & Gas Detection Devices B)Gauges, Switches & Indicators C)Explosion Protection Devices D)Level Measurement Devices & Controls E)Flow Measurement Devices F)Level Sensors & Controls</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlasy1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic5.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Industrial Plastic Pipe Systems</Link></h4>
                                                <p>Industrial Pressure PVC (PVCU/UPVC), ABS and CPVC Plastic Pipe Systems: including pipes, fittings and accessories. We supply metric mm ranges (PN6, PN10 & PN16), UK imperial inch ranges (Class C, D, E & T), USA imperial inch ranges (Schedule 40, 80 & 120) and clear PVC pipe ranges, in both metric and imperial.</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic6.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Industrial Pump , Electric Motors & Fans</Link></h4>
                                                <p>We offer a wide range of quality pumps for all industries. Pumps is the largest application group across our markets and we have a deep understanding of what it takes to make a difference.Electromotors available in single and 3 phase, AC and DC Motors, BFM Motors, Geared Motors, brake-motors, vibrator motors, and more. Also We supply industrial fans Case and Plate Mounted Axial,Centrifugal, Bifurcated, Roof Mounted, In-line Duct Fans with ATEX Certificated and in a variety of configurations.</p>
                                                {/* <Link to="/services-details" className="site-button btnhover14">Learn More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                <div className="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="container" id="partners">
                        <div className="section-head text-center">
                            <h2 className="title" > BRANDS</h2>
                        </div>
                        <div className="section-content">
                            <PartnerSlider hideBorder />
                        </div>
                    </div>
                </div>






                <Footer />
                <ScrollToTop className="style1 radius" />
            </div>
        )
    }
}
export default Index2;