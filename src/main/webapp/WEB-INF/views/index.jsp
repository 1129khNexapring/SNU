<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SN University</title>
<link rel="stylesheet" href=./resources/css/layout.css>
</head>
<body>
	
<!-- 팝업 -->

<jsp:include page="/WEB-INF/views/info/Popup.jsp"/>


 <h1>${loginUser.aCode}</h1>
	<%@ include file="/WEB-INF/layout/inc_header.jsp" %>
		
	<%@ include file="/WEB-INF/layout/inc_main.jsp" %>
	
	<%@ include file="/WEB-INF/layout/inc_footer.jsp" %>
</body>
</html>	