package org.ttt.snu.student.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.service.StudentService;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class StudentController {
	
	@Autowired
	private StudentService sService;
	
	@Autowired
	private ProfessorService pService;

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
	
	@RequestMapping(value="/student/ingList.snu", method=RequestMethod.POST)
	public NexacroResult stntIngList(
			@ParamVariable(name="in_var1") String pCode
			) {
		
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Professor p = pService.printProfessorById(pCode);
		String dCode = p.getdCode();
		List<Student> sList = sService.printIngStntBydCode(dCode);
		if(!sList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_stnt", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;

	}
	
}
