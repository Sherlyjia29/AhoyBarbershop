function validateSignUp(){
    var fullname = document.getElementById("fullName").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var threeMonths = document.getElementById("threeMonths")
    var sixMonths = document.getElementById("sixMonths")
    var twelveMonths = document.getElementById("twelveMonths")
    var checkbox = document.getElementById("agree")


    if(fullname == ""){
        alert("Username cannot be empty")
    }
    else if(fullname.length < 5 || fullname.length > 25){
        alert("Username must more than 5 characters and less than 25 characters")
    }
    else if(email == ""){
        alert("Email cannot be empty")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com")
    }
    else if(address == ""){
        alert("Home address cannot be empty")
    }
    else if(address.length < 10){
        alert("Address must more than 10 characters ")
    }
    else if(!threeMonths.checked && !sixMonths.checked  && !twelveMonths.checked ){
        alert("Must select membership duration")
    }
    else if(!checkbox.checked){
        alert("Fill the agreement checkbox")
    }
    else{
        window.location.href = "membershipSuccess.html"
    }
}
