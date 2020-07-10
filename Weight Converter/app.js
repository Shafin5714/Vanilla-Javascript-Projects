let input=document.getElementById('lbs_input');

var output =document.getElementById('output');
output.style.visibility="hidden"


input.addEventListener('input', function(e){
   output.style.visibility="visible"
   let lbs =e.target.value;
   console.log(lbs);

   let grams= document.getElementById('gramsOutput');
   grams.innerHTML=lbs/0.0022046;
   let Kilograms= document.getElementById('kgOutput');
   Kilograms.innerHTML=lbs/2.2046;
   let Ounces= document.getElementById('ozOutput');
   Ounces.innerHTML=lbs*16;


});