function handleMenuClick(index) {
        setTimeout(() => {
            showItem(index);
    }, 150); 
}

var currPage = 'SYMPTOMATIC';

function showItem(index) {
    // RETRIEVE ELEMENTS FROM PORTFOLIO PAGE
    var heroImage = document.getElementById("heroImage");
    var textDescription = document.getElementById("textDescription");
    var link = document.getElementById("link");
    var linkText = document.getElementById("linkText");
    
    var iconLogo = document.getElementById("iconLogo");
    var iconCaption = document.getElementById("iconCaption");

    // GET DATA FROM JSON FILE USING INDEX
    //console.log(summaryContent);

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