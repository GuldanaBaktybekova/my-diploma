import countImage from "../assets/blender.jpeg";
import majorImage from "../assets/microwave.jpeg";
import mixersImage from "../assets/mixer.jpg";
import headerImage from "../assets/countertop1.webp";
import headerImage2 from "../assets/majorheader.jpeg";
import headerImage3 from "../assets/mixerheader.jpeg";

const categories = [
  {
    
    categoryId: "countertop-appliances",
    title: "Countertop appliances",
    title2: "Explore your best taste and texture",
    image: countImage,
    headerImage: headerImage,
    description:"Get inspired by the vibrancy of Beetroot. Bold and optimistic, this splash of color was designed to turn heads and help us see the ordinary through a new lens.",
  
  },
  {
  
    categoryId: "major-appliances",
    title: "Major appliances",
    image: majorImage,
    headerImage: headerImage2,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
  {
  
    categoryId: "stand-mixers",
    title: "Stand mixers",
    image: mixersImage,
    headerImage: headerImage3,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
 

];

export function getCategories() {
  return categories;
}

// dark-roast
export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
