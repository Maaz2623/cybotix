import React from "react";
import EmblaCarousel from "./embla-carousel";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen justify-start items-center flex flex-col gap-y-4 px-20">
      <div className=" flex flex-col gap-y-2 mt-16 justify-center items-center">
        <p className="text-center text-4xl gap-2 font-semibold text-gray-100">
          Explore Our <span className="ml-2 md:ml-0 text-blue-500">
            Gallery
          </span>
        </p>
        <p className="text-center md:w-1/2 text-gray-500">
          Discover the creativity and talent within the Cybotix community
          through our gallery. Here, we showcase a diverse collection of
          projects, artwork, and innovations shared by our members.
        </p>
      </div>
      <EmblaCarousel />
      {/* <div className="w-full grid grid-cols-4 grid-flow-row gap-6 mt-10">
        {galleryImages.map((image) => (
          <div key={image.link} className="rounded-md overflow-hidden border border-gray-500 hover:opacity-50 transition duration-200">
            <Image
              src={image.link}
              alt="image"
              className="w-full"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Gallery;
