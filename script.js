$(document).ready(function() {
		$('#bt1').click(function(){	
			$('#competences').slideDown(1000);
			$('#code').slideUp(1000);	
		});
		$('#bt2').click(function(){	
			$('#code').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		$('#bt3').click(function(){	
			$('#competences').slideDown(1000);
			$('#graphisme').slideUp(1000);	
		});
		$('#bt4').click(function(){	
			$('#graphisme').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		$('#bt5').click(function(){	
			$('#competences').slideDown(1000);
			$('#photo').slideUp(1000);	
		});
		$('#bt6').click(function(){	
			$('#photo').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		$('#bt7').click(function(){	
			$('#competences').slideDown(1000);
			$('#guitare').slideUp(1000);	
		});
		$('#bt8').click(function(){	
			$('#guitare').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		$('#bt9').click(function(){	
			$('#competences').slideDown(1000);
			$('#lect').slideUp(1000);	
		});
		$('#bt10').click(function(){	
			$('#lect').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		$('#bt11').click(function(){	
			$('#competences').slideDown(1000);
			$('#langues').slideUp(1000);	
		});
		$('#bt12').click(function(){	
			$('#langues').slideDown(1000);	
			$('#competences').slideUp(1000);
		});
		
});

  $(document).on("click", "a[href*=#]:not([href=#])", function(event){
	  var hash = this.hash;
	  var $target = $(hash);
		
     if($target.length){
		  $("html,body").stop().animate({
			  scrollTop: $target.offset().top
		  }, 1000, function(){
			  if(history.pushState) {
			    history.pushState(null, null, hash);
			  }
		  });
				        
	    event.preventDefault();
	}
});
