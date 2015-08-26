$(document).ready(function(){

	alert('Click "NEW ITEM" to items. The sum feature works too.');

	function sumNumbers() {
		var totalSum = 0;
		$("input").each(function(){
			totalSum += parseInt($(this).val());
		})
		return totalSum
	}

    $(document).on('click', 'button', function(){
    	var count = $(".item_divs").size() + 1;
    	var itemDiv = $(".item_divs").last().clone();
    	console.log(itemDiv.html());

    	$(".item_divs").last().after(itemDiv);
    	$(".item_divs span").last().text(count);
    });

    $(document).on('click', 'div.x', function(){
        $(this).closest(".item_divs").slideUp('normal', function() { $(this).remove() } );
    });

    $(document).on('click', document, function(){
    	$("#sum_number").text(sumNumbers());
    	// $("body")[0].click(); not working...
    });

});
