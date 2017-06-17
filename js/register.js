$(function(){
	var phone="";
	var username="";
        $("#mobile").blur(function () {
            phone=$("#mobile").val();              
            if(/^1[3,5,7,8,9]\d{9}$/g.test(phone)) {
                flag1 = true; 
                $(".error").html(""); 
            }else {
                flag1=false;
                $(".error").html("号码不对，不开心~^~");                 
                }
            });
	$("#submit").click(function() {
        if($("#pwd").val()==$("#review").val()) {
            ajaxRequest("post", "php/regist.php", true, {
                "account": $("#txt").val(),
                "secret": $("#pwd").val(),
                "mobile": $("#mobile").val()
                }, function (data) {                    	
                    data = data.replace(/\s+/g, "");
                        if (data == "0"||flag1==false) {
                             $("#txt").val("");
		                     $("#mobile").val("");
		                     $("#pwd").val("");
		                     $("#review").val("");
                             alert("注册失败！！");                           
                        }else{
                        	 $("#txt").val("");
                             $("#mobile").val("");
                             $("#pwd").val("");
                             $("#review").val("");
                             alert("恭喜！！！成功！！！");
                             location.href = 'login.html';
                        }
                    });
                }else{                	
                     $("#pwd").val("");
                     $("#review").val("");
                     alert("两次输入的密码不一致，请重新输入！！");
                }
            });
       })
	
            
    