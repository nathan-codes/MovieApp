/* eslint-disable react/prop-types */
import moment from "moment";

import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

 
  


const Card = ({ data, trending, index }) => {

const imageURL = useSelector((state) => {
  return state.movieoData.imageURL;
});

  return (
    <Link
      to={`/${data.media_type}/${data.id}`}
      className="w-full min-w-[230px]  max-w-[230px] h-[345px]   rounded-md overflow-hidden relative transition-all hover:cursor-pointer hover:scale-105"
    >
      <img
        alt="Trending Movie Poster"
        className="h-full w-full object-cover overflow-hidden"
        src={imageURL + data.backdrop_path}
      />
      {trending && (
        <div className="absolute top-4 pl-5 pr-4 bg-black/60 backdrop-blur-3xl py-1 rounded-r-[20px] ">
          # {index} Trending
        </div>
      )}

      <div className="justify-center absolute bottom-0 bg-black/60 w-full flex flex-col h-16 px-2">
        <h3 className="text-ellipsis w-full overflow-hidden whitespace-nowrap font-bold text-lg">
          {data.title || data.name}
        </h3>
        <span className="text-sm text-slate-300">
          {moment(data.first_air_date).format("MMM Do YY") ||
            moment(data.release_date).format("MMM Do YY")}
        </span>
      </div>
      <span className="text-white text-xs absolute bottom-2 right-[10px] bg-black   rounded-xl p-[4px]">
        {" "}
        Rating: {Number(data.vote_average).toFixed(1)}
      </span>
    </Link>
  );
};

export default Card;
