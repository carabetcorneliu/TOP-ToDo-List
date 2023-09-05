export const MainContainer = (() => {
    const toDoList = []

    class ToDo {
        constructor(completed, title, description, dueDate, project, priority, notes) {
            this.completed = completed
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.project = project
            this.priority = priority
            this.notes = notes
            toDoList.push(this)
            localStorage.setItem(this.title, JSON.stringify(this))
        }
    }
    
    const firstToDo = new ToDo(false, '1', 'one', '23.08.2023', 'current', 'high',
                                'no notes now')

    const addToDoToTable = (obj) => {
        let tbo = document.querySelector('.mainContainer tbody')

        let tr = document.createElement('tr')
        
        let tdOne = document.createElement('td')
        let tdOneCheck = document.createElement('input')
        tdOneCheck.setAttribute('type', 'checkbox')
        if (obj.completed === true)
            tdOneCheck.checked = true
        tdOne.appendChild(tdOneCheck)

        let tdTwo = document.createElement('td')
        tdTwo.innerHTML = obj.title

        let tdThree = document.createElement('td')
        tdThree.innerHTML = obj.description

        let tdFour = document.createElement('td')
        tdFour.innerHTML = obj.dueDate

        let tdFive = document.createElement('td')
        tdFive.innerHTML = obj.project

        let tdSix = document.createElement('td')
        tdSix.innerHTML = obj.priority

        let tdSeven = document.createElement('td')
        tdSeven.innerHTML = obj.notes

        let tdEight = document.createElement('td')
        tdEight.innerHTML = '<button type="button" class="remove">remove</button>'

        let tdList = [tdOne, tdTwo, tdThree, tdFour, tdFive, tdSix, tdSeven, tdEight]

        for (let item in tdList) 
            tr.appendChild(tdList[item])
        
        tbo.appendChild(tr)
    }

    for(let index in toDoList) {
        addToDoToTable(JSON.parse(localStorage.getItem(toDoList[index].title)))
    }
})

export const AddToDo = ((addPick) => {
    const swapAddOption = (buttonID) => {
        let todo = document.getElementById('todo')
        let project = document.getElementById('project')
                
        if (buttonID === 'todo') {
            todo.checked = true
            project.checked = false
        } else if (buttonID === 'project') { 
            project.checked = true
            todo.checked = false
        }
    }

    const checkBoxes = document.querySelectorAll('.legendContainer > div > input[type="checkbox"]')
    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', () => {
            swapAddOption(checkBox.id)
        })
    })
    
    const showAddWindow = ((buttonID) => {
        let hiddenBox = document.getElementById('hidden')
        hiddenBox.style.visibility = 'visible'
        swapAddOption(buttonID)
    })

    if (addPick === 'addToDo')
        showAddWindow('todo')
    else
        showAddWindow('project')
})

export const RemoveToDo = ((todo) => {
    let row = todo.parentNode.parentNode.rowIndex - 1
    let table = todo.parentNode.parentNode.parentNode
    let title = todo.parentNode.parentNode.cells[1].innerHTML

    table.deleteRow(row)
    localStorage.removeItem(title)
})