// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  
    // Get references to HTML elements
    const themeSelect = document.getElementById('theme');
    const listStyleSelect = document.getElementById('listStyle');
    const myList = document.getElementById('myList');

    // Retrieve saved theme and list style from local storage or use default values
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    const savedListStyle = localStorage.getItem('listStyle') || 'style1';

    // Set the selected values and apply the saved theme to the body
    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;
    document.body.className = savedTheme;

    // Retrieve saved list items from local storage or use default values
    const savedListItems = JSON.parse(localStorage.getItem('listItems')) || ['Square', 'Circle', 'Triangle', 'Rectangle', 'Line'];

    // Populate the list with saved items
    savedListItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        myList.appendChild(li);
    });

    // Event listener for theme selection changes
    themeSelect.addEventListener('change', function() {
        // Apply the selected theme to the body and save it to local storage
        document.body.className = themeSelect.value;
        localStorage.setItem('theme', themeSelect.value);
    });

    // Event listener for list style selection changes
    listStyleSelect.addEventListener('change', function () {
        // Apply the selected list style to the list and save it to local storage
        myList.className = listStyleSelect.value;
        localStorage.setItem('listStyle', listStyleSelect.value);
    });

    // Function to update and save the list items to local storage
    function updateListItems() {
        const listItems = Array.from(myList.children).map(li => li.textContent);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }

    // Event listener for input changes in the list items
    myList.addEventListener('input', function (e) {
        // Check if the input event is on a list item and update the list items
        if (e.target.tagName === 'LI') {
            updateListItems();
        }
    });
});