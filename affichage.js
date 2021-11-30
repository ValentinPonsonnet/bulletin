/* function createNode()
{
    //Création de la section
    let section = document.createElement("section");
    section.className="coucou";
    
    document.body.appendChild(section);

    // création des parties 
    let matiere = document.createElement("p");
    matiere.innerHTML = "Matière : Français";

    let s = document.getElementsByClassName("coucou")[0].appendChild(matiere);

    let prof = document.createElement("p");
    prof.innerHTML = "Enseignée par : Frank";

    s = document.getElementsByClassName("coucou")[0].appendChild(prof);
    
    let moyenne = document.createElement("p");
    moyenne.innerHTML = "Moyenne : 10.5";

    s = document.getElementsByClassName("coucou")[0].appendChild(moyenne); 

    let commentaire = document.createElement("p");
    commentaire.innerHTML = "Commentaire : Très bon élément !"

    s = document.getElementsByClassName("coucou")[0].appendChild(commentaire); 

    console.log(s);
} */
let data =
{
    "bulletin": 
    {
        "Français": 
        { 
          "Prof" : "Mme. VASEQUEZ",
          "notes": [8, 5, 4, 7, 2],
          "Comment": "Valentin est un élève moyen mais très discret !",
        },
        "Mathématique": 
        {
          "Prof" : "M. PERCIN",
          "notes": [1, 1, 2, 5, 9],
          "Comment": "Valentin ne sait pas faire une simple opération... !",
        },
        "Histoire": 
        {
          "Prof" :"M. FAURE",
          "notes" : [2, 4, 8, 15, 6],
          "Comment": "Valentin ne s'interresse pas à notre histoire...",
        },
        "Géographie" :
        {
          "Prof" :"M. FAURE",
          "notes" : [14, 7, 5, 12, 4],
          "Comment" : "Valentin est un veritable GPS humain ! Félicitation !"
        },
        "Science Naturel" :
        {
          "Prof" :"Mme. PERRY",
          "notes": [14, 5, 9, 20, 12],
          "Comment":"Valentin est intéresser par les sciences et ça se voit !"
        },
        "Physique-Chimie" :
        {
          "Prof" : "Mme. TISSERAND",
          "notes" : [18, 17, 16, 15, 18],
          "Comment": "Excellent !"
        },
        "Anglais" :
        {
          "Prof" : "Mme. CHARLES",
          "notes" : [1, 2, 1, 5, 3],
          "Comment":"Valentin parle anglais aussi bien qu'une vache espagnole !",
        }
    },
}

function template(data)
{
  function moyenne()
    {       
      let notes = Object.values(data.bulletin)[i].notes ;
      let result = 0;
      for (let j=0;j<notes.length; j++)
        {
          result = result + notes[j];
        }
      return result / notes.length;
    }
 for(i=0; i<Object.keys(data.bulletin).length;i++)
  {
     let modele =`<div class="bloc">
        <h2>${Object.keys(data.bulletin)[i]}</h2>
        <p>Prof : ${Object.values(data.bulletin)[i].Prof}</p>
        <p>Notes : ${Object.values(data.bulletin)[i].notes.join(" / ")}</p>
        <p>Moyenne : ${moyenne()}</p>
        <p>Comment : ${Object.values(data.bulletin)[i].Comment}</p>
      </div>`;

              let element = document.createElement('section');
              element.className= 'bloc_matiere';
              element.innerHTML = modele;
              let body = document.body;
              body.appendChild(element);

  }
}
template(data)