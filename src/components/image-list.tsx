import Image from "next/image";
import React from "react";
import { Gallery } from "../../types";

interface ImageListProps {
  gallery: Gallery[];
  handleSrc: (value: string) => void;
}

const ImageList = ({ gallery, handleSrc }: ImageListProps) => {
  return (
    <div className="w-full flex gap-10 flex-wrap py-10">
      {gallery.map((item) => {
        return (
          <div
            key={item?.src}
            className=" w-[94%] md:w-[20%] h-[22rem] md:h-[26rem] relative cursor-pointer hover:scale-110 transition-all ease-in-out"
            onClick={(e) => handleSrc(item?.src)}
          >
            <Image
              src={item?.src}
              alt={item?.src}
              className="rounded-xl md:rounded-3xl object-cover object-center"
              fill
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
