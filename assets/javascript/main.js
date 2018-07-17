$(function() {
    
    var moviesTvGames = [  'A Clockwork Orange',
                           'American Psycho',
                           'Fargo',
                           'Nier Automata',
                           'Street Fighter',
                           'Metal Gear Solid',
                           'The Legend of Zelda',
                           'Dark Souls',
                           'Dexter',
                           'Twin Peaks'];

    var queryURL =        "https://api.giphy.com/v1/gifs/search?q=" +moviesTvGames + "&api_key=21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg";

   $.ajax({
       url: queryURL,
       Method: "GET"
   }).then(function(response){
       console.log(response)
   })


   for(i= 0; i < moviesTvGames.length; i++) {
       var btn = $('<button>')
       btn.addClass('btn').attr('data-name', moviesTvGames[i]).text(moviesTvGames[i]);
       $('.buttons').append(btn)
   }


});