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

      document.querySelector('.button_5').onclick = function() {
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

  $( document ).ready(function(){	  
    $( ".slide-toggle2" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
    $( ".komiks_inner3" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    if(document.querySelector('.button_4').innerHTML == "Свернуть"){
      $(".komiks_inner4").hide();
      document.querySelector('.button_4').innerHTML = "Читать все";
    };
    if(document.querySelector('.button_5').innerHTML == "Свернуть"){
    $(".komiks_inner5").hide();
    document.querySelector('.button_5').innerHTML = "Читать все";
  };
  });
    
});



$( document ).ready(function(){	  
  $( ".slide-toggle3" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
  $( ".komiks_inner4" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
  if(document.querySelector('.button_3').innerHTML == "Свернуть"){
    $(".komiks_inner3").hide();
    document.querySelector('.button_3').innerHTML = "Читать все";
  };
  if(document.querySelector('.button_5').innerHTML == "Свернуть"){
    $(".komiks_inner5").hide();
    document.querySelector('.button_5').innerHTML = "Читать все";
  };

});
 
});


$( document ).ready(function(){	  
  $( ".slide-toggle4" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
  $( ".komiks_inner5" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
  if(document.querySelector('.button_3').innerHTML == "Свернуть"){
    $(".komiks_inner3").hide();
    document.querySelector('.button_3').innerHTML = "Читать все";
  };
  if(document.querySelector('.button_4').innerHTML == "Свернуть"){
    $(".komiks_inner4").hide();
    document.querySelector('.button_4').innerHTML = "Читать все";
  };
});
});


$( document ).ready(function(){	  
  $( ".slide-toggle5" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
    $( ".komiks_inner6" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
  });
});
  
  $(".komiks_inner2").hide();
  $(".komiks_inner3").hide();
  $(".komiks_inner4").hide();
  $(".komiks_inner5").hide();
  $(".komiks_inner6").hide();

 


 


 
});


function fun1() {
  if(document.querySelector('.button_1').innerHTML == "Показать еще")
  {
    document.querySelector('.button_1').innerHTML = "Свернуть";
    return;
  }
  else document.querySelector('.button_1').innerHTML = "Показать еще";
};

function fun2() {
  if(document.querySelector('.button_2').innerHTML == "Показать еще")
  {
    document.querySelector('.button_2').innerHTML = "Свернуть";
    return;
  }
  else document.querySelector('.button_2').innerHTML = "Показать еще";
};