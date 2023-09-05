import "./style.css"
import { MainContainer as content } from './mainContainer.js'
import { AddToDo as add } from './mainContainer.js'
import { RemoveToDo as remove } from "./mainContainer.js"

content()

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'closeBox')
            document.getElementById('hidden').style.visibility = 'hidden'
        else if (button.className === 'remove')
            remove(button)
        else
            add(button.id)
    })
});