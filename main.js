document.addEventListener("DOMContentLoaded", () =>{
  
  myBootuns()
  
  
   
})

let submit = $("#submit")
let buttons = $('.rainbow-5')
let display = $('.question') 
let answer = $('#answer')
let abc = $('#abc')
let dollas = $(".money")
let val = $("#val")
let clear = $("#doneGone")

doneGone.addEventListener("click",deleteItems)



function myBootuns(){
  let buttons = $('.rainbow-5')
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",runME)
    buttons[i].addEventListener("click",flip)
    
    
  }
  
}

let count = 0;
const storedCount = localStorage.getItem('count');

if (storedCount !== null) {
  count = parseInt(storedCount);   
}
function runME(event){
  let i = Math.floor(Math.random() *QUESTIONS.length)
  let question = QUESTIONS[i];
  let money = ""
  let buttonVal = event.target.value
  while(question.value !== buttonVal){
    let rando = Math.floor(Math.random()*QUESTIONS.length)
    question = QUESTIONS[rando]
    money =  question.value.slice(1)

   
    
  }
  display.text(question.question)
  val.text(money)
  abc.text(question.answer)
  
  
  
}


submit.click(function () {
  const ans = answer.val() 
  console.log("button clicked")
  if(answer === abc){
    console.log("you did it")
  }
  if(abc.text() === ans ) {
    alert("youre right guhehe")
    count += Number(val.text())
    localStorage.setItem('count', count);
    document.querySelector('.money').innerText = "$"+ count ;
  }
  
  
});
document.querySelector('.money').innerText = "$"+ count ;

function deleteItems() {
  localStorage.clear(count);
  document.querySelector('.money').innerText = "$"+ 0 ;
}


function flip() {
  buttons.toggleClass('flipped');
  console.log("hehe")
}