document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
    document.getElementById('tasks').innerHTML+=document.getElementById('new-task-description').value;
    event.preventDefault();

  });




});
