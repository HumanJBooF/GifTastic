$(function() {
    
    var topics = [  'A Clockwork Orange',
                           'American Psycho',
                           'Fargo',
                           'Nier Automata',
                           'Street Fighter',
                           'Metal Gear Solid',
                           'The Legend of Zelda',
                           'Dark Souls',
                           'Dexter',
                           'Twin Peaks'];
    

    function createButtons() {
        for (i = 0; i < topics.length; i++) {
            var btn = $('<button>')
            btn.addClass('btn animated fadeInDownBig').attr('data-name', topics[i]).text(topics[i]);
            $('.buttons').append(btn)
        }
    }
    createButtons();
    $('.btn').on('click', function () {


        var all = $(this).attr('data-name')
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + all + "&limit=10&api_key=21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg";

        $.ajax({
            url: queryURL,
            Method: "GET"
        }).then(function (response) {
            console.log(response.data)
            
            for (var i = 0; i < response.data.length; i++) {

                var $div = $('<div>')
                var $image = $('<img>').addClass('images')
                var $p = $('<p>Rating: ' + response.data[i].rating + '</p>')
                $div.addClass('gifs')
                $div.append($image, $p)
                $image.attr('src', response.data[i].images.original_still.url)
                    .attr('still', response.data[i].images.original_still.url)
                    .attr('animate', response.data[i].images.original.url)
                $('.info').append($div)
            }
        })
    })

    $(document).on('click', '.images', function () {
        var src = $(this).attr('src')
        console.log(src + 'hello')
        switch (src) {
            case $(this).attr('animate'):
                $(this).attr('src', $(this).attr('still'))
                console.log('first case')
                break;
            case $(this).attr('still'):
                $(this).attr('src', $(this).attr('animate'))
                console.log('second case')
                break;
            default:
                break;
        }
    })
});