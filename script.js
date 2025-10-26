const resultsParagraph = document.querySelector("#results p");

let final = [];
function orderNames(input) {
    // Ignore empty input
    if (!input) return;

    // Adding the name in the printed array
    final.push(input);
    final.sort();

    resultsParagraph.innerHTML = final.join("<br>");
}





// To submit without pressing the add button: click on enter!
var entering = document.querySelector("#input-text");
entering.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#submit").click();
        entering.value = '';
    }
})

var button_click = document.querySelector("#submit");
button_click.click(function(){
    entering.value = '';
})