import mixer3Image from "../assets/mixer8.webp";
import mixer4Image from "../assets/mixer9.jpeg";
import mixer5Image from "../assets/mixer10.webp";

import count1Image from "../assets/kettle2.jpg";
import blenderImage from "../assets/blender1.jpeg";
import blender1Image from "../assets/blender2.webp";

import oven2Image from "../assets/oven3.jpg";
import oven3Image from "../assets/oven5.jpg";
import oven4Image from "../assets/oven6.webp";
import micro1Image from "../assets/micro1.jpg";
import micro2Image from "../assets/micro2.jpg";
import micro3Image from "../assets/micro.jpg";

import dish1Image from "../assets/dish1.jpg";
import dish2Image from "../assets/dish2.jpg";
import dish3Image from "../assets/dish3.jpg";

import kettle3Image from "../assets/kettle3.webp";
import kettle4Image from "../assets/kettle4.webp";

import kettle5Image from "../assets/kettle.webp";
const products = [
  {
    image: oven4Image,
    productId: "thermo",
    categoryId: "major-appliances",
    title: "Thermo-ventilated Oven",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 222.99,
    buy: "Buy",
  },
  {
    image: micro1Image,
    productId: "built",
    categoryId: "major-appliances",
    title: "Built-in Microwave",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 229.99,
    buy: "Buy",
  },
  {
    image: micro2Image,
    productId: "grey",
    categoryId: "major-appliances",
    title: "Built-in Grey Microwave",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 249.99,
    buy: "Buy",
  },
  {
    image: micro3Image,
    productId: "colon",
    categoryId: "major-appliances",
    title: "Built-in Coloniale Microwave",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 266.99,
    buy: "Buy",
  },
  {
    image: oven3Image,
    productId: "combi",
    categoryId: "major-appliances",
    title: "Combi Steam OvenPyro steam Galileo Oven",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 439.99,
    buy: "Buy",
  },
  {
    image: oven2Image,
    productId: "combi",
    categoryId: "major-appliances",
    title: "Combi Steam Oven",
    description: `
    A compact 350WA 60 cm platform houses the combined steam oven: STEAM100. Five cooking levels are concealed by an elegant aesthetic which, in a single appliance, combines traditional cooking with steam cooking, for excellent cooking results.
    `,
    price: 559.99,
    buy: "Buy",
  },
  {
    image: blender1Image,
    productId: "compact",
    categoryId: "small-appliances",
    title: "Compact Blender",
    description: `
    A compact 350W blender, ideal for smaller households, or those with limited space who do not want to compromise on performance.
    `,
    price: 34.99,
    buy: "Buy",
  },
  {
    image: kettle5Image,
    productId: "abbey",
    categoryId: "small-appliances",
    title: "Abbey Lux White Kettle",
    description: `
    A kettle is one of our most used appliances in the kitchen. So, in addition to a stylish design that looks great on your kitchen worktop, the Mesmerine kettle is designed for ease of use day in day out, with an easy pull off lid, removable filter for cleaning and perfect pouring.`,
    price: 29.99,
    buy: "Buy",
  },
  {
    image: kettle3Image,
    productId: "mesmerine",
    categoryId: "small-appliances",
    title: "Mesmerine Kettle",
    description: `
    A kettle is one of our most used appliances in the kitchen. So, in addition to a stylish design that looks great on your kitchen worktop, the Mesmerine kettle is designed for ease of use day in day out, with an easy pull off lid, removable filter for cleaning and perfect pouring.`,
    price: 84.99,
    buy: "Buy",
  },
  {
    image: kettle4Image,
    productId: "elegancy",
    categoryId: "small-appliances",
    title: "Elegancy Black Kettle",
    description: `
    A kettle is one of our most used appliances in the kitchen. So, in addition to a stylish design that looks great on your kitchen worktop, the Mesmerine kettle is designed for ease of use day in day out, with an easy pull off lid, removable filter for cleaning and perfect pouring.`,
    price: 39.99,
    buy: "Buy",
  },
  {
    image: mixer3Image,
    productId: "juniper",
    categoryId: "small-appliances",
    title: "Juniper Mixer",
    description: `
    Bring nature into your home with the new kMix Editions colour range. Inspired by the colours of the natural world, kMix Editions provides tranquility and calm to every kitchen, bake after bake.`,
    price: 449.99,
    buy: "Buy",
  },

  {
    image: mixer4Image,
    productId: "redMixer",
    categoryId: "small-appliances",
    title: "Red Mixer",
    description: ` Bold, bright and smart, kMix has it all. Bake, whip and knead your way to perfect cakes, creams, breads, biscuits and more. Pick from four stunning colours for great performance, bake after bake.
    `,
    price: 269,
    buy: "Buy",
  },

  {
    image: mixer5Image,
    productId: "blackMixer",
    categoryId: "small-appliances",
    title: "Stand Mixer Black",
    description: `  Bold, bright and smart, kMix has it all. Bake, whip and knead your way to perfect cakes, creams, breads, biscuits and more. Pick from four stunning colours for great performance, bake after bake.`,
    price: 265,
    buy: "Buy",
  },
  {
    image: dish1Image,
    productId: "farberware",
    categoryId: "major-appliances",
    title: "Farberware Professional ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
     5 Quart Capacity for Small or Large Batches
   Easily add Ingredients with the Tilt-Head Design
   With 10 Speeds for Nearly any Task or Recipe`,
    price: 449,
    buy: "Buy",
  },
  {
    image: dish2Image,
    productId: "count-dish",
    categoryId: "major-appliances",
    title: "Countertop Dishwasher, ",
    description: ` KitchenAid Limited Edition
    The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
   Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 777,
    buy: "Buy",
  },
  {
    image: dish3Image,
    productId: "danby",
    categoryId: "major-appliances",
    title: "Danby Professional ",
    description: `  KitchenAid Limited Edition
     The Power and Durability to Take It All On
    5 Quart Capacity for Small or Large Batches
     Easily add Ingredients with the Tilt-Head Design
     With 10 Speeds for Nearly any Task or Recipe`,
    price: 330,
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
