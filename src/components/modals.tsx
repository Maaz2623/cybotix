"use client";
import React, { useEffect, useState } from "react";
import ContactModal from "../../modals/contact-modal";

const Modals = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ContactModal />
    </>
  );
};

export default Modals;
