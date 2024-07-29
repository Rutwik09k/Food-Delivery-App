import { mealData } from "./Data/mealData";

function OurFood() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-center pb-8 text-3xl font-bold">
          <h2>Our Food</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mealData.map((item) => (
            <div key={item.idCategory} className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-4">
              <img src={item.img} alt="" className="w-full h-[200px] object-cover rounded-md mb-4"/>
              <div className="text-lg mb-2">
                <p>{item.price}</p>
              </div>
              <div className="text-lg uppercase mb-4">
                <p>{item.strCategory}</p>
              </div>
              <button className="bg-black text-white p-2 rounded-sm">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurFood;
