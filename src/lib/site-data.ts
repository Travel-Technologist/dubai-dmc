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
        image: "/images/gallery/gallery-01.webp",
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
            image: "/images/destinations/bangkok.webp",
          },
          {
            name: "Phuket",
            nights: "4 Days / 5 Nights",
            image: "/images/destinations/phuket.webp",
          },
          {
            name: "Krabi",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/krabi.webp",
          },
          {
            name: "Phi Phi Islands",
            nights: "Full Day Tour",
            image: "/images/destinations/phiphi.webp",
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
            image: "/images/destinations/Marina-Bay-Sands.webp",
          },
          {
            name: "Gardens by the Bay",
            nights: "Half Day",
            image: "/images/destinations/Gardens-of-Bay.webp",
          },
          {
            name: "Sentosa Island",
            nights: "2 Days",
            image: "/images/destinations/Sentosa-Island.webp",
          },
          {
            name: "Universal Studios",
            nights: "1 Day",
            image: "/images/destinations/Universal-Studios.webp",
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
            image: "/images/destinations/Ubud.webp",
          },
          {
            name: "Seminyak",
            nights: "3 Days",
            image: "/images/destinations/Seminyak.webp",
          },
          {
            name: "Nusa Penida",
            nights: "Full Day Tour",
            image: "/images/destinations/Nusa-Penida.webp",
          },
          {
            name: "Uluwatu Temple",
            nights: "Half Day",
            image: "/images/destinations/Uluwatu-Temple.webp",
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
            image: "/images/destinations/Hanoi.webp",
          },
          {
            name: "Ha Long Bay",
            nights: "2 Days",
            image: "/images/destinations/Ha-Long-Bay.webp",
          },
          {
            name: "Da Nang",
            nights: "3 Days",
            image: "/images/destinations/Da-Nang.webp",
          },
          {
            name: "Ho Chi Minh City",
            nights: "3 Days",
            image: "/images/destinations/Ho-Chi-City.webp",
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
            image: "/images/destinations/Kuala-Lumpur.webp",
          },
          {
            name: "Langkawi",
            nights: "4 Days",
            image: "/images/destinations/Langkawi.webp",
          },
          {
            name: "Genting Highlands",
            nights: "2 Days",
            image: "/images/destinations/Genting-Highlands.webp",
          },
          {
            name: "Penang",
            nights: "3 Days",
            image: "/images/destinations/Penang.webp",
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
            image: "/images/destinations/Boracay.webp",
          },
          {
            name: "Palawan",
            nights: "5 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Cebu",
            nights: "3 Days",
            image: "/images/destinations/Cebu.webp",
          },
          {
            name: "El Nido",
            nights: "4 Days",
            image: "/images/destinations/El-Nido.webp",
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
            image: "/images/destinations/Tokyo.webp",
          },
          {
            name: "Kyoto",
            nights: "3 Days / 4 Nights",
            image: "/images/destinations/Kyoto.webp",
          },
          {
            name: "Osaka",
            nights: "3 Days",
            image: "/images/destinations/Osaka.webp",
          },
          {
            name: "Mount Fuji",
            nights: "Full Day Tour",
            image: "/images/destinations/Mount-Fuji.webp",
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
            image: "/images/destinations/Kashmir.webp",
          },
          {
            name: "Goa",
            nights: "4 Days",
            image: "/images/destinations/Goa.webp",
          },
          {
            name: "Kerala",
            nights: "5 Days",
            image: "/images/destinations/Kerala.webp",
          },
          {
            name: "Rajasthan",
            nights: "5 Days",
            image: "/images/destinations/Rajasthan.webp",
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
            image: "/images/destinations/Male.webp",
          },
          {
            name: "Private Island Resort",
            nights: "5 Days",
            image: "/images/destinations/Private-Island.webp",
          },
          {
            name: "Snorkeling",
            nights: "Half Day",
            image: "/images/destinations/Snorkeling.webp",
          },
          {
            name: "Sunset Cruise",
            nights: "Evening Experience",
            image: "/images/destinations/Sunset-Cruise.webp",
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
            image: "/images/destinations/Colombo.webp",
          },
          {
            name: "Kandy",
            nights: "2 Days",
            image: "/images/destinations/Kandy.webp",
          },
          {
            name: "Ella",
            nights: "3 Days",
            image: "/images/destinations/Ella.webp",
          },
          {
            name: "Bentota",
            nights: "3 Days",
            image: "/images/destinations/Bentota.webp",
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
            image: "/images/destinations/Kathmandu.webp",
          },
          {
            name: "Pokhara",
            nights: "3 Days",
            image: "/images/destinations/Pokhara.webp",
          },
          {
            name: "Everest Base Camp",
            nights: "7 Days",
            image: "/images/destinations/Everest-Base-Camp.webp",
          },
          {
            name: "Nagarkot",
            nights: "2 Days",
            image: "/images/destinations/Nagarkot.webp",
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
            image: "/images/destinations/Paro.webp",
          },
          {
            name: "Tiger's Nest",
            nights: "Full Day Trek",
            image: "/images/destinations/Tiger-Nest.webp",
          },
          {
            name: "Thimphu",
            nights: "2 Days",
            image: "/images/destinations/Thimphu.webp",
          },
          {
            name: "Punakha",
            nights: "2 Days",
            image: "/images/destinations/Punakha.webp",
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
            image: "/images/destinations/Paris.webp",
          },
          {
            name: "French Riviera",
            nights: "4 Days",
            image: "/images/destinations/French-Riviera.webp",
          },
          {
            name: "Nice",
            nights: "3 Days",
            image: "/images/destinations/Nice.webp",
          },
          {
            name: "Lyon",
            nights: "3 Days",
            image: "/images/destinations/Lyon.webp",
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
            image: "/images/destinations/Rome.webp",
          },
          {
            name: "Venice",
            nights: "2 Days",
            image: "/images/destinations/Venice.webp",
          },
          {
            name: "Florence",
            nights: "2 Days",
            image: "/images/destinations/Florence.webp",
          },
          {
            name: "Amalfi Coast",
            nights: "4 Days",
            image: "/images/destinations/Amalfi-Coast.webp",
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
            image: "/images/destinations/Zurich.webp",
          },
          {
            name: "Interlaken",
            nights: "3 Days",
            image: "/images/destinations/Interlaken.webp",
          },
          {
            name: "Lucerne",
            nights: "2 Days",
            image: "/images/destinations/Lucerne.webp",
          },
          {
            name: "Jungfraujoch",
            nights: "Day Excursion",
            image: "/images/destinations/Jungfraujoch.webp",
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
            image: "/images/destinations/Mykonos.webp",
          },
          {
            name: "Athens",
            nights: "3 Days",
            image: "/images/destinations/Athens.webp",
          },
          {
            name: "Crete",
            nights: "4 Days",
            image: "/images/destinations/Crete.webp",
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
            image: "/images/destinations/Barcelona.webp",
          },
          {
            name: "Madrid",
            nights: "3 Days",
            image: "/images/destinations/Madrid.webp",
          },
          {
            name: "Seville",
            nights: "3 Days",
            image: "/images/destinations/Seville.webp",
          },
          {
            name: "Ibiza",
            nights: "4 Days",
            image: "/images/destinations/Ibiza.webp",
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
            image: "/images/destinations/Oslo.webp",
          },
          {
            name: "Bergen",
            nights: "3 Days",
            image: "/images/destinations/Bergen.webp",
          },
          {
            name: "Geirangerfjord",
            nights: "2 Days",
            image: "/images/destinations/Geirangerfjord.webp",
          },
          {
            name: "Tromsø",
            nights: "4 Days",
            image: "/images/destinations/Troms.webp",
          },
        ],
      },
    ],
  },

  {
    region: "USA",
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
            image: "/images/destinations/Times-Square.webp",
          },
          {
            name: "Central Park",
            nights: "Half Day",
            image: "/images/destinations/Central-Park.webp",
          },
          {
            name: "Statue of Liberty",
            nights: "Half Day",
            image: "/images/destinations/Statue-of-Liberty.webp",
          },
          {
            name: "Brooklyn Bridge",
            nights: "Half Day",
            image: "/images/destinations/Brooklyn-Bridge.webp",
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
            image: "/images/destinations/Los-Angeles.webp",
          },
          {
            name: "San Francisco",
            nights: "3 Days",
            image: "/images/destinations/San-Francisco.webp",
          },
          {
            name: "Hollywood",
            nights: "2 Days",
            image: "/images/destinations/Hollywood.webp",
          },
          {
            name: "Yosemite",
            nights: "3 Days",
            image: "/images/destinations/Yosemite.webp",
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
            image: "/images/destinations/Bellagio.webp",
          },
          {
            name: "Grand Canyon",
            nights: "Day Trip",
            image: "/images/destinations/Grand-Canyon.webp",
          },
          {
            name: "Red Rock Canyon",
            nights: "Day Trip",
            image: "/images/destinations/Red-Rock-Canyon.webp",
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
            image: "/images/destinations/Honolulu.webp",
          },
          {
            name: "Waikiki Beach",
            nights: "2 Days",
            image: "/images/destinations/island.webp",
          },
          {
            name: "Maui",
            nights: "4 Days",
            image: "/images/destinations/Maui.webp",
          },
          {
            name: "Big Island",
            nights: "3 Days",
            image: "/images/destinations/Big-Island.webp",
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
            image: "/images/destinations/Cape-Town.webp",
          },
          {
            name: "Kruger National Park",
            nights: "3 Days",
            image: "/images/destinations/safari.webp",
          },
          {
            name: "Table Mountain",
            nights: "Half Day",
            image: "/images/destinations/Table-Mountain.webp",
          },
          {
            name: "Garden Route",
            nights: "4 Days",
            image: "/images/destinations/Garden-Route.webp",
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
            image: "/images/destinations/Nairobi.webp",
          },
          {
            name: "Lake Nakuru",
            nights: "2 Days",
            image: "/images/destinations/Lake-Nakuru.webp",
          },
          {
            name: "Amboseli",
            nights: "3 Days",
            image: "/images/destinations/Amboseli.webp",
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
            image: "/images/destinations/Marrakech.webp",
          },
          {
            name: "Sahara Desert",
            nights: "2 Days",
            image: "/images/destinations/Sahara-Desert.webp",
          },
          {
            name: "Chefchaouen",
            nights: "2 Days",
            image: "/images/destinations/morocco.webp",
          },
          {
            name: "Casablanca",
            nights: "2 Days",
            image: "/images/destinations/Casablanca.webp",
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
            image: "/images/destinations/Cairo.webp",
          },
          {
            name: "Pyramids of Giza",
            nights: "Full Day",
            image: "/images/destinations/Pyramids-of-Giza.webp",
          },
          {
            name: "Luxor",
            nights: "2 Days",
            image: "/images/destinations/Luxor.webp",
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
            image: "/images/destinations/Bondi-Beach.webp",
          },
          {
            name: "Blue Mountains",
            nights: "Day Trip",
            image: "/images/destinations/Blue-Mountains.webp",
          },
          {
            name: "Harbour Cruise",
            nights: "Evening",
            image: "/images/destinations/Harbour-Cruise.webp",
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
            image: "/images/destinations/Great-Ocean-Road.webp",
          },
          {
            name: "Phillip Island",
            nights: "Day Tour",
            image: "/images/destinations/Phillip-Island.webp",
          },
          {
            name: "Yarra Valley",
            nights: "2 Days",
            image: "/images/destinations/Yarra-Valley.webp",
          },
          {
            name: "City Centre",
            nights: "2 Days",
            image: "/images/destinations/City-Centre.webp",
          },
        ],
      },
    ],
  },
];

export const galleryImages = [
  "/images/gallery/gallery-01.webp",
  "/images/destinations/Tokyo.webp",
  "/images/gallery/gallery-02.webp",
  "/images/destinations/Kyoto.webp",
  "/images/destinations/Snorkeling.webp",
  "/images/destinations/Kashmir.webp",
  "/images/gallery/gallery-07.webp",
  "/images/gallery/gallery-08.webp",
  "/images/destinations/Rajasthan.webp",
  "/images/destinations/Times-Square.webp",
  "/images/gallery/gallery-11.webp",
  "/images/gallery/gallery-12.webp",
  "/images/destinations/phuket.webp",
  "/images/destinations/Everest-Base-Camp.webp",
  "/images/destinations/Punakha.webp",
  "/images/destinations/Zurich.webp",
];