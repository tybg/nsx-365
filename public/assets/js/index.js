
(function($) {

	var app = {
		init: function() {

  				
		},
		doSomething: function() {
            apiPageUrl = '/doSomething/';

            $.ajax({
                type: 'GET',
                url : apiPageUrl,
                dataType: 'json',
                success: function(data) {
	                riotDetails.setSomeValues(data);
	                // console.log(data);
	            }   
            });  
		},
		setSomeValues: function(data) {
			$("div.champion-name").each(function() {
				var $championDiv = $(this),
				championId = $championDiv.attr('data-champion-id'); 

				$.each(data.data, function() {

	                var dataChampionName  	= this.name,
	                	dataChampionID	 	= this.id,
	                	dataChampionTitle	= this.title;

	                if (championId == dataChampionID) {
	                	$championDiv.append(dataChampionName+ ', "' +dataChampionTitle+ '"');
	                }
	            });

			});

		}

	};
	//init app
	app.init();

})(jQuery);