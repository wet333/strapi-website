import {useEffect, useState} from "react";

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export function Carousel({
                             images,
                             autoPlay = true,
                             autoPlayInterval = 3000,
                         }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [currentIndex, autoPlay, autoPlayInterval]);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                }}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0"
                        style={{flex: `0 0 ${100 / images.length}%`}}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[300px] sm:h-[480px] object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 border border-font
                border-opacity-20 bg-background-400 text-accent p-1 sm:p-2 hover:bg-background-300"
            >
                &#10094;
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 border border-font
                border-opacity-20 bg-background-400 text-accent p-1 sm:p-2 hover:bg-background-300"
            >
                &#10095;
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            currentIndex === index
                                ? "bg-accent"
                                : "bg-background-100"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}