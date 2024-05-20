"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ArrowLeftIcon from "../../icons/arrow-left-icon";
import { images } from "../../components/carousel";
import ArrowRightIcon from "../../icons/arrow-right-icon";
import Iphone14Pro from "../../components/Iphone14-pro";
import { phones } from "@/constants";

export default function Iphone14() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const slides = [images[images.length - 1], ...images, images[0]];

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
        setCurrentIndex(images.length);
      } else if (currentIndex === images.length + 1) {
        setCurrentIndex(1);
      }
    };

    const timer = setTimeout(handleTransitionEnd, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, images.length]);

  React.useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className="mx-auto max-w-[1300px] w-full min-h-screen md:px-0 px-6">
      <div className="flex justify-center items-center py-6">
        <Image
          src="/images/logo1.jpg"
          alt="amazom-logo"
          width={400}
          height={400}
          className="w-[350px] h-[100px]"
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center text-center md:text-5xl text-3xl py-4 gap-y-4 text-red-600 font-semibold">
          <p> Enjoy The All New 14 Pro max </p>
          <p> (Dubai Version)</p>
        </div>
        <div className="flex flex-col justify-center items-center font-extrabold gap-y-4">
          <p>
            It has all amazing crystal features and also comes with free
            Delivery
          </p>
          <p>
            This is also the Exact replica of the Original 14pro max and it is
            being used worldwide as you wont differentiate it from the original
          </p>
        </div>

        <div className="flex justify-center items-center flex-col py-8">
          <Image
            src="/images/iphon14.jpeg"
            alt=""
            width={400}
            height={400}
            className="lg:w-[80%] w-full lg:h-[600px] sm:h-[400px] h-[200px] object-cover"
          />
          <div className="text-red-600 font-semibold text-4xl space-y-3 py-4 flex flex-col text-center">
            <p>GET THE ALL NEW 14 PRO MAX TODAY WITH OUR SPECIAL</p>
            <p>DISCOUNT PRICE ON OVER 35% SLASH AND ENJOY, ALWAYS</p>
            <p>REMEMBER THAT IT COMES WITH FREE DELIVERY NATIONWIDE.</p>
          </div>
        </div>
        <Iphone14Pro />
        <div className="flex md:flex-row flex-col lg:gap-10 gap-4">
          <div className="relative w-full lg:max-w-sm md:max-w-[210px]  md:mb-20 mb-10">
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
              className="absolute top-1/2 lg:left-4 left-1 transform -translate-y-1/2  text-white p-2 rounded-full"
              onClick={prevSlide}>
              <ArrowLeftIcon className="w-8 h-8" />
            </button>
            <button
              className="absolute top-1/2 lg:right-4 right-1 transform -translate-y-1/2  text-white p-2 rounded-full"
              onClick={nextSlide}>
              <ArrowRightIcon className="w-8 h-8" />
            </button>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
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
          <div>
            <h1 className="md:text-4xl text-2xl font-extrabold">
              PRODUCT SPECIFICATION:
            </h1>
            <p className="pt-4 font-extralight text-sm">
              STORAGE SPACE -512GB RAM SIZE -12GB FAST CHARGE ENABLED GORILLA
              SCREEN GUARD FULL SCREEN RESOLUTION
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-6 text-center lg:mx-4 mx-0">
          <Image
            src="/images/14phone.jpeg"
            alt=""
            width={400}
            height={400}
            className=" md:w-[50%]  w-full lg:h-[300px] md:h-[200px] h-[300px]  object-cover"
          />
          <Image
            src="/images/iphone14-store.jpeg"
            alt=""
            width={400}
            height={400}
            className=" md:w-[50%] w-full lg:h-[300px] md:h-[200px] h-[300px] object-cover"
          />
        </div>
        <div className="text-red-600 font-semibold italic flex  flex-col text-center space-y-4 py-8">
          <p className="text-3xl">It comes exactly as seen Below 100%. </p>
          <p className="text-lg">
            It is PAYMENT ON DELIVERY and so you have nothing to worry about,
            Also comes with FREE DELIVERY NATIONWIDE.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <video
          controls
          className=" lg:w-[80%] w-full md:h-[600px] sm:h-[400px] h-[200px] object-cover"
          loop
          playsInline>
          <source src="/videos/iphone14.mp4" type="video/mp4" />
        </video>
        <p className="text-red-600 font-semibold text-4xl flex flex-col text-center py-4">
          N175,000 (CURRENT PROMO PRICE)
        </p>
      </div>
      <form className="b bg-slate-100 w-full lg:px-20 px-4 py-10 my-10 lg:ml-3 ml-0">
        <h1>ORDER NOW</h1>
        <p className="text-slate-400 font-extralight text-xs">
          TO ENJOY 35% DISCOUNT N175,000 (CURRENT PROMO PRICE)
        </p>
        <div className="py-4 md:space-y-6 space-y-4">
          <Input
            isReadOnly
            variant="bordered"
            placeholder="Full Name"
            className="w-full"
            size="sm"
          />
          <Input
            isReadOnly
            variant="bordered"
            placeholder="Phone Number"
            className="w-full"
            size="sm"
          />
          <Input
            isReadOnly
            variant="bordered"
            placeholder="Email"
            className="w-full"
            size="sm"
          />
          <Input
            isReadOnly
            variant="bordered"
            placeholder="Alternative Number"
            className="w-full"
            size="sm"
          />
          <Input
            isReadOnly
            variant="bordered"
            placeholder="Delivery Address"
            className="w-full"
            size="sm"
          />
          <Input
            isReadOnly
            variant="bordered"
            placeholder="City/State"
            className="w-full"
            size="sm"
          />

          <Select
            placeholder="Select phones"
            defaultSelectedKeys={[
              "1 Piece of Iphone 14 Pro Max (Android Version) : N175,000",
            ]}
            className="w-full ">
            {phones.map((phone) => (
              <SelectItem key={phone.value} value={phone.value}>
                {phone.label}
              </SelectItem>
            ))}
          </Select>

          <Button size="lg" className="bg-[#041E42] text-white px-8 py-4">
            Submit
          </Button>
        </div>
      </form>
      <div className="flex justify-center items-center">
        <Image
          src="/images/cash-on-delivery.jpg "
          alt=""
          width={200}
          height={200}
          className="w-72 h-72 object-cover"
        />
      </div>
    </div>
  );
}
