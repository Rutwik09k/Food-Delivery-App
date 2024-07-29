import { data } from "./Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css"

const FoodSlider = () => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="w-[90%] mx-auto ">
        <h2 className=" text-[30px] font-bold pl-10"> What's on your mind?</h2>
        <div className="py-20">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.idCategory} className="bg-[white] rounded-md">
              <div className=" flex justify-center items-center rounded-t-xl">
                <img src={item.img} alt="" className="w-[200px] rounded-full h-[200px] object-cover"/>
              </div>

              <div className="flex justify-center items-center flex-col gap-2 p-4">
              <div>
                <p>{item.price}</p>
              </div>
              <div className="uppercase text-xl font-semibold">
                <p>{item.strCategory}</p>
              </div>
              <button className="bg-black w-[160px] text-white my-6 rounded py-3 text-[18px]">Add to cart</button>
   
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FoodSlider;
