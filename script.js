var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;

// FETCHING LIST OF DOGS AND DISPLAY IN DROPDOWN ;


// $.get("https://dog.ceo/api/breeds/list/all", function (data) {
//     let dogBreeds = data.message;
//     for (let breed in dogBreeds) {
//         dropdown.append('<option value="' + breed + '">' + breed + '</option>');
//     }
// });

$.ajax({
    url: 'https://dog.ceo/api/breeds/list/all',
    method: 'GET',
    success: (data) => {
        let dogBreeds = data.message;
        for (let breed in dogBreeds) {
            dropdown.append('<option value="' + breed + '">' + breed + '</option');
        }
    }
})
// detect change in dropdown;
dropdown.change(function () {
    allowSubmit = true;  // allowing the change in dropdown;
});

// adding function when someone click GET-IMAGE button 
$("form button").click(function (e) {
    e.preventDefault(); // prevent the default function of button

    if (allowSubmit) {  // if the option is valid then execute
        breed = dropdown.val();   //dropdown value is inserted inside Breed
        displayDog(breed);
        // allowSubmit = true;
    }

});


// adding function in next button 
$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

// after pressing next button
function displayDog(breed) {
    //url for random dog of same breed
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove(); //removing img tag;

    $.get(url, function (data) { // 
        let imageUrl = data.message; // storing url of random dog

        //adding img tag  in BREED-IMAGE container
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}