import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="profile photo" width={300} height={300} />
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
          <button className="p-4 rounded-lg ring-1 ring-back">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-back">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
