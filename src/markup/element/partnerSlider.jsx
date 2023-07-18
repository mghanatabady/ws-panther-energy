import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [];

for (let i = 1; i <= 29; i++) {
    const numStr = String(i).padStart(3, '0');
    content.push({
        logo: require(`./../../images/client-logo/${numStr}.jpg`),
    });
}


class ClientSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 2
				  }
				}
			]
        };

        const Border = this.props.hideBorder ? "" : "border"
        const padding = this.props.allowPadding ? "p-a25":""

        return (
            <>
                <Slider {...settings} className="client-logo-carousel btn-style-1 icon-2">
                    {content.map((item, id) => (
                        <div className="item">
                            <div class={`ow-client-logo ${padding}`}>
                                <div class={`client-logo ${Border}`}>
                                    {/* <Link to="#"> */}
                                        
                                    
                                    
                                    
                                        <img src={item.logo} alt=""/>
                                    
                                    
                                    
                                    
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ClientSlider1;