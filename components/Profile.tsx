import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-[200px] xl:w-[200px] mx-auto  z-10">
      <Image
        src={"/profile.jfif"}
        width={260}
        height={200}
        alt="Profile"
        className="w-full h-full rounded-full opacity-70"
      />
    </div>
  );
};

export default Profile;
