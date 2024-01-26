function showOverlay(index) {
    setTimeout(() => {
        createOverlay(index);
    }, 150); 
   
}

function closeOverlay() {
    var overlayEmpty = document.getElementById("overlay-empty");

    overlayEmpty.innerHTML = '';
}

function createOverlay(index) {
    console.log(summaryContent);

    var currentName = summaryContent[index].name;
    var currentDescription = summaryContent[index].description;
    var image1 = summaryContent[index].image1;
//    var image2 = summaryContent[index].images.image2;
    var link = summaryContent[index].link;
    var linkText = summaryContent[index].linkText;
    
    var overlayEmpty = document.getElementById("overlay-empty");

    overlayEmpty.innerHTML = `
    <div class="overlay-container">
            <div class="overlay-body">
                <div id="exitButton" onclick="closeOverlay()">
                    <h1>x</h1>
                </div>
                <div class="overlay-flex-container">
                    <div class="overlay-flex-box" id="black-background">
                        <div class="overlay-text">
                            <h1>${currentName}</h1>
                            <p>${currentDescription}</p>
                            <a href="${link}" target="_blank" id="portfolioLink" onmouseenter="handleHover(this)" onmouseleave="handleLeave(this)" style="text-decoration: none;">
                                <div class="link-container">
                                    <h4>${linkText}</h4>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="overlay-flex-box">
                        <div class="overlay-image-container">
                            <img src="${image1}" id="overlay-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `;

}
