<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 페이지</title>

<link rel="stylesheet" href=./resources/css/login.css>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../resources/js/login.js" async></script>
</head>
<body>
	
	<section id="main">
	
	<%@ include file="/WEB-INF/layout/inc_login.jsp" %>
	
	</section>
	
	<script>
	$("#login-student").on("click", function() {
		var student_id = $("#student_id").val();
		var student_pwd = $("#student_pwd").val();
		$.ajax({
			url : "/login/studentcheck.nexa",
			type : "POST",
			data : {"student_id" : student_id, "student_pwd" : student_pwd},
			dataType : "json",
			success : function(loginUser) {
				if(loginUser != null) {
										console.log(loginUser.studentId);
					location.href='/nexaui/index.html?ev_Val='+loginUser.studentId+'&ev_Val1='+loginUser.studentPwd+'';
				}				
			},
			error : function() {
				alert("로그인 실패했습니다");
			}
		});
	});
				
				
					
	
	$("#login-professor").on("click", function() {
		var professor_id = $("#professor_id").val();
		var professor_pwd = $("#professor_pwd").val();
		$.ajax({
			url : "/login/professorcheck.nexa",
			type : "POST",
			data : {"professor_id" : professor_id, "professor_pwd" : professor_pwd},
			success : function(data) {
				if(data == "success") {
				location.href='/nexaui2/index.html';					
				}else {
					alert("ajax실패");
				}
			},
			error : function() {
				
			}
		});		
	});
	
	$("#login-admin").on("click", function() {
		var admin_id = $("#admin_id").val();
		var admin_pwd = $("#admin_pwd").val();
		$.ajax({
			url : "/login/admincheck.snu",
			type : "POST",
			data : {"admin_id" : admin_id, "admin_pwd" : admin_pwd},
			dataType : "json",
			success : function(loginUser) {
				if(loginUser != null) {
					console.log(loginUser);
					//location.href='/nexaui3/index.html';
				}else {
					alert("xx");
				}
			},
			error : function() {
				
			}
		});
	});
	
	
	
	
	</script>
</body>
</html>