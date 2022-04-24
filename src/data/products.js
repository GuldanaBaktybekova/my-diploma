
import stripeImage from "../assets/striped-t-shirt.jpg";
import stripecardiganImage from "../assets/stripe-cardigan.jpg";
import slevdressImage from "../assets/slev-dress.jpg";
import quarterzipImage from "../assets/quarter-zip.jpg";

import slimImage from "../assets/slim.jpg";
import oxfordImage from "../assets/oxford-tshirt.jpg";
import signImage from "../assets/slim-sign.jpg";
import vneckImage from "../assets/v-neck.jpg";




const products = [
  {
    image: stripeImage,
    productId: "stripe-top",
    title: "Stripe top",
    description: `Tommy Hilfiger women's shirt. Made of lightweight viscose terry, our striped shirt is just what the warm weather ordered.`,
    price: 48,
  },
  {
    image: stripecardiganImage,
    productId: "stripe-cardigan",
    title: "Stripe  cardigan",
    description: `Tommy Hilfiger women's sweater. Our stripe cardigan strikes the balance between polo looks and a knit sweater feel.`,
    price: 55,
  },
  {
    image: slevdressImage,
    productId: "slev-dress",
    title: "Sleeveless  dress",
    description: `Tommy Hilfiger women's dress. Our patchwork print dress featured in an A-line skirt, sleeveless silhouette, and tie-belt for added definition.`,
    price: 83,
  },
  {
    image: quarterzipImage,
    productId: "quarter-zip",
    title: "Quarter-Zip dress",
    description: `Tommy Hilfiger women's dress. Constructed from a lightweight stretch cotton, our quarter-zip colorblock polo dress is all about sporty style.`,
    price: 63,
  },
  {
    image: slimImage,
    productId: "slim-fit",
    title: "Slim Fit",
    description: `Tommy Hilfiger men's polo. What we do best, the classic polo in stretch cotton. A best-seller year after year.
    `,
    price: 69,
  },
  {
    image: oxfordImage,
    productId: "oxford",
    title: "Oxford Shirt",
    description: `Tommy Hilfiger men's shirt. For work and weekends, our shirts are made from soft, stretch cotton, and cut in an easy fit.
    `,
    price: 41,
  },
  {
    image: signImage,
    productId: "slim-sign",
    title: "Slim Signature",
    description: `Tommy Hilfiger men's polo. What we do best, the classic polo in stretch cotton, cut in our best-selling fit.
    `,
    price: 64,
  },
  {
    image: vneckImage,
    productId: "v-neck",
    title: "V-Neck T-shirt",
    description: `
    Tommy Hilfiger men's T-shirt. Styled from pure cotton and washed for softness, our essential tees are customer favorites for good reason.
    `,
    price: 29,
  },

];

export function getProducts() {
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}