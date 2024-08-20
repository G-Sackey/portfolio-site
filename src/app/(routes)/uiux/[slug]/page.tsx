"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UI } from "../../../../../constants";
import { Gallery, Project } from "../../../../../types";
import ImageList from "@/components/image-list";
import { HashLoader } from "react-spinners";
import ImageModal from "@/components/image.modal";
import { BiHome } from "react-icons/bi";

const UIUXDesignPage = () => {
  const { slug } = useParams();

  const [gallery, setGallery] = useState<Gallery[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("");

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleSrc = (value: string) => {
    setSrc(value);
    toggleModal();
  };

  useEffect(() => {
    if (slug) {
      const data = UI.find((item) => item?.name === slug);
      setTimeout(() => {
        data && setGallery(data?.gallery);
      }, 2000);
    }
  }, [slug]);

  const router = useRouter();

  return (
    <div className="px-10 h-full">
      <div className="flex justify-between items-center w-full fixed left-0 top-0 p-5 z-[1000] bg-black">
        <h2 className="text-3xl capitalize">{slug}</h2>
        <button onClick={() => router.push("/")}>
          <BiHome size={30} />
        </button>
      </div>
      {gallery ? (
        <ImageList handleSrc={handleSrc} gallery={gallery} />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <HashLoader color="white" size={30} />
        </div>
      )}
      {showModal && <ImageModal src={src} toggleModal={toggleModal} />}
    </div>
  );
};

export default UIUXDesignPage;
