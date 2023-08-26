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


addBookToLibrary("hob","jj","33","no");
addBookToLibrary("sss","dsa","22","yes");

 















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
    
    
    k++;


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
    

    display();

    
}
btn.addEventListener('click',function(){
    card();

});
    function add(){
    
}

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



 
























