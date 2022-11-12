const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)



// const askForFox =()=>{
//     fetch("https://randomfox.ca/floof")
//     .then(res => res.json())
//     .then(data => showFox(data.image))
//     .catch(err => console.log(err))   
// }

// const showFox =(data)=>{
//    $("#img").src = data
// }


//  $("#btn").addEventListener("click",()=>{
//     askForFox()
//  })
//  askForFox()

// const askForGatites =(selector)=>{
//      fetch("https://api.thecatapi.com/v1/images/search")
//         .then(res => res.json())
//         .then(data => selector.src = data[0].url)
//         .catch(err => console.log(err)) 
// }
// askForGatites($("#img1"))
// askForGatites($("#img2"))

// $("#btn").addEventListener("click",()=>{
//     askForGatites($("#img1"))
//     askForGatites($("#img2"))
// })

// ------------------------

// const getApi =()=>{
//     fetch("https://yesno.wtf/api")
//     .then(res => res.json())
//             .then(data => yesOrNo(data))
//             .catch(err => console.log(err)) 
// }        
// const yesOrNo =(data)=>{
//  const {image,answer}  = data 
//  $("img").src = image
//  $("h2").innerHTML = answer

// }

// $("#btn").addEventListener("click", ()=>{
//     getApi()
// })


// fetch("https://foodish-api.herokuapp.com/api")
//   .then(res => res.json())
//   .then(data => console.log(data))

const getFood = (foodTag) => {
    fetch(`https://foodish-api.herokuapp.com/api/images/${foodTag ? foodTag : ""}`)
    .then(res => res.json())
    .then(data => getImage(data))
}

const getImage =(data)=>{
    const {image}= data
    $("#img").src= image
    
}
for (const btn of $$(".btn")){
     btn.addEventListener("click",() => {
    if(btn.id=="food"){
        getFood()
      }else{
        getFood(btn.id)
      }
    
})
}


