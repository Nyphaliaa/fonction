/**         Fonction
 
 créer 3 variables
 a égal à jean
 b égal à paul
 result
 
 */
let a="jean";
let b="Paul";
let result=checkName(a,b)

function checkName(name1, name2){ //créer une fonction checkName qui verifie si les deux noms sont identiques 
    if(name1===name2){
        return true // vrai si identiques
    }else{
        return false // faux si différents
    }
}
console.log(result);