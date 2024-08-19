import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  width?: number;
  height?: number;
};


const MainLogo = (props: Props) => {
  // media query for mobile etc
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Set default dimensions based on media query
  const logoWidth = isMobile ? 50 : isTabletOrMobile ? 60 : props.width || 90;
  const logoHeight = isMobile ? 50 : isTabletOrMobile ? 60 : props.height || 90;
  return (
    <Link className="pr-2" href="/">
      <Image
        alt="GDUE"
        src="/images/logo.png"
        width={logoWidth}
        height={logoHeight}
        sizes="(max-width: 700px) 30vw, 80px"
      />
    </Link>
  );
};

export default MainLogo;
