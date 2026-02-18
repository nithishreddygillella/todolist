# To set up and run the application, follow these steps:

1. Create a new Java project in your preferred IDE.
2. Create the following packages inside the project :
* com.example.config
* com.example.controller
* com.example.model
* com.example.repository
3. Copy and paste the provided code into the respective files in their corresponding packages :
* CorsConfig.java into the com.example.config package
* TaskController.java into the com.example.controller package
* Task.java into the com.example.model package
* TaskRepository.java into the com.example.repository package
4. Make sure you have MongoDB installed and running on your local machine. By default, it listens on port 27017.
5. Open the application.properties file and add the following configuration :
   spring.data.mongodb.uri=mongodb://localhost:27017/todo-list
  
   server.port=8888
6. Build the project to resolve any dependencies.
7. Run the application.
8. The application should now be running on http://localhost:8888.
9. You can use the provided React code from earlier to create a frontend application that interacts with this backend API.

Note : Make sure to adjust the allowedOrigins in the CorsConfig.java file to match the URL of your frontend application. In the provided code, it is set to http://localhost:3000.

# Code Explanation

1. The code starts by importing React, useEffect, and useState. It then imports axios from 'axios' to make HTTP requests. Next it imports the icons for editing and deleting tasks from @material-ui/icons. The code uses a function called TodoList() which is used to create the state of the app with three variables: tasks, newTask, and newDescription. There are two functions that handle fetching data: fetchTasks() which fetches all of the tasks in our database; addTask(), which adds a task to our list; editTaskDetails(), which edits an existing task's details; toggleComplete(), which changes whether or not a given task is completed or not; setNewTask(), setNewDescription(), setEditTask(). The first line creates an array called tasks with no items in it because we haven't yet added any tasks to our database yet. The next line sets up some initial state for our app using these variables as well as adding a function called setTasks(). This function will be executed when we call this component's render method (which happens after every other action). In this case, it simply updates what is stored in each variable based on whatever was passed into its parameters (
2. The code is to fetch all the tasks from the server and then update them with new data. The code above will also toggle the task completion status of a specific task.
3. The code starts by defining a function called addTask. This function takes in a new task and returns an object with the title, description, and actions. The code then defines two functions: updateTaskDetails and deleteTask. These functions are asynchronous because they take in callback functions that will be executed when the asynchronous operation is complete. The updateTaskDetails function takes in a taskId as its parameter and sends it to axios for updating the details of the given task on our server-side API endpoint (http://localhost:8888/api/tasks/${taskId}). If there is an error during this process, we use console.error to log it out so we can see what went wrong. The deleteTask function takes in a taskId as its parameter and sends it to axios for deleting from our server-side API endpoint (http://localhost:8888/api/tasks/${taskId}. If there is an error during this process, we use console.error to log it out so we can see what went wrong.)
4. The code is a simple web app that displays all the tasks in an unordered list. The code also has an input field for adding new tasks and another one for editing the existing task. When you click on Add Task, it will create a new task with the title and description of what you typed in the text fields.
5. The code is a button that has two states: Mark Complete and Mark Incomplete. The completed state is set to true when the user clicks on the button, which sets task.completed to true. The incomplete state is set to false when the user clicks on the button, which sets task.completed to false. When clicked, this code will change what happens in an input field depending on whether or not it's already been marked complete or not: If it hasn't been marked complete yet, then it will be changed from "Mark Incomplete" to "Mark Complete".
6. The code is used to add a new task to the list of tasks. The code first checks if the editTask property on the Task object is set, and if it is, then it will call the setTasks function. If not, then it will create a new task with an empty description and title .
