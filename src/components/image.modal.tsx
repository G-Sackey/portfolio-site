import Image from "next/image";
import React from "react";
import { CgClose } from "react-icons/cg";

interface ImageModalProps {
  src: string;
  toggleModal: () => void;
}

const ImageModal = ({ src, toggleModal }: ImageModalProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center z-[20000]">
      <div
        className="z-0 absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-[#000000ad]"
        onClick={toggleModal}
      />
      <div 
      className="z-[1000] relative w-full md:w-auto md:h-full rounded-xl md:rounded-3xl md:flex md:flex-row-reverse items-center gap-10 justify-center">
        <CgClose
          size={30}
          className="cursor-pointer relative m-5 mb-auto"
          onClick={toggleModal}
        />
        <div className=" w-full h-[26rem] md:h-[500px] md:w-[500px] relative">
          <Image 
          sizes={"100vw"}
          fill
            src={src}
            alt={src}
            quality={100}
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
