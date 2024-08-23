//You promise to frnd that you call him in 10 mins

console.log("You decided to call you frnd after 5 secs")

//Promise made by you
function callTofrnd(){
    let yourAvailabilityAfterAnHour=false;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(yourAvailabilityAfterAnHour===true){
                fulfilled("Hello frnd...how are doing")
            }else{
                rejected("Could not call")
            }
        },5000)
       
    })
}


//Your promise consumed by frnd
callTofrnd()
.then(msg=>console.log(msg))
.catch(err=>console.log(err))




console.log("first")