// write js code here corresponding to index.html
// You should add submit event on the form
<script>
var masaiform=document.querySelector("#masaiForm");
masaiform.addEventListener("submit",myfunc1)
var match_detail=[];
function myfunc1(){
   event.preventDefault()
   console.log("c")
 var data={

  match_number:masaiForm.matchNum.value,
  teamA:masaiForm.teamA.value,
  teamB:masaiForm.teamB.value,
  date:masaiForm.date.value,
  venue:masaiForm.venue.value,
 }
console.log(data)
match_detail.push(data);
localStorage.setItem("schedule",JSON.stringify(match_detail))



}






</script>
