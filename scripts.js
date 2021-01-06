$(document).ready(function(){
    
    
    document.querySelector('.button_1').onclick = function() {
        if(this.innerHTML == "Показать еще")
        {
          this.innerHTML = "Свернуть";
          return;
        }
        else this.innerHTML = "Показать еще";
      }

      document.querySelector('.button_2').onclick = function() {
        if(this.innerHTML == "Показать еще")
        {
          this.innerHTML = "Свернуть";
          return;
        }
        else this.innerHTML = "Показать еще";
      }

      document.querySelector('.button_2').onclick = function() {
        if(this.innerHTML == "Показать еще")
        {
          this.innerHTML = "Свернуть";
          return;
        }
        else this.innerHTML = "Показать еще";
      }

      document.querySelector('.button_3').onclick = function() {
        if(this.innerHTML == "Читать все")
        {
          this.innerHTML = "Свернуть";
          return;
        }
        else this.innerHTML = "Читать все";
      }

      document.querySelector('.button_4').onclick = function() {
        if(this.innerHTML == "Читать все")
        {
          this.innerHTML = "Свернуть";
          return;
        }
        else this.innerHTML = "Читать все";
      }

     // Найти все ссылки начинающиеся на #
     const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};



	$( document ).ready(function(){	  
	  $( ".slide-toggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".komiks_inner2" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	  });
  });
  
  $(".komiks_inner2").hide();

  function fun1() {
    if(document.querySelector('.button_1').innerHTML == "Показать еще")
    {
      document.querySelector('.button_1').innerHTML = "Свернуть";
      return;
    }
    else document.querySelector('.button_1').innerHTML = "Показать еще";
  };


  
  function Yakor(){}
  
  


 
});