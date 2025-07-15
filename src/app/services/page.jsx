const page = () => {
  return (
    <>
      <header
        className={`h-[70vh] relative py-20 bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: "url('/services-cover.jpeg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-50"></div>
        <div className="container text-center text-white relative z-20 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold my-5 opacity-100">
            About Mountains Solutions
          </h2>
          <p className="text-xl font-medium">
            Your Growth Partner in Lead Generation, Appointment Setting &
            Business Success
          </p>
        </div>
      </header>
    </>
  );
};

export default page;
