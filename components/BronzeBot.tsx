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

    // The Zapier embed renders an untitled iframe (#zapier-chatbot-embed). The element
    // has no documented title/aria-label attribute, so name the iframe once it appears.
    const CHAT_TITLE = "Tanned Co. chat";
    const nameIframe = () => {
      const el = document.querySelector("zapier-interfaces-chatbot-embed");
      const frame =
        document.querySelector<HTMLIFrameElement>("iframe#zapier-chatbot-embed") ??
        el?.shadowRoot?.querySelector<HTMLIFrameElement>("iframe") ??
        null;
      if (frame && frame.title !== CHAT_TITLE) frame.title = CHAT_TITLE;
      return !!frame;
    };
    // The iframe is created inside the element's shadow root, which a document
    // MutationObserver can't see, so check briefly until it exists (max ~30s).
    let tries = 0;
    const timer = window.setInterval(() => {
      if (nameIframe() || ++tries > 60) window.clearInterval(timer);
    }, 500);

    // Inject the custom element after script loads
    script.onload = () => {
      if (!document.querySelector("zapier-interfaces-chatbot-embed")) {
        const el = document.createElement("zapier-interfaces-chatbot-embed");
        el.setAttribute("is-popup", "true");
        el.setAttribute("chatbot-id", "cmfqb930n005zqwkyx24pvzha");
        document.body.appendChild(el);
      }
      nameIframe();
    };

    return () => {
      window.clearInterval(timer);
      // Cleanup on unmount
      const el = document.querySelector("zapier-interfaces-chatbot-embed");
      if (el) el.remove();
      if (script.parentNode) script.remove();
    };
  }, []);

  return null;
}
