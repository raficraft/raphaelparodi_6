
  let createModalForm = function(){


    thisData = GetData.getIdentity()


    this.elHTML = 
                `<div 
                  id="dialog"
                  role="dialog" 
                  aria-modal="false"
                  aria-hidden="true"
                  tabindex="-1" 
                  class="dialogBox"           
                  data-js="closeModal">
                
                
                    <form action="" method="post">
                      <button 
                      class="dialogBox__close"
                      type="button" 
                      aria-label="Fermer le formulaire" 
                      title="Fermer cette fenêtre de contact"
                      data-js="closeModal">
                    </button>
                    <fieldset>
                        <legend id="dialog-title" >Contactez moi</legend>
                        <h1 id="dialog-desc">${thisData.name}</h1>

                        <div class="form__content">

                          <div class="brick">
                            <label for="firstname">nom</label>
                            <input id="firstname" type="text" name="firstname" class="brickInput" min-length="2" required/>
                          </div>

                          <div class="brick">
                            <label for="lastname">Prénom</label>
                            <input id="lastname" type="text" name="lastname" class="brickInput"/>
                          </div>

                          <div class="brick">
                            <label for="email">Email</label>
                            <input  id="email" type="email" name="email" class="brickInput"/>
                          </div>

                          <div class="brick">
                            <label for="message">Message</label>
                            <textarea  id="message" type="email" name="email" class="brickInput brickInput--textarea"></textarea>
                          </div>

                          <button type="submit" class="btn btn--modal" data-js="submitModal" aria-label="soumettre">Envoyer</button>

                      
                        
                        </div>


                    </fieldset>
                    </form>
                </div>` 
  }
  
  