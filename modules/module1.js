
//! var-01 Objective: Convert and display a total number of seconds in standard digital clock format (HH:MM:SS)
//? Slabs / Rules: If hours, minutes, or seconds are single digits, they must be padded with a leading zero (e.g., 5 becomes '05').
//? Logical Hint: Use division to find hours, and the remainder operator (%) to isolate remaining minutes and seconds. Use .padStart()
//? Expected Case Scenario:
//? Input: 3665 → Output: '01:01:05'

//* tried myself
// function padstart(tsec) 
// {
//  let hour = tsec /3600;
//   rem = tsec % 3600;
//  min = rem / 60;
//  sec = rem % 60;
//  console.log(hour,":",min,":",sec);
// }
// padstart(3665);

/*
Method	          Example (10 / 3)	        Result
Math.floor()      Round down	            3
Math.ceil()	      Round up	                4
Math.round()	  Nearest integer         	3
Math.trunc()	  Remove decimal	        3
console.log(Math.round(5/2)); //3
*/

/*
padStart() is a string method in JavaScript that adds characters to the beginning (left side) of a string until it reaches a specified length.
    Syntax:
    string.padStart(targetLength, padString)
        targetLength → Total length you want the string to be.
        padString → Character(s) to add at the beginning.

*/

function convert(tsec) 
{
 let hour =Math.trunc(tsec /3600);
 let rem = tsec % 3600;
 let min = Math.trunc(rem / 60);
 let sec = rem % 60;
 console.log(String(hour).padStart(2,"0") + ":" + // note String and padStart letter s is capital
 String(min).padStart(2,"0") + ":" + 
 String(sec).padStart(2,"0")
);
}
convert(3665);



//! var-02 Objective: Calculate a customer's total electricity bill based on an tiered unit consumption slab.
//? Slabs / Rules: Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit. Above 200 units: $5.00/unit.
//? Logical Hint: Do not charge the maximum tier rate for all units. Process the computation progressively slab-by-slab.
//? Expected Case Scenario:
//? Input: 250 units → Calculation: (100 * 1) + (100 * 2) + (50 * 5) → Output: $550

function bill(unit) 
{
    if (unit <= 100)
    {
        total = unit *100;
    } else if(unit 101 >== 200)
    {

    }
let rem = 
   const total = (100*1 + 100*2 + rem*5);
   console.log(total);
}
bill(250);


//! var-03 Objective: Split a total amount evenly among N friends and display the individual share along with the remaining leftover change.
//? Slabs / Rules: Individual shares must be flat integers (no cents). Leftover remainder change must be calculated and stored as a standalone value.
//? Logical Hint: Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to capture the exact remainder.
//? Expected Case Scenario:
//? Input: Total = $100, Friends = 3 → Output: Each pays $33, Remainder = $1



//! var-04 Objective: Calculate a person's exact current age dynamically given their complete Date of Birth (DOB) string.
// Slabs / Rules: Your logic must accurately account for whether the individual's birthday has already happened or has yet to happen in the current calendar year.
// Logical Hint: Instantiating 'new Date()' gives you access to the modern system calendar. Compare years, then adjust based on months and days.


//! var-05 Objective: Compute the final total checkout amount given the base price of an item and its active discount percentage.
//? Slabs / Rules: The final output must be rounded to exactly two decimal places representing financial currency cents.
//? Logical Hint: Calculate the discount fraction via (price * discount / 100). Use the primitive number utility .toFixed(2) to secure precision.

//! var-06 Objective: Calculate an employee's total weekly payroll salary including overtime rules based on hours worked and baseline hourly pay.
//? Slabs / Rules: Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are overtime, compensated at 1.5 times the standard rate.
//? Logical Hint: Use an if-else structural check. Isolate regular hours from overtime hours before multiplying by their respective rates.


//! var-07 Objective: Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months, and remaining Days.
//? Slabs / Rules: Assume fixed standard chronological baselines: exactly 365 days = 1 year, and exactly 30 days = 1 month.
//? Logical Hint: Perform successive division and remainder operations. Strip years first, then compute months from the remainder, then remaining days.


//! var-08 Objective: Given a strict 5-digit integer, compute the sum of all its constituent digits without string conversion.
// Slabs / Rules: Do not cast, convert, or interpolate the integer into a string or array type. Solve this purely using mathematical algorithms.
// Logical Hint: Continually extract the last trailing digit using modulo (% 10), add it to your tally, and truncate the integer downwards using Math.floor().


//! var-09 Objective: Take a 4-digit number and return its mathematical reverse without utilizing string serialization wrappers.
// Slabs / Rules: Do not convert the number into a string, array, or use reverse utilities. Use basic mathematical operators only.
// Logical Hint: Isolate digits sequentially using division and remainders, then recompile them by shifting place values (multiply by 10 dynamically).


//! var-10 Objective: Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan. 
// Slabs / Rules: Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]. P = Principal, r = Monthly interest rate (Annual Rate / 12 / 100), n = tenure in months.
// Logical Hint: Utilize Math.pow() to perform exponential powers cleanly. Ensure financial outputs round smoothly to 2 decimal units.









































