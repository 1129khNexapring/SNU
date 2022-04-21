package org.ttt.snu.student.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.service.StudentService;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class StudentController {
	
	@Autowired
	private StudentService sService;

	@ResponseBody
	@RequestMapping(value="/login/studentcheck.snu", method=RequestMethod.POST, produces="application/json;charset=utf-8")
	public String studentLogin(
			HttpServletRequest request
			, @ModelAttribute Student student
			, @RequestParam("student_id") String sCode
			, @RequestParam("student_pwd") String sPassword) {
		
		student.setsCode(sCode);
		student.setsPassword(sPassword);
		Student loginUser = sService.checkLogin(student);
		System.out.println(loginUser);
		if(loginUser != null) {
			Gson gson = new GsonBuilder().create();
			return gson.toJson(loginUser);
		}else {
			return "fail";
		}
		
	
}
}
