var func = function()
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

	
		
		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
			return false;
		});

		$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });

		$(".radioclass").click(function(){
			 if($(this).is(":checked")){
            $(".radioselected:not(:checked)").removeClass("radioselected");
            $(this).next("label").addClass("radioselected");
			  }

    });

	$(".accordion1 .ac01-title").click(function(){
		$(this).next("div.ac01-drop").slideToggle("slow")
		.siblings("div.ac01-drop:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings(".ac01-title").removeClass("active");
		return false;
	});

	var params = {
    changedEl: ".lineForm select"
    }
    cuSel(params);



};

$(func);
