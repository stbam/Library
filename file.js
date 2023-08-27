const myLibrary = [];
let i=0;
var k=0;
function Book(title,book,pages,read) {
  // the constructor...
  this.title=title;
  this.book=book;
  this.pages=pages;
  this.read=read;

}
function addBookToLibrary(title,book,pages,read) {
  // do stuff here
  /*var input = document.getElementById("userInput").value;*/
  const input=new Book(title,book,pages,read);
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
    name.innerHTML="Name:";
    div.appendChild(name);
    name.classList.add("cardinfo");

    const author=document.createElement('author');
    author.innerHTML="Author:";
    div.appendChild(author);
    author.classList.add("cardinfo")

    const page=document.createElement('page');
    page.innerHTML="Pages:";
    div.appendChild(page);
    page.classList.add("cardinfo")

    const read=document.createElement('read');
    read.innerHTML="Read:";
    div.appendChild(read);
    read.classList.add("cardinfo")
    
    read.innerHTML+=myLibrary[k].read; /*Is done after read is made so delete isnt appended before "yes" or "no" */
    
    const deleteitem=document.createElement('deleteitem'); /*can also use button in place of deleteitem */
    deleteitem.innerHTML="DELETE";
    read.appendChild(deleteitem)
    deleteitem.classList.add("cardinfo");

    deleteitem.id="deleteCard";  
    deleteitem.addEventListener('click',function(){

    })


    name.innerHTML+=myLibrary[k].title;
    author.innerHTML+=myLibrary[k].book;
    page.innerHTML+=myLibrary[k].pages;
    

    k++;
    display();
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


/*var checkButton = document.getElementById("btn");
    checkButton.addEventListener("click", function() {
    var inputElement = document.getElementById("form-name");
    var inputLength = inputElement.value.length;
    
    
    console.log("Input length:", inputLength);
});*/

new_book.addEventListener('click',function(){
    const forma=document.getElementById('forms').style.display="block";
    
});

function formInput(){ 
    const formname=document.getElementById('form-name').value;
    const formauthor=document.getElementById('form-author').value;
    const formpages=document.getElementById('form-pages').value;
    const formread=document.getElementById('form-read').value;
    
    if(formname.length!=0 && formauthor.length!=0 && formpages.length!=0 && formpages!=0){   
        console.log(formread.value)
        console.log(formauthor.value)
        addBookToLibrary(formname,formauthor,formpages,formread)
    }
}

/*const forma=document.getElementById('forms').style.display="none";*/


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



 
























