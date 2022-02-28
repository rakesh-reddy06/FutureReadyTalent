import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import styled from "styled-components";
import promo1 from "./promo1.jpg";
import promo2 from "./promo2.jpg";
import promo3 from "./promo3.png";

const items = [
  {
    src: promo1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: promo2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: promo3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <CarouselImg src={item.src} alt={item.altText} className="img-fluid" />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

const CarouselImg = styled.img`
  height: 200px;

  @media screen and (min-width: 500px) {
    height: 450px;
  }
`;

export default Example;
