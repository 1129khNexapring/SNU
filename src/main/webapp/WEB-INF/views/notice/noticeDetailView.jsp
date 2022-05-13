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
	<jsp:include page="../../layout/inc_header.jsp"></jsp:include>
	
    	
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
				<a href="${nDelete }" style=float:right>삭제</a>
				<a href="${nModify }" style=float:right style=padding:10px;>수정</a>
			</td>
		</tr>
	
				<jsp:include page="../../layout/inc_footer.jsp"></jsp:include>
</body>
</html>