



const searchButton=document.getElementById('input_img');
const resetButton=document.getElementById('resetButton');
const myInput=document.getElementById('myInput');

const divParent=document.getElementById('autocomplete');

function autocomplete(inputBox, arrData) {//input value & arrayData
    var currentFocus;
    var offset=0;
    //when write in the text excute
    inputBox.addEventListener("input", function(e) {

      //inputdata is user input data
        var newDiv;
        var matchDiv;
        var i;
        var userInputData = this.value;//match the array

        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!userInputData)  { 
          return false;
        }
        currentFocus = -1;

        //newDiv is a div hold all arrData
      //create autocomplete div clas= "autocomplete-list"to hold all the arrData
        newDiv = document.createElement("div");
        newDiv.setAttribute("id", this.id + "autocomplete-list");
        newDiv.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(newDiv);//autocomplete div 
   
    

        /*for each item in the array...*/
        for (i = 0; i < arrData.length; i++) {
           if(arrData[i].includes(userInputData)){

            //userInputData.style.classList=".strong";
            resetButton.style.display = "block";
            matchDiv = document.createElement("div");
            

       var index = arrData[i].indexOf(userInputData);
       
      var end=arrData[i].substr(index + userInputData.length);

        matchDiv.innerHTML = arrData[i].substr(0,index)+"<strong>"+userInputData+"</strong>"+arrData[i].substr(index + userInputData.length);; 
           
            /*insert a input field that will hold the current array item's value:*/
            matchDiv.innerHTML += "<input type='hidden' value='" + arrData[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            matchDiv.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inputBox.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            newDiv.appendChild(matchDiv);
            var count=newDiv.childNodes.length;
       
            if(count>=5){
              newDiv.setAttribute("style","overflow:scroll;height:160px;width:70%; margin-left:80px");
           //newDiv.scroll();
            }
          }
         
        }

       
       // newDiv.clientHeight+=344*5;
//console.log("offset Width"+newDiv.offsetWidth +" offset height "+newDiv.offsetHeight);
//console.log("client width"+newDiv.clientWidth+"client height"+newDiv.clientHeight);//use it if no padding
//console.log("scrollHeight"+newDiv.scrollHeight+ " scroll weight "+newDiv.scrollWidth);


    });



// console.log(autoDiv);

    inputBox.addEventListener("keydown", function(e) {
     // var count=newDiv.childNodes.length;
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
//myInput.style.height=`${myInput.scrollHeight}`;
console.log('this is scoll bar'+myInput.scrollHeight+' '+myInput.clientWidth);

//console.log(divParent.scrollHeight);
       


//key down
        if (e.keyCode == 40) {

       
 
currentFocus++;

addActive(x);

if(x && currentFocus % 4 == 0)
{
  
    x[currentFocus].scrollIntoView();
}





        
        } 
        else if (e.keyCode == 38) { //key up 
          
          currentFocus--;
          addActive(x);
          if(x && x[currentFocus])
{
  
    x[currentFocus].scrollIntoView();
}
        
        }

  //delte 
  else if(e.key ==="Delete"){
    e.preventDefault();
    resetButton.style.display = "none";
    console.log('ths is work');
   }


//tab+shift
        else if (e.shiftKey && e.keyCode==9){
          console.log('this is tab and shift');
        }

        //tab
        else if(e.keyCode==9){
          e.preventDefault();
          searchButton.focus();
        } 

       // const autoDiv=document.getElementsByClassName('autocomplete-list');
//esc  focus on the input text field
       if(e.keyCode==27){
         e.preventDefault();
     // autoDiv.value='';
      resetButton.style.display = "none";
        inputBox.value='';
        inputBox.focus();
        closeAllLists();
        
       // autoDiv.style.display='none';
        
        }
    
        else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }

        }
       
    });

//add autocomplete ative class
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }

    //remove autocomplete-active class
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }



    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inputBox) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  
    //click on the document reset
    document.addEventListener("click", function (e) {
   //   inputBox.value='';
        closeAllLists(e.target);
    });



  //restButton click rest all the data to 0
    resetButton.addEventListener('click',function(){
      resetButton.style.display = "none";
      inputBox.value='';
      inputBox.focus();

    })
  
  }

  /*An array containing all the country names in the world:*/
  var arrData = ["student on the bus","useless stuff","stubhub tickets","unusual","user study"," english teacher","long distant","search widget",
  "monkeyking","make american great again","working in progress","passion fruit","forget the past","led","global warming effect","former president",
  "keep going","soft landing","interest","darkness","mapkit","declared war","young generations","jump ahead",
  "shall","modern design","piece of cake","any circumstances","rough journey","breath subtlely","grade","bank association",
  "zero","go ahead","strong woman","biscuit basket","slabs","western logic thinking","keep fighting","xbox series x",
  "sell and buy","smaller than nothing","beside","vehicle garage","jack in the box"," good mood","stock dropped","energy man",
  "dog","pacific ocean","rubbed","trunk","glass","window","xfinity phone number","wake me up in the first day of september morning",
  "successful launching","including","look out","put together","US army","zillow estate","season flu","respect and love",
  "characteristic","writing a letter","grey goose","load","fought forever","summer last","feathers fade away","equal right"];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), arrData);

  //const body=document.querySelector('body');

  // body.addEventListener('click',function(e){  
  //   e.preventDefault();
  //       if ((e.keyCode==9)&&(e.keyCode==16)){
  //       console.log('this is tab and shift');
  //     }
  //     else if(e.keyCode==9){
       
  //       console.log('this is tab');
    
  //     } 
  //   });
  