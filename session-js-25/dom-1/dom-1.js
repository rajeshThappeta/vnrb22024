//access elements from DOM
let heading=document.querySelectorAll('h1')
console.log(heading)

let heading2=document.querySelector('#heading2')
console.log(heading2)

let heading3=document.querySelector('.heading3')

let btn=document.querySelector("button")


//extract text content
console.log(heading2.textContent)


//add event listeners to element
btn.addEventListener('click',()=>{
   
    //adding dynamic styles
    heading2.style.color='blue';
    heading2.style.backgroundColor='orange';
    heading2.style.fontSize='4rem';

    //add dynamic content
    heading2.textContent='Web stack';

    //remove element
    heading2.remove();

    //create and add  new element to DOM
    let para=document.createElement('p');
    para.setAttribute("class","para")
    para.textContent='this is a paragraph.....';

    document.body.appendChild(para)

})
