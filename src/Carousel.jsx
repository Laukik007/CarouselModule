import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import items from "./Media/items";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 4;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`,
          position: "relative",
        }}
      >
        {items.map((item) => {
          console.log(item.title);
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div
        className="carousel-buttons"
        style={{ position: "absolute", marginBottom: "5rem" }}
      >
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div className="indicators">
        {items.map((item, index) => {
          return (
            <button
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span
                className={`material-symbols-outlined ${
                  index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }`}
              >
                radio_button_checked
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
