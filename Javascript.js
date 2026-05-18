function login(){
alert("Login Successful")
}

const search=document.getElementById("search")

if(search){
search.addEventListener("keyup",()=>{
console.log(search.value)
})
}
