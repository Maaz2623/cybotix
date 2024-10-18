import { teamMembers } from "@/constants";
import { UserRound } from "lucide-react";
import React from "react";

const Team = () => {
  return (
    <section id="team" className="h-screen justify-start items-center flex flex-col gap-y-4 px-20">
      <div className=" flex flex-col gap-y-2 mt-16 justify-center items-center">
        <p className="text-4xl font-semibold text-gray-100 flex gap-2">
          Our
          <span className="text-blue-500">Team</span>
        </p>
        <p className="text-center w-1/2 text-gray-500">
          Explore the profiles below to learn more about our team members, their
          roles, and the unique contributions they make to the Cybotix
          community.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-5 mt-5">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="w-full  duration-300 cursor-pointer"
          >
            <div className="h-full shadow-lg backdrop-blur-sm hover:shadow-blue-500 flex gap-x-4 items-center border-gray-600 transition overflow-hidden hover:bg-white/10 border p-4 rounded-lg">
              <div className="bg-white/10 p-2 rounded-full">
                <UserRound />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-100 title-font font-medium">
                  {member.name}
                </h2>
                <p className="text-gray-500">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
