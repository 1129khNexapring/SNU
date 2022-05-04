<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 페이지</title>
<link rel="stylesheet" href="/resources/css/layout.css">

<style>
	
</style>
</head>
<body>
	
	<c:if test="${loginUser ne null}">
					<a href="/logout.snu" > <span></span> 로그아웃
					</a>
				</c:if>


	<jsp:include page="../../layout/inc_header.jsp"></jsp:include>
	
	

	<table align="center" width="600" border="1">
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>

		</tr>
		<c:forEach items="${nList}" var="notice">
			<tr>
				<td>${notice.noticeNo }</td>
				<td><c:url var="nDetail" value="/notice/Detail.snu">
						<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
					</c:url> <a href="${nDetail }">${notice.noticeTitle }</a></td>
				<td>${notice.noticeWriter }</td>
				<td>${notice.noticeDate }</td>
				<td>${notice.noticeCount }</td>
			</tr>
		</c:forEach>
	</table>
<%-- 	 <c:if test="${loginUser.aCode == 'admin' }"> --%>
<div>	<a href="/notice/writeView.snu" style=float:right>글쓰기</a></div>	
<%-- 	</c:if> --%>
	
	<div class="paging" style=text-align:center>
		<c:if test="${pi.startNavi == 1 }">
			<a href="/notice/list.snu?page=1"> <i >
					<button class="on">이전
			</i>
				</button></a>

		</c:if>
		<c:if test="${pi.prev}">

			<a href="/notice/list.snu?page=${pi.startNavi-1}"> <i>
					<button >이전
			</i>
				</button>
			</a>
		</c:if>

		<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
			<c:url var="noticePagination" value="/notice/list.snu">
				<c:param name="page" value="${p }"></c:param>
			</c:url>

			<a href="${noticePagination }"><button>${p }</button></a>
																		
									</c:forEach>


		<c:if test="${pi.next && pi.endNavi > 0}">

			<a href="/notice/list.snu?page=${pi.currentPage+1}"> <i
				>
					<button>다음
			</i>
				</button>
			</a>

		</c:if>

	</div>

<jsp:include page="../../layout/inc_footer.jsp"></jsp:include>

</body>
</html>