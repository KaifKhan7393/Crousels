const reviews = [{
        id: 1,
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Mark Lukas",
        deg: "UI/UX Developer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas vel culpa, ipsam, ut quisquam neque soluta quaerat est, laboriosam excepturi vero perspiciatis."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Sam",
        deg: "Web Developer",
        text: "And Eurypylus, son of Euaemon, killed Hypsenor, the son of noble Dolopion, who had been made priest of the river Scamander, and was honoured among.."
    },
    {
        id: 3,
        img: "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg",
        name: "Matthew Mark",
        deg: "Block Chain Developer",
        text: "Eurypylus gave him chase as he was flying before him, smote him with his sword upon the arm, and lopped his strong hand from off it. The bloody hand fell."
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
        name: "Nelson ",
        deg: "Web Scrapper",
        text: " Thus furiously did the battle rage between them. As for the son of Tydeus, you could not say whether he was more among the Achaeans or the Trojans."
    }
];

const images = document.querySelector("img");//images tag
const nameHead = document.querySelector(".name-Heading");//heading h3
const degisgnation = document.querySelector(".post");//heading h4
const about = document.querySelector(".about-para");//paragraph p

const prevButton = document.querySelector(".prev-btn");//previous button
const nextButton = document.querySelector(".next-btn");//next button

var currentNum = 0;


//Add event lister when page is reloaded it should return default content on the card.(not mandatory to write this eventListener, it automatically returns the default content if the page is reloaded)
window.addEventListener("DOMContentLoaded", function () {
    locationAdd();
});


//Adding event listeners on nextButton
nextButton.addEventListener("click", function () {
    currentNum++;
    if (currentNum > reviews.length - 1) {
        currentNum = 0;
    }
    locationAdd();
})

//Adding event listeners on previous button
prevButton.addEventListener("click", function () {
    currentNum--;
    if (currentNum < 0 ) {
        currentNum = reviews.length - 1;
    }
    locationAdd();
})

//Defining function for changing the content
function locationAdd() {
    const num = reviews[currentNum];
    images.src = num.img;//changes the source of image
    nameHead.textContent = num.name;//changes the tet of heading h3
    degisgnation.textContent = num.deg;//changes the text of h4 heading
    about.textContent = num.text;//changes the text of about paragraph
}