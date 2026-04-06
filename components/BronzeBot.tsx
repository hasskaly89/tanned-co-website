"use client";

import { useEffect } from "react";

export default function BronzeBot() {
  useEffect(() => {
    // Inject the script
    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    // Inject the custom element after script loads
    script.onload = () => {
      if (!document.querySelector("zapier-interfaces-chatbot-embed")) {
        const el = document.createElement("zapier-interfaces-chatbot-embed");
        el.setAttribute("is-popup", "true");
        el.setAttribute("chatbot-id", "cmfqb930n005zqwkyx24pvzha");
        document.body.appendChild(el);
      }
    };

    return () => {
      // Cleanup on unmount
      const el = document.querySelector("zapier-interfaces-chatbot-embed");
      if (el) el.remove();
      if (script.parentNode) script.remove();
    };
  }, []);

  return null;
}
