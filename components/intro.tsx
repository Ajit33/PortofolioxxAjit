"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="text-4xl font-bold">Hi! I am Ajit Kumar</h1>
        <p className="text-base text-gray-700">
          As a Fullstack Engineer with over 2 years of experience in building
          WebApps , I specialize in taking web applications from concept to
          deployment. I have a strong command of both frontend and backend
          technologies, allowing me to deliver seamless full-stack solutions.
          Additionally, I have basic understanding in system design and
          deployment processes, ensuring efficient and scalable production-ready
          applications.
        </p>
      </div>
      <div className="w-3/12 flex-1">
        <Image
          src="/images/profile.jpg"
          alt="AjitKumar"
          width={100}
          height={100}
          className="rounded-full border border-gray-700 h-36 w-36"
        />
      </div>
    </div>
  );
};

export default Intro;
