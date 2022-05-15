import backpackImage from "../assets/backpack.webp";
import handbagImage from "../assets/handbag.webp";
import suitcaseImage from "../assets/suitcase.webp";

const categories = [
  {
    
    categoryId: "backpacks",
    title: "Backpack",
    image: backpackImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
  
  },
  {
  
    categoryId: "handbags",
    title: "Handbags",
    image: handbagImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
  {
  
    categoryId: "suitcases",
    title: "Suitcases",
    image: suitcaseImage,
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
