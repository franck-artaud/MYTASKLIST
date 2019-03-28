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
            if(confirm('Fait gaffe;; tu vas vraiment supprimer un article de la liste !!!!'))
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

    //  Exporter la liste au format PDF

    var cache_width = $('#liste').width(); //Criado um cache do CSS
    var a4 = [595.28, 841.89]; // Widht e Height de uma folha a4

    $(document).on("click", '#btnPrint', function () {
        // Setar o width da div no formato a4
        $("#liste").width((a4[0] * 1.33333) - 80).css('max-width', 'none');

        // Aqui ele cria a imagem e cria o pdf
        html2canvas($('#liste'), {
            onrendered: function (canvas) {
                var img = canvas.toDataURL("image/png", 1.0);
                var doc = new jsPDF({ unit: 'px', format: 'a4' });
                doc.addImage(img, 'JPEG', 20, 20);
                doc.save('Ma liste de course de la MORKITU.pdf');
                //Retorna ao CSS normal
                $('#liste').width(cache_width);
            }
        });
    }); 


