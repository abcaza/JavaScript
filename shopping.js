let total = prompt("What is your shopping total?");
let confirmed = confirm("Youre total is $" + total +". Click OK to continue.");


if (confirmed) 
{if (total >= 100) 
        {alert("20% off");} 
else if (total >= 50) 
        {alert("10% off");} 
else {alert("No discount.");}}