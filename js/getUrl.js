
console.log(window.location.search);



let idURL = false

if(window.location.search){
    //On récupere les paramètres passer dans l'url (?id=number)
    let get = window.location.search.substring(1).split('=');

    paramRequest = get[0];
    valueRequest = get[1];

    //On transforme la valeur string en number
    idURL =parseInt(valueRequest)

    
}



let test2 = {label : 'test', type : 'text' , className : 'inputBox', placeholder : 'mon input'}

/*
test2.forEach((k,v) => {
    console.log(K)
    console.log(v)
});
*/


for (const property in test2) {
    console.log(`${property}: ${test2[property]}`);
  }

