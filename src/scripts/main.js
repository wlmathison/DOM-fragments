const fragment = document.createDocumentFragment()

const section1 = document.createElement("section")
section1.className = "message"
section1.textContent = "Dolor anim laborum sit ipsum elit."
fragment.appendChild(section1)

const section2 = document.createElement("section")
section2.className = "message"
section2.textContent = "Nisi laboris laborum quis pariatur laboris nisi anim non amet ea ad."
fragment.appendChild(section2)

const section3 = document.createElement("section")
section3.className = "message"
section3.textContent = "Veniam aute ut aliquip sit consectetur aliqua consectetur culpa ea qui.."
fragment.appendChild(section3)

const section4 = document.createElement("section")
section4.className = "message"
section4.textContent = "Sint sint duis non dolore excepteur."
fragment.appendChild(section4)

const section5 = document.createElement("section")
section5.className = "message"
section5.textContent = "Amet non et non deserunt eiusmod ut."
fragment.appendChild(section5)

document.querySelector("#messages").appendChild(fragment)