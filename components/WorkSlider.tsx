import React from "react";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Beauty Salon",
          path: "/beauty-salon.webp",
          url: "http://wrobelagnieszka.pl/",
          description: "Strona internetowa stworzona dla salonu kosmetycznego. Responsywna, zoptymalizowana pod SEO. Zmiany podstron następują bez przeładowania całej strony. Oparta na CMS Wordpress."
        },
        {
          title: "Sklep rowerowy",
          path: "/rowerove.png",
          url: "http://rowerove.pl/",
          description: "Sklep internetowy oparty na WooCommerce. Responsywny i zoptymalizowany pod SEO. Posiada katalog produktów, filtrowanie, sortowanie, obsługę płatności, wysyłki."
        },
        {
          title: "FireApp",
          path: "/fireapp.png",
          url: "https://fd-app-eight.vercel.app/",
          description: "Aplikacja służącą do zarządzania urlopami i nadgodzinami. Dane są przechowywane w bazie danych. Administrator ma dostęp do ich modyfikacji z poziomu aplikacji."
        },

      ],
      
    },
    
  ],
  
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ImageResponse } from "next/server";

const WorkSlider = () => {
  const { t } = useTranslation();

  return (
    <Swiper

      spaceBetween={10}
      autoHeight= {true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid lg:grid-cols-2 grid-rows-2 gap-2 lg:gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex flex-col items-center justify-start group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute hover:text-[#b6b6b6] bottom-0 translate-y-full group-hover:-translate-y-16 group-hover:xl:-translate-y-28 group-hover:md:-translate-y-28 group-hover:lg:-translate-y-32  transition-all duration-300">
                      </div>
                      <div className="absolute hover:text-[#b6b6b6]  bottom-0 translate-y-full group-hover:-translate-y-4 group-hover:lg:-translate-y-20  group-hover:xl:-translate-y-20 group-hover:md:-translate-y-12 transition-all duration-300">
                        <Link href={image.url}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">
                              {t("worksSlider.live")}
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {t("worksSlider.project")}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
         
                    </div>
                    <div>
                        <p className="text-justify backdrop-blur-lg max-w-[500px] bg-gray-500/10 p-6">{image.description}</p>
                      </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
