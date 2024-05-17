// A string is a sequence of one or more characters that may consist of letters, numbers, or symbols

const hotelSeat = "1FR";

console.log(hotelSeat[0]);
console.log(hotelSeat[1]);
console.log(hotelSeat[2]);

//Length Property

console.log(hotelSeat.length);


// Find Index 
console.log(hotelSeat.indexOf('F'));
console.log(hotelSeat.lastIndexOf('R'));

// Slice Method 

console.log(hotelSeat.slice(0,-1));

// start With
console.log(hotelSeat.startsWith('1'));
 // Ends With

 console.log(hotelSeat.endsWith('R'));

 // charAt 

 console.log(hotelSeat.charAt(1));

 // To upper case 

 console.log(hotelSeat.toLocaleUpperCase());

 // to lower Case

 console.log(hotelSeat.toLocaleLowerCase());

 //Replace with

 console.log(hotelSeat.replace('F',"E"));

 // to remove all spaces 

 console.log(hotelSeat.trim());




//function to check weather a seat is front middle or corner

const seat= function(seatData)
{
 const s= seatData.slice(-1);
 switch(s)
 {
  case 'F':
   console.log('You Got Front Seat In Row 1');
   break;
  case 'M':
   console.log('You Got Middle Seat In Row 1');
   break;
  case 'C':
   console.log('You Got Corner Seat In Row 1');
   break;
   default:
    console.log("You Enter Wrong Words")
 }

}
seat('R1F');
seat('R1M');
seat('R1C');


// String Coading Exercise 

const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


 const getCode=str => str.slice(0,3).toLocaleUpperCase();
for (const flight of flights.split("+")){
 const [type, from , to , time]=flight.split(";");

 const output =  ` ${type.startsWith("_Delayed" ) ? '🤕' :' '}${type.replaceAll("_"," ")} ${getCode(from)} ${getCode(to)} ${time.replace(":","h")}`;

console.log(output);
}


// Credit card String

const Careditcard= function(number){
 const str=number+'';
 const last=str.slice(-4);
 return last.padStart(str.length, " *");
}
const credt=Careditcard(234567834567);
console.log(credt);
console.log(Careditcard(234567898765456789));