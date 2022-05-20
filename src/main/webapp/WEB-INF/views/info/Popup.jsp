<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
font-family: SF Pro KR, SF Pro Display, SF Pro Icons, AOS Icons, Apple Gothic,
	HY Gulim, MalgunGothic, HY Dotum, Lexi Gulim, Helvetica Neue, Helvetica,
	Arial, sans-serif ;
.layerPopup img {
	margin-bottom: 20px;
}

.layerPopup:before {
	display: block;
	content: "";
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9000;
	background:rgba(0,0,0,.5);
}

.layerPopup .layerBox {
	z-index: 10000;
	position: fixed;
	left: 85%;
	top: 48%;
	width: 300px;
    height: 400px;
	transform: translate(-50%, -50%);
	padding: 30px;
	background: #fff;
	border-radius: 6px;
}

.layerPopup .layerBox .title {
	margin-bottom: 10px;
	padding-bottom: 10px;
	font-weight: 600;
	border-bottom: 1px solid #d9d9d9;
}

.layerPopup .layerBox .btnTodayHide {
	font-size: 14px;
	font-weight: 600;
	color: black;
	float: left;
	text-decoration: none;
	width: 150px;
	height: 30px;
	line-height: 30px;
	border: black solid 1px;
	text-align: center;
	text-decoration: none;
	padding-top : 350px;
}

.layerPopup div {
	display: inline;
}

.layerPopup form {
	margin-top: 5px;
	font-size: 16px;
	font-weight: 600;
	weight: 100%;
	height: 30px;
	line-height: 30px;
	padding-top:350px;
}

.layerPopup #close {
	font-size: 16px;
	font-weight: 600;
	width: 40px;
	height: 30px;
	color: black;
	float: right;
	line-height: 30px;
	text-align: center;
	text-decoration: underline;
}

.layerPopup a {
	text-decoration: none;
	color: black;
	width: 50px;
	height: 40px;
}
</style>



<script>
   



   
    var getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }

      
    var setCookie = function (cname, cvalue, exdays) {
        var todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        var expires = "expires=" + todayDate.toUTCString(); 
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var couponClose = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("close","Y",1);   
        }
        $("#layer_popup").hide();
    }
    
    $(document).ready(function(){
        var cookiedata = document.cookie;
        if(cookiedata.indexOf("close=Y")<0){
            $("#layer_popup").show();
        }else{
            $("#layer_popup").hide();
        }
        $("#close").click(function(){
            couponClose();
        });
    });
</script>

</head>
<body>


<!-- layer popup content -->
<div class="layerPopup" id="layer_popup" style="visibility: visible;">

    <div class="layerBox">
        
        <div class="cont">
<!--          팝업메세지에 db의값을 가져오기 위해서는 팝업이 메인페이지에 포함되어있기때문에 
				index.jsp에 로직을 태우기위해서 HomeController에 로직을 작성해줘야한다 -->
	 <table>
		
		<c:forEach items="${iList}" var="info">
			<tr>
				
				<td>${info.infoContent }</td>
			</tr>
		</c:forEach>
	</table>
        </div>
          <form name="pop_form">
        
        <span id="check"><input type="checkbox" value="checkbox" name="chkbox" id="chkday"/><label for="chkday">오늘 하루동안 보지 않기</label></span>
                <span id="close">닫기</span>
		</form>
	</div>
</div>


</body>


</html>