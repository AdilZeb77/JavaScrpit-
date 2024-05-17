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




