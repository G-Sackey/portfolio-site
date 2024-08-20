import Image from "next/image";
import React from "react";
import { CgClose } from "react-icons/cg";

interface ImageModalProps {
  src: string;
  toggleModal: () => void;
}

const ImageModal = ({ src, toggleModal }: ImageModalProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
      <div
        className="z-0 absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-[#000000ad]"
        onClick={toggleModal}
      />
      <div className="z-[1000] relative w-full h-full md:h-full rounded-xl md:rounded-3xl md:flex md:flex-row-reverse items-start gap-10 justify-center">
          <CgClose size={30} className="cursor-pointer relative m-5" onClick={toggleModal}/>
        <div className=" w-[90%] md:w-[40%] h-full relative">
          <Image
            src={src}
            alt={src}
            className="rounded-xl md:rounded-3xl object-cover object-center"
            fill
          />
        </div>

      </div>
    </div>
  );
};

export default ImageModal;
