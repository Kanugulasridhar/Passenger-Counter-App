
let countone = document.getElementById("countxl")
let saveone = document.getElementById("pre")
console.log(saveone)
console.log(countone)

let count = 0
function incre() {
    count += 1
    countone.textContent = count
}

function save() {
    let countstr = count + " - "
    saveone.textContent += countstr
    countone.textContent = 0
    console.log(count)
}