/**
 * @jest-environment jsdom
 */
 
describe('To-do App Functionality', () => {
    // Mock DOM elements before each test
    beforeEach(() => {
        document.body.innerHTML = `
        <div class="container">
            <form>
                <label for="todos">To-Dos</label><br><br>
                <input type="text" value="Enter Task" id="enter"><br><br>
                <button id="create">Enter</button>
            </form>
        </div>
        `;
    });

    // Test case 1: Check if clicking 'Enter' button adds a list item
    test('should add a new list item when task is entered', () => {
        const button = document.getElementById('create');
        const input = document.getElementById('enter');
        input.value = 'New Task'; // Simulate entering a task
        button.click(); // Simulate clicking the "Enter" button

        const ol = document.querySelector('ol');
        expect(ol).not.toBeNull(); // Check if an 'ol' element exists
        expect(ol.children.length).toBe(1); // Expect one item in the list
        expect(ol.children[0].textContent).toBe('New Task'); // Check if the item text is correct
    });

    // Test case 2: Ensure alert is shown when task is not entered
    test('should show alert when no task is entered', () => {
        const button = document.getElementById('create');
        const input = document.getElementById('enter');
        input.value = 'Enter Task'; // Simulate an empty task scenario
        window.alert = jest.fn(); // Mock window.alert
        
        button.click(); // Simulate clicking the "Enter" button
        expect(window.alert).toHaveBeenCalledWith('Enter a task'); // Expect alert to be called
    });

    // Test case 3: Ensure clicking 'delete' button switches class and shows alert
    test('should switch button class and trigger alert on delete button click', () => {
        const but = document.createElement('button');
        but.setAttribute('class', 'del');
        but.innerHTML = 'delete';
        const div = document.querySelector('.container');
        div.appendChild(but);

        window.alert = jest.fn(); // Mock window.alert

        but.click(); // Simulate clicking the delete button

        expect(but.getAttribute('class')).toBe('dele'); // Check if class changed
        expect(window.alert).toHaveBeenCalledWith('Delete button activated'); // Ensure alert is triggered
    });

    // Test case 4: Ensure that clicking on list item toggles class between 'list' and 'list1'
    test('should toggle list item class between list and list1', () => {
        const button = document.getElementById('create');
        const input = document.getElementById('enter');
        input.value = 'New Task'; // Simulate entering a task
        button.click(); // Add a task to the list

        const ol = document.querySelector('ol');
        const listItem = ol.children[0]; // Get the added list item
        const deleteButton = document.querySelector('.del'); // Get the delete button

        deleteButton.click(); // Activate delete mode

        listItem.click(); // Simulate clicking on the list item
        expect(listItem.getAttribute('class')).toBeNull(); // Expect item to be removed
    });
});