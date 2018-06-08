function share() {
	sessionStorage.setItem("email", document.getElementsByName("email")[0].value)
	sessionStorage.setItem("subject", document.getElementsByName("subject")[0].value)
	sessionStorage.setItem("message", document.getElementsByName("message")[0].value)
}

