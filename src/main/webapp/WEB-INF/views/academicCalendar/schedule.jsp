<%@page import="java.util.ArrayList"%>
<%@page import="org.ttt.snu.academicCaldedar.domain.AcademicCalendar"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%
    List<AcademicCalendar> aList = (ArrayList<AcademicCalendar>)request.getAttribute("showSchdule");
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

 <link href='/fullcalendar/main.css' rel='stylesheet' />
  <script src='/fullcalendar/main.js'></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list'],
	  headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
   locale : "ko",
   navLinks: true,
   businessHours: true,
   editable: true,
   evnets: [
    <% 
    	for (int i = 0; i < aList.size(); i++) {
    	 AcademicCalendar acCalendar = (AcademicCalendar)aList.get(i);
    	 
    		
    %>
    	{
    	title: '<%= acCalendar.getAcTitle() %>',
    	start: '<%= acCalendar.getStartDate() %>',
    	end : '<%= acCalendar.getEndDate() %>'    	
    	},
    	<%
    	}
    
    	%>
    	{
    		title: 'default',
        	start: "2022-05-04",
        	end : "2022-05-04"  
    	}
    ]
   
  });

  calendar.render();
});

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		var name = $.trim(this.name)
			value = $.trim(this.value);
		
		if(o[name]) {
			if (!o[name].push) {
				o[name] = [o[name]];
			}
			o[name].push(value || '');
		} else {
			o[name] = value || '';
			
		}
		
	});
	return o;
	
};

	function click_ok() {
		
		var scheduleData = JSON.stringfy($('form#scheduleData').serializeObject());
		
		$.ajax({
				data : scheduleData,
				url : "addSchedule",
				type : "POST",
				dataType : "json",
				contentType : "application/json; charset=UTF-8",
				success : function(data) {
						opener.parent.location.reload();
						window.close();
					
				}
				
		});
	};
</script>
 <style>
 
 .add button {
  	position: absolute;
  	top : 1px;
  	right: 230px;
  	background: #2C3E50;
  	border: 0;
  	color: white;
  	height: 35px;
  	border-radius: 3px;
  	width: 157px;
 </style>

</head>
<body>

<div id='calendar' style="position : reative;">
		<div>
			<button class = "add-button" type = "button" onclick="click_add();">일정 추가</button>
		</div>
</div>



</body>
</html>