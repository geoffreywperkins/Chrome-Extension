function main() {
	// Matching all $##.## prices now
	var regex = new RegExp("[$£][0-9]+\.[0-9][0-9]");

	var prices = $("*").filter(function() 
	{
	    return regex.test($(this).text()); 
	});

	prices.each(change_price);
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function change_price(index) {
	text = $( this ).text();
	if (text.length > 20) {
		return;
	}
	console.log(text);
	price = text.slice(text.indexOf("$")+1);

	conversion_to_tp = getTPPrice(text[0]);
	price_in_tp = (parseFloat(price) * 
				   conversion_to_tp).toFixed(2);

	$(this).text("TP " + price_in_tp);

}


function getTPPrice(units) {
	return 1.07865168539	// Rolls of TP per dollar
}


main();
sleep(2000).then(() => {
  main();
})

