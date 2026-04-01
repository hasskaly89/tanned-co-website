export interface LocationData {
  slug: string;
  shortName: string;
  fullName: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  fullAddress: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  heroImage: string;
  phone: string;
  nearbySuburbs: string[];
  parkingNote: string;
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=349B+Kingsway+Caringbah+NSW",
    lat: -34.0399,
    lng: 151.1258,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Cronulla", "Miranda", "Gymea", "Sutherland", "Taren Point", "Woolooware"],
    parkingNote: "Street parking available on Kingsway. Easy access from Caringbah train station.",
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop+6%2F207+Edensor+Rd+Edensor+Park+NSW",
    lat: -33.8686,
    lng: 150.8769,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Wetherill Park", "Bossley Park", "Prairiewood", "Greenfield Park", "St Johns Park"],
    parkingNote: "Free parking available in the shopping complex car park.",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=6%2F2+Garling+Rd+Kings+Park+NSW",
    lat: -33.7623,
    lng: 150.9315,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Blacktown", "Quakers Hill", "Marayong", "Seven Hills", "Pendle Hill"],
    parkingNote: "Free on-site parking. Located in a small retail complex on Garling Rd.",
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1%2F73-77+Anderson+Rd+Smeaton+Grange+NSW",
    lat: -34.0264,
    lng: 150.7400,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Camden", "Narellan", "Mount Annan", "Oran Park", "Gregory Hills"],
    parkingNote: "Ample free parking in the Anderson Rd complex.",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=8+Oxford+St+Woollahra+NSW",
    lat: -33.8836,
    lng: 151.2327,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Paddington", "Double Bay", "Bondi Junction", "Edgecliff", "Rose Bay"],
    parkingNote: "Street parking on Oxford St and nearby side streets. Close to Edgecliff station.",
  },
];
