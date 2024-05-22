/* eslint-disable react/prop-types */

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import { useRef } from "react";


const HorizontalScrollCardGroup = ({data=[],title}) => {

  const containerRef = useRef()
 
  
  return (
    <article className="my-10 mx-5   ">
      <h2 className="font-bold text-2xl my-2 text-white">{title}</h2>

      <div className="  relative">
        <div
          ref={containerRef}
          className=" flex gap-6  overflow-x-scroll overflow-y-hidden  relative z-10"
        >
          {data.map((data, index) => {
            console.log(data);
            return (
              <Card key={index} index={index + 1} data={data} trending={true} />
            );
          })}
        </div>

        <div className="absolute top-0 justify-between flex  w-full h-full items-center  ">
          <button className="bg-white p-1 text-2xl rounded-full text-black -ml-2 z-20 ">
            <FaAngleLeft size="1.3rem" />
          </button>
          <button className="bg-white p-1 text-2xl rounded-full text-black z-20 -mr-2 ">
            <FaAngleRight size="1.3rem" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default HorizontalScrollCardGroup
