document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let description=document.getElementById('new-task-description').value;
    const input = document.getElementByType('submit');
    input.addEventListener('click', function(event) {
    document.getElementById('tasks').innerHTML=description;
    event.preventDefault();

    })




});
