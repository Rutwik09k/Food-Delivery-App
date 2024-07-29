const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="my-6 font-bold">
          <p className="text-2xl">Yumi<span className="text-yellow-400">Food</span></p>
          <p className="text-sm mt-2">2024 Build Technology Pvt. Ltd.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Company</p>
          <p className="text-sm">About</p>
          <p className="text-sm">Careers</p>
          <p className="text-sm">Teams</p>
          <p className="text-sm">Swiggy One</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Help & Support</p>
          <p className="text-sm">Company</p>
          <p className="text-sm">Partner with Us</p>
          <p className="text-sm">Ride with Us</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">We Deliver To:</p>
          <p className="text-sm">Bangalore</p>
          <p className="text-sm">Gurgaon</p>
          <p className="text-sm">Delhi</p>
          <p className="text-sm">Mumbai</p>
          <p className="text-sm">Pune</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
