function handleMenuClick(index) {
        setTimeout(() => {
            showItem(index);
    }, 150); 
}

var currPage = 'SYMPTOMATIC';
// global index variable
var currIndex = 0;
// RECORD LENGTH OF ARRAY
var arrayLength = 6;

var slideNumber = document.getElementById("slideNumber");

function showNextItem() {
    // if we've reached the end of the array, go to the beginning
    if (currIndex == arrayLength - 1) {
        currIndex = 0; 
        slideNumber.innerText = currIndex + 1 + '/6';
        showItem(0);
        console.log("penultimate slide");
    }
    // if (currIndex == 0) {
    //     showItem(1);   
    //     slideNumber.innerText = 2 + '/6';
    // }
    // otherwise go to the next item
    else {
        showItem(currIndex + 1);
        slideNumber.innerText = currIndex + 1 + '/6';
    }
}

function showPrevItem() {
    
    // if we've reached the BEGINNING of the array, go to the END
    if (currIndex == 0) {
        currIndex = arrayLength-1; 
        slideNumber.innerText = currIndex + 1 + '/6';
        showItem(arrayLength-1);
    }
    // otherwise go to the next item
    else {
        slideNumber.innerText = currIndex + '/6';
        showItem(currIndex - 1);
    }
}

function showItem(index) {
    // SET NEW INDEX
    currIndex = index;
    console.log("Current Index: " + currIndex);

    // RETRIEVE ELEMENTS FROM PORTFOLIO PAGE
    var heroImage = document.getElementById("heroImage");
    var textDescription = document.getElementById("textDescription");
    var link = document.getElementById("link");
    var linkText = document.getElementById("linkText");
    
    var iconLogo = document.getElementById("iconLogo");
    var iconCaption = document.getElementById("iconCaption");

    // RESET CLASS NAME FOR CONTENT COLUMN
    var contentColumn = document.querySelector(".content-column");


    // Toggle the 'slide-in' class for the animation
    contentColumn.classList.toggle("slideIn");
    iconLogo.classList.toggle("slideIn");


    setTimeout(function() {
        // Toggle the 'slide-in' class for the animation after the delay
        contentColumn.classList.toggle("slideIn");
        iconLogo.classList.toggle("slideIn");
    }, 200); 
    setTimeout(function() {

        //RETRIEVE PREVPAGE BEFORE CHANGING CURRPAGE VARIABLE
        prevPage = currPage;

        //SAVE CURRPAGE STATE IN VARIABLE
        currPage = summaryContent[index].name; //title attribute in JSON should be the same as the id of the text you clicked on
        console.log(currPage);

        //RETRIEVE PREVPAGE AND CURRPAGE OBJECTS
        prevMenuItem = document.getElementById(prevPage);
        currMenuItem = document.getElementById(currPage);

        //CHANGE CLASSES
        prevMenuItem.className = "";
        currMenuItem.className = "currPage";

        // REPLACE WITH NEW CONTENT
        heroImage.src = summaryContent[index].image1; 

        textDescription.innerHTML = summaryContent[index].description; 
        link.href = summaryContent[index].link; 
        linkText.innerHTML = summaryContent[index].linkText;

        iconLogo.src = summaryContent[index].image2;
        iconCaption.innerHTML = summaryContent[index].name;
    }, 100); 
}

// handleMenuClick();