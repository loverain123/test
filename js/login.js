$(function(){	
	var oDate = new Date();				
        $("#submit").click(function() {
            oDate.setDate(oDate.getDate() + 7);//将数据添加到cookie中
			document.cookie = 'username='+encodeURIComponent($("#txt").val())+';expires=' + oDate;
			document.cookie = 'password='+encodeURIComponent($("#pwd").val())+';expires=' + oDate;
                ajaxRequest("post", "php/login.php", true, {
                    "user": $("#txt").val(),
                    "pwd": $("#pwd").val()
                }, function (data) {
                    data=data.replace(/\s+/g,"");                   
                    if(data!="0") {                    	                     
                         location.href = 'index.html';
                    }else{
                    	$("#txt").val("");
                    	$("#pwd").val("");
                        alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
                    }
                });
            });    
       })
	