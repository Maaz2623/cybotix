import React from "react";

interface EventRules {
  rules: Array<string>;
}

const EventRules = ({ rules }: EventRules) => {
  console.log(rules);

  return <div className="h-full space-y-4 p-5 w-full bg-muted/50 flex-col">
    {rules.map((rule, index) => (
        <p key={index} className="px-2 text-md bg-white/5 font-sans w-fit py-0.5 rounded-md border">{" * "}{rule}</p>
    ))}
  </div>;
};

export default EventRules;
