    let listaNumeriCasuali = [];
    let listaNumeriPrompt = [];
    let numeroCasuale;
    let numeroPrompt;

    //genero dei gruppi di numeri casuali e con un alert li mostro all'utente
  
    for (let i = 0; i < 5; i++) {
      numeroCasuale = genNumeriCasuali(1, 100);
      console.log(numeroCasuale);
      listaNumeriCasuali.push(numeroCasuale);
    }
    console.log(listaNumeriCasuali);
    alert("Cerca di memorizzare questi cinque numeri: " + listaNumeriCasuali);
  
    //richiedo all'utente dopo 30 secondi di inserire i numeri in precedenza mostrati

    setTimeout(function() {
      for (let i = 0; i < 5; i++) {
        numeroPrompt = parseInt(prompt("inserisci i numeri che ricordi"));
        for (let f = 0; f < listaNumeriCasuali.length; f++) {
          if (numeroPrompt == listaNumeriCasuali[f]) {
            listaNumeriPrompt.push(numeroPrompt);
          }
        }

        //l'utente vince se indovina tutti i numeri mostrati in precedenza
  
      }
      alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Esattamente i numeri: " + listaNumeriPrompt)
      console.log(listaNumeriPrompt)
    }, 30000)
  
  
    function genNumeriCasuali(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }