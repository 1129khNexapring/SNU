<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>



<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>



<%	request.setCharacterEncoding("UTF-8");
	String root = request.getSession().getServletContext().getRealPath("resources");
	String savePath = root + "\\nuploadFiles";
	int maxSize = 1000*1024*1024;
	
	File folder = new File(savePath);
	if(!folder.exists())
	{
		folder.mkdir();
	}
	
	
	
	



%>