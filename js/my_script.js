﻿var func = function()
{

    $('input:text, input:password').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });

	
		// Tabs
		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.tab-box').find('div.tbox').hide().eq($(this).index()).fadeIn(150);
			return false;
		});
		
		// Check
		$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });
		
		// Radio
		$(".radioclass").click(function(){
			 if($(this).is(":checked")){
            $(".radioselected:not(:checked)").removeClass("radioselected");
            $(this).next("label").addClass("radioselected");
			  }

    });
		
		
	// basket drop
	$(".bas a").click(function(){
		$(".bas-drop").show('fast');
	});
	
	$(".close").click(function(){
		$(this).parents(".bas-drop").hide('fast');
		$(this).parents(".add-drop").hide('fast');
		$('.overlay').fadeOut('fast');
	});
	

	// Select
	var params = {
    changedEl: ".lineForm select"
    }
    cuSel(params);



};

$(func);
