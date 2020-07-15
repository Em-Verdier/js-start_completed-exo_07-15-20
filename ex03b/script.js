/* refactor le code d'ex. 2 en introduisant 3ème variable jsAge
si ce n'était pas le cas utilise template litterals `... ${} ....`
*/
"use strict"

let greetings = "Bonjour ";
alert(greetings);

const question =`Comment t'appelles-tu?`;
const name = prompt(question);


const question2 =`Quel age as-tu?`;
const age = prompt(question2);

let message = `${greetings} ${name} ${age} ans, quel bel âge!!!"`;
alert(message);