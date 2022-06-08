function validate(){
    var userName = document.getElementById('loginUser').value;
    var password = document.getElementById('loginPassword').value;

    if(userName == "admin" && password == "user"){
        window.location.href = "profile.html"
    }else{
        alert("invalid User")
    }
}