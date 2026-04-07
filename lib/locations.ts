export interface Testimonial {
  name: string;
  text: string;
}

export interface Review {
  name: string;
  suburb: string;
  text: string;
  rating: number;
}

export interface BookingUrls {
  casual: string;
  fivePack: string;
  tenPack: string;
}

export const DEFAULT_BOOKING_URLS: BookingUrls = {
  casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107",
  fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf",
  tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373",
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
  testimonials?: Testimonial[];
  reviews?: Review[];
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
    mapsUrl: "https://www.google.com/maps/place/Tanned+Co+Caringbah/@-34.0409989,151.1217383,17z",
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
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=2",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=2",
    },
    testimonials: [
      { name: "Shannon Harley", text: "Easy process. I popped in at 8pm on a Friday night, went home and went to bed - woke up with an even tan and ready for the weekend. Love the flexible hours!" },
      { name: "Angela Maclean", text: "I had such a fantastic experience at Tanned Co! The booking process was seamless and super easy, and I loved how simple the tanning booth was to use. The studio was spotless, and the location is so convenient. It's clear they've thought of everything to make the whole process smooth and enjoyable. Definitely my go-to for a great tan!" },
      { name: "Natalie Brame", text: "Love love love! So helpful when I reached out over the phone. Tan were quick, simple & no awkwardness. Thank you!" },
      { name: "Bridget Halliday", text: "Two words ... GAME CHANGER 🙌 I've tried many tans on the market, but always was left unhappy. Finding Tanned Co has not only saved me time and money, but it has helped me find the perfect bronzed look! As a student, and part-time employee at two jobs, the 4-minute experience is quick, efficient and perfect for my schedule. Booking my next tan in ASAP!" },
      { name: "Olivia Whyte", text: "Tried the 2 hour rapid tan over the weekend, highly recommend. After first shower I was concerned there was no colour however really started to develop overnight. Love how it went on clear so I could continue on to do the grocery shopping without getting any awkward looks ;) will definitely use the 2 hour again." },
      { name: "Amy Garrill", text: "Love coming to Tanned Co! Such an easy and convenient way to get tanned and ready for the weekend. Tan is always even and perfect colour. Definitely recommend this place. Takes the anxiety out of going to a beautician and standing bare in front of them!" },
      { name: "Debbie Smith", text: "Great little space to get your tan on. Super easy, super quick and super impressed with the results." },
      { name: "Britt Vibes", text: "I was sceptical because I've had auto tans before and it wasn't great but this is a game changer. The tan was super quick and came out really even, and I didn't have to get naked in front of a stranger. Amazing." },
      { name: "April Sargeson", text: "Such an amazing experience! It's hard finding time for a tan being a Mum so I love that there are so many late appointments available once bub is in bed. It is so quick and easy to use and gives a beautiful, even tan. I have used Tanned Co three times now and will definitely be back for more!" },
      { name: "Bek Davis", text: "The most even and beautiful spray tan I have ever had! Obsessed after the first use and have been back multiple times since! Also very easy to use the booking service and the automated instructions when getting into the tan booth. Highly recommend this stunning boutique tanning studio!! Love it 10/10!!" },
    ],
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
    mapsUrl: "https://www.google.com/maps/place/Tanned+Co+Edensor+Park/@-33.8763487,150.877011,17z",
    lat: -33.8763487,
    lng: 150.877011,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg",
    phone: "0434 287 198",
    nearbySuburbs: ["Wetherill Park", "Bossley Park", "Prairiewood", "Greenfield Park", "St Johns Park"],
    parkingNote: "Free parking available in the shopping complex car park.",
    placeId: "ChIJEYBmsIqXEmtX8pY2qy_0Bw",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5167046702772!2d150.87214544797754!3d-33.876344150603344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12978ab0668011%3A0x7f42fab3696f257!2sTanned%20Co%20Edensor%20Park!5e0!3m2!1sen!2sus!4v1775535255079!5m2!1sen!2sus",
    testimonials: [
      { name: "Shannon Harley", text: "Easy process. I popped in at 8pm on a Friday night, went home and went to bed - woke up with an even tan and ready for the weekend. Love the flexible hours!" },
      { name: "Angela Maclean", text: "The booking process was seamless and super easy, and I loved how simple the tanning booth was to use. The studio was spotless, and the location is so convenient. Definitely my go-to for a great tan!" },
      { name: "Natalie Brame", text: "Love love love! So helpful when I reached out over the phone. Tan were quick, simple & no awkwardness. Thank you!" },
      { name: "Bridget Halliday", text: "Two words ... GAME CHANGER 🙌 I've tried many tans on the market, but always was left unhappy. Finding Tanned Co has not only saved me time and money, but it has helped me find the perfect bronzed look! The 4-minute experience is quick, efficient and perfect for my schedule." },
      { name: "Olivia Whyte", text: "Tried the 2 hour rapid tan over the weekend, highly recommend. Love how it went on clear so I could continue on to do the grocery shopping without getting any awkward looks. Will definitely use the 2 hour again." },
      { name: "Amy Garrill", text: "Love coming to Tanned Co! Such an easy and convenient way to get tanned and ready for the weekend. Tan is always even and perfect colour. Takes the anxiety out of going to a beautician!" },
      { name: "Debbie Smith", text: "Great little space to get your tan on. Super easy, super quick and super impressed with the results." },
      { name: "Britt Vibes", text: "I was sceptical because I've had auto tans before and it wasn't great but this is a game changer. The tan was super quick and came out really even, and I didn't have to get naked in front of a stranger. Amazing." },
      { name: "April Sargeson", text: "Such an amazing experience! It's hard finding time for a tan being a Mum so I love that there are so many late appointments available once bub is in bed. Beautiful, even tan every time!" },
      { name: "Bek Davis", text: "The most even and beautiful spray tan I have ever had! Obsessed after the first use and have been back multiple times since! Highly recommend this stunning boutique tanning studio!! Love it 10/10!!" },
    ],
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=5",
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=5",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=5",
    },
    reviews: [
      { name: "Jessica M.", suburb: "Edensor Park", text: "Love this place! Quick, easy and the tan looks so natural. Perfect for busy mums.", rating: 5 },
      { name: "Tara S.", suburb: "Edensor Park", text: "Obsessed with my tan from Tanned Co Edensor Park. The booth is so easy to use and the result is flawless every time.", rating: 5 },
      { name: "Brooke L.", suburb: "Edensor Park", text: "I've been coming here for months and the results are always consistent. Great value with the 10 pack!", rating: 5 },
    ],
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
    mapsUrl: "https://www.google.com/maps/place/Tanned+Co+Kings+Park/@-33.7453629,150.9154175,17z",
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
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=6",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=6",
    },
    reviews: [
      { name: "Sarah K.", suburb: "Kings Park", text: "Amazing new studio! The booth was super easy and my tan came out perfectly even.", rating: 5 },
      { name: "Mel R.", suburb: "Kings Park", text: "Love having Tanned Co so close to home. Quick, affordable and the colour is gorgeous.", rating: 5 },
      { name: "Alicia T.", suburb: "Kings Park", text: "Best spray tan I've ever had. No streaks, no smell, just a beautiful even glow.", rating: 5 },
    ],
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
    mapsUrl: "https://www.google.com/maps/place/Tanned+Co+Smeaton+Grange/@-34.0339258,150.7607107,17z",
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
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=4",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=4",
    },
    reviews: [
      { name: "Renee B.", suburb: "Smeaton Grange", text: "So convenient having this in Smeaton Grange! Love the privacy and the tan lasts over a week.", rating: 5 },
      { name: "Kelly W.", suburb: "Smeaton Grange", text: "Been using Tanned Co for all my events. The 5 pack is great value and results are always beautiful.", rating: 5 },
      { name: "Amy P.", suburb: "Smeaton Grange", text: "The booth was warm and cozy, super easy to follow the instructions. My tan turned out perfect!", rating: 5 },
    ],
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
    mapsUrl: "https://www.google.com/maps/place/Tanned+Co+Woollahra/@-33.8886925,151.232489,17z",
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
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=3",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=3",
    },
    reviews: [
      { name: "Sophie G.", suburb: "Woollahra", text: "Absolutely love the Woollahra studio. Quick, private, and my tan always looks so natural.", rating: 5 },
      { name: "Olivia H.", suburb: "Woollahra", text: "The best spray tan in the Eastern Suburbs. VersaSpa booths are amazing always streak-free.", rating: 5 },
      { name: "Natasha R.", suburb: "Woollahra", text: "I've tried so many tanning places and nothing compares. Tanned Co is simply the best.", rating: 5 },
    ],
  },
];
