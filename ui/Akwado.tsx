import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Akwado = (props: Props) => {
  return (
    <Link href={"/"}>
      <Image
        alt="Akwado Logo"
        src={"/images/logo.png"}
        width={80}
        height={80}
        className="box-border	 "
      />
    </Link>
  );
};

export default Akwado;
