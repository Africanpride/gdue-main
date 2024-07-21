import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  width?: number;
  height?: number;

};

const MainLogo = (props: Props) => {
  return (
    <Link href={"/"}  className="box-content pr-2">
      <Image
        alt="GDUE"
        src="/images/logo.png"
        width={props.width || 80}
        height={props.height || 80}       
      />
    </Link>
  );
};

export default MainLogo;
