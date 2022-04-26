<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
    	<table align="center" width="600" border="1">
								<thead>
									<tr>
										<input type="hidden" id="noticeNo" name="noticeNo"
											value="${notice.noticeNo }" />
										<th colspan="2" >${notice.noticeTitle }</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td ><span > <strong>작성일</strong>
												${notice.noticeDate }
										</span> <span > <strong>작성자</strong>
												${notice.noticeWriter }
										</span></td>

										<td > <strong>조회수</strong>
												${notice.noticeCount }
										</span></td>
									</tr>
									<tr >
										<td colspan="2" >
											<p>${notice.noticeContent}</p>
										</td>
									</tr>
									<tr>
			<td>첨부파일</td>
			<td>
				<a href="../../../resources/nuploadFiles/${notice.nFileName }" download>
				${notice.nFileName }
				</a>
			</td>
		</tr>
			
								</tbody>
							</table>
							<tr>
			<td colspan="2" align="center">
				<c:url var="nModify" value="/notice/modifyView.snu">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<c:url var="nDelete" value="/notice/delete.snu">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<a href="${nModify }">수정</a>
				<a href="${nDelete }">삭제</a>
			</td>
		</tr>
	
							<footer id="footer" >
		<p>Copyright © 2022 TTT.co.,Ltd. All rights reserved.</p>
    </footer>
</body>
</html>