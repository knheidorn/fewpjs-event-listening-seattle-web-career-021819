const main = document.getElementById('input');

function addingEventListener(){
  main.addEventListener('click', function(event) {
    alert ('I was clicked!');
  });
}
