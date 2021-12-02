//jshint esversion:6
// ----date setup---- //

module.exports.getDate = getDate;

function getDate(){
let today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
module.exports.getDay = function getDay(){
    let today = new Date();
    
    const options = {
        weekday: "long",

      };
    
      return today.toLocaleDateString("en-US", options);
      
    }

  // ----end of date setup---- //