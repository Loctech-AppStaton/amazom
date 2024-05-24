"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { phones } from "../constants";
import ArrowLeftIcon from "../icons/arrow-left-icon";
import { images2 } from "./carousel";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function Iphone14Pro() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const slides = [images2[images2.length - 1], ...images2, images2[0]];

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  React.useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(images2.length);
      } else if (currentIndex === images2.length + 1) {
        setCurrentIndex(1);
      }
    };

    const timer = setTimeout(handleTransitionEnd, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, images2.length]);

  React.useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto  mb-20 flex flex-col justify-center items-center">
      <div className="relative overflow-hidden ">
        <div
          className={`flex transition-transform ${
            isTransitioning ? "duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
          }}>
          {slides.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flexBasis: "100%" }}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 lg:-left-20 -left-4 transform -translate-y-1/2  text-slate-200 p-2 rounded-full cursor-pointer"
        onClick={prevSlide}>
        <ArrowLeftIcon className="w-10 h-10" />
      </button>
      <button
        className="absolute top-1/2 lg:-right-20 -right-4 transform -translate-y-1/2  text-slate-200 p-2 rounded-full cursor-pointer"
        onClick={nextSlide}>
        <ArrowRightIcon className="w-10 h-10" />
      </button>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images2.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index + 1 === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
