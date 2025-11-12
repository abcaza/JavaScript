let keepAdding = true;
    let itemName;
    let itemPrice;
    let total = 0;


    do {
      itemName = prompt("Enter item name (or 'done' to finish):");


      if (itemName === null || itemName.toLowerCase() === "done") {
        keepAdding = false; 
        
        itemPrice = prompt("Enter the price for " + itemName + ":");

        
        itemPrice = Number(itemPrice);

       
        if (itemName(itemPrice) && itemPrice > 0) {
          total = total + itemPrice;
          console.log(itemName + " added for $" + itemPrice.toFixed(2));
        } else {
          console.log("Invalid price entered for " + itemName);
        }
      }
    } while (keepAdding);

   
    if (total > 100) {
      let discount = total * 0.2;
      total = total - discount;
      console.log("You received a 20% discount of $" + discount.toFixed(2));
    } else {
      console.log("No discount applied.");
    }
    console.log("Final total: $" + total.toFixed(2));
