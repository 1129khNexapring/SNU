<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 수정</title>
<link rel="stylesheet" href=../resources/css/layout.css>
</head>
<body>
	
	<jsp:include page="../../layout/inc_header.jsp"></jsp:include>

	
	

	<form action="/notice/update.snu" method="post" enctype="multipart/form-data">
	<input type="hidden"  name="noticeNo"value="${notice.noticeNo }">

		<input type="hidden" name="nFileName" value="${notice.nFileName}">
		<input type="hidden" name="nFileReName" value="${notice.nFileReName }">
		<input type="hidden" name="nFilePath" value="${notice.nFilePath }">
		<input type="hidden" name="nExtension" value="${notice.nFilePath }">
		<table align="center" width="500" border="1">
			<tr>
				<td>제목</td>
				<td><input type="text" name="noticeTitle" value="${notice.noticeTitle }"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="hidden" name="noticeWriter" value="${loginUser.aCode }" readonly>${loginUser.aCode }</td>
			</tr>
			<tr>
				<td>내용</td>
				<td><textarea cols="50" name="noticeContent" rows="7">${notice.noticeContent }</textarea></td>
			</tr>
			<tr>
				<td>첨부파일</td>
				

				<td><input type="file" name="reloadFile"></td>
			</tr>
			<tr>
			
					
				
				
			</tr>
		</table>
		<input type="submit" value="수정하기" style=float:right>
	</form>
		<jsp:include page="../../layout/inc_footer.jsp"></jsp:include>
</body>
</html>