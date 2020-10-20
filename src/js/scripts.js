import splide from "@splidejs/splide";


document.addEventListener('DOMContentLoaded',()=>{
    const searchSection=document.querySelector('#search-section');
    const openSearchBtn=document.querySelector('#open-search-btn');
    const searchContainer=document.querySelector('.search-container')

    
    
    
   

    openSearchBtn.addEventListener('click',()=>{
        if(!searchSection.classList.contains('opened')){
            searchSection.classList.add('opened')
            searchSection.style.height="100%";
            searchSection.style.display="block"
            setTimeout(()=>{
                searchSection.style.opacity="1"
               
            },10)
        }else{
            for (let index = 9; index > 0; index--) {
                setTimeout(()=>{
                searchSection.style.opacity=`0.${index}`
                },10)
            }
            setTimeout(()=>{
                searchSection.classList.remove('opened')
                searchSection.style.height="0";
                searchSection.style.display="none"
            },10)
            
        }
    })

});
