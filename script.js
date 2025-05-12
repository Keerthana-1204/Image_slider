// This is the JavaScript file for the image slider
// Function to change the image and name

const playerimages = [
    "rohit_sharma.jpg",
    "shreyas_iyer.jpg", 
    "SuryakumarYadav.jpg", 
    "jasprit_bumrah.jpg",
    "ms_dhoni.jpg", 
    "Rishabh_pant.jpg", 
    "Gill.jpg",
    "virat_kohli.jpg",
    "axar_patel.jpg", 
    "kl_rahul.jpg"
]

const playerNames = [
    "Rohit Sharma",         
    "Shreyas Iyer",
    "Suryakumar Yadav",
    "Jasprit Bumrah",
    "MS Dhoni",
    "Rishabh Pant",
    "Shubman Gill",
    "Virat Kohli",
    "Axar Patel",
    "KL Rahul"
]

// Initialize the current index
let currentIndex = 0;
//select the image and name elements from the HTML using their IDs
const imageElement = document.getElementById("images");
const nameElement = document.getElementById("caption");

//select the next and previous buttons from the HTML using their class names
const nextButton = document.getElementsByClassName("next");     
const prevButton = document.getElementsByClassName("prev");

// Function to change the image and name
function changeImage() {
    // Update the image source and name using the current index
    imageElement.src = playerimages[currentIndex];
    nameElement.innerHTML = playerNames[currentIndex];
}

// Function to go to the next image
function nextImage() {
    // Increment the current index and wrap around if necessary
    currentIndex++;
    // If the current index exceeds the length of the array, reset it to 0
    if (currentIndex >= playerimages.length) {
        currentIndex = 0;
    }
    // Call the changeImage function to update the displayed image and name
    changeImage();
}

// Function to go to the previous image
function prevImage() {
    // Decrement the current index and wrap around if necessary
    currentIndex--;
    // If the current index is less than 0, set it to the last index of the array
    if (currentIndex < 0) {
        currentIndex = playerimages.length - 1;
    }
    // Call the changeImage function to update the displayed image and name
    changeImage();
}

// Event listeners for the buttons
nextButton[0].addEventListener("click", nextImage); 
prevButton[0].addEventListener("click", prevImage);

// Autoplay: change image every 10 seconds
setInterval(nextImage, 10000);