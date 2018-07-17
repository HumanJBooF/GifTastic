$(function() {
    
    var moviesTvGames = [  'A Clockwork Orange',
                           'American Psycho',
                           'Fargo',
                           'Nier Automata',
                           'Street Fighter',
                           'Metal Gear Solid',
                           'The Legend of Zelda',
                           'Twin Peaks',
                           'Dexter',
                           'Dark Souls'];

    var queryURL =        "https://api.giphy.com/v1/gifs/search?q=" +moviesTvGames[0] + "&api_key=21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg";

   $.ajax({
       url: queryURL,
       Method: "GET"
   }).then(function(response){
       console.log(response)
   })

});