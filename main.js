$(document).ready(function(){
	var item_div = '<div class="item_divs">'+
						'<div class="item_number_div">'+
							'<h3 class="item_number">Item <span class="count">1</span></h3>'+
						'</div>'+
						'<div class="item_input_container">'+
							'<div class="item_close_x">'+
								'<div class="x"></div>'+
							'</div>'+
							'<div class="item_input">'+
								'<input type="text" name="number_n" value="0"'+
							'</div>'+
						'</div>'+
					'</div>';


    $("button").click(function(){
    	$(".item_divs").last().after(item_div);
    });

    $(document).on('click', "div.x", function(){
        $(this).closest(".item_divs").slideUp("normal", function() { $(this).remove() } );
    });

});

// Add functions for onblur and onfocus
// Add function for summing numbers
// Add function for counting off item numbers