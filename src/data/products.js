import bag3Image from "../assets/bag3.jpeg";
import bag4Image from "../assets/bag4.jpeg";
import bag5Image from "../assets/bag5.jpeg";
import bag6Image from "../assets/bag6.jpeg";

import bag7Image from "../assets/bag7.jpeg";
import bag8Image from "../assets/bag8.jpeg";
import bag9Image from "../assets/bag9.jpeg";
import bag10Image from "../assets/bag10.jpeg";

const products = [
  {
    image: bag3Image,
    productId: "m-kors",
    title: "Michael Kors",
    description: `One slip pocket on the front
    closes with zipper
    two handles (handle drop 23 cm)
    removable and adjustable shoulder strap (Length ca. 60-100 cm)
    polished gold-coloured metal fittings`,
    price: 55,
  },
  {
    image: bag4Image,
    productId: "fossil",
    title: "Fossil",
    description: ` Made of lightweight viscose terry, our striped shirt is just what the warm weather ordered.`,
    price: 190,
  },
 
  {
    image: bag5Image,
    productId: "vivi",
    title: "Vivienne Westwood",
    description: ` Our patchwork print dress featured in an A-line skirt, sleeveless silhouette, and tie-belt for added definition.`,
    price: 98,
  },
  {
    image: bag6Image,
    productId: "coccinelle",
    title: "Coccinelle",
    description: `Tommy Hilfiger women's dress. Constructed from a lightweight stretch cotton, our quarter-zip colorblock polo dress is all about sporty style.`,
    price: 73,
  },
  {
    image: bag7Image,
    productId: "tommy",
    title: "Tommy Hilfiger",
    description: `Tommy Hilfiger . What we do best, the classic polo in stretch cotton. A best-seller year after year.
    `,
    price: 88,
  },
  {
    image: bag8Image,
    productId: "emporio",
    title: "Emporio Armani",
    description: ` For work and weekends, our shirts are made from soft, stretch cotton, and cut in an easy fit.
    `,
    price: 41,
  },
  {
    image: bag9Image,
    productId: "moschino",
    title: "Love Moschino",
    description: ` What we do best, the classic polo in stretch cotton, cut in our best-selling fit.
    `,
    price: 74,
    color: "blue",
  },
  {
    image: bag10Image,
    productId: "joop",
    title: "Joop",
    description: `
     Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 104,
  },
];

export function getProducts() {
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
