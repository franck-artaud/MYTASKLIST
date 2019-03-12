// // DOM - Document Object Model
// //prevent default

const googleLink= document.getElementById('google');
const cgv= document.getElementById('cgv');

googleLink.addEventListener('click', function(e) {
    if(!cgv.checked) {
        e.preventDefault()
    }
})


//Definir l'interface de l'application

const form = document.querySelector('#course-form'),
      taskList = document.querySelector('.collection'),
      killList = document.querySelector('.supprimer-course'),
      taskContent = document.querySelector('#contenuTache');

//Application

myTaskList()

function myTaskList() {
    //Ajouter un événement
    form.addEventListener('submit', taskAdding);

}

//taskAdding (Ajouter unne tache)
function taskAdding(e) {
    if (taskContent.value === "") {
        alert('Vous devriez ajouter une tache')
    }

    //Ajouter une balise
    const li = document.createElement('li')

    //Ajouter une class à cette li
    li.className = "collection-item";

    //Relier le contenu du formulaire (value) avec cette  li
    li.appendChild(document.createTextNode(taskContent.value));

    //Créer le lien <a></a>
    const link = document.createElement('a');

    //Ajouter une class à ce lien<a></a>
    link.className = 'delete-item secondary-content';

    //Ajouter l'icône dans le lien>
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    //Relier le lien <a> vers la <li>
    li.appendChild(link);

    //Relier <li> à <ul>
    taskList.appendChild(li);

    //vider le champ du formulaire
    taskContent.value = "";






    e.preventDefault()
}

