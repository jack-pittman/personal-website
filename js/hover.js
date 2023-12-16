function handleHover(index) {
    console.log("hovered");

    var elementId = "portfolioTitle" + index;

    var title = document.getElementById(elementId);

    timeoutId = setTimeout(function() {
        // title.innerHTML = "^ see details ^";
        title.style.fontSize = "30px";
    }, 0); // 200 milliseconds (0.2 seconds)

}

function handleOut(index) {

    const names = ["Callbird", "TutorKai", "Myriad", "Music", "Zerofox", "More"];

    var elementId = "portfolioTitle" + index;

    var title = document.getElementById(elementId);

    timeoutId = setTimeout(function() {
        // title.innerHTML = names[index];
        title.style.fontSize = "30px";
    }, 0); // 200 milliseconds (0.2 seconds)
}
