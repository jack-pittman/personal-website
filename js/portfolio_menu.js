function handleMenuClick(index) {
        setTimeout(() => {
            showItem(index);
    }, 150); 
}

var currPage = 'SYMPTOMATIC';
// global index variable
var currIndex = 0;
// RECORD LENGTH OF ARRAY
var arrayLength = 4;

function showNextItem() {
    // if we've reached the end of the array, go to the beginning
    if (currIndex == arrayLength - 1) {
        currIndex = 0; 
        showItem(0);
    }
    // otherwise go to the next item
    else {
        showItem(currIndex + 1);
    }
}

function showPrevItem() {
    // if we've reached the BEGINNING of the array, go to the END
    if (currIndex == 0) {
        currIndex = arrayLength-1; 
        showItem(arrayLength-1);
    }
    // otherwise go to the next item
    else {
        showItem(currIndex - 1);
    }
}

function showItem(index) {
    // SET NEW INDEX
    currIndex = index;
    console.log(currIndex);

    // RETRIEVE ELEMENTS FROM PORTFOLIO PAGE
    var heroImage = document.getElementById("heroImage");
    var textDescription = document.getElementById("textDescription");
    var link = document.getElementById("link");
    var linkText = document.getElementById("linkText");
    
    var iconLogo = document.getElementById("iconLogo");
    var iconCaption = document.getElementById("iconCaption");

    // GET DATA FROM JSON FILE USING INDEX
    //console.log(summaryContent);

    // RESET CLASS NAME FOR CONTENT COLUMN
    var contentColumn = document.querySelector(".content-column");

    if (contentColumn) {
        // Remove the class name
        contentColumn.classList.remove("content-column");

        // Add the class name back
        contentColumn.classList.add("content-column");
    }

    //RESET CLASSNAME FOR CONTENT COLUMN

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

}

// handleMenuClick();