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
<header id="header">
        <div id="header-layer1"></div>
        <div id="header-layer2"></div>
        <div id="header-layer3"></div>
        <div id="header-layer4"></div>
        <div id="header-layer5"><a href="/login.snu">상남대 학사정보시스템</a></div>
    </header>
    <nav id="navi">
        <ul>
            <li><a href="#" target="_blank">상남대 소개</a></li>
            <li><a href="#" target="_blank">입학안내</a></li>
            <li><a href="/lecture/list.snu" target="_blank">강의리스트</a></li>
            <li><a href="#" target="_blank">대학★대학원</a></li>
            <li><a href="/notice/list.snu" target="_blank">공지사항</a></li>
        </ul>
    </nav>
    
     <main id="main">
        <img src="../resources/img/campus.png" alt="캠퍼스이미지" height="450px" width="100%">
    </main>
    

	
	<br><br>
	<form action="/notice/register.snu" method="post" enctype="multipart/form-data">
		<table align="center" border="1">
			<tr>
				<td>제목</td>
				<td><input type="text" size="50" name="noticeTitle"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="text" size="50" name="noticeWriter"></td>
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
				<td>
					<input type="submit" value="등록">
					<input type="reset" value="취소">
				</td>
				
			</tr>
		</table>
	</form>
	
  <footer id="footer">
		<p>Copyright © 2022 TTT.co.,Ltd. All rights reserved.</p>
    </footer>
</body>
</html>