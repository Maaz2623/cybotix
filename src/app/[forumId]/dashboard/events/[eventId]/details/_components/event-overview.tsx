import React from "react";

const EventOverView = ({ overview }: { overview: string }) => {
  return (
    <div className="h-full rounded-lg w-full bg-muted/50 flex">
      <p className="p-5 text-lg text-white/80 tracking-wider text-start font-light">
        {overview}
      </p>
    </div>
  );
};

export default EventOverView;
