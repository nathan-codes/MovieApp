/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import { useRef } from "react";

const HorizontalScrollCardGroup = ({ data = [], title, trending, media_type }) => {
  const containerRef = useRef();

  // Function to scroll left
  const handleLeftScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const handleRightScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <article className="my-10 mx-5">
      <h2 className="font-bold text-2xl my-2 text-white">{title}</h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-6 lg:overflow-x-hidden overflow-y-hidden relative z-10"
        >
          {data.map((data, index) => (
            <Card key={index} index={index + 1} data={data} trending={trending} media_type={media_type} />
          ))}
        </div>
        <div className="hidden lg:flex absolute top-0 justify-between  w-full h-full items-center">
          <button
            className="bg-white p-1 text-2xl rounded-full text-black -ml-2 z-20"
            onClick={handleLeftScroll}
          >
            <FaAngleLeft size="1.3rem" />
          </button>
          <button
            className="bg-white p-1 text-2xl rounded-full text-black z-20 -mr-2"
            onClick={handleRightScroll}
          >
            <FaAngleRight size="1.3rem" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default HorizontalScrollCardGroup;
