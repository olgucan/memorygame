

let myitems =document.querySelectorAll(".mygrid div")
console.log(myitems)
let myspan =document.querySelector("p span")
function sortitem(){
    myitems.forEach(item=> {
        item.style.order=Math.floor(1+Math.random() * 16)
        item.style.pointerEvents="all"
        item.classList.add("active")
    })
}
function restartgame() {
    sortitem()
    mylive=12
    myspan.textContent=mylive
}
function setmyatt() {
    let t=1
    myitems.forEach(i => {
        i.setAttribute("id",`data${t}`)
        t++
    })
}
setmyatt()

let mylive
let olgu=true

function mygame() {
   olgu=true
    sortitem()
      mylive=12
    game()

}
function game() {
  
  
   
    myspan.innerText=mylive
    let k=[]
    myitems.forEach(item=> {
       
       
          item.addEventListener("click",(e)=> {
              console.log(item.classList[0])
              //console.log(k)
         
                
           
             
              //clearTimeout(mytime)
              k.push(item)
                if (k.length===2){
                     if (k[0].classList[0]===k[1].classList[0] && k[0]!==k[1]){
                         console.log(k)
                        k[0].style.pointerEvents="none" 
                        k[1].style.pointerEvents="none"
                         k[0].classList.remove("active")
                         k[1].classList.remove("active")
                     
                           
                        
                       
                         console.log("you win 1 couple")
                         k.splice(1)
                         return
                     }
                     else {
                    
                       //let mylive= parseInt(myspan.innerText)
                       mylive-=1
                       myspan.innerText=mylive
                       if (mylive<=0){
                           alert("oyun yeniden başlıyor")
                          // mylive=12
                           olgu=false
                         restartgame()
                         
                          
                       }
                       item.classList.remove("active")
                       setTimeout(()=>item.classList.add("active"),500)
                       console.log(k)
                       k.shift()
                       console.log(k)
                       return
                     }
                    
                }
                else if (k.length===1 ) {
                    item.classList.remove("active")
                    setTimeout(()=>item.classList.add("active"),1000)
                }
                   
          })
    })
    
}

mygame()




