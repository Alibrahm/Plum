"use client";
import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [showInstallMessage, setShowInstallMessage] = useState(false);

  useEffect(() => {
    // const isIos = () => {
    //   const userAgent = window.navigator.userAgent.toLowerCase();
    //   return /iphone|ipad|ipod/.test(userAgent);
    // };
    const isMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod|android|android phone|android tablet/i.test(userAgent);
    };

    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    if (isMobile() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  }, []);

  const handleInstall = (event: { preventDefault: () => void; }) => {
    // Prevent default Chrome behavior
    event.preventDefault();
    // Show the install prompt
    console.log("Install prompt triggered. You can call event.prompt() here to show the native install banner.");
  };
  
  useEffect(() => {
    const handleBeforeInstallPrompt = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      setShowInstallMessage(true);
    };
  
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    const isMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod|android|android phone|android tablet/i.test(userAgent);
    };
  
    const handleBeforeInstallPrompt = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      setShowInstallMessage(true);
    };
  
    if (isMobile()) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
  
    return () => {
      if (isMobile()) {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  // Render install prompt button if conditions are met
  return (
    showInstallMessage && (
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-10">
        <div className="max-w-screen-md mx-auto px-4 py-2 flex justify-between items-center">
          <p className="text-sm text-gray-700">
            Install this app for quick access!
          </p>
          <button
            onClick={handleInstall}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Install
          </button>
        </div>
      </div>
    )
  );
};

export default InstallPrompt;
