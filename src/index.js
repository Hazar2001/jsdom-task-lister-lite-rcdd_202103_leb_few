document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
     let input=document.getElementById('tasks');
     input.createElement('li').innerHTML+=document.getElementById('new-task-description').value;
    event.preventDefault();

  });




});
