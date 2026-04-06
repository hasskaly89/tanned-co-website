export interface Testimonial {
  name: string;
  text: string;
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
  mapsUrl: string;
  lat: number;
  lng: number;
  heroImage: string;
  phone: string;
  nearbySuburbs: string[];
  parkingNote: string;
  bookingUrls?: BookingUrls;
  testimonials?: Testimonial[];
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop+6%2F207+Edensor+Rd+Edensor+Park+NSW",
    lat: -33.8686,
    lng: 150.8769,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Wetherill Park", "Bossley Park", "Prairiewood", "Greenfield Park", "St Johns Park"],
    parkingNote: "Free parking available in the shopping complex car park.",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=5",
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=5",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=5",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=6%2F2+Garling+Rd+Kings+Park+NSW",
    lat: -33.7623,
    lng: 150.9315,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Blacktown", "Quakers Hill", "Marayong", "Seven Hills", "Pendle Hill"],
    parkingNote: "Free on-site parking. Located in a small retail complex on Garling Rd.",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=6",
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=6",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=6",
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1%2F73-77+Anderson+Rd+Smeaton+Grange+NSW",
    lat: -34.0264,
    lng: 150.7400,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Camden", "Narellan", "Mount Annan", "Oran Park", "Gregory Hills"],
    parkingNote: "Ample free parking in the Anderson Rd complex.",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=4",
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=4",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=4",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=8+Oxford+St+Woollahra+NSW",
    lat: -33.8836,
    lng: 151.2327,
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg",
    phone: "1300 826 633",
    nearbySuburbs: ["Paddington", "Double Bay", "Bondi Junction", "Edgecliff", "Rose Bay"],
    parkingNote: "Street parking on Oxford St and nearby side streets. Close to Edgecliff station.",
    bookingUrls: {
      casual: "https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107&companyid=3",
      fivePack: "https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf?companyid=3",
      tenPack: "https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373?companyid=3",
    },
  },
];
