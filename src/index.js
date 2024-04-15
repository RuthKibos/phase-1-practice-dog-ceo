document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    // Challenge 1
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.message;
            const dogImageContainer = document.getElementById("dog-image-container");
            images.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                dogImageContainer.appendChild(imgElement);
            });
        });

    // Challenge 2
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const dogBreedsList = document.getElementById("dog-breeds");
            breeds.forEach(breed => {
                const liElement = document.createElement("li");
                liElement.textContent = breed;
                dogBreedsList.appendChild(liElement);
            });
        });

    // Challenge 3
    document.getElementById("dog-breeds").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color as per your choice
        }
    });

    // Challenge 4
    document.getElementById("breed-dropdown").addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const breedList = document.getElementById("dog-breeds").getElementsByTagName("li");
        Array.from(breedList).forEach(breed => {
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = "block";
            } else {
                breed.style.display = "none";
            }
        });
    });
});