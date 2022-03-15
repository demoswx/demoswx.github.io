var userId ='' ;
var token ='';
var newPassword='';




let passwordinput1=document.getElementById("pwd1").value
let passwordinput2=document.getElementById("pwd2").value



const check = () =>{
    
    let inputValue1 = document.getElementById("pwd1").value; 
    let inputValue2 = document.getElementById("pwd2").value; 
 
    if(inputValue1==""||inputValue2=="")
    {
        alert("请将信息输入完整")
    }
    else if(inputValue1!=inputValue2){
        alert("两次密码输入不一致请重输")
    }
    
    else{
      newPassword = document.getElementById('pwd1')
    //   location.href="success.html"
        userId = getQueryVariable("userid");
        token = getQueryVariable("token");
        postNetworkRequest();
        console.log("sucess");
        
        
    }
  }

 
    
 




function postNetworkRequest(){
        $.ajax({
            url: "http://localhost:8000/users/password-reset/"+userId+"/"+token,
            data: {
                newpassword: newPassword,
            },
            success: function( result ) {
              $( "#TipArea" ).html( "<strong>" + result + "</strong> degrees" );
              
            }
          });
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}