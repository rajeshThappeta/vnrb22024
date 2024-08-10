
let ar=[10,40,29,7,89,56];

//filter(selection)
    //get elements less than 50
   let result1= ar.filter((element)=> element<50)
   //get elements between 30 and 70
   let result2=ar.filter(element=>element>30&&element<70)
   // console.log(result1)

//map(modification)
    //increment each element by 5
    let result3=ar.map(element=>element+5)
    //increment by 5 for the elements less than 40 and 10 for the remianing
    let result4=ar.map(element=>{
        if(element<40){
            return element+5
        }else{
            return element+10
        }
    })

  //  console.log(result3)



//iterate
    for(let el of ar){
      //  console.log(el)
    }


    for(let index=0;index<ar.length;index++){
      //  console.log(index)
      //  console.log(ar[index])
    }

 //   ar.forEach((element,index)=>console.log(element,index))

//find(search)
    //search for 40
    let result5=ar.find(element=>element===40)
  //  console.log(result5)

//find index
    let result6=ar.findIndex(element=>element===41)
    //console.log(result6)




    let ar2=[1,5,-8,9]

//reduce(reduce array to a single value)
    //find sum of elements
    let sum=ar2.reduce((accumulator,element)=>accumulator+element)
                        //  1             5            1+5
                        //  6              8           6+8
                        //  14             9           14+9
                        //  23
    console.log(sum)

    //find small element
    let small=ar2.reduce((acc,element)=>acc<element?acc:element)
    console.log(small)

    //find big element
    let big=ar2.reduce((acc,element)=>acc>element?acc:element)
    console.log(big)

  