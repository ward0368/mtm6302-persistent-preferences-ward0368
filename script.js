document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('theme')
    const listStyleSelect = document.getElementById('listStyle')
    const myList = document.getElementById('myList')
 
 
    const savedTheme = localStorage.getItem('theme') || 'theme1'
    const savedListStyle = localStorage.getItem('listStyle') || 'style1'
 
 
    themeSelect.value = savedTheme
    listStyleSelect.value = savedListStyle
    document.body.className = savedTheme
 
 
    const savedListItems = JSON.parse(localStorage.getItem('listItems')) || ['Square', 'Circle', 'Triangle', 'Rectangle', 'Line']
 
 
    savedListItems.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        myList.appendChild(li)
    })
 
 
    themeSelect.addEventListener('change', function() {
        document.body.className = themeSelect.value
        localStorage.setItem('theme', themeSelect.value)
    })
 
 
    listStyleSelect.addEventListener('change', function () {
        myList.className = listStyleSelect.value
        localStorage.setItem('listStyle', listStyleSelect.value)
    })
 
 
    function updateListItems() {
        const listItems = Array.from(myList.children).map(li => li.textContent)
        localStorage.setItem('listItems', JSON.stringify(listItems))
    }
 
 
    myList.addEventListener('input', function (e) {
        if (e.target.tagName === 'LI') {
            updateListItems()
        }
    })
 })
 