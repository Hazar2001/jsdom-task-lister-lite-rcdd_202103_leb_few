document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let description=document.getElementById('new-task-description').value;
    const input = document.getElementByType('submit');
    input.addEventListener('submit', function(event) {
    let todo=document.getElementById('tasks').innerHTML=description;

    });




});
