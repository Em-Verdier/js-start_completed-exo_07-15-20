// mets en place mode strict

"use strict"

// déclare une variable greetings égale à 'Bonjour'

let greetings = "Bonjour ";
alert(greetings);

// déclare la variable name et affecte la réponse à la question 'Comment tu t'appelles ?'

const question =`Comment t'appelles-tu?`;
const name = prompt(question);

// déclare la variable message qui combine les variables greetings et name

let message = greetings + name;
alert(message);