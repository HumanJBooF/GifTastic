$(function () {

    var topics = ['A Clockwork Orange',
        'American Psycho',
        'Fargo',
        'Nier Automata',
        'Street Fighter',
        'Metal Gear Solid',
        'The Legend of Zelda',
        'Dark Souls',
        'Dexter',
        'Twin Peaks'];



    //function to loop the topics array and create a button for each one
    function createButtons() {

        $('.buttons').empty();

        for (i = 0; i < topics.length; i++) {
            var btn = $('<button>')
            btn.attr('class', 'btn animated fadeInDownBig') //add class to buttons
                .attr('data-name', topics[i]) //sets the data-name to string in array
                .text(topics[i]); //and text of button to string in array
            $('.buttons').append(btn) //placing the buttons .buttons divs
        }
    }
    //sets up ajax call and loops through response
    function displayImg() {

        console.log('THIS IS ' + $(this).attr('data-name'))
        var all = $(this).attr('data-name') //takes the data-name and uses it in url
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + all + "&limit=10&api_key=21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg";
        $('.info').empty() //empty the previous gifs
        $.ajax({ //hey ajax!
            url: queryURL,
            Method: "GET"
        }).then(function (response) {
            console.log(response.data)
            //loop loop loooooop
            for (var i = 0; i < response.data.length; i++) {

                var rating = response.data[i].rating //Putting the rating in a var
                var title = response.data[i].title  //Title also

                var $div = $('<div>') //creating a div
                var $image = $('<img>').addClass('images') //creating image tag with class of images
                var $p = $('<p class="rating">Rating: ' + rating + '<br>' + 'Title: ' + title + '<br>' + '</p>') //adding the rating and title in a p tag

                $div.addClass('gifs animated jackInTheBox') //adding class name
                $div.append($image, $p) //appending the images along with the p tag to an empty div
                $image.attr('src', response.data[i].images.fixed_height_still.url) //setting up a the still and animate image attr, still will be defualt
                    .attr('data-still', response.data[i].images.fixed_height_still.url)
                    .attr('data-animate', response.data[i].images.fixed_height.url)
                $('.info').append($div) //append the divs with the image and p tag to the .info div
            }
        })
    }
    //function to switch between still gif and animated gif
    function stillAnimate() {
        var src = $(this).attr('src') //creating a variable
        console.log(src + 'hello')
        switch (src) {
            case $(this).attr('data-still'): //if the source is data-still, switch to data-animate
                $(this).attr('src', $(this).attr('data-animate'))
                console.log('first case')
                break;
            case $(this).attr('data-animate'):  //of the source is data-animate, switch to data-still
                $(this).attr('src', $(this).attr('data-still'))
                console.log('second case')
                break;
            default:
                break;
        }
    }

    //click event for submit form
    $('.submit').on('click', function () {
        var input = $('.user-input').val().trim() //store what was written in form to variable
        form.reset() //empty the submit form

        topics.push(input); //add input to topics array

        createButtons(); //create a new button

        return false
    })

    createButtons(); //calling function to have buttons on start
    //when you click on btn class dipslayImg function called
    $(document).on('click', '.btn', displayImg)
    //when you click on images class stillAnimate function called
    $(document).on('click', '.images', stillAnimate)
});