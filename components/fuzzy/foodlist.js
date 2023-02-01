import React from 'react'


let foodgroup = require('./database.json');
let numfoods = 3;


function recommendation(category) {
    let foods, food1 = 0, food2 = 0, food3 = 0;
    let reminder, lackgroup;
    if(category == 'GROW'){
    
        foods = getgrow();
    }
    if(category == 'GO'){
        foods = getgo();
    }
    if(category == 'GLOW'){
        foods = getglow();
    }
    if(category == 'GO and GROW' || category =='GROW and GO'){
        food1 = getgrow();
        food2 = getgo();
        foods = food2.concat(food1);
    }
    if(category == 'GO and GLOW' || category =='GLOW and GO'){

        food1 = getglow();
        food2 = getgo();
        foods = food2.concat(food1);
    
    }
    if(category == 'GROW and GLOW' || category =='GLOW and GROW'){
        food1 = getglow();
        food2 = getgrow();
        foods = food2.concat(food1);
    }
    if(category == 'GO and GLOW and GROW' || category =='GO and GROW and GLOW'||category =='GROW and GO and GLOW'||category =='GROW and GLOW and GO' || category =='GLOW and GO and GROW'||category =='GLOW and GROW and GO'){
        foods = foodgroup.foodgroup[3].foods,numfoods;
    }
    if(category == 'Cannot Determine'){
        food1 = getglow();
        food2 = getgo();
        food3 = getgrow();
        foods = food1.concat(food2);
        foods = foods.concat(food3);
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
