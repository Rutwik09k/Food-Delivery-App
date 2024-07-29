function AboutUs() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto text-left mt-8">
      <div>
        <h2 className="text-3xl font-bold pb-5">
          Driving the force of{" "}
          <span className="text-red-600">assortment</span>
        </h2>
        <p className="text-lg leading-relaxed">
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-14">
        <div>
          <p className="text-5xl mb-4">
            <span className="relative inline-block">
              <span>Who</span>
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-red-500"></span>
            </span>{" "}
            <span>are we?</span>
          </p>

          <p className="text-lg leading-relaxed">
            Launched in 2010, our technology platform connects customers,
            restaurant partners, and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer-generated reviews, and view
            and upload photos. They can also order food delivery, book a table,
            and make payments while dining out at restaurants. On the other
            hand, we provide restaurant partners with industry-specific marketing
            tools which enable them to engage and acquire customers to grow their
            business while also providing a reliable and efficient last-mile
            delivery service. We also operate a one-stop procurement solution,
            Hyperpure, which supplies high-quality ingredients and kitchen
            products to restaurant partners. We also provide our delivery
            partners with transparent and flexible earning opportunities.
          </p>
        </div>
        <div className="mt-8">
          <img
            className="rounded-md w-full h-auto"
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
