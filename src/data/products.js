import mixer3Image from "../assets/mixer8.webp";
import mixer4Image from "../assets/mixer9.jpeg";
import mixer5Image from "../assets/mixer10.webp";

import blender1Image from "../assets/blender2.webp";

import oven2Image from "../assets/oven6.webp";

import micro1Image from "../assets/micro4.png";
import micro2Image from "../assets/mciro8.png";

import kettle3Image from "../assets/kettle3.webp";
import kettle4Image from "../assets/kettle4.webp";
const products = [
  {
    image: micro1Image,
    productId: "built",
    categoryId: "major-appliances",
    title: "Built-in Microwave",
    description: `
    The VIVOscreen display is larger than its predecessor and is equipped with multiple new functions including multi-step cooking and smartcooking; it also features all-new graphics for even greater ease of use.`,
    price: 229.99,
    buy: "Buy",
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
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
    cart: "Add to Cart",
  },

  {
    image: mixer5Image,
    productId: "blackMixer",
    categoryId: "small-appliances",
    title: "Stand Mixer Black",
    description: `  Bold, bright and smart, kMix has it all. Bake, whip and knead your way to perfect cakes, creams, breads, biscuits and more. Pick from four stunning colours for great performance, bake after bake.`,
    price: 265,
    buy: "Buy",
    cart: "Add to Cart",
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
