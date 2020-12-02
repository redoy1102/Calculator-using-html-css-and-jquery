$("#btn").click(function(){
    $("#div1").show();
})

$("#hideButton").click(function(){
    $("#div1").hide();
})






$("#login-btn").click(function(){
    
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    
    if(password1 != "" && password2 != ""){
        
        if(password1 == password2){
            alert("Successfully log in");
        }
        else{
            alert("Please Enter same password")
        }
    } else{
        alert("Please Enter password")
    }
    
    


})