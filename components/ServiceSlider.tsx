import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { FaFireExtinguisher, FaFire } from "react-icons/fa";
import { MdFireTruck } from "react-icons/md";
import { FaExplosion } from "react-icons/fa6";
import { useTranslation } from "next-i18next";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceSlider = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const serviceData: Service[] = [
    {
      icon: <FaFireExtinguisher />,
      title: t("servicesSlider.design"),
      description: t("servicesSlider.designDescription"),
    },
    {
      icon: <FaFire />,
      title: t("servicesSlider.development"),
      description: t("servicesSlider.developmentDescription"),
    },
    {
      icon: <MdFireTruck />,
      title: t("servicesSlider.copywriting"),
      description: t("servicesSlider.copywritingDescription"),
    },
    {
      icon: <FaExplosion />,
      title: t("servicesSlider.seo"),
      description: t("servicesSlider.seoDescription"),
    },
  ];

  useEffect(() => {
    if (expandedIndex !== null) {
      // Znajdź rozwinięty element SwiperSlide
      const expandedSlide = document.querySelector(".swiper-slide-expanded");
      if (expandedSlide) {
        // Przewiń do rozwiniętego elementu
        expandedSlide.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [expandedIndex]);

  const handleSlideClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSlideChange = () => {
    setExpandedIndex(null); // Zwiń opis przy zmianie slajdu
  };

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className={`pb-${expandedIndex !== null ? '20' : '10'}`} // Dodaj padding bottom do slidera tylko gdy jakiś element jest rozwinięty
      onSlideChange={handleSlideChange} // Obsługa zmiany slajdu
    >
      {serviceData.map((item: Service, index: number) => {
        return (
          <SwiperSlide
            key={index}
            className={`h-full bg-[rgba(65,47,123,0.15)] swiper-slide-custom hover:bg-[rgba(89,65,169,0.15)] ${
              expandedIndex === index ? "swiper-slide-expanded" : ""
            }`}
          >
            <div
              className={` h-full rounded-lg px-6 pt-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  transition-all duration-300`}
              onClick={() => handleSlideClick(index)}
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <div className="mb-2 text-lg">{item.title}</div>
                {/* Warunkowe renderowanie opisu */}

              <div>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 mb-20 " />
              </div>

            </div>
            <div className="pb-10">
                {expandedIndex === index ? (
                    <p className="leading-normal px-2 text-center">{item.description}</p>
                  ) : null}
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
