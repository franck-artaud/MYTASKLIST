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
      filtering = document.querySelector('#filter');

//Application

myTaskList()

function myTaskList() {
    //Ajouter un événement
    form.addEventListener('submit', taskAdding);

    //Supprimer un évenemment de la liste
    taskList.addEventListener('click', killTask)

    //Nettoyer toute la liste
    killList.addEventListener('click', cleanList)

     //Filtrer la liste
    filtering.addEventListener('keyup', taskFilter)

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

    //Supprimer une tache
    function killTask(e){
        if (e.target.parentElement.classList.contains('delete-item')){
            if(confirm('Attention !!! Tu souhaites vraiment suprimer cet élément de ta liste de course ?'))
                e.target.parentElement.parentElement.remove();
        }
    }

    //Nettoyer toute la liste
    function cleanList(e) {
        taskList.innerHTML="";
    }

    //  //Filtrer la liste
     function taskFilter(e) {
        const contentKeybord = e.target.value.toLowerCase()

        document.querySelectorAll('.collection-item').forEach(
            function(task) {
                const keyWord = task.firstChild.textContent;

                if(keyWord.toLowerCase().indexOf(contentKeybord) !=-1) {
                task.getElementsByClassName.display = 'block'
            } else {
                task.style.display = 'none'
            }
        }
            );
        console.log(contentKeybord);
    }

