import { useState, useEffect } from "react";

const images = [
    "/public/Assets/2.jpg",
    "/public/Assets/3.jpg",
    "/public/Assets/4.jpg",
];

export const VideoHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative box-border caret-transparent z-[9] w-full h-[75vh] overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for better text readability if needed */}
        </section>
    );
};
