const myLibrary = [];
let i=0;
var k=0;
var object_incrementor=0; /*Used in Form input to give each item added to lbirary a number to delete when no longer in use.*/
function Book(title,book,pages,read,data_attribute) {
  // the constructor...
  this.title=title;
  this.book=book;
  this.pages=pages;
  this.read=read;
  this.data_attribute=data_attribute;

}
function addBookToLibrary(title,book,pages,read,data_attribute) {
  // do stuff here
  /*var input = document.getElementById("userInput").value;*/
  const input=new Book(title,book,pages,read,data_attribute);
  /*myLibrary.push(input);
  console.log(myLibrary[0])*/
  myLibrary[i]=input;
  i++;
}

function display(){
  
    for(let i =0;i < myLibrary.length;i++){
        console.log(myLibrary[i])
        
         

    }
}


/*addBookToLibrary("hob","jj","33","no");
addBookToLibrary("sss","dsa","22","yes");
addBookToLibrary("ksa","rara","50","no"); 
*/

function othername() {
    var input = document.getElementById("userInput").value; 
    myLibrary[i]=input;
    i++;
}

function myFunction(){
        document.getElementById('demo').innerHTML="Paragraph Changed";
}

function card(){   
    /*document.getElementById("cards").innerHTML="Paragraph Changed";*/
    const container=document.getElementById("cards")
    

    const div = document.createElement('div');    

    div.classList.add("cards");
   
  
    container.appendChild(div);

    const name=document.createElement('name');
    name.innerHTML="Name: ";
    div.appendChild(name);
    name.classList.add("cardinfo");

    const author=document.createElement('author');
    author.innerHTML="Author: ";
    div.appendChild(author);
    author.classList.add("cardinfo")

    const page=document.createElement('page');
    page.innerHTML="Pages: ";
    div.appendChild(page);
    page.classList.add("cardinfo")

    const read=document.createElement('read');
   // read.innerHTML="Read:";
    div.appendChild(read);
    read.classList.add("cardinfo")

    const innerhtml=document.createElement('toggle');
    read.appendChild(innerhtml);
    innerhtml.innerHTML="Read: ";
    innerhtml.classList.add("cardinfo")
    innerhtml.id="innerComment"
    innerhtml.id=innerhtml.id + k;
    

    function displayRadio(){ 
        var radioButtons = document.getElementsByName("read");
          if (radioButtons[0].checked) {
            innerhtml.innerHTML="Read: Read";    
          }
        else{
            innerhtml.innerHTML="Read: Not Read";
        }
   //     }
        
    }
    
  //  read.innerHTML+=myLibrary[k].read; /*Is done after read is made so delete isnt appended before "yes" or "no" */
    
    const deleteitem=document.createElement('deleteitem'); /*can also use button in place of deleteitem */
    deleteitem.innerHTML="DELETE";
    read.appendChild(deleteitem)
    deleteitem.classList.add("cardinfo");

  //  deleteitem.id="deleteCard";  
    deleteitem.id=deleteitem.id + k;  //gives each a unique id :D
   

    
/*IMPORTANT*/
/* remove  deleteitem.addEventListener('click',function(){  */
/* outer function to solve the issue of double clicking to delete a card ! */

//    deleteitem.addEventListener('click',function(){
          //  var data_to_delet=document.getElementById("deleteCard").parentElement.parentElement ; /*we can add nodeName to see what the node is */
            
            //const buttons=document.getElementById("deleteCard");
            

            
            const buttonPressed= e =>{
              console.log(e.target.innerHTML);
              console.log(e.target.id)
              console.log(e.target.tagName)

              var data_to_delet=document.getElementById(e.target.id).parentElement.parentElement;
              console.log(document.getElementById(e.target.id).parentElement.parentElement.remove());/* removes a node*/
              
              data_to_delet.innerHTML=' ';
            }
            deleteitem.addEventListener("click",buttonPressed); 
          
            
            const Toggle= e =>{
                var read_item=document.getElementById(e.target.id);
                if(read_item.innerHTML=="Read: Read"){
                        read_item.innerHTML="Read: Not Read";
                }
                else{
                    read_item.innerHTML="Read: Read";
                }
               console.log(read_item.innerHTML)
            }
            innerhtml.addEventListener("click",Toggle)
            
        
            


             

            //data_to_delet.innerHTML="fd"; /* */
           // console.log(data_to_delet);
    //})

    name.innerHTML+=myLibrary[k].title;
    author.innerHTML+=myLibrary[k].book;
    page.innerHTML+=myLibrary[k].pages;
    

    k++;
    displayRadio();
    display();

    const forma=document.getElementById('forms').style.visibility="hidden";//duplicated here to hide form after submitting .
}

btn.addEventListener('click',function(){
    var form_name=document.getElementById('form-name').value;
    var form_author=document.getElementById('form-author').value;
    var form_pages=document.getElementById('form-pages').value;
    
    if(form_name.length!=0 && form_author.length!=0 && form_author.length!=0 && form_pages!=0){
        card();
    }
    
      /*displays card*/

});



const radio=document.querySelectorAll('div');



  /*  radio.forEach((item) => {
        if (item.className=='k')
     console.log(item.innerHTML);


 });*/

/*var checkButton = document.getElementById("btn");
    checkButton.addEventListener("click", function() {
    var inputElement = document.getElementById("form-name");
    var inputLength = inputElement.value.length;
    
    
    console.log("Input length:", inputLength);
});*/

new_book.addEventListener('click',function(){
   // const forma=document.getElementById('forms').style.display="block";
   const forma=document.getElementById('forms').style.visibility="visible";// reveals the hidden forms

});

function formInput(){ 
    const formname=document.getElementById('form-name').value;
    const formauthor=document.getElementById('form-author').value;
    const formpages=document.getElementById('form-pages').value;
    const formread=document.getElementById('form-read').value;
    var data_attribute=object_incrementor; 
    
/*console.log(data_attribute);
console.log("Fsd")*/
    object_incrementor++;


    if(formname.length!=0 && formauthor.length!=0 && formpages.length!=0 && formpages!=0){   
        console.log(formread.value)
        console.log(formauthor.value)
        addBookToLibrary(formname,formauthor,formpages,formread,data_attribute)
    }
}


/*const forma=document.getElementById('forms').style.display="none";*/ //when used it hides entire element making the flex move other elements around
const forma=document.getElementById('forms').style.visibility="hidden";

/*add.addEventListener('click',function(){
    
}); */













/*
function alertFunction(){
        alert("Yoy you did it !")
}
btn.addEventListener('click', function(e){
    e.target.style.background='blue';
}
);
 */

























