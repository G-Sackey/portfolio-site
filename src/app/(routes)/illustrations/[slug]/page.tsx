"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Illustrations } from "../../../../../constants";
import { Gallery } from "../../../../../types";
import ImageList from "@/components/image-list";
import { HashLoader } from "react-spinners";
import ImageModal from "@/components/image.modal";
import { BiHome } from "react-icons/bi";

const IllustrationsPage = () => {
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
      const data = Illustrations.find((item) => item?.name === slug);
      setTimeout(() => {
        data && setGallery(data?.gallery);
      }, 2000);
    }
  }, [slug]);

  const router = useRouter();

  return (
    <div className="px-10 h-full">
      <div className="flex justify-between items-center w-full sticky top-0 py-5">
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

export default IllustrationsPage;
