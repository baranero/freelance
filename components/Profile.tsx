import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Profile = () => {
  return (
    <motion.div  variants={fadeIn("right", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden" className="w-[200px] xl:w-[200px] mx-auto  z-10">
      <Image
        src={"/profile.jfif"}
        width={260}
        height={200}
        alt="Profile"
       
        className="w-full h-full rounded-full opacity-70"
      />
    </motion.div>
  );
};

export default Profile;
