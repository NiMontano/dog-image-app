
function getDogImages() {
    let allTheDogs = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    //const options = {method: 'GET'};
    fetch(allTheDogs)
    .then(response => response.json())
    .then(responseJson => showTheDogs(responseJson));
};


function showTheDogs(responseJson) {
    //i = console.log(numberOfDogs);
    arrayOfDogs = responseJson.message;
    console.log(arrayOfDogs);

    (arrayOfDogs).map(function(arrayOfDogs) {
        $('.results-img').attr("src", arrayOfDogs)
        
        console.log(arrayOfDogs)
    })

    $('.results').removeClass('hidden');
}

function howManyDogs() {
    numberOfDogs = 3;
    getDogImages();
    console.log(numberOfDogs);
    $('form').submit('click', function(event) {
        numberOfDogs = $("input[type='number']").val();
        event.preventDefault();
        console.log(numberOfDogs);
        getDogImages(); 
    });
};

$(function() {
    console.log("page running");
    howManyDogs();
});