// Chapter 21-25

// Question # 1
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// console.log("Full Name :", fullName);

//Question # 2
// var favorite = prompt("Mobile Model");
// document.write("My Favorite Phone is :" + " " + favorite + "<br />");
// var length = favorite.length;
// document.write("Length of String :" + length + "<br />");

// Question # 3
// var string = "Pakistani";
// document.write("String :" + string + "<br />");
// var index = string.indexOf("n");
// document.write("Index of 'n' :" + index);

// Question # 4
// var word = "Hello World";
// document.write("String :" + word + "<br />");
// var lastIndex = word.lastIndexOf("l");
// document.write("Index of 'n' :" + lastIndex);

// Question # 5
// var str = "Pakistani";
// document.write("String :" + str + "<br /");
// console.log("Character at index 3 :" + " " + str.charAt(3));

//Question # 6
// var myName = "Muhammad Usaid";
// var fatherName = "Muhammad Amin";
// var cname = myName + " " + fatherName;
// document.write("Full Name :" + " " + cname + "<br /");

// Question # 7
// var city = "Hyderabad";
// document.write("City :" + " " + city);
// var replacement = city.replace("Hyder" , "Islam");
// document.write("<br />" + "After Replacement" + replacement + "<br /");

// Question # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g , "&");
// document.write(message1);

// Question # 9
// var num1 = "5500";
// console.log("Value :" + " " + num1);
// console.log("Type :" + " " + typeof (num1));
// var num1 = "5500";
// console.log("Value :" + " " + Number(num1));
// console.log("Type :" + " " + typeof Number(num1));
// var num1 = "6000";
// console.log("Value :" + " " + parseInt(num1));
// console.log("Type :" + " " + typeof parseInt(num1));
// var num1 = "6500";
// console.log("Value :" + " " + +num1);
// console.log("Type :" + " " + typeof +(num1));

// Question # 10
// var userInput = prompt("Enter Thing Name");
// console.log("User Input :" + " " + userInput);
// var upperCase = userInput.toUpperCase();
// console.log("Upper Case :" + " " + upperCase);'

// Question # 11
// var course = prompt("Enter Course");
// console.log("User Input :" + " " + course);
// var copy = course.slice(0)
// var titleCase = copy[0].toUpperCase() + copy.slice(1).toLowerCase();
// console.log("Title Case :" + " " + titleCase);

// Question # 12
// var num2 = 35.36;
// console.log("Number :" + " " + num2);
// console.log("Type :" + " " + typeof(num2));
// var convert = num2.toString();
// console.log("Result :" + " " + convert);
// console.log("Type :" + " " + typeof(convert));

// Question # 14
// var bakeryItem = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to ABC bakery.What do you want to order").toLowerCase();
// console.log(userInput);

// var isMatch = false

// for (var i = 0; i < bakeryItem.length; i++) {
//     if (bakeryItem[i] === userInput) {
//         isMatch = true
//         document.write(userInput + " " + "is avaiable at index " + i + " in our bakery <br />")
//         break;
//     }
// }

// if (isMatch === false) {
//     document.write("We are sorry" + " " + userInput + " " +" is not available in our bakery");
// }

// Question # 16
// var university = "University of Karachi";
// console.log(university.split());
// console.log(university[0]);
// console.log(university[1]);
// console.log(university[2]);
// console.log(university[3]);
// console.log(university[4]);
// console.log(university[5]);
// console.log(university[6]);
// console.log(university[7]);
// console.log(university[8]);
// console.log(university[9]);
// console.log(university[10]);
// console.log(university[11]);
// console.log(university[12]);
// console.log(university[13]);
// console.log(university[14]);
// console.log(university[15]);
// console.log(university[16]);
// console.log(university[17]);
// console.log(university[18]);
// console.log(university[19]);
// console.log(university[20]);

// Question # 17
// var input = prompt();
// console.log("User Input : " + input);
// var char = input.charAt(7);
// console.log("Last Character of Input" + " " + char);

// Chapter 26-30

// Question # 1
// var number = 3.45214;
// console.log("Number" + " " + number);
// console.log("Round off value" + " " + Math.round(number));
// console.log("Floor value" + " " + Math.floor(number));
// console.log("Ceil value" + " " + Math.ceil(number));

// Question # 2
// var number1 = -2.673;
// console.log("Number" + " " + number1);
// console.log("Round off value" + " " + Math.round(number1));
// console.log("Floor value" + " " + Math.floor(number1));
// console.log("Ceil value" + " " + Math.ceil(number1));

// Question # 3
// var number2 = -4;
// console.log("The absolute value of" + " " + number2 + " " + "is" + " " + Math.abs(number2));

// Question # 4
// var number3 = Math.random() * 6 + 1;
// console.log("Random dice value is :" + " " + Math.floor(number3));

// Question # 5
// var toss = Math.random();
// var round = Math.round(toss);
// if(round === 0){
//     console.log("Random Coin Value : Tails")
// }
// else{
//     console.log("Random Coin Value : Heads")
// }

// Question # 6
// var number4 = Math.random() * 100 + 1;
// var counting = Math.floor(number4);
// console.log("Random Number Between 1 and 100 : " + " " + counting);

// Question # 7
// var weight = +prompt("Enter your weight in kilograms");
// console.log("The Weight of User is" + " " + parseInt(weight) + " " + "kilograms");
// console.log("The Weight of User is" + " " + Number(weight) + " " + "kilograms");

// Question # 8
// var secret = 5;
// var equal = +prompt("Enter Secret Number");
// if(secret === equal){
//     console.log("Congratulations! you select the correct number")
// }
// else{
//     console.log("Try Again!")
// }

// Chapter 31-34

// Question # 1
// var currentDate = new Date();
// console.log(currentDate);

// Question # 2
// var mon = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date().getMonth();
// console.log("Current Month :" + " " + mon[02]);

// Question # 3
// var day = new Date().toDateString();
// console.log(day.slice(0, 3));

// Question # 4
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// for(var i = 0; i <= days.length; i++){
//     if(days[i] === "Sunday" || days[i] === "Saturday"){
//         console.log("It's Fun day")
//         break;
//     }
// }

// Question # 5
// var fdays = prompt("Enter valid date");
// if(fdays <= 15){
//     console.log("First fifteen days of the month")
// }
// else{
//     console.log("Last days of the month")
// }

// Question # 6
// var current = new Date();
// console.log("Current Date :" + " " + current);
// var milliSeconds = new Date().getTime();
// console.log("Elapsed millisecondssince January 1,1970 :" + " " + milliSeconds);
// var minutes = milliSeconds / (1000 * 60 * 60);
// console.log("Elapsed minutes since January 1,1970 :" + " " + minutes);

// Question # 7
// var time = +prompt("Enter Time");
// console.log(time);
// if(time <= 00 || time <= 11){
//     console.log("Its AM")
// }
// else if(time <= 12 || time <=23){
//     console.log("Its PM")
// }

// Question # 8
// var laterDate = new Date("Dec 31 2020");
// console.log("Later Date:" + " " + laterDate);

// Question # 9
// var time1 = new Date("June 18 2015").getTime();
// var time2 = new Date("March 22 2023").getTime();
// var diff = (time2 - time1) / (1000 * 60 * 60 * 24);
// console.log(diff + " " + "days have passed since 1st Ramadan,2015");

// Question # 10
// var sec1 = new Date("January 01 2015").getTime();
// var sec2 = new Date("March 22 2023").getTime();
// var secTotal = (sec2 - sec1) / (1000 * 60);
// console.log(secTotal + " " + "seconds had passed since beginning of 2015");

// Question # 11
// var hour1 = new Date("Tuesday March 22 2023 00:54:16");
// var hour2 = new Date("Tuesday March 22 2023 01:54:16");
// var totalHour = (hour2 - hour1) / ( 1000 * 60 * 60);
// console.log(totalHour + " " + "hour ago,it was" + " " + hour1);

// Question # 12
// var year1 = new Date("Sat Dec 05 1915 02:01:40").getFullYear();
// var year2 = new Date("March 22 2023").getFullYear();
// var totalYear = (year2 - year1);
// console.log(totalYear + " " + "years back,it was Sat Dec 05 1915 02:01:40");

// Question # 13
// var birth1 = +prompt("Enter Your Birth Year");
// var birth2 = new Date().getFullYear();
// var birthYear = (birth2 - birth1);
// console.log("Your age is" + " " + birthYear);
// console.log("Your birth year is" + " " + birth1);

// Question # 14
// var customer = prompt("Enter Customer Name");
// var currentMonth = prompt("Enter Month");
// var units = +prompt("Enter Units");
// var charges = 28;
// var netAmount = (units * charges);
// var lateCharges = 500;
// var grossAmount = (netAmount + lateCharges);

// console.log("Customer Name :" + " " + customer);
// console.log("Month :" + " " + currentMonth);
// console.log("Number of Units :" + " " + units);
// console.log("Charges per unit :" + " " + charges);
// console.log("Net Amount Payable (within Due Date) :" + " " + netAmount);
// console.log("Late Payment surcharge :" + " " + lateCharges);
// console.log("Gross Amount Payable (after Due Date) :" + " " + grossAmount);