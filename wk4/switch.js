let favMonth = prompt ("What is your favorite month?");

if (favMonth === null)
    {alert("Aww, you canceled! Now I don't know your favorite month :(")}

else{
favMonth = favMonth.toLowerCase();

    switch(favMonth)
    {
    case "january":
        console.log("fresh new start of the year, time for new resolutions!");
    break;

    case "february":
        console.log ("love is in the air!");
    break;

    case "march":
        console.log("time for the spring and nice weather!");
    break;

    case "april":
        console.log("rainy days bring the may flowers!");
    break;

    case "may":
        console.log("all flowers bloom their best and beautifully!");
    break;

    case "june":
        console.log("time for summer and hot temperatures!");
    break;

    case "july":
        console.log("barbecues, fireworks and fun!");
    break;

    case "august":
        console.log("time to buy school supplies :(");
    break;

    case "september":
        console.log("sweather and cozy weather!");
    break;

    case "october":
        console.log("spoooooooky season!!");
    break;

    case "november":
        console.log("time for thanksgiving and delicious food!");
    break;

    case "december":
        console.log("snow, holidays and end of year!");
    break;

    default:
        confirm("hmm, doesn't seem like a month but thats creative!");
}
}

if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
  console.log("You love the winter months!");

} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
  console.log("You enjoy the summer months!");

} else {
  console.log("Other months are interesting too!");
}
