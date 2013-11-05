(function($){ 

  var $label;

  $(function(e){
  	$label = $('.breakpoint-label');
  	$( window ).resize(function() {
  		$label.text($(window).width() + "px");
		});
		$label.text($(window).width() + "px");
  });

})(jQuery);