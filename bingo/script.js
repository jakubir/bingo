const dragObjects = document.querySelectorAll("div.drag-object")
const dropZones = document.querySelectorAll("div.drop-zone")
const midField = document.querySelector("div.mid-field")
const title = "Moje"

midField.innerHTML = title + " Bingo"
for (const dragObject of dragObjects) {
    dragObject.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
        e.target.parentNode.classList.remove("occupied")
    })
}
for (const dropZone of dropZones) {
    dropZone.addEventListener("dragover", (e) => {
        if (!e.target.classList.contains("occupied") && !e.target.classList.contains("drag-object"))
            e.preventDefault()
    })
    dropZone.addEventListener("drop", (e) => {
        e.preventDefault()
        e.target.appendChild(document.querySelector("#" + e.dataTransfer.getData("text")))
        if (!e.target.classList.contains("list"))
            e.target.classList.add("occupied")
    })
}