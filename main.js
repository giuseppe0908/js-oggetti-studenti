// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso un ciclo for-in
// tutte le proprietà dell'oggetto. Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function() {
  // Creo un oggetto che descriva uno studente, con le seguenti proprietà:
  // nome, cognome e età.
  var studente= {
      nome: "Giuseppe",
      cognome: "Placida",
      eta: 20,
    };
  //Stampo a schermo attraverso un ciclo for-in
  // tutte le proprietà dell'oggetto
    for (var key in studente) {
        console.log(key,studente[key]);

    }
    //Creare un array di oggetti di studenti
  var studenti = [
    {
      nome: "Antonio",
      cognome: "Cataldi",
      eta: 30,
    },
    {
      nome: "Giulio",
      cognome: "Bho",
      eta: 25,
    },
  ];

  //Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    for (var i = 0; i < studenti.length; i++) {
      console.log(studenti[i].nome + " " + studenti[i].cognome);
    }
  // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
  // oggetto studente inserendo nell’ordine: nome, cognome e età.


  // var nome_user = prompt("inserisci il tuo nome");
  // var cognome_user = prompt("inserisci il tuo cognome");
  // var eta_user = prompt("inserisci la tua eta");
  $('#btn').click(function () {
    var nome_user = $('#nome').val();
    var cognome_user = $('#cognome').val();
    var eta_user = $('#eta').val();


  var utente = {
    nome: nome_user,
    cognome: cognome_user,
    eta: eta_user,
   };

   studenti.push(utente);
   console.log(studenti);
   for (var key in studenti) {

    $("#elenco").append(studenti[key].nome + " " + studenti[key].cognome + " " + studenti[key].eta+"<br>");

   }

  })


})
