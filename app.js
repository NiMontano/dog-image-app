
function getDogImages() {
    let allTheDogs = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    //const options = {method: 'GET'};
    fetch(allTheDogs)
    .then(response => response.json())
    .then(responseJson => showTheDogs(responseJson));
};


function showTheDogs(responseJson) {
    $('.results-img').empty();
    arrayOfDogs = responseJson.message;
    listDogs = '';
    for (let i = 0; i < arrayOfDogs.length; i++){
        console.log(i);
        listDogs += `<img src="${arrayOfDogs[i]}" class="results-img">`;
        } 
        $('.results-img').append(listDogs);
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