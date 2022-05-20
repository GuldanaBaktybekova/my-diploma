// import mixer1Image from "../assets/mixer1.jpeg";
import mixer2Image from "../assets/mixer2.jpeg";
import mixer3Image from "../assets/mixer3.jpeg";
import major1Image from "../assets/dishwasher.jpg";
import count1Image from "../assets/kettle2.jpg";
// import mixer1Image from "../assets/mixer1.jpeg";
// import mixer1Image from "../assets/mixer1.jpeg";

const products = [
  {
    image: mixer3Image,
    productId: "prof5",
    categoryId: "stand-mixers",
    title: "Professional 5™",
    description: `
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Large or Small Batches
    • Bowl-lift Design for Maximum Stability
    • 10 Speeds for Nearly any Task or Recipe
    • 10+ Attachments Available to Make More with your Mixer`,
    price: 449,
  },
  {
    image: mixer2Image,
    productId: "refurbished-artisan",
    categoryId: "stand-mixers",
    title: "Refurbished Artisan",
    description: ` • Built to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • 10 Speeds for Nearly any Task or Recipe
    • Match your Style with Over 20 Colors Available
    `,
    price: 760,
  },

  {
    image: mixer3Image,
    productId: "artisan-5",
    categoryId: "stand-mixers",
    title: "Artisan® Series 5",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 205,
  },
  {
    image: major1Image,
    productId: "farberware",
    categoryId: "major-appliances",
    title: "Farberware Professional ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 77,
  },
  {
    image: major1Image,
    productId: "count-dish",
    categoryId: "major-appliances",
    title: "Countertop Dishwasher, ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 66,
  },
  {
    image: major1Image,
    productId: "danby",
    categoryId: "major-appliances",
    title: "Danby ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 80,
  },
  {
    image: count1Image,
    productId: "cosori",

    categoryId: "countertop-appliances",
    title: "Cosori ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 50,
  },
  {
    image: count1Image,
    productId: "elite",

    categoryId: "countertop-appliances",
    title: "Elite ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 340,
  },
  {
    image: count1Image,
    productId: "bodum",

    categoryId: "countertop-appliances",
    title: "Bodum ",
    description: ` • KitchenAid Limited Edition
    • The Power and Durability to Take It All On
    • 5 Quart Capacity for Small or Large Batches
    • Easily add Ingredients with the Tilt-Head Design
    • With 10 Speeds for Nearly any Task or Recipe`,
    price: 120,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
