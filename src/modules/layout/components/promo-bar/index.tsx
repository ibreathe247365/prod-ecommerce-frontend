"use client"

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const DISMISS_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

  useEffect(() => {
    const lastDismissed = localStorage.getItem("promoDismissedAt");

    if (lastDismissed && Date.now() - parseInt(lastDismissed, 10) < DISMISS_TIME) {
      setIsVisible(false);
    }
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("promoDismissedAt", Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="bg-navbar-end text-gray-800 text-sm p-3 text-center flex justify-between items-center">
      <span className="mx-auto font-semibold">
        Use code <strong>PROMOTIONAL10</strong> for 10% discount!
      </span>
      <button onClick={dismissBanner} className="p-1 mr-2">
        <XMarkIcon className="h-5 w-5 text-gray-600 hover:text-gray-900" />
      </button>
    </div>
  );
}
