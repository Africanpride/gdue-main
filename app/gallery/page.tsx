"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhotoGallery from "@/components/Gallery";

type Props = {};

const Gallery = (props: Props) => {

 

  return (
    <div className="container mx-auto flex justify-center items-center max-w-7xl p-4 md:p-12">
     <PhotoGallery />
    </div>
  );
};

export default Gallery;
