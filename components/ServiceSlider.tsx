import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RxArrowTopRight } from "react-icons/rx";
import { FaFireExtinguisher, FaFire } from "react-icons/fa";
import { MdFireTruck } from "react-icons/md";
import { FaExplosion } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import { FreeMode, Pagination } from "swiper";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceSlider = () => {
  const { t } = useTranslation();

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
      className={`pb-10`}
    >
      {serviceData.map((item: Service, index: number) => {
        return (
          <SwiperSlide
            key={index}
            className={`h-full bg-[rgba(65,47,123,0.15)] swiper-slide-custom hover:bg-[rgba(89,65,169,0.15)]`}
          >
            <div className={`h-full rounded-lg px-6 pt-6 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300`}>
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-2 text-lg">{item.title}</div>
              <div>
                <RxArrowTopRight className="text-accent transition-all duration-300 mb-20" />
              </div>
            </div>
            <div className="pb-10">
              <p className="leading-normal px-2 text-center">{item.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
