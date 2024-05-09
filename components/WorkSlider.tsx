import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import Image from "next/image";
import { useTranslation } from "next-i18next";

// Obiekt workSlides
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Katedra w Świdnicy",
          path: "/katedra.webp",
          description:
            "System Sygnalizacji Pożarowej SSP zaprojektowany w Katedrze. Katedra jest pod opieką konserwatora zabytków. W obiekcie zastosowano niekonwencjonalne rozwiązania, m. in. czujki zasysające dymu i kamery do detekcji pożaru, zgodnie z ekspertyzą techniczną ze względu na zabytkową wartość.",
        },
      ],
    },
    {
      images: [
        {
          title: "Zakład produkcji lodów KILARGO w Chechle Pierwszym",
          path: "/kilargo.jpg",
          description:
            "System Sygnalizacji Pożarowej w zakładzie produkcyjnym. Zaprojektowanie systemu było sporym wyzwaniem ze względu na cykliczne mycie części produckcyjnej bieżącą wodą. Problem ten rozwiązano przy użyciu czujek zasysających dymu.",
        },
      ],
    },
    {
      images: [
        {
          title: "Zakład produkcyjny PROFI w Grabowie nad Prosną",
          path: "/profi.jpg",
          description:
            "System Sygnalizacji Pożarowej w zakładzie produkcyjnym. Zaprojektowanie systemu było sporym wyzwaniem ze względu na cykliczne mycie części produckcyjnej bieżącą wodą oraz mroźnie w których panująca temperatura wynosi -25°C. Problem ten rozwiązano przy użyciu czujek zasysających dymu.",
        },
      ],
    },
    {
      images: [
        {
          title: "Zakład produkcyjny TAMIR w Bystrzycy Kłodzkiej",
          path: "/tamir.jpg",
          description:
            "System Sygnalizacji Pożarowej w zakładzie produkcyjnym. W obiekcie zaprojektowano częściowo radiowe czujki dymu oraz ręczne ostrzegacze pożarowe.",
        },
      ],
    },
    {
      images: [
        {
          title: "Panattoni Gdańsk",
          path: "/panattoni.jpg",
          description:
            "System Sygnalizacji Pożarowej w hali magazynowej. Projekt aranżacji najmecy w hali magazynowej Panattoni.",
        },
      ],
    },
    {
      images: [
        {
          title: "Acropol Kalisz",
          path: "/acropol.jpg",
          description:
            "System Sygnalizacji Pożarowej w budynku użyteczności publicznej. Projekt dotyczył części biurowej.",
        },
      ],
    },
    {
      images: [
        {
          title: "Zaleśna",
          path: "/tartrans.png",
          description:
            "Projekt grawitacyjnego systemu oddymiającego klatek schodowych w buydnku socjalno-biurowym.",
        },
      ],
    },
    {
      images: [
        {
          title: "Prestige Park",
          path: "/baranów.png",
          description:
            "Projekt przejść instalacji przez strefy pożarowe w budynku mieszkalnym wielorodzinnym.",
        },
      ],
    },
  ],
};


const WorkSlider = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      spaceBetween={10}
      autoHeight={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full"
      breakpoints={{
        // Na urządzeniach mobilnych wyświetlaj tylko jeden slajd na stronę
        640: {
          slidesPerView: 1,
        },
        // Na większych urządzeniach wykorzystaj liczbę slajdów zdefiniowaną w danych
        768: {
          slidesPerView: 'auto',
        },
      }}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex flex-col items-center justify-start group "
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                        className="h-[250px] object-cover"
                      />

                      <div className="absolute hover:text-[#b6b6b6] bottom-0 translate-y-full group-hover:-translate-y-16 group-hover:xl:-translate-y-28 group-hover:md:-translate-y-28 group-hover:lg:-translate-y-32  transition-all duration-300"></div>
                      <div className="absolute hover:text-[#b6b6b6]  bottom-0 translate-y-full group-hover:-translate-y-4 group-hover:lg:-translate-y-20  group-hover:xl:-translate-y-20 group-hover:md:-translate-y-12 transition-all duration-300"></div>
                    </div>
                    <div>
                      <p className="text-justify backdrop-blur-lg max-w-[500px] bg-gray-500/10 p-6 pb-10">
                        {image.description}
                      </p>
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
