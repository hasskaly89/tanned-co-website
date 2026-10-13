"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
const CHATBOT_ID = "cmfqb930n005zqwkyx24pvzha";
const CHAT_TITLE = "Tanned Co. chat";
// The Zapier script is about 1MB, so it waits for the visitor's first scroll, tap or
// key press, or for the browser to go idle a few seconds after load, whichever is first.
const IDLE_DELAY_MS = 6000;
const INTERACTION_EVENTS = ["scroll", "pointerdown", "touchstart", "keydown"] as const;

export default function BronzeBot() {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let titleTimer: number | undefined;
    let idleHandle: number | undefined;
    let loaded = false;

    // The Zapier embed renders an untitled iframe inside its shadow root. The element
    // has no documented title/aria-label attribute, so name the iframe once it appears.
    // A document MutationObserver can't see into the shadow root, so check briefly (max ~30s).
    const nameIframe = () => {
      const el = document.querySelector("zapier-interfaces-chatbot-embed");
      const frame =
        document.querySelector<HTMLIFrameElement>("iframe#zapier-chatbot-embed") ??
        el?.shadowRoot?.querySelector<HTMLIFrameElement>("iframe") ??
        null;
      if (frame && frame.title !== CHAT_TITLE) frame.title = CHAT_TITLE;
      return !!frame;
    };

    const removeListeners = () => {
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, load));
    };

    function load() {
      if (loaded) return;
      loaded = true;
      removeListeners();
      window.clearTimeout(delayTimer);

      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.type = "module";
      script.async = true;
      script.onload = () => {
        if (!document.querySelector("zapier-interfaces-chatbot-embed")) {
          const el = document.createElement("zapier-interfaces-chatbot-embed");
          el.setAttribute("is-popup", "true");
          el.setAttribute("chatbot-id", CHATBOT_ID);
          document.body.appendChild(el);
        }
        let tries = 0;
        titleTimer = window.setInterval(() => {
          if (nameIframe() || ++tries > 60) window.clearInterval(titleTimer);
        }, 500);
      };
      document.body.appendChild(script);
    }

    INTERACTION_EVENTS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const delayTimer = window.setTimeout(() => {
      if ("requestIdleCallback" in window) idleHandle = window.requestIdleCallback(load, { timeout: 3000 });
      else load();
    }, IDLE_DELAY_MS);

    return () => {
      removeListeners();
      window.clearTimeout(delayTimer);
      if (idleHandle !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idleHandle);
      window.clearInterval(titleTimer);
      document.querySelector("zapier-interfaces-chatbot-embed")?.remove();
      script?.remove();
    };
  }, []);

  return null;
}
