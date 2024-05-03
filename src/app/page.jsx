import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt="profile"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Frontend developer junior, from frontend to beyond.
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Code my canvas, craft your vision. I'm not just a developer, I'm a
          Software Craftsman, Architect, and Full-Stack Developer, building the
          hidden magic that powers captivating experiences. Front-end finesse
          meets back-end brilliance, weaving seamless interactions with user
          delight in mind.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4 pb-5">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
