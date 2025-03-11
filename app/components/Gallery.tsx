import React, { ReactNode, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Slide } from "react-slideshow-image";
import { Row } from "react-bootstrap";

// const indicators = (index:number) => (<div className="indicator">{index + 1}</div>);
const indicators: any = (index: number): ReactNode => (
  <div className="w-4 h-4 rounded-full bg-yellow-200 active:bg-yellow-700 px-1" />
);

export const Gallery: React.FC = () => {
  const backgroundImages = [
    "images/building.png",
    "images/site.png",
    "images/track.png",
    "images/tractor.png",
    "images/tractors.png",
  ];

  const slideRef = useRef<any>();
  const breakpoints = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="w-full">
      <Row className="w-full">
        <Slide
          arrows={true}
          duration={2000}
          //   indicators={indicators}
          indicators={false}
          responsive={breakpoints}
          autoplay={true}
          defaultIndex={0}
          nextArrow={
            <button
              onClick={() => slideRef.current!.goNext()}
              className="absolute top-1/2 right-2 transform -translate-y-1/2
               bg-yellow-600 w-12 h-12 rounded-full flex items-center 
               justify-center shadow-md"
            >
              <AiOutlineRight className="text-white text-2xl" />
            </button>
          }
          prevArrow={
            <button
              onClick={() => slideRef.current!.goBack()}
              className="absolute top-1/2 left-2 transform -translate-y-1/2
               bg-yellow-600 w-12 h-12 rounded-full flex items-center
               justify-center shadow-md"
            >
              <AiOutlineLeft className="text-white text-2xl" />
            </button>
          }
          ref={slideRef}
        >
          {backgroundImages.map((image, index) => (
            <div key={index} className="each-slide-effect w-full h-full px-2">
              <div
                className="w-full h-full aspect-[1/1] rounded-xl
                bg-yellow-800/85 shadow-md"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              />
            </div>
          ))}
        </Slide>
      </Row>
    </div>
  );
};
