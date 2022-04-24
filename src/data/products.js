import productImage from "../assets/home.jpg";
import stripeImage from "../assets/striped-t-shirt.jpg";
import stripecardiganImage from "../assets/stripe-cardigan.jpg";
import slevdressImage from "../assets/slev-dress.jpg";
import quarterzipImage from "../assets/quarter-zip.jpg";


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
    productId: "light-roast",
    title: "Quarter-Zip dress",
    description: `Tommy Hilfiger women's dress. Constructed from a lightweight stretch cotton, our quarter-zip colorblock polo dress is all about sporty style.`,
    price: 63,
  },
  // {
  //   image: productImage,
  //   productId: "medium-roast",
  //   title: "Medium roast",
  //   description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
  //   price: 11,
  // },
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