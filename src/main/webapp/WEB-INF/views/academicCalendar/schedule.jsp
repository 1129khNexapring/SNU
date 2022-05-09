<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="java.util.ArrayList"%>
<%@page import="org.ttt.snu.academicCaldedar.domain.AcademicCalendar"%>
<%@page import="java.util.List"%>
   <%
	List<AcademicCalendar> aList = (ArrayList<AcademicCalendar>)request.getAttribute("aList");
%>
<!DOCTYPE html>
<html>
<head>
<title>학사일정</title>
 <style>
 .add-button{
 position: absolute;
 	top : 1px;
 	right : 230px;
 	background: #2C3E50;
 	border: 0;
 	color: white;
 	height: 35px;
 	border-radius: 3px;
 	width: 157px;
 	}
 </style>
 
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="../../resources/js/schedule.js" type="text/javascript"></script>
<link rel="stylesheet" href="../../resources/fullcalendar/main.css">
<script src="../../resources/fullcalendar/main.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



<script>
document.addEventListener('DOMContentLoaded', function() {
	 
    var calenrdarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calenrdarEl, {
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        selectable: true,
        locale: 'ko',
        events: [
        	<% 
        	  for (int i = 0; i < aList.size(); i++) {
        		  AcademicCalendar calendar = (AcademicCalendar)aList.get(i);
      %>	
        	  {
        	   title : '<%= calendar.getTitle() %>',
        	   start : '<%= calendar.getStartDate() %>',
        	   end : '<%= calendar.getEndDate() %>'
        	   },
      <%
      	}
      %>
      		{
      		   title : 'defult',
      		   start : "2022-05-18",
      		   end : "2022-05-19",
      		   allDay : true
      		  
      		  }
        ]
      });

      calendar.render();
    });

</script>


</head>
<body>

<div id='calendar' style="position : relative;">
</div>
		<div>
			<button class ="add-button" type="button" onclick="click_add();">일정 추가</button>
		</div>



</body>
</html>