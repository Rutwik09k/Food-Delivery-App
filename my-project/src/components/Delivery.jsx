
const Delivery = () => {
  return (
    <>
      <div className="w-full">
        <h3 className="w-full text-center py-6 font-bold text-[30px] ">
          Quick Delivery App
        </h3>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto my-10 gap-20">
       
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        alt=""
        className="w-[600px] mx-16"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[30px] text-[green] font-bold">Get the App</p>
        <h2 className="text-5xl py-2 font-bold text-[20px] md:text-[40px]">The Fastest Food Delivery In India</h2>
        <button className="bg-black w-[160px] text-white my-6 rounded py-3 text-[18px] sm:text-[10px] md:text-[30px]">Get Started</button>
      </div>

    
         
      </div>
    </>
  );
};

export default Delivery;
