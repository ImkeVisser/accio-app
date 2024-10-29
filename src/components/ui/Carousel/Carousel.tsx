"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import {ChevronLeftCircle, ChevronRightCircle, Circle} from "lucide-react";

import {ImageType} from "../../../types/type"
import CarouselButton from "./CarouselButtons";
import { cn } from "@/utility/cn";


interface CarouselProps {
    images: ImageType[]
    autoPlay?: boolean
    containImage?: boolean
}

const Carousel = ({images, autoPlay = false, containImage = false}: CarouselProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  useEffect(() => {
    if(!autoPlay) return

    const timeoutId = setInterval(() => {
        setActiveImageIndex(index => {
            if(index === images.length - 1) return 0
            return index + 1
        })
      }, 4000);
  
      return () => clearInterval(timeoutId);
  }, [autoPlay, images.length, activeImageIndex]);

  function showNextImage() {
    setActiveImageIndex(index => {
        if(index === images.length - 1) return 0
        return index + 1
    })
}

    function showPreviousImage() {
        setActiveImageIndex(index => {
            if(index === 0) return images.length -1
            return index - 1
        })
    }
  return (
    <section className="relative h-full w-full">
        <a className="sr-only" href={'/#after-carousel-controls'}>Skip Image Carousel</a>
        <div className="w-full h-full flex overflow-hidden">
            {images.map((image, index) => (
                <Image 
                    key={image.id} 
                    style={{translate: `${-100 * activeImageIndex}%`, transition: "translate 300ms ease-in-out"}} 
                    className={cn("w-full h-full block flex-shrink-0", containImage ? "object-contain" : "object-cover")}
                    src={image.url} alt={image.title}  
                    width={200} 
                    height={300}
                    aria-hidden={index !== activeImageIndex}
                />
            ))}
        </div>
        <CarouselButton className="left-0" onClick={showPreviousImage} aria-label="view previous image"><ChevronLeftCircle/></CarouselButton>
        <CarouselButton className="right-0" onClick={showNextImage} aria-label="view next image"><ChevronRightCircle /></CarouselButton>
        <ul className="absolute bottom-4 left-1/2 -translate-x-2/4 flex gap-1">
            {images.map((_, index) => (
                <button key={index} onClick={() => setActiveImageIndex(index)} aria-label={`view image ${index +1}`}>
                  <Circle className={cn("w-4 hover:scale-110 focus-visible:scale-110 transition ease-in duration-100", index === activeImageIndex ? "fill-foreground" : "")} />
                </button>
            ))}
        </ul>
        <div id="after-carousel-controls"/>
    </section>
  )

}

export default Carousel