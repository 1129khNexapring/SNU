<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 작성</title>
<link rel="stylesheet" href=../resources/css/layout.css>
</head>
<body>

	<jsp:include page="../../layout/inc_header.jsp"></jsp:include>
	
	
	<br><br>
	<form action="/notice/register.snu" method="post" enctype="multipart/form-data">
		<table align="center" border="1">
			<tr>
				<td>제목</td>
				<td><input type="text" size="50" name="noticeTitle"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="hidden" size="50" name="noticeWriter" value="${loginUser.aCode }">${loginUser.aCode }</td>
			</tr>
			<tr>
				<td>내용</td>
				<td><textarea rows="7" cols="50" name="noticeContent"></textarea></td>
			</tr>
			<tr>
				<td>첨부파일</td>
				<td><input type="file" size="50" name="uploadFile"></td>
			</tr>
			
			<tr>
				
			
				
			</tr>
		</table>
		
	</form>
	
					<input type="reset" value="취소" style=float:right;>
					<input type="submit" value="등록" style=float:right;>
	
  <jsp:include page="../../layout/inc_footer.jsp"></jsp:include>
</body>
</html>