import React, { useState, useEffect } from 'react';
import './sass/Banner.scss';

function Banner() {
    const desktopImages = [
        "https://picsum.photos/1200/400?random=1",
        "https://picsum.photos/1200/400?random=2",
        "https://picsum.photos/1200/400?random=3",
    ];

    const mobileImages = [
        "https://picsum.photos/600/300?random=1",
        "https://picsum.photos/600/300?random=2",
        "https://picsum.photos/600/300?random=3",
    ];

    const [carouselImages, setCarouselImages] = useState(desktopImages);

    useEffect(() => {
        const updateImages = () => {
            if (window.innerWidth <= 768) {
                setCarouselImages(mobileImages);
            } else {
                setCarouselImages(desktopImages);
            }
        };

        // Initial check
        updateImages();

        // Add event listener for window resize
        window.addEventListener('resize', updateImages);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateImages);
    }, []);

    return (
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={image} className="d-block w-100" alt={`Banner ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;