// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = arr => {
  //Take off check digit
  let slicedNum = arr.slice(arr.length-1, arr.length);
  //console.log(arr);
  
  //Produce array without check digit
  
  let slicedArr = arr.slice(0, arr.length-1);
  //console.log(slicedNum);
  //console.log(slicedArr);
  
  //Reverse array
  
  let reverseArr = slicedArr.reverse();
  //console.log(reverseArr);
  
  //Multiply odd indexes by 2
  
  let  multiplyArray = [];
  for (let i=0; i<slicedArr.length; i++){
    if (i % 2 === 0){
      (multiplyArray.push(slicedArr[i]* 2));
    }
    else (multiplyArray.push(slicedArr[i]));
    //multiplyArray.push(slicedArr[i]*2);
    
    }
  //console.log(multiplyArray);
  
  //Subtract 9 from numbers that are larger than 9 and push them to array
  
  let shortenedNum = [];
  for (let j=0; j<multiplyArray.length; j++){
    if(multiplyArray[j] > 9){
      (shortenedNum.push(multiplyArray[j]-9));
    }
    else (shortenedNum.push(multiplyArray[j]));
  } 
  //console.log(shortenedNum);
  
  
  //Get sum of all numbers
  
  let sum = 0;
  for(let value of shortenedNum){
    
    sum += value;
  }
  //console.log(sum);
  
  //Add check number back to card number
  
  let checkNumber = sum + parseInt(slicedNum);
  
  //console.log(checkNumber);
  
  //Find if modulo 10 is zero
  
  if(checkNumber % 10 === 0){
    return true;
  }else{return false;}
  
  
}

//console.log(validateCred(valid1));



const findInvalidCards = inputArray => {
  let invalidCardArr = [];
  let validCardArr = [];
  //console.log(inputArray);
  
  inputArray.forEach(card => {
    if (validateCred(card)){
        validCardArr.push(card)
        }
    else invalidCardArr.push(card);
       }
     )
  return invalidCardArr;
 
    }
  
//console.log(findInvalidCards(batch));

const invalidCards = findInvalidCards(batch);


const idInvalidCardCompanies = invalidCardsArray => {
  let tempInvalidArr = [];
  let invalidCardCompanies = [];
  for (let i=0; i<invalidCards.length; i++){
    for(let j=0; j<invalidCards[i].length; j++){
      if(invalidCardsArray[i][0] === 3){
        invalidCardCompanies.push('Amex');
      }else if(invalidCardsArray[i][0] === 4){
        invalidCardCompanies.push('Visa');
      }else if(invalidCardsArray[i][0] === 5){
        invalidCardCompanies.push('Mastercard');
      }else if(invalidCardsArray[i][0] === 6){
        invalidCardCompanies.push('Discover');
      }else (invalidCardCompanies.push('Company not found'));
    }
  } return invalidCardCompanies.filter((element, index) => invalidCardCompanies.indexOf(element) === index);
}

console.log(idInvalidCardCompanies(invalidCards));
