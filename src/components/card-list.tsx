import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./card";
import { collabs } from "../../constants";

export const CardList = () => {
  return (
      <Carousel className="w-full max-w-[90%] mx-auto">
        <CarouselContent className="-ml-1">
          {collabs.map((info, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
                <Card info={info}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
};
