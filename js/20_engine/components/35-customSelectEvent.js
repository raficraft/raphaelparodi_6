class CustomSelectEvent{


    constructor(){

              /** */

              this.bodyEl  = document.querySelector('#otherCustomSelect')
              this.openBtn = document.querySelector('#customSelect--trigger')
              
              this.swapBtn = document.querySelectorAll('.customSelect__body--btn[data-context="swap"]')

              this.lastBtn = document.querySelector('.customSelect__body--btn[data-order="2"]')
      
              console.log(this.noSwapEl);
              
            
              this.openBtn.addEventListener('click',(e)=>{ 
                e.preventDefault(); e.stopPropagation()
                this.openSelect()
              })

              this.swapBtn.forEach(btn => {

                btn.addEventListener('click',(e)=>{
                    e.preventDefault();   e.stopPropagation();
                    const target = e.target 
                    this.swap(btn)
                    
                })                  
              });

              window.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                this.closeSelect()
            });

    }

    openSelect(){
        this.bodyEl.setAttribute('data-status','openList')
    }

    closeSelect(){
        this.bodyEl.setAttribute('data-status','close')
    }

    swap(btn){


        console.log(btn);

        const childrenBtn = btn.firstElementChild
        const filter = childrenBtn.dataset.value
        
        const noSwapEl = document.querySelector('.customSelect__body--btn[data-context="noSwap"] span')
        const noSwapContent = document.querySelector('.customSelect__body--btn[data-context="noSwap"]')
        const mediaContent = document.querySelector('#photography')

        childrenBtn.remove()
        noSwapEl.remove()

        noSwapContent.insertAdjacentElement('afterbegin',childrenBtn)
        btn.insertAdjacentElement('beforeend',noSwapEl)


        localStorage.setItem('sortDataMedia', filter)
        sortDataMedia(localStorage.getItem('sortDataMedia'))

        mediaContent.remove()


        factory.injectCarousel()
        factory.injectMedia()

        const firstMedia = document.querySelector('.flexImg[data-item="0"]')
        firstMedia.focus()
        this.closeSelect()


    }

}