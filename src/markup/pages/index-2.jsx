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
                                            <h2 className="title"><span>Petroleum  </span> <br />Refinery.</h2>
                                            <p>PE Energy has a long-standing experience in the execution of complex projects involving automation and system integration in the Oil & Gas industry. At PE Energy, we are committed to helping our clients achieve optimal productivityeration.</p>
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
                                            <h2 className="title"><span>Oil & Gas </span> <br />Industry.</h2>
                                            <p>PE Energy has a long-standing experience in the execution of complex projects involving automation and system integration in the Oil & Gas industry. At PE Energy, we are committed to helping our clients achieve optimal productivity.</p>
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
                        <div className="section-full bg-gray content-inner about-carousel-ser">
                            <div className="container">
                                <div id="services" className="section-head text-center">
                                    <h2 className="title">Integrated Industrial Solutions & <br /><span className="text-primary">Services</span></h2>
                                    <p>Offering a broad range of industrial solutions, from Valve & Actuation to Electrical Equipment Automation and Water Treatment. Our expertise ensures high efficiency and performance across multiple sectors.</p>
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
                        <div className="section-content row">
                            {/* 1 
                                    1-Gas Equipment :We specialize in LPG and natural gas fittings, providing full range of regulators and changeover units and equipment items, mainly for L.P.G. and Natural Gas in Domestic, Commercial and Industrial Systems.
                                    */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="icon-bx-wraper" data-name="01">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-fuel-truck"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">Gas Equipment</h2>
                                        <p>We specialize in LPG and natural gas fittings, providing full range of regulators and changeover units and equipment items, mainly for L.P.G. and Natural Gas in Domestic, Commercial and Industrial Systems. </p>
                                    </div>
                                </div>
                            </div>
                            {/* 2 
                                     2-Valves, Actuators :our products and services include Manual & Pneumatic/Electrically Actuated Butterfly Valves, Actuated Ball Valves, Check Valves, Gate Valves, Plug Valves & Control Valves with materials such as Cast/Ductile Iron, Carbon Steel, Stainless Steel, Bronze & Aluminium Bronze, Plastic(PVC,CPVC,PVDF).
                                     */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="icon-bx-wraper" data-name="02">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-factory-1"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">Valves, Actuators</h2>
                                        <p>Our products and services include Manual & Pneumatic/Electrically Actuated Butterfly Valves, Actuated Ball Valves, Check Valves, Gate Valves, Plug Valves & Control Valves with materials such as Cast/Ductile Iron, Carbon Steel, Stainless Steel, Bronze & Aluminium Bronze, Plastic(PVC,CPVC,PVDF). </p>
                                    </div>
                                </div>
                            </div>
                            {/* 3 FIRE PROTECTION EQUIPMENT : UL listed and FM approved Fire Solutions Valve, Pumps ,Fire Hydrants , Fire detection and Sprinkler systems , Bladder Tanks ,Control Systems
                            */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="icon-bx-wraper" data-name="03">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-conveyor-1"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">FIRE PROTECTION EQUIPMENT</h2>
                                        <p> UL listed and FM approved Fire Solutions Valve, Pumps ,Fire Hydrants , Fire detection and Sprinkler systems , Bladder Tanks ,Control Systems</p>
                                    </div>
                                </div>
                            </div>
                            {/* 4
                                          :We offer Products that include process control instrumentation and valve solutions to measure and control your critical pressure, temperature, level, flow and analytical process parameters as below A)Flame & Gas Detection Devices B)Gauges, Switches & Indicators C)Explosion Protection Devices D)Level Measurement Devices & Controls E)Flow Measurement Devices F)Level Sensors & Controls
                                          */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                                <div className="icon-bx-wraper" data-name="04">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-robot-arm"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">Instrumentation, Measurement & Control </h2>
                                        <p>Industrial Pressure PVC (PVCU/UPVC), ABS and CPVC Plastic Pipe Systems: including pipes, fittings and accessories. We supply metric mm ranges (PN6, PN10 & PN16), UK imperial inch ranges (Class C, D, E & T), USA imperial inch ranges (Schedule 40, 80 & 120) and clear PVC pipe ranges, in both metric and imperial.</p>
                                    </div>
                                </div>
                            </div>
                            {/* 5
                                              5)Industrial Plastic Pipe Systems :Industrial Pressure PVC (PVCU/UPVC), ABS and CPVC Plastic Pipe Systems: including pipes, fittings and accessories. We supply metric mm ranges (PN6, PN10 & PN16), UK imperial inch ranges (Class C, D, E & T), USA imperial inch ranges (Schedule 40, 80 & 120) and clear PVC pipe ranges, in both metric and imperial.
                                              */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="icon-bx-wraper" data-name="05">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-fuel-station"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">Industrial Plastic Pipe Systems</h2>
                                        <p>Industrial Pressure PVC (PVCU/UPVC), ABS and CPVC Plastic Pipe Systems: including pipes, fittings and accessories. We supply metric mm ranges (PN6, PN10 & PN16), UK imperial inch ranges (Class C, D, E & T), USA imperial inch ranges (Schedule 40, 80 & 120) and clear PVC pipe ranges, in both metric and imperial. </p>
                                    </div>
                                </div>
                            </div>
                            {/* 6 
                                          6)Industrial Pump , Electric Motors & Fans:We offer a wide range of quality pumps for all industries. Pumps is the largest application group across our markets and we have a deep understanding of what it takes to make a difference.Electromotors available in single and 3 phase, AC and DC Motors, BFM Motors, Geared Motors, brake-motors, vibrator motors, and more. Also We supply industrial fans Case and Plate Mounted Axial,Centrifugal, Bifurcated, Roof Mounted, In-line Duct Fans with ATEX Certificated and in a variety of configurations.
                                          */}
                            <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="icon-bx-wraper" data-name="06">
                                    <div className="icon-lg">
                                        <Link to="#" className="icon-cell"><i className="flaticon-engineer-1"></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">Industrial Pump , Electric Motors & Fans</h2>
                                        <p>We offer a wide range of quality pumps for all industries. Pumps is the largest application group across our markets and we have a deep understanding of what it takes to make a difference.Electromotors available in single and 3 phase, AC and DC Motors, BFM Motors, Geared Motors, brake-motors, vibrator motors, and more. Also We supply industrial fans Case and Plate Mounted Axial,Centrifugal, Bifurcated, Roof Mounted, In-line Duct Fans with ATEX Certificated and in a variety of configurations. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title" id="partners"> Partners</h2>
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