import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="w-[148px] h-[35px]">
        <Image
          src="/images/tempo-image-20240528T000649580Z.png"
          alt="Pasted Image"
          width={592}
          height={140}
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default Logo;
