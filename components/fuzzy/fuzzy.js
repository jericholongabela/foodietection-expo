import React from 'react'
/*
usage:
import
    import fuzzy from './fuzzy';
call
    let category = fuzzy(serving, carbohydrates, protein, vitaminA, vitaminC);

carbohydates(g)
serving(g)
protein(g)
vitaminA(%daily value)
vitaminC(%daily value)
*/
    let carbpercentage = 0;
    let protpercentage = 0;
    let vitspercentage = 0;

function fuzzy(serving, carbohydrates, protein, vitaminA, vitaminC, totalfat, fuzzyvitA, fuzzyvitC, fuzzycalcium, fuzzyiron) {
    let category;
    let carbdom = carbmembership(carbohydrates, serving);
    let protdom = protmembership(protein, serving);
    let vitadom = vitaminmembership(vitaminA, vitaminC, serving);




    //Fuzzy Rules
    if(carbdom == "high" && protdom == "low" && vitadom == "low"){
        category = "GO";
    }
    else
    if(carbdom == "high" && protdom == "high" && vitadom == "low"){
        category = "GO and GROW";
    }
    else
    if(carbdom == "high" && protdom == "low" && vitadom == "high"){
        category = "GO and GLOW";
    }
    else
    if(carbdom == "low" && protdom == "high" && vitadom == "low"){
        category = "GROW";
    }
    else
    if(carbdom == "low" && protdom == "high" && vitadom == "high"){
        category = "GROW and GLOW";
    }
    else
    if(carbdom == "low" && protdom == "low" && vitadom == "high"){
        category = "GLOW";
    }
    else{
        category = "Cannot Determine";
        console.log('carbpercentage: ', carbpercentage);
        console.log('protpercentage: ', protpercentage);
        console.log('vitspercentage: ', vitspercentage);
        let temp;
        if(carbpercentage > protpercentage){
            temp = carbpercentage;

        }
        else{
            temp = protpercentage;
        }
        if(temp < vitspercentage){
            temp = vitspercentage; 
        }
        if(temp == carbpercentage){
            category = "GO";
        }
        if(temp == protpercentage){
            category = "GROW";
        }
        if(temp == vitspercentage){
            category = "GLOW";
        }
        carbpercentage = 0;
        protpercentage = 0;
        vitspercentage = 0;
    }



    return (
        category
  )
}


function carbmembership(carbohydrates, serving) {
    let percentage = carbohydrates/serving * 100;
    let membership;
    if(percentage <= 7){
        membership = "low"
        
    }
    else
    if(percentage > 7 && percentage < 39){
        let dom1 = ((0.03125 * percentage) - 0.2188) * 100;
        let dom2 = ((-0.0313 * percentage) + 1.21875) * 100;
        carbpercentage = dom1;
        if(dom1>dom2){
            membership = "high";
        }
        else{
            membership = "low";
        }
    }
    else
    if(percentage >= 39){
        membership = "high";
    }
    return membership;
}


function protmembership(protein, serving) {
    let percentage = protein/serving * 100;
    let membership;
    if(percentage <= 3){
        membership = "low"
        
    }
    else
    if(percentage > 3 && percentage < 19){
        let dom1 = ((0.0625 * percentage) - 0.1875) * 100;
        let dom2 = ((-0.0625 * percentage) + 1.1875) * 100;
        protpercentage = dom1;
        if(dom1>dom2){
            membership = "high";
        }
        else{
            membership = "low";
        }
    }
    else
    if(percentage >= 19){
        membership = "high";
    }
    return membership;
}

function vitaminmembership(vitaminA, vitaminC, serving) {
    let vitaminAgrams = vitaminA / 100 * 0.0015;
    let vitaminCgrams = vitaminC / 100 * 0.06;
    let totalgrams = vitaminAgrams + vitaminCgrams;
    let percentage = totalgrams/serving * 100;
    let membership;
    if(percentage ==0.0){
        membership = "low"
    }
    else
    if(percentage > 0.0 && percentage < 0.03089){
        let dom1 = ((32.37293623 * percentage) + 0) * 100;
        let dom2 = ((-32.37293623 * percentage) + 1) * 100;
        vitspercentage = dom1;
        if(dom1>dom2){
            membership = "high";
        }
        else{
            membership = "low";
        }
    }
    else
    if(percentage >= 0.03089){
        membership = "high";
    }
    return membership;
}
export default fuzzy
