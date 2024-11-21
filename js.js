let Submit = document.getElementById("btn")
let Name = document.getElementById("userName")
let Email = document.getElementById("userEmail")
let Pswd = document.getElementById("userPswd")


Submit.addEventListener("click", function(e) {
  e.preventDefault()
  const NameValue = Name.value
  const EmailValue = Email.value
  const PswdValue = Pswd.value
  localStorage.setItem("Name", NameValue)
  localStorage.setItem("Email", EmailValue)
  localStorage.setItem("Pswd", PswdValue)
  alert("Sign is successfully completed")
  setTimeout(() => {
    window.location.href = "login.html"
  }, 3000)
})

const Login = document.getElementById("btn")
Login.addEventListener("click", () => {
  let NameStorage = localStorage.getItem("Name");
  let PswdStorage = localStorage.getItem("Pswd");
  let InputName = document.getElementById("userName").value
  let InputPswd = document.getElementById("userPswd").value
  if (NameStorage == InputName && PswdStorage == InputPswd) {
    alert("login successfully completed")
    setTimeout(() => {
      window.location.href = "Home.html"
    }, 5000)

  } else {
    alert("oh! invaild data")
  }
})

