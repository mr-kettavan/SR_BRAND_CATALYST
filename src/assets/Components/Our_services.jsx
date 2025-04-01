import React, { useEffect } from 'react';
import './sass/Our_services.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import event from './assets/website_images/event.jpg';
import prom from './assets/website_images/promotion.jpg';
import Soc_video from './assets/website_images/social media video.jpg';
import Ad_filim from './assets/website_images/ad_filim.jpg';
import ext from './assets/website_images/ext sig.jpg';
import interior from './assets/website_images/interior.jpg';
import veh from './assets/website_images/vehicle wrap.jpg';
import neon from './assets/website_images/neon.jpg';
import cap from './assets/website_images/cap letter.jpg';
import front from './assets/website_images/front lite.jpg';
import backlite from './assets/website_images/backlite.jpg';
import ss from './assets/website_images/brass.jpg';
import standee from './assets/website_images/standee.jpg';
import video_wall from './assets/website_images/video wall.jpg';
import Digital from './assets/website_images/digital.jpg';
import lighting_frame from './assets/website_images/lighting frame.jpg';
import Broucher from './assets/website_images/broucher.jpg';
import Visting_card from './assets/website_images/visting card.jpg';
import logo_design from './assets/website_images/logo_design.jpg';
import post_design from './assets/website_images/social media post.jpg';
import print_design from './assets/website_images/printing design.jpg';
import packaging_design from './assets/website_images/packaging design.jpg';
import product_design from './assets/website_images/product design.jpg';
import ch_design from './assets/website_images/character design.jpg';
import motion_graphics from './assets/website_images/motion.jpg';

function Our_services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const services = [
    {
        title: "Signage & Large Format Printing",
        description: "Your business’s first impression counts. Let us create compelling and memorable signage that reflects your brand’s identity. From storefront displays to large-format graphics, we offer custom signage solutions that turn heads and drive engagement.",
        points: [
          {
            title: "Exterior Signage",
            img: ext,
          },
          {
            title: "Interior Signage",
            img: interior,
          },
          {
            title: "Vehicle Wraps",
            img: veh,
          },
          {
            title: "Neon Signage",
            img:neon,
          },
          {
            title: "capletter Signage",
            img:cap ,
        
          },
          {
            title: "Frontlite Signage",
            img: front,
        
          },
          {
            title: "backlite Signage",
            img: backlite,
        
          },
          {
            title: "SS Signage",
            img: ss,
          },
          {
            title: "Standees & Banners",
            img: standee,
          },
          {
            title: "Video walls",
            img: video_wall ,
          },
          {
            title: "Digital Signage",
            img: Digital,
          },
          {
            title: "Translucent Photo Frames",
            img: lighting_frame,
          },
          {
            title: "Brouchers & Catalogs",
            img: Broucher,
          },
          {
            title: "visting_cards",
            img: Visting_card,
          },

        ]
      },
      {
        title: "Graphic Design & Branding",
        description: "Design is at the heart of every brand, and we ensure yours stands out. Our experienced designers will craft graphics that communicate your message effectively while maintaining a strong visual identity across all platforms.",
        points: [
          {
            title: "Logo Design",
            img: logo_design,
          },
          {
            title: "social media posts design",
            img: post_design,
          },
          {
            title: "Printing Design",
            img: print_design,
          },
          {
            title: "Packaging Design",
            img: packaging_design,
          }
        ]
      },

    {
      title: "Video Editing & Ad Film Production",
      description:
        "In today’s digital world, video content is king. Let us tell your story through compelling, high-quality video production. Whether it’s a promotional video, tutorial, or event highlight, we bring your ideas to life with editing expertise and cinematic quality.",
      points: [
        {
          title: "Event Videos",
          img: event,
        },
        {
          title: "Promotional Videos",
          img: prom,
        },
        {
          title: "Social Media Videos",
          img: Soc_video,
        },
        {
          title: "AD Film Production",
          img: Ad_filim,
        },
      ],
    },
    
    {
        title: "3D Animation & Motion Graphics",
    description: "Push the boundaries of creativity with stunning 3D animation and motion graphics. Whether it’s for advertising, product demonstrations, or visual storytelling, we design visually striking animations that captivate your audience.",
    points: [
      {
        title: "Product Visualization",
        img: product_design,
      },
     
      {
        title: "Character Animation",
        img: ch_design,
      },
      {
        title: "Motion Graphics for Commercials",
        img: motion_graphics,
      }
    ]
  },


];
  

  return (
    <div className="services-container">
      <h1 className="services" data-aos="fade-up">Our Services</h1>
            {services.map((service, index) => (
        <div key={index} className="service-section" data-aos="fade-up">
          {/* Title and Description */}
          <h3>{service.title}</h3>
          <p>{service.description}</p>

          {/* Points in Cards */}
          <div className="points-grid">
            {service.points.map((point, idx) => (
              <div className="point-card" key={idx} data-aos="zoom-in">
                <img src={point.img} alt={point.title} className="point-image" />
                <h3>{point.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Our_services;