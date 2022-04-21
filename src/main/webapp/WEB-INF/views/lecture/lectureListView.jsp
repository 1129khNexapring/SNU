<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 뷰</title>
</head>
<body>
	<table align="center" border="1">
		<!-- 번호, 제목, 작성자, 날짜, 조회수, 첨부파일 -->
		<tr>
			<th>코드</th>
			<th>강의명</th>
			<th>목표</th>
			<th>내용</th>
		</tr>
		<c:forEach items="${lList }" var="lecture">
			<tr>
				<td>${lecture.lCode }</td>
				<td>${lecture.lName }</td>
				<td>${lecture.lObjective }</td>
				<td>${lecture.lContents }</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>