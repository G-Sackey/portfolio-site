import React from "react";
import { GraphicDes, UI } from "../../constants";
import Image from "next/image";
import Link from "next/link";

const GraphicDesignComponent = () => {
  return (
    <div className="" id="graphic-design">
      <h3 className="text-2xl mt-6">Graphic Design</h3>
      <div className="">
        <div className="w-full flex gap-10 flex-wrap justify-center py-10">
          {GraphicDes.map((item) => {
            return (
              <Link href={`graphic-design/${item?.name}`}
                key={item?.name}
                className=" w-[90%] md:w-[40%] h-[22rem] md:h-[26rem] relative cursor-pointer hover:scale-105 transition-all hover:-rotate-6"
              >
                <Image
                  src={item?.src}
                  alt={item?.name}
                  className="rounded-xl md:rounded-3xl object-cover object-center"
                  fill
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignComponent;
