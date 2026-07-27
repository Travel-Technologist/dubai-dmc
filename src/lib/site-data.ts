export const img = (path: string) => path;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const destinationGroups = [
  {
    region: "United Arab Emirates",
    countries: [
      {
        id: "dubai",
        name: "Dubai",
        image: "/images/destinations/dubai.webp",
        description:
          "Experience futuristic skylines, luxury shopping, desert adventures and iconic landmarks in Dubai.",

        places: [
          {
            name: "Sheikh Zayed Grand Mosque",
            nights: "2 Days / 3 Nights",
            image: "/images/destinations/Sheikh-Zayed.webp",
            description:
              "Visit one of the world's largest mosques, admired for its magnificent white marble architecture, intricate Islamic craftsmanship, peaceful courtyards and breathtaking chandeliers.",
          },

          {
            name: "Ferrari World",
            nights: "1 Day Experience",
            image: "/images/destinations/Ferrari-World.webp",
            description:
              "Experience thrilling roller coasters, Formula One attractions, family entertainment and luxury leisure at the iconic Ferrari World on Yas Island.",
          },

          {
            name: "Al Noor Island",
            nights: "2 Days / 3 Nights",
            image: "/images/destinations/Al-Noor-Island.webp",
            description:
              "Escape into beautifully landscaped gardens, contemporary art installations, the Butterfly House and peaceful waterfront promenades in Sharjah.",
          },

          {
            name: "Blue Souk",
            nights: "2 Days",
            image: "/images/destinations/Blue-Souk.webp",
            description:
              "Explore Sharjah's famous Blue Souk, known for authentic Arabian shopping, traditional jewellery, carpets, perfumes and handcrafted souvenirs.",
          },

          {
            name: "Heart of Sharjah",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/Heart-of-Sharjah.webp",
            description:
              "Discover restored heritage districts, museums, traditional Emirati architecture, cultural markets and historical landmarks in the Heart of Sharjah.",
          },

          {
            name: "Al Majaz",
            nights: "2 Days",
            image: "/images/destinations/Al-Majaz.webp",
            description:
              "Relax along the beautiful Al Majaz Waterfront featuring musical fountains, luxury dining, parks, family attractions and spectacular skyline views.",
          },

          {
            name: "Jebel Jais",
            nights: "2 Days / 3 Nights",
            image: "/images/destinations/Jebel-Jais.webp",
            description:
              "Visit the UAE's highest mountain for breathtaking viewpoints, scenic drives, luxury resorts and the world's longest zipline adventure.",
          },

          {
            name: "Fujairah Beach",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/Fujairah-Beach.webp",
            description:
              "Enjoy crystal-clear beaches, luxury seaside resorts, snorkeling, diving adventures and peaceful coastal landscapes on the Gulf of Oman.",
          },

        ],
      }
    ],
  },

  {
    region: "South East Asia",
    countries: [
      {
        id: "thailand",
        name: "Thailand",
        image: "/images/destinations/thailand.webp",
        description:
          "Discover tropical islands, vibrant nightlife, ancient temples, luxury resorts and unforgettable culinary experiences across Thailand.",

        places: [
          {
            name: "Bangkok",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/thailand.webp",
          },
          {
            name: "Phuket",
            nights: "4 Days / 5 Nights",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Krabi",
            nights: "3 Days / 4 Nights",
            image: "/images/gallery/gallery-04.webp",
          },
          {
            name: "Phi Phi Islands",
            nights: "Full Day Tour",
            image: "/images/gallery/gallery-06.webp",
          },
        ],
      },

      {
        id: "singapore",
        name: "Singapore",
        image: "/images/destinations/singapore.webp",
        description:
          "Luxury shopping, futuristic architecture, family attractions and world-class dining in the Lion City.",

        places: [
          {
            name: "Marina Bay Sands",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/singapore.webp",
          },
          {
            name: "Gardens by the Bay",
            nights: "Half Day",
            image: "/images/gallery/gallery-07.webp",
          },
          {
            name: "Sentosa Island",
            nights: "2 Days",
            image: "/images/destinations/family-holidays.webp",
          },
          {
            name: "Universal Studios",
            nights: "1 Day",
            image: "/images/destinations/adventure.webp",
          },
        ],
      },

      {
        id: "bali",
        name: "Bali",
        image: "/images/destinations/bali.webp",
        description:
          "A perfect blend of luxury villas, beach clubs, waterfalls, temples and wellness retreats.",

        places: [
          {
            name: "Ubud",
            nights: "3 Days",
            image: "/images/destinations/bali.webp",
          },
          {
            name: "Seminyak",
            nights: "3 Days",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Nusa Penida",
            nights: "Full Day Tour",
            image: "/images/gallery/gallery-09.webp",
          },
          {
            name: "Uluwatu Temple",
            nights: "Half Day",
            image: "/images/gallery/gallery-11.webp",
          },
        ],
      },

      {
        id: "vietnam",
        name: "Vietnam",
        image: "/images/destinations/vietnam.webp",
        description:
          "Explore breathtaking bays, rich history, vibrant cities and authentic Vietnamese culture.",

        places: [
          {
            name: "Hanoi",
            nights: "3 Days",
            image: "/images/destinations/vietnam.webp",
          },
          {
            name: "Ha Long Bay",
            nights: "2 Days",
            image: "/images/gallery/gallery-02.webp",
          },
          {
            name: "Da Nang",
            nights: "3 Days",
            image: "/images/gallery/gallery-05.webp",
          },
          {
            name: "Ho Chi Minh City",
            nights: "3 Days",
            image: "/images/gallery/gallery-10.webp",
          },
        ],
      },

      {
        id: "malaysia",
        name: "Malaysia",
        image: "/images/destinations/malaysia.webp",
        description:
          "Modern skylines, rainforests, beaches and cultural diversity make Malaysia unforgettable.",

        places: [
          {
            name: "Kuala Lumpur",
            nights: "3 Days",
            image: "/images/destinations/malaysia.webp",
          },
          {
            name: "Langkawi",
            nights: "4 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Genting Highlands",
            nights: "2 Days",
            image: "/images/gallery/gallery-12.webp",
          },
          {
            name: "Penang",
            nights: "3 Days",
            image: "/images/gallery/gallery-08.webp",
          },
        ],
      },

      {
        id: "philippines",
        name: "Philippines",
        image: "/images/destinations/philippines.webp",
        description:
          "Crystal-clear waters, luxury island escapes and unforgettable tropical adventures.",

        places: [
          {
            name: "Boracay",
            nights: "4 Days",
            image: "/images/destinations/philippines.webp",
          },
          {
            name: "Palawan",
            nights: "5 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Cebu",
            nights: "3 Days",
            image: "/images/gallery/gallery-01.webp",
          },
          {
            name: "El Nido",
            nights: "4 Days",
            image: "/images/gallery/gallery-05.webp",
          },
        ],
      },
    ],
  },

  {
    region: "Asia",
    countries: [
      {
        id: "japan",
        name: "Japan",
        image: "/images/destinations/japan.webp",
        description:
          "A perfect blend of futuristic cities, ancient temples, cherry blossoms and world-class hospitality.",

        places: [
          {
            name: "Tokyo",
            nights: "4 Days / 5 Nights",
            image: "/images/destinations/japan.webp",
          },
          {
            name: "Kyoto",
            nights: "3 Days / 4 Nights",
            image: "/images/gallery/gallery-09.webp",
          },
          {
            name: "Osaka",
            nights: "3 Days",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Mount Fuji",
            nights: "Full Day Tour",
            image: "/images/gallery/gallery-07.webp",
          },
        ],
      },

      {
        id: "india",
        name: "India",
        image: "/images/destinations/india.webp",
        description:
          "Discover royal palaces, Himalayan adventures, beaches, heritage monuments and vibrant culture.",

        places: [
          {
            name: "Kashmir",
            nights: "5 Days",
            image: "/images/destinations/india.webp",
          },
          {
            name: "Goa",
            nights: "4 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Kerala",
            nights: "5 Days",
            image: "/images/gallery/gallery-05.webp",
          },
          {
            name: "Rajasthan",
            nights: "5 Days",
            image: "/images/gallery/gallery-12.webp",
          },
        ],
      },

      {
        id: "maldives",
        name: "Maldives",
        image: "/images/destinations/maldives.webp",
        description:
          "Luxury overwater villas, turquoise lagoons and unforgettable honeymoon escapes.",

        places: [
          {
            name: "Male",
            nights: "4 Days",
            image: "/images/destinations/maldives.webp",
          },
          {
            name: "Private Island Resort",
            nights: "5 Days",
            image: "/images/destinations/luxury-escape.webp",
          },
          {
            name: "Snorkeling",
            nights: "Half Day",
            image: "/images/gallery/gallery-01.webp",
          },
          {
            name: "Sunset Cruise",
            nights: "Evening Experience",
            image: "/images/gallery/gallery-11.webp",
          },
        ],
      },

      {
        id: "sri-lanka",
        name: "Sri Lanka",
        image: "/images/destinations/sri-lanka.webp",
        description:
          "Tea plantations, wildlife safaris, beaches and ancient heritage sites.",

        places: [
          {
            name: "Colombo",
            nights: "2 Days",
            image: "/images/destinations/sri-lanka.webp",
          },
          {
            name: "Kandy",
            nights: "2 Days",
            image: "/images/gallery/gallery-06.webp",
          },
          {
            name: "Ella",
            nights: "3 Days",
            image: "/images/gallery/gallery-04.webp",
          },
          {
            name: "Bentota",
            nights: "3 Days",
            image: "/images/destinations/island.webp",
          },
        ],
      },

      {
        id: "nepal",
        name: "Nepal",
        image: "/images/destinations/nepal.webp",
        description:
          "Mountain adventures, Himalayan landscapes and spiritual experiences.",

        places: [
          {
            name: "Kathmandu",
            nights: "3 Days",
            image: "/images/destinations/nepal.webp",
          },
          {
            name: "Pokhara",
            nights: "3 Days",
            image: "/images/gallery/gallery-08.webp",
          },
          {
            name: "Everest Base Camp",
            nights: "7 Days",
            image: "/images/destinations/adventure.webp",
          },
          {
            name: "Nagarkot",
            nights: "2 Days",
            image: "/images/gallery/gallery-10.webp",
          },
        ],
      },

      {
        id: "bhutan",
        name: "Bhutan",
        image: "/images/destinations/bhutan.webp",
        description:
          "Peaceful monasteries, mountain valleys and the happiest kingdom in the Himalayas.",

        places: [
          {
            name: "Paro",
            nights: "2 Days",
            image: "/images/destinations/bhutan.webp",
          },
          {
            name: "Tiger's Nest",
            nights: "Full Day Trek",
            image: "/images/gallery/gallery-07.webp",
          },
          {
            name: "Thimphu",
            nights: "2 Days",
            image: "/images/gallery/gallery-09.webp",
          },
          {
            name: "Punakha",
            nights: "2 Days",
            image: "/images/gallery/gallery-05.webp",
          },
        ],
      },
    ],
  },

  {
    region: "Europe",
    countries: [
      {
        id: "france",
        name: "France",
        image: "/images/destinations/france.webp",
        description:
          "Romantic cities, fine dining, luxury shopping and timeless architecture.",

        places: [
          {
            name: "Paris",
            nights: "4 Days",
            image: "/images/destinations/france.webp",
          },
          {
            name: "French Riviera",
            nights: "4 Days",
            image: "/images/gallery/gallery-02.webp",
          },
          {
            name: "Nice",
            nights: "3 Days",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Lyon",
            nights: "3 Days",
            image: "/images/gallery/gallery-11.webp",
          },
        ],
      },

      {
        id: "italy",
        name: "Italy",
        image: "/images/destinations/italy.webp",
        description:
          "Historic cities, coastal escapes, world-famous cuisine and Renaissance culture.",

        places: [
          {
            name: "Rome",
            nights: "3 Days",
            image: "/images/destinations/italy.webp",
          },
          {
            name: "Venice",
            nights: "2 Days",
            image: "/images/gallery/gallery-08.webp",
          },
          {
            name: "Florence",
            nights: "2 Days",
            image: "/images/gallery/gallery-12.webp",
          },
          {
            name: "Amalfi Coast",
            nights: "4 Days",
            image: "/images/destinations/luxury-escape.webp",
          },
        ],
      },

      {
        id: "switzerland",
        name: "Switzerland",
        image: "/images/destinations/switzerland.webp",
        description:
          "Snow-capped Alps, luxury trains and breathtaking mountain scenery.",

        places: [
          {
            name: "Zurich",
            nights: "3 Days",
            image: "/images/destinations/switzerland.webp",
          },
          {
            name: "Interlaken",
            nights: "3 Days",
            image: "/images/gallery/gallery-01.webp",
          },
          {
            name: "Lucerne",
            nights: "2 Days",
            image: "/images/gallery/gallery-06.webp",
          },
          {
            name: "Jungfraujoch",
            nights: "Day Excursion",
            image: "/images/destinations/adventure.webp",
          },
        ],
      },

      {
        id: "greece",
        name: "Greece",
        image: "/images/destinations/greece.webp",
        description:
          "Crystal-clear islands, whitewashed villages, ancient history and unforgettable Mediterranean sunsets.",

        places: [
          {
            name: "Santorini",
            nights: "4 Days",
            image: "/images/destinations/greece.webp",
          },
          {
            name: "Mykonos",
            nights: "3 Days",
            image: "/images/gallery/gallery-02.webp",
          },
          {
            name: "Athens",
            nights: "3 Days",
            image: "/images/gallery/gallery-09.webp",
          },
          {
            name: "Crete",
            nights: "4 Days",
            image: "/images/gallery/gallery-12.webp",
          },
        ],
      },

      {
        id: "spain",
        name: "Spain",
        image: "/images/destinations/spain.webp",
        description:
          "Historic cities, Mediterranean beaches, vibrant nightlife and world-famous cuisine.",

        places: [
          {
            name: "Barcelona",
            nights: "4 Days",
            image: "/images/destinations/spain.webp",
          },
          {
            name: "Madrid",
            nights: "3 Days",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Seville",
            nights: "3 Days",
            image: "/images/gallery/gallery-07.webp",
          },
          {
            name: "Ibiza",
            nights: "4 Days",
            image: "/images/destinations/island.webp",
          },
        ],
      },

      {
        id: "norway",
        name: "Norway",
        image: "/images/destinations/norway.webp",
        description:
          "Majestic fjords, northern lights, scenic rail journeys and Arctic adventures.",

        places: [
          {
            name: "Oslo",
            nights: "3 Days",
            image: "/images/destinations/norway.webp",
          },
          {
            name: "Bergen",
            nights: "3 Days",
            image: "/images/gallery/gallery-05.webp",
          },
          {
            name: "Geirangerfjord",
            nights: "2 Days",
            image: "/images/gallery/gallery-10.webp",
          },
          {
            name: "Tromsø",
            nights: "4 Days",
            image: "/images/destinations/adventure.webp",
          },
        ],
      },
    ],
  },

  {
    region: "The Americas",
    countries: [
      {
        id: "new-york",
        name: "New York",
        image: "/images/destinations/new-york.webp",
        description:
          "The city that never sleeps, offering iconic skylines, Broadway, luxury shopping and world-class dining.",

        places: [
          {
            name: "Times Square",
            nights: "4 Days / 5 Nights",
            image: "/images/destinations/new-york.webp",
          },
          {
            name: "Central Park",
            nights: "Half Day",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Statue of Liberty",
            nights: "Half Day",
            image: "/images/gallery/gallery-07.webp",
          },
          {
            name: "Brooklyn Bridge",
            nights: "Half Day",
            image: "/images/gallery/gallery-10.webp",
          },
        ],
      },

      {
        id: "california",
        name: "California",
        image: "/images/destinations/california.webp",
        description:
          "Golden beaches, Hollywood glamour, wine country and scenic coastal drives.",

        places: [
          {
            name: "Los Angeles",
            nights: "4 Days",
            image: "/images/destinations/california.webp",
          },
          {
            name: "San Francisco",
            nights: "3 Days",
            image: "/images/gallery/gallery-05.webp",
          },
          {
            name: "Hollywood",
            nights: "2 Days",
            image: "/images/gallery/gallery-08.webp",
          },
          {
            name: "Yosemite",
            nights: "3 Days",
            image: "/images/destinations/adventure.webp",
          },
        ],
      },

      {
        id: "las-vegas",
        name: "Las Vegas",
        image: "/images/destinations/las-vegas.webp",
        description:
          "Luxury resorts, nightlife, entertainment and unforgettable desert adventures.",

        places: [
          {
            name: "The Strip",
            nights: "3 Days",
            image: "/images/destinations/las-vegas.webp",
          },
          {
            name: "Bellagio",
            nights: "2 Days",
            image: "/images/gallery/gallery-02.webp",
          },
          {
            name: "Grand Canyon",
            nights: "Day Trip",
            image: "/images/gallery/gallery-11.webp",
          },
          {
            name: "Red Rock Canyon",
            nights: "Day Trip",
            image: "/images/destinations/adventure.webp",
          },
        ],
      },

      {
        id: "hawaii",
        name: "Hawaii",
        image: "/images/destinations/hawaii.webp",
        description:
          "Luxury island escapes with volcanoes, beaches and unforgettable sunsets.",

        places: [
          {
            name: "Honolulu",
            nights: "4 Days",
            image: "/images/destinations/hawaii.webp",
          },
          {
            name: "Waikiki Beach",
            nights: "2 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Maui",
            nights: "4 Days",
            image: "/images/gallery/gallery-04.webp",
          },
          {
            name: "Big Island",
            nights: "3 Days",
            image: "/images/gallery/gallery-09.webp",
          },
        ],
      },
    ],
  },

  {
    region: "Africa & Australia",
    countries: [
      {
        id: "south-africa",
        name: "South Africa",
        image: "/images/destinations/south-africa.webp",
        description:
          "Luxury safaris, breathtaking coastlines and world-famous wildlife experiences.",

        places: [
          {
            name: "Cape Town",
            nights: "4 Days",
            image: "/images/destinations/south-africa.webp",
          },
          {
            name: "Kruger National Park",
            nights: "3 Days",
            image: "/images/destinations/safari.webp",
          },
          {
            name: "Table Mountain",
            nights: "Half Day",
            image: "/images/gallery/gallery-12.webp",
          },
          {
            name: "Garden Route",
            nights: "4 Days",
            image: "/images/gallery/gallery-01.webp",
          },
        ],
      },

      {
        id: "kenya",
        name: "Kenya",
        image: "/images/destinations/kenya.webp",
        description:
          "Home to the Great Migration, luxury safari lodges and unforgettable wildlife adventures.",

        places: [
          {
            name: "Masai Mara",
            nights: "4 Days",
            image: "/images/destinations/kenya.webp",
          },
          {
            name: "Nairobi",
            nights: "2 Days",
            image: "/images/gallery/gallery-06.webp",
          },
          {
            name: "Lake Nakuru",
            nights: "2 Days",
            image: "/images/gallery/gallery-08.webp",
          },
          {
            name: "Amboseli",
            nights: "3 Days",
            image: "/images/destinations/safari.webp",
          },
        ],
      },

      {
        id: "morocco",
        name: "Morocco",
        image: "/images/destinations/morocco.webp",
        description:
          "Imperial cities, Sahara deserts, luxury riads and colorful markets.",

        places: [
          {
            name: "Marrakech",
            nights: "3 Days",
            image: "/images/destinations/morocco.webp",
          },
          {
            name: "Sahara Desert",
            nights: "2 Days",
            image: "/images/destinations/desert.webp",
          },
          {
            name: "Chefchaouen",
            nights: "2 Days",
            image: "/images/gallery/gallery-10.webp",
          },
          {
            name: "Casablanca",
            nights: "2 Days",
            image: "/images/gallery/gallery-07.webp",
          },
        ],
      },

      {
        id: "egypt",
        name: "Egypt",
        image: "/images/destinations/egypt.webp",
        description:
          "Ancient wonders, Nile cruises and luxury cultural experiences.",

        places: [
          {
            name: "Cairo",
            nights: "3 Days",
            image: "/images/destinations/egypt.webp",
          },
          {
            name: "Pyramids of Giza",
            nights: "Full Day",
            image: "/images/gallery/gallery-11.webp",
          },
          {
            name: "Luxor",
            nights: "2 Days",
            image: "/images/gallery/gallery-04.webp",
          },
          {
            name: "Nile Cruise",
            nights: "4 Days",
            image: "/images/destinations/cruise.webp",
          },
        ],
      },

      {
        id: "sydney",
        name: "Sydney",
        image: "/images/destinations/sydney.webp",
        description:
          "Iconic harbour views, beaches and luxury city experiences.",

        places: [
          {
            name: "Sydney Opera House",
            nights: "2 Days",
            image: "/images/destinations/sydney.webp",
          },
          {
            name: "Bondi Beach",
            nights: "2 Days",
            image: "/images/gallery/gallery-03.webp",
          },
          {
            name: "Blue Mountains",
            nights: "Day Trip",
            image: "/images/gallery/gallery-09.webp",
          },
          {
            name: "Harbour Cruise",
            nights: "Evening",
            image: "/images/destinations/cruise.webp",
          },
        ],
      },

      {
        id: "melbourne",
        name: "Melbourne",
        image: "/images/destinations/melbourne.webp",
        description:
          "Art, cafés, sporting culture and spectacular coastal drives.",

        places: [
          {
            name: "Great Ocean Road",
            nights: "2 Days",
            image: "/images/destinations/melbourne.webp",
          },
          {
            name: "Phillip Island",
            nights: "Day Tour",
            image: "/images/gallery/gallery-05.webp",
          },
          {
            name: "Yarra Valley",
            nights: "2 Days",
            image: "/images/gallery/gallery-12.webp",
          },
          {
            name: "City Centre",
            nights: "2 Days",
            image: "/images/gallery/gallery-08.webp",
          },
        ],
      },
    ],
  },
];

export const destinations = [
  {
    name: "Family Holidays",
    img: "/images/destinations/family-holidays.webp",
  },
  {
    name: "Honeymoon Escapes",
    img: "/images/destinations/honeymoon.webp",
  },
  {
    name: "Luxury Escapes",
    img: "/images/destinations/luxury-escape.webp",
  },
  {
    name: "Adventure Journeys",
    img: "/images/destinations/adventure.webp",
  },
  {
    name: "Cruises",
    img: "/images/destinations/cruise.webp",
  },
  {
    name: "Corporate Retreats",
    img: "/images/destinations/corporate-retreat.webp",
  },
  {
    name: "Group Tours",
    img: "/images/destinations/group-tour.webp",
  },
  {
    name: "Solo Journeys",
    img: "/images/destinations/solo-travel.webp",
  },
  {
    name: "Wellness Retreats",
    img: "/images/destinations/wellness.webp",
  },
  {
    name: "Safari",
    img: "/images/destinations/safari.webp",
  },
  {
    name: "Island Escapes",
    img: "/images/destinations/island.webp",
  },
  {
    name: "Desert Experiences",
    img: "/images/destinations/desert.webp",
  },
];

export const galleryImages = [
  "/images/gallery/gallery-01.webp",
  "/images/gallery/gallery-02.webp",
  "/images/gallery/gallery-03.webp",
  "/images/gallery/gallery-04.webp",
  "/images/gallery/gallery-05.webp",
  "/images/gallery/gallery-06.webp",
  "/images/gallery/gallery-07.webp",
  "/images/gallery/gallery-08.webp",
  "/images/gallery/gallery-09.webp",
  "/images/gallery/gallery-10.webp",
  "/images/gallery/gallery-11.webp",
  "/images/gallery/gallery-12.webp",
];