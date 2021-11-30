let data =
{
    "bulletin": 
    {
        "Français :": 
        { 
          "Professeur" : "Mme. VASEQUEZ",
          "notes": [11, 10, 9, 10, 12],
          "Comment": "Valentin est un élève moyen mais très discret !",
        },
        "Mathématique (Géométrie) :": 
        {
          "Professeur" : "M. PERCIN",
          "notes": [10, 10, 10, 10, 10],
          "Comment": "Valentin se débrouille bien !",
        },
        "Mathématique (Algèbre) :":
        {
          "Professeur" : "M.VANCON",
          "notes" : [2, 3, 4, 6, 7],
          "Comment" : "Valentin à beaucoup de mal mais fait comme il peut ! Continuer à perceverer !"
        },
        "Histoire :": 
        {
          "Professeur" :"M. FAURE",
          "notes" : [2, 4, 8, 15, 6],
          "Comment": "Valentin ne s'interresse pas à notre histoire...",
        },
        "Géographie :" :
        {
          "Professeur" :"M. FAURE",
          "notes" : [10, 8, 7, 9, 11],
          "Comment" : "Valentin a quelque difficulté"
        },
        "Science Naturel :" :
        {
          "Professeur" :"Mme. PERRY",
          "notes": [14, 5, 9, 20, 12],
          "Comment":"Valentin est intéresser par les sciences et ça se voit !"
        },
        "Physique-Chimie :" :
        {
          "Professeur" : "Mme. TISSERAND",
          "notes" : [18, 17, 16, 15, 18],
          "Comment": "Excellent !"
        },
        "Anglais" :
        {
          "Professeur" : "Mme. CHARLES",
          "notes" : [1, 2, 1, 5, 3],
          "Comment":"Valentin parle anglais aussi bien qu'une vache espagnole !",
        },
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
        <p>Professeur : ${Object.values(data.bulletin)[i].Professeur}</p>
        <p>Notes : ${Object.values(data.bulletin)[i].notes.join(" / ")}</p>
        <p>Moyenne : ${moyenne()}</p>
        <p>Comment : ${Object.values(data.bulletin)[i].Comment}</p>
      </div>`;

              let element = document.createElement('section');
              element.className= "Matière";
              element.innerHTML = modele;
              let body = document.body;
              body.appendChild(element);

  }
}
template(data)