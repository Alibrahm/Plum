"use client";
import React, { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeinstallprompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeinstallprompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeinstallprompt
      );
    };
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setShowInstallButton(outcome === "accepted");
    }
  };

  return (
    showInstallButton && <button onClick={handleClick}>Install App</button>
  );
};

export default InstallButton;
