// import mixer1Image from "../assets/mixer1.jpeg";
import mixer2Image from "../assets/mixer6.jpg";
// import mixer3Image from "../assets/mixer3.jpeg";
import major1Image from "../assets/dishwasher2.jpg";
import count1Image from "../assets/kettle2.jpg";
import blenderImage from "../assets/blender1.jpeg";
import microwaveImage from "../assets/microwave1.webp";
import handmixerImage from "../assets/handmixer.webp";
// import mixer1Image from "../assets/mixer1.jpeg";
// import mixer1Image from "../assets/mixer1.jpeg";

const products = [
  {
    image: mixer2Image,
    productId: "prof5",
    categoryId: "small-appliances",
    title: "Professional 5™",
    description: `
     The Power and Durability to Take It All On
     5 Quart Capacity for Large or Small Batches
     Bowl-lift Design for Maximum Stability
   10 Speeds for Nearly any Task or Recipe
     10+ Attachments Available to Make More with your Mixer`,
    price: 449,
    buy: "Buy",
  },
  {
    image: mixer2Image,
    productId: "refurbished-artisan",
    categoryId: "small-appliances",
    title: "Refurbished Artisan",
    description: ` Built to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
    10 Speeds for Nearly any Task or Recipe
    Match your Style with Over 20 Colors Available
    `,
    price: 760,
    buy: "Buy",
  },

  {
    image: mixer2Image,
    productId: "artisan-5",
    categoryId: "small-appliances",
    title: "Artisan® Series 5",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the Tilt-Head Design
   With 10 Speeds for Nearly any Task or Recipe`,
    price: 205,
    buy: "Buy",
  },
  {
    image: major1Image,
    productId: "farberware",
    categoryId: "major-appliances",
    title: "Farberware Professional ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
   Easily add Ingredients with the Tilt-Head Design
   With 10 Speeds for Nearly any Task or Recipe`,
    price: 727,
    buy: "Buy",
  },
  {
    image: major1Image,
    productId: "count-dish",
    categoryId: "major-appliances",
    title: "Countertop Dishwasher, ",
    description: ` KitchenAid Limited Edition
    The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
   Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 1666,
    buy: "Buy",
  },
  {
    image: major1Image,
    productId: "danby",
    categoryId: "major-appliances",
    title: "Danby Professional ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 1180,
    buy: "Buy",
  },
  {
    image: major1Image,
    productId: "best",
    categoryId: "major-appliances",
    title: "Best Dishwasher ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
    With 10 Speeds for Nearly any Task or Recipe`,
    price: 1480,
    buy: "Buy",
  },
  {
    image: count1Image,
    productId: "cosori",

    categoryId: "small-appliances",
    title: "Cosori ",
    description: `KitchenAid Limited Edition
   The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the Tilt-Head Design
   With 10 Speeds for Nearly any Task or Recipe`,
    price: 50,
    buy: "Buy",
  },
  {
    image: count1Image,
    productId: "elite",
    categoryId: "small-appliances",
    title: "Elite ",
    description: ` KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the Tilt-Head Design
    With 10 Speeds for Nearly any Task or Recipe`,
    price: 340,
    buy: "Buy",
  },
  {
    image: count1Image,
    productId: "bodum",
    categoryId: "small-appliances",
    title: "Bodum ",
    description: `  KitchenAid Limited Edition
    The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
    With 10 Speeds for Nearly any Task or Recipe`,
    price: 120,
    buy: "Buy",
  },

  {
    image: blenderImage,
    productId: "blender3",
    categoryId: "small-appliances",
    title: "Easy blender ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 160,
    buy: "Buy",
  },

  {
    image: blenderImage,
    productId: "blender2",
    categoryId: "small-appliances",
    title: "Save Time ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 187,
    buy: "Buy",
  },
  {
    image: blenderImage,
    productId: "blender1",
    categoryId: "small-appliances",
    title: " Blender ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 240,
    buy: "Buy",
  },

  {
    image: microwaveImage,
    productId: "microwave3",

    categoryId: "major-appliances",
    title: " Microwave ",
    description: ` KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 1400,
    buy: "Buy",
  },

  {
    image: microwaveImage,
    productId: "microwave2",
    categoryId: "major-appliances",

    title: " Microwave ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
    With 10 Speeds for Nearly any Task or Recipe`,
    price: 1250,
    buy: "Buy",
  },
  {
    image: microwaveImage,
    productId: "microwave1",

    categoryId: "major-appliances",
    title: " Microwave ",
    description: ` KitchenAid Limited Edition
     The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the Tilt-Head Design
    With 10 Speeds for Nearly any Task or Recipe`,
    price: 1440,
    buy: "Buy",
  },

  {
    image: handmixerImage,
    productId: "handmixer3",
    categoryId: "small-appliances",
    title: " Handmixer ",
    description: `  
       KitchenAid Limited Edition
       The Power and Durability to Take It All On
       5 Quart Capacity for Small or Large Batches
       Easily add Ingredients with the Tilt-Head Design
       With 10 Speeds for Nearly any Task or Recipe`,
    price: 347,
    buy: "Buy",
  },
  {
    image: handmixerImage,
    productId: "handmixer2",
    categoryId: "small-appliances",
    title: " Handmixer ",
    description: `
     KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 620,
    buy: "Buy",
  },
  {
    image: handmixerImage,
    productId: "handmixer1",
    categoryId: "small-appliances",
    title: " Handmixer ",
    description: ` 
     KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
    Easily add Ingredients with the ilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 740,
    buy: "Buy",
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
