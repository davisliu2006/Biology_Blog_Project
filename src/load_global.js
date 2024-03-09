async function loadGlobal() {
    let response = await fetch("global.html");
    let text = await response.text();
    document.getElementById("global").innerHTML = text;
}
loadGlobal();