import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const images = [
  { src: "/main1.webp", alt: "Projekt" },
  { src: "/main2.webp", alt: "Ręczny ostrzegacz pożarowy" },
  { src: "/main3.webp", alt: "Lampa ewakuacyjna" },
  { src: "/main4.webp", alt: "Strażak" },
  { src: "/main5.webp", alt: "Notebook" },
];

const MasonryGrid = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="grid sm:grid-cols-3 grid-cols-2 sm:grid-rows-5 grid-rows-6 gap-4 sm:max-w-[40vw] sm:max-h-[90vh] opacity-75 sm:mt-0 mt-10"
    >
      <div className="sm:row-start-3 row-start-1 row-span-2 col-start-1 col-span-1 ">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={800}
          height={800}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="sm:row-start-2 row-start-3 row-span-2 sm:col-start-2 col-start-1 col-span-1">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          width={800}
          height={800}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="sm:row-start-4 row-start-5 row-span-2 sm:col-start-2 col-start-1 col-span-1">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          width={800}
          height={800}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="sm:row-start-1 row-start-2 row-span-2 sm:col-start-3 col-start-2 col-span-1">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          width={800}
          height={800}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="sm:row-start-3 row-start-4 row-span-2 sm:col-start-3 col-start-2 col-span-1">
        <Image
          src={images[4].src}
          alt={images[4].alt}
          width={800}
          height={800}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default MasonryGrid;
