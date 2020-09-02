var container = document.getElementsByClassName("container")[0]

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    createNewNote()
  }
})

function createNewNote(n) {
  var randomPositionTop = Math.ceil(Math.random() * 450)
  var randomPositionLeft = Math.ceil(Math.random() * 450)

  var newDiv = document.createElement("div")
  var randomColor = pickRandomColor()

  newDiv.style.top = randomPositionTop + "px"
  newDiv.style.left = randomPositionLeft + "px"
  newDiv.style.background = randomColor

  newDiv.onclick = function () {
    this.contentEditable = "true"
  }

  newDiv.ondblclick = function () {
    this.remove()
  }

  newDiv.classList.add("newDiv")

  container.appendChild(newDiv)

  var note = document.getElementById("noteArea").value.trim()
  var randomIndex = Math.floor(Math.random() * container.childElementCount)
  var randomNoteArea = container.childNodes[randomIndex]

  randomNoteArea.innerHTML = note

  document.getElementById("noteArea").value = ""

  function pickRandomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "RGB(" + r + "," + g + "," + b + ")"
  }
}
