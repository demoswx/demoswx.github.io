var userId ='' ;
var token ='';
var newPassword='';





function check(){
    let inputValue1 = document.getElementById("pwd1").value; 
    let inputValue2 = document.getElementById("pwd2").value; 
    if(inputValue1==""||inputValue2=="")
    {
        alert("請將信息輸入完整")
    }
    else if(inputValue1!=inputValue2){
        alert("兩次密碼輸入不一致")
    }
    else{
      userId = getQueryVariable("userid");
      token = getQueryVariable("token");
      newPassword = document.getElementById('pwd1').value
        console.log(2)
        console.log(userId+token);
        postNetworkRequest();
        alert("您的密碼以重置,請重新登陸")
        console.log("success");     
    }
  }
function postNetworkRequest(){
        $.ajax({
            type:'post',
            url: "http://localhost:8000/users/password-reset/"+userId+"/"+token,
            data: {
                newpassword: newPassword,               
              },
              success: function( result ) {
                $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
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

