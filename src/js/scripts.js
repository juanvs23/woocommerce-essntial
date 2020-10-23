import splide from "@splidejs/splide";
const searchSection=document.querySelector('#search-section');
    const openSearchBtn=document.querySelector('#open-search-btn');
    const searchContainer=document.querySelector('.search-container form')
    const openMenu =document.querySelector('#open-menu')
    const cerradorBtn=document.querySelector('#cerradorBtn')
    const mobilMinicart=document.querySelector('#cart-customlocation');
    const openMinicartMobil=document.querySelector('#shopping-cart')
    const hasChildrenMenus=document.querySelectorAll('.menu-item-has-children')
    const hasChildrenUl=document.querySelectorAll('.menu-item-has-children ul');
    const closeSearch=document.querySelector('#close-search');



    const searchOpen=(id)=>{
        if(!searchSection.classList.contains('opened')){
            searchSection.classList.add('opened')
            searchSection.style.height="100%";
            searchSection.style.display="block"
            id.style.visibility="hidden"
            setTimeout(()=>{
                searchSection.style.opacity="1"
                searchContainer.style.height="40px"
            },10)
        }else{
            searchContainer.style.height="0px"
            id.style.visibility="visible"

            setTimeout(()=>{
                searchSection.classList.remove('opened')
                searchSection.style.height="0";
                searchSection.style.display="none"
                
            },10)
            
        }
    }

   
document.addEventListener('DOMContentLoaded',()=>{
    
    

//listener
openSearchBtn.addEventListener('click',()=>{
    searchOpen(openSearchBtn)
})
closeSearch.addEventListener('click',()=>{
    searchOpen(openSearchBtn)
})

    openMinicartMobil.addEventListener('click',()=>{

        if(!mobilMinicart.classList.contains('opened')){
            mobilMinicart.classList.add('opened')
            mobilMinicart.style.display="block"
            
        }else{
            mobilMinicart.style.display="none"
            mobilMinicart.classList.remove('opened')
           
        }
    })
    hasChildrenMenus.forEach((hasChildrenMenu,i)=>{
        hasChildrenMenu.addEventListener('mouseleave',()=>{
            hasChildrenUl[i].style.height="0"
            hasChildrenUl[i].style.overflowY="hidden"
        })
        hasChildrenMenu.addEventListener('mouseenter',()=>{
            hasChildrenUl[i].style.height="250px"
            
        })
       
    })



     openMenu.addEventListener('click',()=>{
         document.getElementById("mySidenav").style.width = "250px";
         document.querySelector("#mySidenav #primary-menu ul").style.opacity = "1";

     })
     cerradorBtn.addEventListener('click',()=>{
         document.getElementById("mySidenav").style.width = "0";
         document.querySelector("#mySidenav #primary-menu ul").style.opacity = "0";

     })
    
      

   

//functions



});


const header=document.querySelector('header #menu-sticky'),
	  scrollBtn=document.createElement('a'),
	  footer=document.querySelector('footer'),
		nodeText=document.createTextNode('');
       scrollBtn.appendChild(nodeText)
       scrollBtn.innerHTML='<i class="fas fa-chevron-up"></i>'
		scrollBtn.setAttribute('href','#')
	scrollBtn.setAttribute('id','btn-top');


document.addEventListener('DOMContentLoaded',()=>{
	footer.appendChild(scrollBtn)

})
window.addEventListener('scroll',(e)=>{
	let scroll = window.pageYOffset|| document.documentElement.scrollTop;
	if(scroll>52){
		header.classList.add('stycky-action')
	   }else{
		   header.classList.remove('stycky-action')
       }
       if(scroll>350){
	   		scrollBtn.classList.add('show-action')
	   }else{
			scrollBtn.classList.remove('show-action')
	   }
}) 



 
