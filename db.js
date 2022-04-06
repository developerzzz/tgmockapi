const latestcourses = require("./data/latest_courses");
const inprogresscourses = require("./data/inprogress_courses");
const usercourses = require("./data/user_courses");
const coursedetails = require("./data/course_details");
const categories = require("./data/categories");
const atm = require("./data/atm");

module.exports = {
  latestcourses,
  inprogresscourses,
  usercourses,
  coursedetails,
  categories
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
