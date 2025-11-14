// created elements by using createElement
const maindiv = document.createElement("div")
const div1 = document.createElement("div")
const h1ele = document.createElement("h1")
const inputele = document.createElement("input")
const addbutton = document.createElement("button")
const ulele = document.createElement("ul")

// created class attribute and content of div
maindiv.className = "maindiv"
div1.className = "inp-btn"

// created class attribute and content of h1
h1ele.textContent = "TODO APP"
h1ele.className = "heading"

// created class attribute and content of input
inputele.type = "text"
inputele.setAttribute("placeholder", "Enter Your Task")
inputele.className = "inputele"

// created class attribute and content of button
addbutton.textContent = "Add Task"
addbutton.className = "addbtn"

// created class attribute and content of ul & li
ulele.className = "ulele"
ulele.style.listStyleType = "none"

// appended all the child elements to parent div 
// and child element is added to html document

maindiv.appendChild(h1ele)
maindiv.appendChild(div1)
div1.appendChild(inputele)
div1.appendChild(addbutton)
maindiv.appendChild(ulele)
document.body.appendChild(maindiv)


// event listners

addbutton.addEventListener("click", () => {

    const tasktext = inputele.value;

    if (tasktext.trim() === "") {
        alert("Pleace Enter a Task")
        return
    }

    // created li 
    const liele = document.createElement("li")
    liele.className = "listele"

    // create p
    const Taskspan = document.createElement("span")
    Taskspan.className = "task-content"
    Taskspan.textContent = tasktext

    // created button
    const deletebtn = document.createElement("button")
    deletebtn.className = "deletebtn"
    deletebtn.textContent = "Delete"

    // eventlistner delete a task
    deletebtn.addEventListener("click", () => {
        ulele.removeChild(liele)
    })

    // appending elements
    liele.appendChild(Taskspan)
    liele.appendChild(deletebtn)
    ulele.appendChild(liele)

    inputele.value = "";


})
