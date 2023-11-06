


let dog = document.getElementById("dog-1")

dog.addEventListener("click",()=>{
    document.body.innerHTML = document.body.innerHTML.replaceAll("Dog", "Cat"); 
    document.body.innerHTML = document.body.innerHTML.replaceAll("dog", "cat"); 
    document.head.innerHTML = document.head.innerHTML.replaceAll("Dog", "Cat"); 

    let imgCat = document.getElementById("img-1")
    imgCat.src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})
