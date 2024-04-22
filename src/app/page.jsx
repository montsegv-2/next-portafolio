const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <img src="/hero.png" alt="profile photo" fill />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl font-bold">
          Frontend developer junior, from frontend to beyond.
        </h1>
        {/* DESCRIPTION */}
        <p className="">
          Code my canvas, craft your vision. I'm not just a developer, I'm a
          Software Craftsman, Architect, and Full-Stack Developer, building the
          hidden magic that powers captivating experiences. Front-end finesse
          meets back-end brilliance, weaving seamless interactions with user
          delight in mind.
        </p>
        {/* BUTTONS */}
        <div className="">
          <button>View my work</button>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
