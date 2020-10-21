import splide from "@splidejs/splide";


document.addEventListener('DOMContentLoaded',()=>{
    const searchSection=document.querySelector('#search-section');
    const openSearchBtn=document.querySelector('#open-search-btn');
    const searchContainer=document.querySelector('.search-container form')
    const openMenu =document.querySelector('#open-menu')
    const cerradorBtn=document.querySelector('#cerradorBtn')
    const mobilMinicart=document.querySelector('ul.navigation-mobil ul.mini-cart-content');
    const openMinicartMobil=document.querySelector('.open-minicart-mobil')
    const hasChildrenMenus=document.querySelectorAll('.menu-item-has-children')
    const hasChildrenUl=document.querySelectorAll('.menu-item-has-children ul');
    
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
    
      
    openSearchBtn.addEventListener('click',()=>{
        if(!searchSection.classList.contains('opened')){
            searchSection.classList.add('opened')
            searchSection.style.height="100%";
            searchSection.style.display="block"
            setTimeout(()=>{
                searchSection.style.opacity="1"
                searchContainer.style.height="40px"
            },10)
        }else{
            searchContainer.style.height="0px"
            setTimeout(()=>{
                searchSection.classList.remove('opened')
                searchSection.style.height="0";
                searchSection.style.display="none"
                
            },10)
            
        }
    })

});
/**
const header=document.querySelector('header'),
	  scrollBtn=document.createElement('a'),
	  footer=document.querySelector('footer#colophon');
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
	if(scroll>600){
		header.classList.add('stycky-action')
	   		scrollBtn.classList.add('show-action')
	   }else{
		   header.classList.remove('stycky-action')
			scrollBtn.classList.remove('show-action')
	   }
}) 



 */
