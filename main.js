$(document).ready(function(){

	// alert('Click "NEW ITEM" to items. The sum feature works too.');

	function sumNumbers() {
		var totalSum = 0;
		$("input").each(function(){
			totalSum += parseInt($(this).val());
		})
		return totalSum
	}

	function update() {
    	var counter = $(".item_divs").size();

        $(".item_divs span").each(function( index ) {
        	$(this).text(index + 1);
        });
    };

    $(document).on('click', 'button', function(){
    	var count = $(".item_divs").size() + 1;
    	var itemDiv = $(".item_divs").last().clone();
    	console.log(itemDiv.html());

    	$(".item_divs").last().after(itemDiv);
    	$(".item_divs span").last().text(count);
    });

    $(document).on('click', 'div.x', function(){
        $(this).closest(".item_divs").slideUp('normal', function(){ 
        	$(this).remove();
        	update();
        });
    });


    // $(document).bind("DOMNodeRemoved", function(){
    // 	$("#sum_number").text(sumNumbers());
    // });

    $(document).on('click', document, function(){
    	$("#sum_number").text(sumNumbers());
    });

});
