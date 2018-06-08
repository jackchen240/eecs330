
document.getElementsByClassName("text-tips")[0].value = sessionStorage.getItem("tipList").replace(/\S,\S/g, function (x) { return x[0] + "\n\n" + x[2]})


function share() {
	sessionStorage.setItem("email", document.getElementsByName("email")[0].value)
	sessionStorage.setItem("subject", document.getElementsByName("subject")[0].value)
	sessionStorage.setItem("message", document.getElementsByName("message")[0].value)
}