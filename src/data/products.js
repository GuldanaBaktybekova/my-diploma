import handbag2Image from "../assets/handbag2.webp";
import handbag3Image from "../assets/handbag3.webp";
import handbag4Image from "../assets/handbag4.webp";
import handbag6Image from "../assets/handbag6.webp";



import backpack2Image from "../assets/backpack2.webp";

import backpack3Image from "../assets/backpack3.webp";
import backpack4Image from "../assets/backpack4.webp";
import backpack5Image from "../assets/backpack5.webp";


import suitcase2Image from "../assets/suitcase2.webp";
import suitcase3Image from "../assets/suitcase3.webp";
import suitcase4Image from "../assets/suitcase4.webp";
import suitcase5Image from "../assets/suitcase5.webp";

const products = [
  {
    image: handbag2Image,
    productId: "alma-bb",
    categoryId: "handbags",
    title: "Alma BB",
    description: `One slip pocket on the front
    closes with zipper
    two handles (handle drop 23 cm)
    removable and adjustable shoulder strap (Length ca. 60-100 cm)
    polished gold-coloured metal fittings`,
    price: 555,
  },
  {
    image: handbag3Image,
    productId: "wallet-orange",
    categoryId: "handbags",
    title: "Wallet on Strap",
    description: ` Made of lightweight viscose terry, our striped shirt is just what the warm weather ordered.`,
    price: 760,
  },
 
  {
    image: handbag4Image,
    productId: "wallet-black",
    categoryId: "handbags",
    title: "Wallet on Strap",
    description: ` Our patchwork print dress featured in an A-line skirt, sleeveless silhouette, and tie-belt for added definition.`,
    price: 950,
  },
  {
    image: handbag6Image,
    productId: "lv-pont",
    categoryId: "handbags",
    title: "LV Pont 9 Soft MM",
    description: `Tommy Hilfiger women's dress. Constructed from a lightweight stretch cotton, our quarter-zip colorblock polo dress is all about sporty style.`,
    price: 200,
  },
 


  {
    image: backpack2Image,
    productId: "tine-backpack",
    categoryId: "backpacks",
    title: "Tiny Backpack",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 160,
  },
  {
    image: backpack3Image,
    productId: "montsouris",
    categoryId: "backpacks",
    title: "Montsouris Bakcpack",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 980,
  },
  {
    image: backpack4Image,
    productId: "montsouris-pink",
    categoryId: "backpacks",
    title: "Montsouris Bakcpack Pink",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 104,
  },
  {
    image: backpack5Image,
    productId: "palm-spring",
    categoryId: "backpacks",
    title: "Palm Spring",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 840,
  },

  {
    image: suitcase2Image,
    productId: "horizon-soft",
    categoryId: "suitcases",
    title: "Horizon Soft 55",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 570,
  },
  {
    image: suitcase3Image,
    productId: "horizon-55",
    categoryId: "suitcases",
    title: "Horizon 55",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 480,
  },
  {
    image: suitcase4Image,
    productId: "horizon55-black",
    categoryId: "suitcases",
    title: "Horizon 55",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 780,
  },
  {
    image: suitcase5Image,
    productId: "horizon55-white",
    categoryId: "suitcases",
    title: "Horizon 55",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 650,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
