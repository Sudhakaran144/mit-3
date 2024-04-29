const btn = document.getElementById("btn")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("pass")
const eFirst =  document.querySelector(".e-name")
const eLast =  document.querySelector(".e-last")
const eEmail =  document.querySelector(".e-email")
const epass =  document.querySelector(".e-pass")
const img1 = document.querySelector(".e-img1")
const img2 = document.querySelector(".e-img2")
const img3 = document.querySelector(".e-img3")
const img4 = document.querySelector(".e-img4")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(fname.value === '' || fname.value.length < 4){
        eFirst.style.display = "block"
        fname.style.border = "2px solid #ff7978"
        fname.value = " "
        img1.style.display = "block"
    }

    if(lname.value === ''){
        eLast.style.display = "block"
        lname.style.border = "2px solid #ff7978"
        lname.value= " "
        img2.style.display = "block"
    }
    if(email.value === ''){
        eEmail.style.display = "block"
        email.style.border = "2px solid #ff7978"
        email.value = " email@example/com"
        email.style.color = "#ff7978"
        img3.style.display = "block"
    }
     
    if(password.value === '' || fname.value === password.value || fname.length < 6 || fname.length > 16 ){
        epass.style.display = "block"
        password.style.border = "2px solid #ff7978"
        password.value = " "
        img4.style.display = "block"
        
    }
    
})