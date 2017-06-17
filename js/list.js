$(function(){
	  function play2(){
   		 $.ajax({
		   url:"http://route.showapi.com/213-4?showapi_appid=38102&showapi_sign=99a89896cc494df1aa6c2a3555c042ae&topid=5&",
	     type: 'GET',
		   dataType: 'json',
	     })
	  .done(function(data) {
	     var muc=data["showapi_res_body"]["pagebean"]["songlist"];  
	     var count = muc.length;
		      for(var i=0;i<count;i++){		    	
		    	  $("#itemContainer").append('<li><div class="img"><a class="yi1" href="###"><img src="'+muc[i]["albumpic_big"]+'"/></a>'+				
				    '<p class="introduce"><a href="###">'+muc[i]["songname"]+"   "+muc[i]["singername"]+'</a></p></li>');
		        $(".aud").append('<audio src="'+muc[i]["url"]+'" ></audio>');
		       }
		        $(".aud audio:first-child").addClass("ck");
		        $("div.holder").jPages({
				    containerID : "itemContainer"
				  });
				    var flag2=1;
		          $("#itemContainer li").click(function(){        
	            var k=$(this).index();		            
	          	$(".aud audio").eq(k).addClass("ck").siblings().removeClass("ck");	          	         
			           if(flag2){
			           	  $(".ck")[0].play();
			           	   for(let i=0;i<$(".ck").siblings("audio").length;i++){
			            	$(".ck").siblings("audio")[i].pause();
			            	flag2=!flag2;
			              }
			           }else{
			           	$(".ck")[0].pause();
			           	flag2=!flag2;
			           }
			        });
	         })
	      };
	  play2();
  })
