import { setBtnIdCallback } from './home.js';

// Set the callback to receive the btnId value
setBtnIdCallback((btnId) => {
    // Use the btnId value here
    console.log(btnId);
});


// console.log('js connected');

// import { btnId } from './home.js'; // Importing btnId from file1.js

// // Now you can use btnId variable here
// console.log(btnId);

    

    // async function displayTasks() {
    //     const response = await fetch('/api/tasks');
    //     const tasks = await response.json();

    //     taskList.innerHTML = taskTemplate({ tasks });

    //     const updateButtons = document.querySelectorAll('.update-status');
    //     updateButtons.forEach(button => {
    //         button.addEventListener('click', async (event) => {
    //             const taskId = event.target.parentElement.dataset.taskId;
    //             const newStatus = event.target.previousElementSibling.value;

    //             await updateStatus(taskId, newStatus);
    //         });
    //     });
    // }

    // async function updateStatus(taskId, newStatus) {
    //     await fetch(`/tasks/${taskId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: newStatus })
    //     });

    //     displayTasks();
    // }

    // const addTaskForm = document.getElementById('addTaskForm');

    // addTaskForm.addEventListener('click', async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(addTaskForm);
    //     const title = formData.get('title');
    //     const description = formData.get('description');

    //     try {
    //         const response = await fetch('/tasks', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ title, description })
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to add task');
    //         }

 
    //         const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'));
    //         addTaskModal.hide();


    //         displayTasks();
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error
    //     }
    // });

    // displayTasks();
