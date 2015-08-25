$(document).ready(function(){

	function sumNumbers() {
		var totalSum = 0;
		$("input").each(function(){
			totalSum += parseInt($(this).val());
		})
		return totalSum
	}

    $(document).on('click', "button", function(){
    	var item_div = $(".item_divs").first().clone();
    	$(".item_divs").last().after(item_div);
    	console.log($(".item_divs").last()[0].outerHTML);
    });

    $(document).on('click', "div.x", function(){
        $(this).closest(".item_divs").slideUp("normal", function() { $(this).remove() } );
    });

    $(document).on('click', document, function(){
    	$("#sum_number").text(sumNumbers());
    });

});

// Add functions for onblur and onfocus
// Add function for summing numbers
// Add function for counting off item numbers