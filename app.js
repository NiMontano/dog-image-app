
function getDogImages() {
    
    let allTheDogs = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    //const options = {method: 'GET'};
    fetch(allTheDogs)
    .then(response => response.json())
    .then(responseJson => showTheDogs(responseJson));
};


function showTheDogs(responseJson) {
    $('.results-img').empty();
    console.log(responseJson);
    arrayOfDogs = responseJson.message;
    listDogs = '';
    for (let i = 0; i < arrayOfDogs.length; i++){
        listDogs += `<img src="${arrayOfDogs[i]}" class="results-img">`;
        } 
        console.log(listDogs);
        $('.results-img').append(listDogs);
}

function howManyDogs() {
    numberOfDogs = 3;
    getDogImages();
    $('form').submit('click', function(event) {
        numberOfDogs = $("input[type='number']").val();
        event.preventDefault();
       
        getDogImages(); 
    });
};

$(function() {
    howManyDogs();
});
