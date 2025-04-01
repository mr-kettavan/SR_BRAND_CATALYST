import React from 'react';
import './sass/Packages.scss';
import silver from './assets/website_images/packages/Silver.jpg';
import gold from './assets/website_images/packages/gold.jpg';
import brass from './assets/website_images/packages/brass.jpg';

const packages = [
  {
    package_name: "Brass Package",
    description:
      "The Brass Package offers essential services for businesses looking to establish a strong foundation. It’s ideal for startups and small businesses wanting to get started with professional branding and online presence.",
    services_included: [
      { title: "Logo Design", description: "A simple, professional logo that represents your brand’s identity." },
      { title: "Basic Website Design", description: "A one-page website with responsive design and essential content sections." },
      { title: "Social Media Setup", description: "Setting up and optimizing your business profiles on major platforms." },
      { title: "Basic SEO Optimization", description: "Initial SEO setup to improve search engine ranking and visibility." },
    ],
    pricing: "₹9999",
    original_price: "₹12999", // Updated to Rupee symbol
    ideal_for: "Startups, Small Businesses, Local Shops",
    img: brass,
  },
  {
    package_name: "Silver Package",
    description:
      "The Silver Package is perfect for businesses that want to enhance their branding, grow their digital presence, and reach a wider audience.",
    services_included: [
      { title: "Custom Logo Design", description: "A unique and professionally designed logo tailored to your brand’s personality." },
      { title: "Responsive Website Development", description: "A fully responsive website with multiple pages and CMS." },
      { title: "SEO & Digital Marketing", description: "On-page SEO and a basic digital marketing campaign." },
      { title: "Social Media Management", description: "Managing and posting content to one social media platform." },
    ],
    pricing: "₹17499",
    original_price: "₹22999", // Updated to Rupee symbol
    ideal_for: "Growing Businesses, Medium-Sized Enterprises, E-commerce",
    img: silver,
  },
  {
    package_name: "Gold Package",
    description:
      "The Gold Package is the ultimate all-inclusive solution for businesses aiming for maximum growth, brand impact, and digital visibility.",
    services_included: [
      { title: "Premium Logo Design & Branding", description: "A custom-designed logo with complete brand identity development." },
      { title: "Advanced Website Development", description: "A fully customized, responsive, multi-page website with advanced features." },
      { title: "Comprehensive SEO & Marketing Strategy", description: "Full on-page and off-page SEO optimization." },
      { title: "Social Media Management", description: "Managing and posting content on three major social media platforms." },
    ],
    pricing: "₹24999",
    original_price: "₹35999", // Updated to Rupee symbol
    ideal_for: "Large Businesses, Enterprises, Brands Ready for Global Expansion",
    img: gold,
  },
];

function Packages() {
  return (
    <div className="packages-container">
      <h1 className="packages-title">Our Packages</h1>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`package-card ${pkg.package_name.toLowerCase().replace(" ", "-")}`}>
            <div className="package-header">
              <img src={pkg.img} alt={pkg.package_name} className="package-image" />
              <h2 className="package-name">{pkg.package_name}</h2>
            </div>
            <p className="package-description">{pkg.description}</p>
            <ul className="services-list">
              {pkg.services_included.map((service, idx) => (
                <li key={idx} className="service-item">
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>
            <div className="package-footer">
              <p className="package-pricing">
                <span className="original-price">{pkg.original_price}</span> {pkg.pricing}
              </p>
              {/* <button className="subscribe-button">Subscribe</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;