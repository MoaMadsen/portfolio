function clickme() {
    var f, n, e, m;
    f=document.getElementById("inputform");
    n=f.elements["yourname"].value;
    e=f.elements["emailaddress"].value;
    if (e=="") {
        document.getElementById("thanks").innerHTML="You forget to write your email  "+n;
        document.getElementById('email').style.borderColor = "red";
        return false;
    }else {
        document.getElementById("thanks").innerHTML="Thank you for you message " + n;
        document.getElementById('email').style.borderColor = "#ccc";
        document.getElementById('inputform').value="";
    }
}
