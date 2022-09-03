const id = new URL(window.location.href).searchParams.get("id")
console.log(id)
fetch("http://localhost:3000/api/products" + "/" + id)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})