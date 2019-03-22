// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var pic_url;
$("#search-button").click(function(){
    
    var input = $("#search-term").val();
        $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + input + "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response){
            var random = Math.floor(Math.random()*response.data.length);
            pic_url = response.data[random].images.original.url;
            
            $(".text-center").html('<img src="' + pic_url + '"/>');
    
        }
    });
});

$(".text-center").click(function(){
   $(".dark").css("display", "block");
  $(".modal").append('<img src="' + pic_url + '"/>');
  $(".modal").css("display", "block");
});

$(".close").click(function(){
    $(".modal").css("display","none");
    $(".dark").css("display","none");
});


//
//