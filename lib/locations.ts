export interface BookingUrls {
  casual: string;
  tenPack: string;
}

export const DEFAULT_BOOKING_URLS: BookingUrls = {
  casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107",
  tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d",
};

export interface LocationData {
  slug: string;
  shortName: string;
  fullName: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  fullAddress: string;
  hours: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  heroImage: string;
  phone: string;
  nearbySuburbs: string[];
  parkingNote: string;
  placeId?: string;
  mapEmbed?: string;
  bookingUrls?: BookingUrls;
  /** Repu.ai reviews widget key for this studio (from the Repu dashboard). */
  repuWidgetKey?: string;
}

export const SITE_URL = "https://www.tannedco.com.au";

export const LOCATIONS: LocationData[] = [
  {
    slug: "caringbah",
    shortName: "Caringbah",
    fullName: "Tanned Co. Caringbah",
    address: "349B Kingsway",
    suburb: "Caringbah",
    state: "NSW",
    postcode: "2229",
    fullAddress: "349B Kingsway, Caringbah NSW 2229",
    hours: "Open 7 days · 6am – 12am",
    mapsUrl: "https://www.google.com/maps?cid=13479038353772915077",
    lat: -34.0409989,
    lng: 151.1217383,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Cronulla", "Miranda", "Gymea", "Sutherland", "Taren Point", "Woolooware"],
    parkingNote: "Street parking available on Kingsway. Easy access from Caringbah train station.",
    placeId: "ChIJyws_3_7HEmuFKYC-9ykPuw",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8923!2d151.1217383!3d-34.0409989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c7fedf3f0bcb%3A0xbb0f29f7be802985!2sTanned%20Co%20Caringbah!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=2",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d?companyid=2",
    },
  },
  {
    slug: "edensor-park",
    shortName: "Edensor Park",
    fullName: "Tanned Co. Edensor Park",
    address: "Shop 6/207 Edensor Rd",
    suburb: "Edensor Park",
    state: "NSW",
    postcode: "2176",
    fullAddress: "Shop 6/207 Edensor Rd, Edensor Park NSW 2176",
    hours: "Open 7 days · 6am – 12am",
    mapsUrl: "https://www.google.com/maps?cid=573135464984670807",
    lat: -33.8763487,
    lng: 150.877011,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Wetherill Park", "Bossley Park", "Prairiewood", "Greenfield Park", "St Johns Park"],
    parkingNote: "Free parking available in the shopping complex car park.",
    placeId: "ChIJEYBmsIqXEmtX8pY2qy_0Bw",
    repuWidgetKey: "b785fab69bb92c58",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5167046702772!2d150.87214544797754!3d-33.876344150603344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12978ab0668011%3A0x7f42fab3696f257!2sTanned%20Co%20Edensor%20Park!5e0!3m2!1sen!2sus!4v1775535255079!5m2!1sen!2sus",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=5",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d?companyid=5",
    },
  },
  {
    slug: "kings-park",
    shortName: "Kings Park",
    fullName: "Tanned Co. Kings Park",
    address: "6/2 Garling Rd",
    suburb: "Kings Park",
    state: "NSW",
    postcode: "2148",
    fullAddress: "6/2 Garling Rd, Kings Park NSW 2148",
    hours: "Open 7 days · 6am – 12am",
    mapsUrl: "https://www.google.com/maps?cid=495537712189558719",
    lat: -33.7453629,
    lng: 150.9154175,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Blacktown", "Quakers Hill", "Marayong", "Seven Hills", "Pendle Hill"],
    parkingNote: "Free on-site parking. Located in a small retail complex on Garling Rd.",
    placeId: "ChIJS2Ya_2eZEmu_T9577IDgBg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8764!2d150.9154175!3d-33.7453629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129967ff1a664b%3A0x6e080ec7bde4fbf!2sTanned%20Co%20Kings%20Park!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=6",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d?companyid=6",
    },
  },
  {
    slug: "smeaton-grange",
    shortName: "Smeaton Grange",
    fullName: "Tanned Co. Smeaton Grange",
    address: "1/73-77 Anderson Rd",
    suburb: "Smeaton Grange",
    state: "NSW",
    postcode: "2567",
    fullAddress: "1/73-77 Anderson Rd, Smeaton Grange NSW 2567",
    hours: "Open 7 days · 6am – 12am",
    mapsUrl: "https://www.google.com/maps?cid=2632734899103432869",
    lat: -34.0339258,
    lng: 150.7607107,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Camden", "Narellan", "Mount Annan", "Oran Park", "Gregory Hills"],
    parkingNote: "Ample free parking in the Anderson Rd complex.",
    placeId: "ChIJq75oaQrxEmulgNUgcVqJJA",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6219!2d150.7607107!3d-34.0339258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f10a6968beab%3A0x24895a7120d580a5!2sTanned%20Co%20Smeaton%20Grange!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=4",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d?companyid=4",
    },
  },
  {
    slug: "woollahra",
    shortName: "Woollahra",
    fullName: "Tanned Co. Woollahra",
    address: "8 Oxford St",
    suburb: "Woollahra",
    state: "NSW",
    postcode: "2025",
    fullAddress: "8 Oxford St, Woollahra NSW 2025",
    hours: "Open 7 days · 6am – 12am",
    mapsUrl: "https://www.google.com/maps?cid=4396169464198015999",
    lat: -33.8886925,
    lng: 151.232489,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Paddington", "Double Bay", "Bondi Junction", "Edgecliff", "Rose Bay"],
    parkingNote: "Street parking on Oxford St and nearby side streets. Close to Edgecliff station.",
    placeId: "ChIJPxc9zA6vEmv_K_H11VQCPQ",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7154!2d151.232489!3d-33.8886925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af0ecc3d173f%3A0x3d0254d5f5f12bff!2sTanned%20Co%20Woollahra!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=3",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/b159a15f9927d73202b657211134059d?companyid=3",
    },
  },
];

/** "1300 826 633" -> "+611300826633", "0434 287 198" -> "+61434287198" */
export function phoneToE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `+61${digits.slice(1)}` : `+61${digits}`;
}

/** Structured-data opening hours. Studios are open 6am to midnight, 7 days. */
export const SCHEMA_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "23:59",
  },
];

export type BookingPlan = keyof BookingUrls;

/** GymMaster URL for a studio, falling back to the generic portal link. */
export function bookingUrlFor(loc: LocationData, plan: BookingPlan): string {
  return { ...DEFAULT_BOOKING_URLS, ...loc.bookingUrls }[plan];
}
