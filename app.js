var list =document.getElementById("mylist")   
var price =document.getElementById("price") 
var updateprice = function(){
    var itemone =document.getElementById("one")
    var itemtwo = document.getElementById("two")
    var itemthree= document.getElementById("three")
    price.textContent = (parseInt(itemone.textContent)*100)+(parseInt(itemtwo.textContent)*200)+(parseInt(itemthree.textContent)*300)
   }

addone=function(id){
var el= document.getElementById(id)
el.textContent=parseInt(el.textContent)+1
updateprice()


}
minusone=function(id){
    var el= document.getElementById(id)
    el.textContent=parseInt(el.textContent)-1
    updateprice()
    }

var removeitem = function(){
list.removeChild(list.lastElementChild)


}
var changecolor=function(id){
  var el = document.getElementById(id)
  if(el.style.fill=='black'){
    el.style.fill ='blue'
  }
  else{
    el.style.fill ='black'
  }
 

}

var updateprice = function(){
 var itemone =document.getElementById("one")
 var itemtwo = document.getElementById("two")
 var itemthree= document.getElementById("three")
 price.textContent = (parseInt(itemone.textContent)*100)+(parseInt(itemtwo.textContent)*200)+(parseInt(itemthree.textContent)*300)



}








