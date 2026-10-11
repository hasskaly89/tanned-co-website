import { CASUAL, PRICE_TEXT, formatAud } from "@/lib/pricing";

// Safety and suitability answers are pending supplier-backed wording and owner approval.
export const categories = [
  {
    title: "About the Tan",
    faqs: [
      {
        q: "What is a contactless spray tan booth?",
        a: "We use VersaSpa Pro spray tan booths in your own private room. Once you step into the booth, it senses your height and guides you through 4 positions, with 3 spray nozzles for full-body coverage. The open booth is comfortably heated, so you'll stay warm even in winter. The booths self-clean between every session, so you always step into a clean booth.",
      },
      {
        q: "How do I select my tan?",
        a: "Our booths have 3 colour options with 3 colour depths. In our tanning rooms you'll find a tan menu so you can choose the shade and depth that suit your skin tone and the result you want. If you're unsure which colour is right for you, contact us and we'll help you choose.",
      },
      {
        q: "How long do I leave my tan on before showering?",
        a: "We recommend leaving your tan on for 6 to 8 hours. For a darker result, you can sleep in it. Just wash your hands and face with a gentle cleanser 30 minutes after your session. Rapid Venetian can be rinsed after 2 to 3 hours.",
      },
      {
        q: "How do spray tans work?",
        a: "When your sunless tan is applied, Dihydroxyacetone (DHA) reacts with proteins in the skin to form a golden-brown colour. After 2 to 3 hours your skin darkens and reaches peak colour within 24 hours. Your tan lasts up to 7 days and fades gradually as your skin naturally exfoliates.",
      },
      {
        q: "How long does a spray tan last?",
        a: "With proper preparation and aftercare, your tan can last up to 7 days. To extend the life of your tan, moisturise daily, avoid long baths and chlorine, and use a tan-safe body wash. Exfoliating before your next session helps your tan fade evenly and gives a better base for the next one.",
      },
    ],
  },
  {
    title: "Your Visit",
    faqs: [
      {
        q: "Is it private?",
        a: "Yes. You have your own private tan room, with no staff in the room. The booth guides you through your entire session with voice and visual instructions. The booth self-cleans between every session, so you always walk into a fresh, private space.",
      },
      {
        q: "Is the tanning solution safe?",
        a: "Our solutions are vegan, cruelty-free and paraben-free. The active ingredient is DHA (dihydroxyacetone), which is widely used in sunless tanning products and works by reacting with the outermost layer of skin. Keep your eyes and mouth closed while the booth sprays, and use the barrier cream provided. If you have a skin condition, allergies or health concerns, check with your doctor before tanning.",
      },
      {
        q: "What should I wear?",
        a: "Wear dark, loose-fitting clothing to your appointment to avoid any potential transfer from the bronzer in the solution. On the day of your tan, please arrive without deodorant, perfume, makeup or moisturiser, as these can create a barrier that affects how evenly your tan develops.",
      },
      {
        q: "Do I need to book in advance?",
        a: "Yes, all sessions at Tanned Co. are pre-booked. You can book via our app or online through our website. That way your private room is ready for you when you arrive. No waiting, no queues.",
      },
      {
        q: "Can men get a spray tan?",
        a: "Yes. Tanned Co. is for everyone, whatever your gender or body type. You tan alone in your own private room, so there's no one to feel awkward in front of.",
      },
    ],
  },
  {
    title: "Before You Book",
    faqs: [
      {
        q: "Is it worth it compared to a manual spray tan?",
        a: `A manual spray tan at a salon is applied by hand by another person. At Tanned Co., you tan alone in your own private room and the VersaSpa Pro booth is designed for even, full-body coverage. Casual tans are ${formatAud(CASUAL.price)}, or ${PRICE_TEXT.glowClubPerTan} with Glow Club.`,
      },
      {
        q: "What if I don't like the colour?",
        a: "We offer 3 signature colours (Rapid Venetian, Malibu and Monterey), each in 3 depths (Natural, Medium and Dark), so 9 options in total. If you're new, we recommend starting with Natural or Medium. Your tan lasts up to 7 days and fades naturally, so there's no long-term commitment. Check our shade guide on the How It Works page to find your match.",
      },
      {
        q: "Is it safe for sensitive skin?",
        a: "Our tanning solutions are vegan, paraben-free and cruelty-free, and most skin types tan well with them. If you have very sensitive skin or known allergies, do a small patch test on your inner arm first and check with your doctor if you are unsure. DHA is for use on the skin only, so avoid getting the mist in your eyes, nose or mouth.",
      },
      {
        q: "Can I get a spray tan while pregnant?",
        a: "Spray tanning involves no UV exposure, but please check with your doctor or midwife before tanning while pregnant, especially in the first trimester.",
      },
      {
        q: "How does this compare to a sunbed?",
        a: "Unlike sunbeds, spray tanning involves no UV exposure, so it does not cause sunburn or the UV damage linked to sunbeds. A spray tan does not protect you from the sun, so keep wearing sunscreen.",
      },
      {
        q: "What if I'm not happy with my result?",
        a: "We want you to love your tan. If you're not happy with your result, contact us at hello@tannedco.com.au within 24 hours and we'll work with you to make it right. Our VersaSpa Pro booths are designed for consistent results, and the in-room shade guide helps you choose a colour before you step in.",
      },
    ],
  },
];
