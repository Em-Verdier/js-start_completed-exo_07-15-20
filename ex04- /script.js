"use strict"
const answer = confirm(`Etes-vous majeur? Tapez votre âge.`)
console.log(answer)
let message
if (answer === true) {
    message = "Bienvenue !"
} else {
    message = `Vous n'êtes pas autorisé à vous connectez !`
}
console.log(message)
alert(message)
/* demander confirmation 'Confirmez-vous d'être majeur ?' 
et affecter la réponse à la variable answer */
/* créer la variable message
affecter-lui 'Bienvenue !' si la réponse et positive ou 
'Vous n'être pas autorisé !' dans le cas contraire */
/* Afficher le message */
/* 2 solutions avec if et avec l'opérateur conditionnel (ternary operator) */
