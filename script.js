/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let bill_input = document.getElementById('billTotalInput');
let tip_input =  document.getElementById("tipInput");
let per_person = document.getElementById('perPersonTotal')
let numberOfPeople = document.getElementById("numberOfPeople");

// Get number of people from number of people div
let no_of_people = Number(numberOfPeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
 

    // get bill from user input & convert it into a number
    let bill = Number(bill_input.value);
    // console.log(bill)
  
    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = Number(tip_input.value)/100;
    // console.log(tip)
  
    // get the total tip amount
    
    let tipAmount = bill * tipPercentage
    //console.log({tipAmount}) 

    // calculate the total (tip amount + bill)
    
    let total = tipAmount + bill
    //console.log(total)
  
    // calculate the per person total (total divided by number of people)
    let perPerson = total / no_of_people

  
    // update the perPersonTotal on DOM & show it to user
    per_person.innerText = `$${perPerson.toLocaleString('en-US')} `
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    no_of_people += 1; 
  
    // update the DOM with the new number of people
    numberOfPeople.innerText = no_of_people;
  
    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (no_of_people <= 1) {
        return
    }

    
    // decrement the amount of people
    no_of_people -= 1;
  
    // update the DOM with the new number of people
    numberOfPeople.innerText = no_of_people
  
    // calculate the bill based on the new number of people
    calculateBill()
  }