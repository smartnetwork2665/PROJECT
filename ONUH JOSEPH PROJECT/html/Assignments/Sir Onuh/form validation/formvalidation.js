function formValidation(){
    const fullname=document.getElementById("fullname").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const confirmemail=document.getElementById("confirm").value;
    if (fullname=="" || phone=="" || email=="" || confirmemail=="") {
        document.write("all field required")
    }
    //isNaN is used to confirm if not number
    ///^[A-Za-z ]+$/ to check if it containonly letter

    else if(!fullname.match(/^[A-Za-z ]+$/) || fullname.lengt>50)
    {
        document.write("fullname is invalid")
    }
    else if (isNaN(phone)){
        document.write("invalid phone number")
    }
else if(!email.match (/\S+@\S+\.\S+/) || email.lengt>50)
{
    document.write("invalid email")
}
else if ( email !== confirmemail)
{
    document.write("email doesnot match confirm email")
}
else{
    document.write("form submit successfull")
}
}
