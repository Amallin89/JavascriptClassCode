console.log("Hello WOrld!");

function handleTypeText() {
    let tbEl = document.getElementById("tbEl");
    let pEl = document.getElementById("pEl");
    let text = tbEl.value;
    pEl.innerText = text;

}