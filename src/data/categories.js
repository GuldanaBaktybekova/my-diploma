import smallImage from "../assets/smallWhite.png";
import majorImage from "../assets/majorWhite.png";

import headerImage from "../assets/small.gif";
import headerImage2 from "../assets/major4.jpeg";


const categories = [
  {
  
    categoryId: "major-appliances",
    title: "Major appliances",
    image: majorImage,
    headerImage: headerImage2,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
  {
    
    categoryId: "countertop-appliances",
    title: "Small appliances",
    title2: "Explore your best taste and texture",
    image: smallImage,
    headerImage: headerImage,
    description:"Get inspired by the vibrancy of Beetroot. Bold and optimistic, this splash of color was designed to turn heads and help us see the ordinary through a new lens.",
  
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
