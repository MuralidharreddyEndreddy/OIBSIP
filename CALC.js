let os = document.getElementById("output-screen");
function Display(num){
    os.value+=num;
}
function Calculate(){
    try{
        os.value=eval(os.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    os.value="";
}
function Delete(){
    os.value=os.value.slice(0,-1);
}
