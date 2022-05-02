// write js code here corresponding to favourites.html<script>
var fvrt=JSON.parse(localStorage.getItem("favourites"))
display(fvrt)

function display(fvrt){
fvrt.forEach(function(element,index) {
  
  var tr=document.createElement("tr");
  
  var td1=document.createElement("td")
  td1.innerText=element.match_number

  var td2=document.createElement("td");
  td2.innerText=element.teamA
  var td3=document.createElement("td");
  td3.innerText=element.teamB
  var td4=document.createElement("td");
  td4.innerText=element.date
  var td5=document.createElement("td");
  td5.innerText=element.venue
  var td6=document.createElement("td");
  td6.innerText="Remove Item"
  td6.style.color="blue";
  td6.style.cursor="Pointer"
  td6.addEventListener("click",function(){

    delet(element,index)
    

  })
  tr.append(td1,td2,td3,td4,td5,td6)
  document.querySelector("tbody").append(tr)
});
}

function delet(element,index)
{
 
  fvrt.splice(index,1)
  localStorage.setItem("favourites",JSON.stringify(fvrt))
  window.location.reload()
}




</script>