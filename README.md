# Welcome to my todo list practice app

The goal of this project was to get more comfortable using Javascript to manipulate the DOM and take my first stabs at saving data to the local storage, so a user can return to the app and have their changes saved. This entailed getting comfortable with creating objecs using classes and when having to save them to local storage, stringify them into JSON objects. When working through making the projects, todos and checklist items CRUD (create, read, update, delete) and work with local storage also meant parsing the JSON objects - so the user could edit the saved data. 

I've attempted to follow some of the SOLID code principles but doing it in practice is quite the challenge. 

The app roughly works in the following way with two overviews:

The left hand side shows your projects which you can create with a title, description, due date and when you see fit mark it as done in the empty checkbox. You can also delete projects on the fly. You can create a new Project by clicking the plus icon and fill out the form which comes into view.

The right hand side shows your todos for the currently selected project in the dropdown menu. You can create a new todo by clicking the plus icon and fill out the form. Each todo can be expanded by clicking the small downwards pointing arrow and collapsed again by clicking the now upwards pointing arrow. In this expanded overview of a todo you have access to creating some notes, and creating checklist items for the todo. 

Checklist items can be created by clicking the small plus icon. Each checklist item can also be deleted and have their title edited, as well as marked as done with the little empty checkbox icon. 

When a user deletes a project then all the todos and checklist items that were connected with it, will also be deleted. If a user deletes a todo then the todo and all its checklist items are deleted. 

It's been an amazing journey creating this little app and I hope you find it interesting.






