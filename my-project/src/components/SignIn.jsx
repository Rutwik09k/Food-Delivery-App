function SignIn() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] mt-10 md:mt-28 px-4 md:px-10">
      <div className="flex flex-col justify-center items-start md:items-center md:justify-center md:pl-10">
        <p className="text-3xl md:text-5xl font-bold">Get Started with Your Account</p>
        <p className="text-sm md:text-md mt-3 md:mt-5">
          Find your favorite food on our platform. Just one step to order your food.
        </p>
      </div>
      <div className="max-w-md mx-auto p-6 bg-[#EEEEEE] rounded-lg shadow-md w-full md:w-[400px] h-auto md:h-[500px] mt-10 md:mt-0">
        <form action="">
          <div className="flex justify-center text-center text-xl md:text-2xl font-bold mb-4">
            <p>Sign Up</p>
          </div>
          <div className="flex flex-col gap-5"> 
            <div>
              <label htmlFor="name" className="block">Name</label>
              <input type="text" id="name" placeholder="Name" className="border border-gray-950 w-full rounded-sm mt-2"/>
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input type="email" id="email" placeholder="Email" className="border border-gray-950 w-full rounded-sm mt-2"/>
            </div>
            <div>
              <label htmlFor="mobile" className="block">Mobile</label>
              <input type="text" id="mobile" placeholder="Mobile" className="border border-gray-950 w-full rounded-sm mt-2"/>
            </div>
            <div>
              <label htmlFor="password" className="block">Password</label>
              <input type="password" id="password" placeholder="Password" className="border border-gray-950 w-full rounded-sm mt-2"/>
            </div>
          </div>
          <button className="bg-green-700 text-white w-full p-2 rounded-lg mt-5">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
