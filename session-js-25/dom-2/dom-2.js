let names=['ravi','kiran','bhanu','babu'];
let parent=document.querySelector('.parent')

for(let name of names){
    //create element
    let h2=document.createElement('h2')
    h2.textContent=name;
    h2.style.color='red'
    h2.style.textAlign='center'
    //add element to parent
    parent.appendChild(h2)
}