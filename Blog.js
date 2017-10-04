$(document).ready(function(){

	var height = $(window).height();

	ajustesIniciales()


	function ajustesIniciales(){
		$("section#body").css({"margin-top": height - 80 + "px"});
	}


	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor_general").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});

		}

	});
	
	
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		
		if(scrollTop > height){
			$("#barra").slideUp(800);
		}
		
	});
	
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		
		if(scrollTop < height){
			$("#barra").slideDown(800);
		}
	});
		
	
	$("section#scrolldown").click(function(){
		$('html, body').animate( { scrollTop : 750 }, 800 );
	});
	
	$("#scrollup").click(function(){
		$('html, body').animate( { scrollTop : 0 }, 800 );
	});
});