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
addBookToLibrary("sss","dsa","22","yes");*/

 















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

    const author=document.createElement('author');
    author.innerHTML="Author:";
    div.appendChild(author);
    
    const page=document.createElement('page');
    page.innerHTML="Pages:";
    div.appendChild(page);

    const read=document.createElement('read');
    read.innerHTML="Read:";
    div.appendChild(read);

 

    name.innerHTML+=myLibrary[k].title;
    author.innerHTML+=myLibrary[k].book;
    page.innerHTML+=myLibrary[k].pages;
    read.innerHTML+=myLibrary[k].read;

    k++;
    display();

    
}
btn.addEventListener('click',function(){
    card();

});

  



new_book.addEventListener('click',function(){
    const forma=document.getElementById('forms').style.display="block";
    
});

function formInput(){
    const formname=document.getElementById('form-name');
    const formauthor=document.getElementById('form-author');
    const formpages=document.getElementById('form-pages');
    const formread=document.getElementById('form-read');
console.log(formread.value)
console.log(formauthor.value)

    addBookToLibrary(formname.value,formauthor.value,formpages.value,formread.value)

   /*console.log(myLibrary[3])*/ 



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



 
























