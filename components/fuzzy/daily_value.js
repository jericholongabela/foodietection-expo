import React from 'react'
import fuzzy from './fuzzy';
import recommendation from './recommendation';
/*
Usage:

import
  import daily_value from './daily_value';

convert json to object
  let json = require('./response.json');

call the function
  let dailyvalue = daily_value(json);

output is object
example:
  let x = dailyvalue.calories_from_fat;

*/

function daily_value(json) {
  let calories_from_fat = Math.round(json.nf_total_fat * 9 );
  let total_fat = Math.round(json.nf_total_fat / 65 * 100);
  let saturated_fat = Math.round(json.nf_saturated_fat / 20 * 100);
  let cholesterol = Math.round(json.nf_cholesterol / 300 * 100 );
  let sodium = Math.round(json.nf_sodium / 2400 * 100 );
  let potassium = Math.round(json.nf_potassium / 3500 * 100 );
  let carbohydrates = Math.round(json.nf_total_carbohydrate / 300 * 100 );
  let dietary_fiber = Math.round(json.nf_dietary_fiber / 25 * 100 );
  let vitaminA;
  let vitaminC;
  let calcium;
  let iron;
  for(let i=0; i< 100; i++){
    if(json.full_nutrients[i].attr_id == 318){
      vitaminA = Math.round((json.full_nutrients[i].value / 5000 * 100 )* 10) / 10;
      break;
    }
  }
  for(let i=0; i< 100; i++){
    if(json.full_nutrients[i].attr_id == 401){
      vitaminC = Math.round((json.full_nutrients[i].value / 60 * 100 )* 10) / 10;
      break;
    }
  }
  for(let i=0; i< 100; i++){
    if(json.full_nutrients[i].attr_id == 301){
      calcium = Math.round((json.full_nutrients[i].value / 1300 * 100 )* 10) / 10;
      break;
    }
  }
  for(let i=0; i< 100; i++){
    if(json.full_nutrients[i].attr_id == 303){
      iron = Math.round(json.full_nutrients[i].value / 18 * 100 );
      break;
    }
  }


  let category = fuzzy(json.serving_weight_grams, json.nf_total_carbohydrate, json.nf_protein, vitaminA, vitaminC);
  //let recommend = recommendation(recommedationinput);
  //let reminders = recommend.reminder;
  //let recommendedfoods = recommend.foods;
  //let lackgroup = recommend.lackgroup;
  return{
    calories_from_fat, total_fat, saturated_fat, cholesterol, sodium, potassium, carbohydrates, dietary_fiber, vitaminA, vitaminC, calcium, iron, category, //recommendedfoods, //reminders, //lackgroup
  };
  
}

export default daily_value
