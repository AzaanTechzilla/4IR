import React from "react";
import Image from "next/image";
import Logo from "@/landingimage/4IR-logo-main.png";
const SiteLogo = ({ width, height }) => {
  return (
    <Image
      src={Logo}
      alt="site-logo"
      style={{maxWidth: width, maxHeight: height}}
    />
  );
};

export default SiteLogo;
