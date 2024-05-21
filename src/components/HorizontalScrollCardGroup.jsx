
import { useSelector } from "react-redux"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const HorizontalScrollCardGroup = () => {

 const data = useSelector((state) => {
   return state.movieoData.bannerData;
 });

 const imageURL = useSelector((state) => {
   return state.movieoData.imageURL;
 });
  



  console.log(data)
  return (
    <article className="my-20 mx-5 overflow-hidden  ">
      <h2 className="font-bold text-2xl my-2 text-white">Trending</h2>
      <div className="flex  overflow-y-hidden gap-6  relative w-full ">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div
              key={index}
              className="w-full min-w-[230px]  h-[345px]   rounded-md overflow-hidden relative transition-all hover:cursor-pointer hover:scale-105 "
            >
              <img
                src={imageURL + item.backdrop_path}
                alt=""
                className="h-full w-full object-cover overflow-hidden"
              />

              <div className="absolute top-4 pl-5 pr-4 bg-black/60 py-1 rounded-r-[20px]">
                #{index + 1} Trending
              </div>

              <div className="justify-center absolute bottom-0 bg-black/60 w-full flex flex-col h-16 px-2">
                <h3 className="text-ellipsis w-full overflow-hidden whitespace-nowrap font-bold text-lg">
                  {item.title || item.name}
                </h3>
                <span className="text-sm text-slate-300">March 27th 2024</span>
              </div>

              <span className="text-white text-xs absolute bottom-2 right-[10px] bg-black   rounded-xl p-[4px]">
                {" "}
                Rating: 7.1
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute  justify-between flex border w-full items-center top z-40 ">
        <button className="bg-white p-1 text-2xl rounded-full text-black overflow-auto">
          <FaAngleLeft size="1.3rem" />
        </button>
        <button className="bg-white p-1 text-2xl rounded-full text-black">
          <FaAngleRight size="1.3rem" />
        </button>
      </div>
    </article>
  );
}

export default HorizontalScrollCardGroup
