import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState, useEffect } from "react";

const BannerHome = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const bannerData = useSelector((state) => {
    return state.movieoData.bannerData;
  });

  const imageURL = useSelector((state) => {
    return state.movieoData.imageURL;
  });

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((currentState) => {
        return (currentState += 1);
      });
    }
    };
    
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((currentState) => {
        return (currentState -= 1);
      });
    }
  };

  // Function to handle auto slider

  // console.log(bannerData);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
        console.log(currentImage)
      } else {
        setCurrentImage(0);
        console.log(currentImage)
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData, imageURL]);

  return (
    <section className="w-full h-full ">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          {/* console.log(data); */}
          return (
            <div
              key={index}
              className="min-w-full min-h-[450px] lg:min-h-full relative group transition-all  "
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full ">
                <img
                  src={imageURL + data.backdrop_path}
                  alt="banner-image"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Previous and Next Buttons */}
              <div className=" absolute top-0  justify-between items-center px-4 w-full h-full  hidden lg:group-hover:flex ">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 text-2xl rounded-full text-black z-10"
                > 
                  <FaAngleLeft size="1.3rem" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white p-1 text-2xl rounded-full text-black z-10"
                >
                  <FaAngleRight size="1.3rem" />
                </button>
              </div>

              <div className="absolute top-0 bg-gradient-to-t  flex from-neutral-900 to-transparent w-full h-full "></div>
              <div className=" mx-auto ">
                <div className="w-full px-4 lg:px-10 absolute bottom-0 mx-auto max-w-md ">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data.name || data.title}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View: {Number(data.vote_count).toFixed(0)}</p>
                  </div>
                  <button className=" bg-white px-4 py-2 text-black font-bold rounded mt-3 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
