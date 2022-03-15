var userId ='' ;
var token ='';
var newPassword='';




let passwordinput1=document.getElementById("pwd1").value
let passwordinput2=document.getElementById("pwd2").value
userId = getQueryVariable("userid");
token = getQueryVariable("token");



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
        console.log(userId+token);
        const result=document.getElementById("submit")
        result.addEventListener("click",function(){
        const xhr=new XMLHttpRequest();
        xhr.open('POST',"http://localhost:8000/users/password-reset/"+userId+"/"+token)
        xhr.send("newPassword");
        xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
        if(xhr.status>=200&&xhr.status<300){
        console.log(xhr.status)
        }
          }
    else
    console.log("fail");
  }

})



        
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