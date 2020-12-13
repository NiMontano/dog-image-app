
function getDogImages() {
    let allTheDogs = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    //const options = {method: 'GET'};
    fetch(allTheDogs)
    .then(response => response.json())
    .then(responseJson => showTheDogs(responseJson));
};


function showTheDogs(responseJson) {
    //i = numberOfDogs;
    arrayOfDogs = responseJson.message;
    console.log(arrayOfDogs);

    /*(arrayOfDogs).map(function(arrayOfDogs) {
        listDogs = '';
        $('.results-img').replaceWith(
            listDogs += `<img src="${arrayOfDogs }">`)
        
        console.log(listDogs)
    })*/
    listDogs = '';
    for (let i = 0; i < arrayOfDogs.length; i++){
        $('.results-img').replaceWith(
            listDogs += `<img src="${arrayOfDogs[i]}" class="results-img">`);
      } 
      console.log(listDogs);

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