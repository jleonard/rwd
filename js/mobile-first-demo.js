(function($){ 
  var $mobile;
  var $tablet;
  var $desktop;

  var colors = ["#222","#444","#666","#888"];
  var colorIndex = 0;

  $(function(e){
  	$mobile = $('mobile');
  	$tablet = $('tablet'); 
  	$desktop = $('desktop');

  	$mobile.on('click',function(e){
      colorIndex = colorIndex < colors.length -1 ? ++colorIndex : 0;
      console.log(colorIndex);
  		$(this).css("background-color",colors[colorIndex]);
  		if(!$tablet.attr('set')){
  			$tablet.css("background-color",colors[colorIndex]);
  		}
  		if(!$desktop.attr('set') && !$desktop.attr('tablet-set')){
  			$desktop.css("background-color",colors[colorIndex]);
  		}
  	});

  	$tablet.on('click',function(e){
      colorIndex = colorIndex < colors.length -1 ? ++colorIndex : 0;
      $(this).css("background-color",colors[colorIndex]);
      $(this).attr('set',1);
      if(!$desktop.attr('set')){
        $desktop.attr('tablet-set',1);
        $desktop.css("background-color",colors[colorIndex]);
      }
  	});

  	$desktop.on('click',function(e){
      colorIndex = colorIndex < colors.length -1 ? ++colorIndex : 0;
      $(this).css("background-color",colors[colorIndex]);
      $(this).attr('set',1);
  	});


  });

})(jQuery);	