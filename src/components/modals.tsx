"use client";
import React, { useEffect, useState } from "react";

const Modals = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <></>;
};

export default Modals;
