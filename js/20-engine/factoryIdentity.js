function identityFactory(){
    this.createIdentity = function(dataIdentity,method){
        let makeStickerIdentity = [];
        //Repetroire ou ce trouve l'image du photographe
     
        let entries1 =    `dirImg`
        let entriesVal1 = `img/Photographers_photo/`

        //Entrées de controle permettant de savoir si on est sur la
        //page index ou dans la page photographer (renommée en gallery).
        let entries2 = `idURL`
        let entriesVal2 = false


        //Boucle for permettant d'ajouter les entrées
     
        //On ajoute des entrées au tableau passés en argument
        for(var i = 0; i < dataIdentity.length; i++){
    
            dataIdentity[i][entries1] = entriesVal1
            dataIdentity[i][entries2] = entriesVal2
        }

        i=0;

        console.log(dataIdentity);

        if(method === 'all')
            //On boucle sur les identités
            dataIdentity.map(function(identitys){  
                makeStickerIdentity[i++] = new createSticker(identitys);
            })
        

        if(method === 'justOne'){

            //On recupe une seul Identité
            dataIdentity[entries1] = entriesVal1
            // la propriété dirURL est redifinie à true pour dire à l'atelier 
            // de créer le bouton de contact
            entriesVal2 = true
            dataIdentity[entries2] = entriesVal2
            makeStickerIdentity = new createSticker(dataIdentity);        
           
        }

        return makeStickerIdentity
    }

}


//Constructeur d'etiquette  
let createSticker = function(thisData){
    console.log(thisData);
      
        this.elHTML =
            `<article class="sticker">
                <header>
                    <a class="identity flexImg" href="gallery.html?id=${thisData.id}" alt="${thisData.name}">
                    <img class="identity__img imgFlex" src="${thisData.dirImg}${thisData.portrait}" height="100px"/>
                    </a>
                </header>`

    //N'affiche le bouton de contact que dans la page dédié au photographe
    

    if(thisData.idURL !== false){            
        this.elHTML += 
                `<button class="btn btn--highRes" type="button"  data-js="openFormContact">Contactez-moi</button>`
    }
        this.elHTML+=  
                `<article class="sticker__info">                        
                    <h2>${thisData.name}</h2>
                    <p class="info__city">${thisData.city}, ${thisData.country}</p>
                    <p class="info__tagline">${thisData.tagline}</p>
                    <p class="info__price">${thisData.price}€/jour</p>                       
                <footer class="nav nav__filter">`


    thisData.tags.forEach(tag =>{    
        this.elHTML +=  
                 `<span class="filter"><a href="index.html?tags=${tag}" data-js="tagURL">#${tag}</a></span>`    
    }) 
        this.elHTML += 
                `</footer>
                    </article>
                        </article>`
   
      
}


//Affiche le contenue de l'atelier
function showIdentity(showThis){

    console.log(showThis);
    let showElHtml = ""


    if (!showThis.length){

        showElHtml = showThis.elHTML
        
    }else{
        showThis.map(function(thisIdentity){
            showElHtml += thisIdentity.elHTML
        })
    }
  
    
    let identityContainer = document.getElementById("main__wrapper");    
    identityContainer.innerHTML = showElHtml;


    // Considérant que l'on affiche seulement 6 fiches de photographe
    // maximum sur la page d'index et qu'au delà un systèmre de pagination
    // serait pertinent. On gère l'affichage en fonction du nombre de fiche
    // que l'on affiche, pour garder un rendu visuelle cohérent.

    let stickerEl = document.querySelectorAll('.sticker')
    console.log(stickerEl.length)

    if(idURL === false){
        if(stickerEl.length <= 2 || stickerEl.length === 5 || stickerEl.length === 4){
            console.log('on change les styles')
            
            document.querySelector('.main__wrapper--index').style.justifyContent  = 'center';
            for(let i = 0; i < stickerEl.length; i++){
                stickerEl[i].style.marginLeft  = '2rem';
                stickerEl[i].style.marginRight  = '2rem';
            }
        }else{

            document.querySelector('.main__wrapper--index').style.justifyContent  = 'space-between';
            for(let i = 0; i < stickerEl.length; i++){
                stickerEl[i].style.marginLeft  = '0rem';
                stickerEl[i].style.marginRight  = '0rem';
            }

        }
    }


    
  }


//Exectuion de l'usine et de ses ateliers

   
//On instancie l'usine
let factory2 = new identityFactory





if(idURL !== false){
    //On récupère l'identités liés à l'id passé en url        
    let identity = getData.getIdentity(data,idURL)
    console.log(identity);
    //on passe l'identité dans l'usine
    let newIdentity = factory2.createIdentity(identity,'justOne')
    console.log(newIdentity);
    showIdentity(newIdentity)
}else{

    if(tagURL !== false){


        console.log(getData.getAllIdentityByTag(tagURL));

        //On instancie une usine 
        let identity = getData.getAllIdentityByTag(tagURL)
        console.log(identity);
        //on passe l'identité dans l'usine
        let newIdentity = factory2.createIdentity(identity,'all')
        console.log(newIdentity.length);
        console.log(newIdentity);
        showIdentity(newIdentity)




    }else{
        let identity = getData.getAllIdentity()
        console.log(identity);
        //on passe l'identité dans l'usine
        let newIdentity = factory2.createIdentity(identity,'all')
        console.log(newIdentity);
        showIdentity(newIdentity)
    }


}
