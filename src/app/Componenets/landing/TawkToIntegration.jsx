import React, { useEffect } from "react";

const TawkToIntegration = () => {
  useEffect(() => {
    // Dynamically inject the Tawk.to script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/5fe985c1df060f156a90e69e/1eqk34v9k";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Add the script to the document
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI component
};

export default TawkToIntegration;
