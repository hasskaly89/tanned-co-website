"use client";

import Script from "next/script";

export default function BronzeBot() {
  return (
    <>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="afterInteractive"
        type="module"
      />
      {/* @ts-ignore */}
      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmfqb930n005zqwkyx24pvzha"
      />
    </>
  );
}
