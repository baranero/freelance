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
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Pagination]}
      className={`pb-40`}
    >
      {serviceData.map((item: Service, index: number) => {
        return (
          <SwiperSlide
            key={index}
            className={`swiper-slide-custom`}
          >
            <div className={`h-full rounded-lg group px-6 pt-6 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300`}>
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-2 text-lg">{item.title}</div>
              <div>
                <RxArrowTopRight className="text-accent group-hover:rotate-45 transition-all duration-300 mb-20" />
              </div>
            </div>
            <div className="pb-10">
              <p className="leading-normal px-2 xl:px-4 xl:text-sm text-center">{item.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
