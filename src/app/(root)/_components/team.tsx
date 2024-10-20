import { teamMembers } from "@/constants";
import { UserRound } from "lucide-react";
import React from "react";

const Team = () => {
  return (
    <section
      id="team"
      className="min-h-screen justify-start flex flex-col md:gap-y-4 md:px-20"
    >
      <div className="flex flex-col gap-y-2 mt-16 justify-center items-center">
        <p className="text-4xl md:text-4xl font-semibold text-gray-100 flex gap-2">
          Our
          <span className="text-blue-500">Team</span>
        </p>
        <p className="text-center md:w-1/2 text-gray-500 px-5 md:px-0 ">
          Explore the profiles below to learn more about our team members, their
          roles, and the unique contributions they make to the Cybotix
          community.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-5 gap-y-10 mt-14">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="md:w-[300px] px-2 w-[220px] duration-300 cursor-pointer"
          >
            <div className="h-full shadow-lg backdrop-blur-[3px] hover:shadow-blue-500 flex gap-x-2 items-center border-gray-600 transition overflow-hidden hover:bg-white/5 border p-4 rounded-lg">
              <div className="bg-white/10 p-2 rounded-full">
                <UserRound />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-100 title-font font-medium truncate">
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
