$(document).ready(function(e){

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
    fieldType=concept;
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
  $("#search_button").click(function(){
    var query = $("#search_query").val()
    var filterType = $('.input-group #search_param').val()

  });
});
