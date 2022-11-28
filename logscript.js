let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert(`${event.target.email.value} daxil olunur...`);
})

