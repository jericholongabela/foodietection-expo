import React from 'react'


let foodgroup = require('./database.json');
let numfoods = 2;


function recommendation(category) {
    let foods, food1 = 0, food2 = 0, food3 = 0;
    let reminder, lackgroup;
    if(category == 'GROW'){
        food1 = getglow();
        food2 = getgo();
        foods = food2.concat(food1);
        lackgroup = 'GLOW and GO';
        reminder = "Good day! It appears that your meal lacks Go and Glow foods, thus we advise eating meals high in vitamins, minerals, and carbohydrates to complete your wholesome meal.";
    }
    if(category == 'GO'){
        food1 = getglow();
        food2 = getgrow();
        foods = food2.concat(food1);
        lackgroup = 'GLOW and GROW';
        reminder = "Good day! It appears that your meal lacks Glow and Grow foods, thus we advise eating meals high in vitamins, minerals, and protein to complete your wholesome meal.";
    }
    if(category == 'GLOW'){
        food1 = getgrow();
        food2 = getgo();
        foods = food2.concat(food1);
        lackgroup = 'GROW and GO';
        reminder = "Ohhhh! It appears that your meal lacks Go and Grow foods. To complete your wholesome meal, eat meals abundant in carbohydrates and protein.";
    }
    if(category == 'GO and GROW' || category =='GROW and GO'){
        foods = getglow();
        lackgroup = 'GLOW';
        reminder = "A daily reminder dear user. It appears that your meal lacks Glow foods. To complete your wholesome meal, eat meals abundant in vitamins and minerals";
    }
    if(category == 'GO and GLOW' || category =='GLOW and GO'){
        foods = getgrow();
        lackgroup = 'GROW';
        reminder = "We advise eating foods high in protein to complete your balanced diet as it appears that your meal lacks Grow foods.";
    }
    if(category == 'GROW and GLOW' || category =='GLOW and GROW'){
        foods = getgo();
        lackgroup = 'GO';
        reminder = "We advise eating foods high in carbohydrates to complete your balanced diet as it appears that your meal lacks GO foods.";
    }
    if(category == 'GO and GLOW and GROW' || category =='GO and GROW and GLOW'||category =='GROW and GO and GLOW'||category =='GROW and GLOW and GO' || category =='GLOW and GO and GROW'||category =='GLOW and GROW and GO'){
        lackgroup = 'NONE';
        reminder = "Congratulations! You have a healthy meal, enjoy your eating.";
    }
    if(category == 'Cannot Determine'){
        food1 = getglow();
        food2 = getgo();
        food3 = getgrow();
        foods = food1.concat(food2);
        foods = foods.concat(food3);
        reminder = "It appears that your meal lacks Go, Grow, and Glow foods. This may be because the system is unable to identify the food group to which this food belongs based on nutritional content. It might also be the result of undetected foods in the image.";
        lackgroup = 'Undefined';
    }

  return {
    foods, reminder,lackgroup
    };
}

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
}

function getglow(){
    let foods = getMultipleRandom(foodgroup.foodgroup[2].foods,numfoods);
    return  foods;
}
function getgrow(){
    let foods = getMultipleRandom(foodgroup.foodgroup[1].foods,numfoods);
    return  foods;
}
function getgo(){
    let foods = getMultipleRandom(foodgroup.foodgroup[0].foods,numfoods);
    return  foods;
}

export default recommendation
