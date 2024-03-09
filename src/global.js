// formating
function format(str, varArr, spChar = '%') {
    let i = 0;
    let temp = "";
    for (let j in str) {
        let c = str[j];
        if (c == spChar) {temp += varArr[i++];}
        else {temp += c;}
    }
    return temp;
}

// request
async function fetchText(file) {
    return await (await fetch(file)).text();
}
async function getUserData() {
    return await fetchText("data/users.json");
}
function getProblemData() {
    return fetchText("data/problems.json");
}

// viewport resize
let resizeTasks = [];
function onResize() {
    
}