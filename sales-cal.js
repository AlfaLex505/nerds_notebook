const sales = [
		{item : "laptop", quantity : 2, price : 800},
		{item : "monitor", quantity : 1, price : 150},
		{item : "mouse", quantity : 4, price : 25},
];

function calculateTotalSales(sales){
	let total = 0;
    for (let i = 0; i < sales.length; i++){
    		total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Total sales amount: ", calculateTotalSales(sales));
