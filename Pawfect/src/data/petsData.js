// Centralized Pet Data Store
export const PETS = [
  // --- Dogs ---
  {
    id: "bruno",
    name: "Bruno",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 Years",
    gender: "Male",
    location: "Chandigarh",
    personality: "Friendly & Playful",
    energy: "High",
    emoji: "🐶",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    description: "Bruno is a joyous and friendly Golden Retriever who loves splashing in water, playing fetch in the park, and spending cozy time with people.",
    tags: ["Vaccinated", "Trained", "Kid Friendly", "Active"]
  },
  {
    id: "max",
    name: "Max",
    type: "Dog",
    breed: "Labrador",
    age: "1.5 Years",
    gender: "Male",
    location: "Mohali",
    personality: "Active & Loving",
    energy: "High",
    emoji: "🐶",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    description: "Max is an adventurous Labrador puppy at heart. He loves outdoor hikes, social playdates, and is super eager to learn new tricks.",
    tags: ["Vaccinated", "Microchipped", "Energetic"]
  },
  {
    id: "bella",
    name: "Bella",
    type: "Dog",
    breed: "German Shepherd",
    age: "3 Years",
    gender: "Female",
    location: "Patiala",
    personality: "Loyal & Smart",
    energy: "High",
    emoji: "🐶",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=80",
    description: "Bella is a loyal, highly intelligent German Shepherd who bonds deeply with her family and thrives on stimulating activities.",
    tags: ["Vaccinated", "House Trained", "Protective"]
  },

  // --- Cats ---
  {
    id: "luna",
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    age: "2 Years",
    gender: "Female",
    location: "Chandigarh",
    personality: "Calm & Affectionate",
    energy: "Low",
    emoji: "🐱",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    description: "Luna is a graceful Persian cat with soft silky fur. She enjoys afternoon sunbaths, gentle head scratches, and serene home spaces.",
    tags: ["Litter Trained", "Spayed", "Quiet Companion"]
  },
  {
    id: "milo",
    name: "Milo",
    type: "Cat",
    breed: "Siamese",
    age: "1 Year",
    gender: "Male",
    location: "Mohali",
    personality: "Curious & Playful",
    energy: "Medium",
    emoji: "🐱",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80",
    description: "Milo is a vocal, inquisitive Siamese who is fascinated by feather wands, climbing cat trees, and greeting you at the front door.",
    tags: ["Vaccinated", "Playful", "Affectionate"]
  },
  {
    id: "coco",
    name: "Coco",
    type: "Cat",
    breed: "British Shorthair",
    age: "2.5 Years",
    gender: "Female",
    location: "Patiala",
    personality: "Gentle & Quiet",
    energy: "Low",
    emoji: "🐱",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
    description: "Coco is a chubby-cheeked British Shorthair who brings calm vibes wherever she goes. Great with busy working owners.",
    tags: ["Litter Trained", "Independent", "Gentle"]
  },

  // --- Rabbits ---
  {
    id: "snowy",
    name: "Snowy",
    type: "Rabbit",
    breed: "Holland Lop",
    age: "1 Year",
    gender: "Male",
    location: "Chandigarh",
    personality: "Cute & Friendly",
    energy: "Medium",
    emoji: "🐰",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    description: "Snowy is a gentle Holland Lop rabbit who loves hopping around the living room, chewing applewood sticks, and eating crisp greens.",
    tags: ["Litter Trained", "Gentle", "Low Noise"]
  },
  {
    id: "oreo",
    name: "Oreo",
    type: "Rabbit",
    breed: "Netherland Dwarf",
    age: "8 Months",
    gender: "Female",
    location: "Mohali",
    personality: "Playful & Sweet",
    energy: "Medium",
    emoji: "🐰",
    image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80",
    description: "Oreo is a tiny Netherland Dwarf with adorable black & white markings. She is super curious and enjoys being hand-fed fresh cilantro.",
    tags: ["Hand Tamed", "Sprightly", "Cute"]
  },
  {
    id: "hazel",
    name: "Hazel",
    type: "Rabbit",
    breed: "Lionhead",
    age: "1.5 Years",
    gender: "Female",
    location: "Patiala",
    personality: "Gentle & Calm",
    energy: "Low",
    emoji: "🐰",
    image: "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?auto=format&fit=crop&w=800&q=80",
    description: "Hazel is a fluffy Lionhead with an endearing mane. She loves quiet petting sessions and relaxing peacefully in cozy corners.",
    tags: ["Calm", "Well Groomed", "Sweet"]
  },

  // --- Birds ---
  {
    id: "sunny",
    name: "Sunny",
    type: "Bird",
    breed: "Cockatiel",
    age: "1 Year",
    gender: "Male",
    location: "Chandigarh",
    personality: "Whistling & Cheerful",
    energy: "Medium",
    emoji: "🐦",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44a04e5?auto=format&fit=crop&w=800&q=80",
    description: "Sunny is a gentle, sweet-whistling Cockatiel who loves perching on shoulders, learning simple tunes, and being hand-fed millet treats.",
    tags: ["Hand Tamed", "Whistler", "Friendly"]
  },
  {
    id: "kiwi",
    name: "Kiwi",
    type: "Bird",
    breed: "Budgerigar (Budgie)",
    age: "8 Months",
    gender: "Female",
    location: "Mohali",
    personality: "Curious & Sprightly",
    energy: "High",
    emoji: "🐦",
    image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80",
    description: "Kiwi is a vibrant green Budgie full of curiosity. She loves mirror toys, bell bells, and chirping happily to music.",
    tags: ["Active", "Colorful", "Social"]
  },

  // --- Hamsters ---
  {
    id: "peanut",
    name: "Peanut",
    type: "Hamster",
    breed: "Syrian Hamster",
    age: "6 Months",
    gender: "Male",
    location: "Patiala",
    personality: "Gentle & Nocturnal",
    energy: "Low",
    emoji: "🐹",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
    description: "Peanut is a soft golden Syrian hamster who adores his silent running wheel, burrowing into cozy paper bedding, and stuffing sunflower seeds.",
    tags: ["Quiet", "Easy Care", "Adorable"]
  },
  {
    id: "pippin",
    name: "Pippin",
    type: "Hamster",
    breed: "Roborovski Dwarf",
    age: "4 Months",
    gender: "Female",
    location: "Chandigarh",
    personality: "Speedy & Entertaining",
    energy: "High",
    emoji: "🐹",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    description: "Pippin is a tiny, speedy Robo dwarf hamster who will keep you smiling with her boundless evening energy and comical sand-bath spins.",
    tags: ["Tiny", "Curious", "Playful"]
  },

  // --- Guinea Pigs ---
  {
    id: "caramel",
    name: "Caramel",
    type: "Guinea Pig",
    breed: "Abyssinian",
    age: "1.2 Years",
    gender: "Female",
    location: "Mohali",
    personality: "Vocal & Friendly",
    energy: "Medium",
    emoji: "🐹",
    image: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=800&q=80",
    description: "Caramel is a rosetted Abyssinian guinea pig who greets you with joyful 'wheek wheek' calls whenever fresh bell peppers are in sight.",
    tags: ["Wheeker", "Social", "Loves Greens"]
  },
  {
    id: "ginger",
    name: "Ginger",
    type: "Guinea Pig",
    breed: "American Smooth Coat",
    age: "1 Year",
    gender: "Male",
    location: "Patiala",
    personality: "Calm & Cuddly",
    energy: "Low",
    emoji: "🐹",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80",
    description: "Ginger is an easygoing American guinea pig who enjoys lap time on soft towels, gentle chin rubs, and munching orchard grass.",
    tags: ["Gentle", "Cuddly", "Great with Kids"]
  },

  // --- Turtles ---
  {
    id: "franklin",
    name: "Franklin",
    type: "Turtle",
    breed: "Red-Eared Slider",
    age: "3 Years",
    gender: "Male",
    location: "Chandigarh",
    personality: "Serene & Inquisitive",
    energy: "Low",
    emoji: "🐢",
    image: "https://images.unsplash.com/photo-1508455858334-95337ba25607?auto=format&fit=crop&w=800&q=80",
    description: "Franklin is a graceful aquatic swimmer who loves basking under warm UV heat lamps and peacefully observing his peaceful aquarium home.",
    tags: ["Aquatic", "Basking Fan", "Hardy"]
  },
  {
    id: "shelly",
    name: "Shelly",
    type: "Turtle",
    breed: "Russian Tortoise",
    age: "4 Years",
    gender: "Female",
    location: "Mohali",
    personality: "Peaceful & Sturdy",
    energy: "Low",
    emoji: "🐢",
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
    description: "Shelly is a delightful terrestrial tortoise who loves roaming safely enclosed outdoor grassy patches and relishing fresh dandelion leaves.",
    tags: ["Herbivore", "Quiet", "Long Lived"]
  }
].filter((pet) => ["Dog", "Cat", "Rabbit"].includes(pet.type));

export const PET_ESSENTIALS = {
  Dog: [
    { name: "Premium Dog Food", icon: "🍖", desc: "Nutrient-rich daily meals" },
    { name: "Durable Chew Toy", icon: "🧸", desc: "For dental health and fun" },
    { name: "Orthopedic Dog Bed", icon: "🛏️", desc: "Cozy rest and joint support" },
    { name: "Sensitive Skin Shampoo", icon: "🧼", desc: "Gentle coat cleanser" },
    { name: "Padded Collar & Leash", icon: "🦮", desc: "Safe, comfortable daily walks" }
  ],
  Cat: [
    { name: "Grain-Free Cat Food", icon: "🍖", desc: "Taurine & protein enriched" },
    { name: "Interactive Cat Toy", icon: "🧶", desc: "Stimulates natural hunting instincts" },
    { name: "Plush Cat Bed", icon: "🛏️", desc: "Warm and secure hideaway" },
    { name: "De-shedding Brush", icon: "🧼", desc: "Reduces hairballs and grooms coat" },
    { name: "Feather Wand Teaser", icon: "🪶", desc: "Great bonding playtime" }
  ],
  Rabbit: [
    { name: "Timothy Hay & Pellets", icon: "🥕", desc: "Essential fiber for digestive health" },
    { name: "Natural Chew Toys", icon: "🧸", desc: "Maintains optimal teeth length" },
    { name: "Wooden Rabbit Castle", icon: "🏠", desc: "Safe hideout and shelter" },
    { name: "Soft Bristle Brush", icon: "🧼", desc: "Keep fur soft and tangle-free" },
    { name: "Organic Fresh Greens", icon: "🥬", desc: "Daily nutritious hydration snacks" }
  ],
  Bird: [
    { name: "Fortified Seed & Pellet Mix", icon: "🌾", desc: "Balanced avian nutrition & vitamins" },
    { name: "Natural Wood Perches", icon: "🪵", desc: "Different textures for foot exercise" },
    { name: "Shredding & Foraging Toys", icon: "🪀", desc: "Mental enrichment and beak trimming" },
    { name: "Bird Bath Basin", icon: "🛁", desc: "Keeps feathers gleaming and clean" },
    { name: "Cuttlebone & Mineral Block", icon: "🦴", desc: "Essential calcium supplement" }
  ],
  Hamster: [
    { name: "Nutritious Seed & Grain Diet", icon: "🌰", desc: "Wholesome natural foraging mix" },
    { name: "Silent Exercise Running Wheel", icon: "🎡", desc: "Essential daily cardio workouts" },
    { name: "Dust-Free Aspen / Paper Bedding", icon: "📦", desc: "Deep bedding for safe burrowing" },
    { name: "Chew Sticks & Mineral Blocks", icon: "🪵", desc: "Prevents incisor overgrowth" },
    { name: "Ceramic Bath House & Sand", icon: "🏖️", desc: "Keeps delicate coat clean and dry" }
  ],
  "Guinea Pig": [
    { name: "Unlimited High-Fiber Timothy Hay", icon: "🌾", desc: "80% of daily essential diet" },
    { name: "Stabilized Vitamin C Pellets", icon: "💊", desc: "Guinea pigs cannot synthesize Vit C" },
    { name: "Fleece Tunnel & Wooden Hideout", icon: "⛺", desc: "Safe, cozy shelter to de-stress" },
    { name: "Heavy Ceramic Feeding Dish", icon: "🥣", desc: "Non-tippable food container" },
    { name: "Fresh Crunchy Bell Peppers", icon: "🫑", desc: "Favorite vitamin C rich fresh treat" }
  ],
  Turtle: [
    { name: "Aquatic Turtle Floating Pellets", icon: "🦐", desc: "Fortified with calcium and D3" },
    { name: "UVA / UVB Basking Lamp", icon: "💡", desc: "Crucial for shell hardness and health" },
    { name: "Dry Basking Platform Dock", icon: "🏝️", desc: "Warm spot to completely dry off" },
    { name: "High-Efficiency Water Filter", icon: "💧", desc: "Maintains pristine aquatic hygiene" },
    { name: "Calcium Cuttlebone Block", icon: "🦴", desc: "Slow-release mineral conditioning" }
  ]
};
