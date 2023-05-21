const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 flex flex-col gap-12">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col justify-center items-center ">
          <h1 className="text-gray-200 text-6xl font-bold">
            Savor the <span className="text-red-500">Flavor</span>,
          </h1>
          <h1 className="text-gray-200 text-6xl font-bold">
            <span className="text-red-500">Feed </span>your Soul
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
          className="h-60 md:h-96 w-full object-cover"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-gray-200 rounded-lg">
            <h2 className=" text-2xl font-bold">New Restaurants</h2>
            <p>Added daily</p>
            <button className="text-red-500 bg-white rounded-full p-1 px-4 text-sm font-bold mt-5 hover:text-white hover:bg-red-500">
              Order Now
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            className="h-48 w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-gray-200 rounded-lg">
            <h2 className=" text-2xl font-bold">New Restaurants</h2>
            <p>Added daily</p>
            <button className="text-red-500 bg-white rounded-full p-1 px-4 text-sm font-bold mt-5 hover:text-white hover:bg-red-500">
              Order Now
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="food"
            className="h-48 w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-gray-200 rounded-lg">
            <h2 className=" text-2xl font-bold">New Restaurants</h2>
            <p>Added daily</p>
            <button className="text-red-500 bg-white rounded-full p-1 px-4 text-sm font-bold mt-5 hover:text-white hover:bg-red-500">
              Order Now
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="food"
            className="h-48 w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
