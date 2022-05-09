package org.ttt.snu.student.controller;


import java.sql.ResultSet;
import java.sql.ResultSetMetaData;


import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import org.ttt.snu.book.domain.Book;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;

import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.service.StudentService;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class StudentController {

	@Autowired
	private StudentService sService;
	
	@Autowired
	private ProfessorService pService;

	@ResponseBody
	@RequestMapping(value = "/login/studentcheck.snu", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public String studentLogin(HttpServletRequest request, @ModelAttribute Student student,
			@RequestParam("student_id") String sCode, @RequestParam("student_pwd") String sPassword) {

		student.setsCode(sCode);
		student.setsPassword(sPassword);
		Student loginUser = sService.checkLogin(student);
		System.out.println(loginUser);
		if (loginUser != null) {
			Gson gson = new GsonBuilder().create();
			return gson.toJson(loginUser);
		} else {
			return "fail";
		}
	}

	@RequestMapping(value = "student/info.snu", method = RequestMethod.POST)
	public NexacroResult studentInfo(@ParamVariable(name = "inVar1") String sCode) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Student> sList = sService.studentInfo(sCode);
		System.out.println(sList);
		if (!sList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_student", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "studentDept/list.snu", method = RequestMethod.POST)
	public NexacroResult studentDept(@ParamVariable(name = "inVar1") String sCode) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Department> dList = sService.studentDept(sCode);
		System.out.println(dList);
		if (!dList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_dept", dList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

		@RequestMapping(value="/student/modify.snu", method=RequestMethod.POST)
		public NexacroResult studentModify(
				@ParamVariable(name="inVar1") String inVar1,
				@ParamVariable(name="inVar2") String inVar2,
				@ParamVariable(name="inVar3") String inVar3,
				@ParamVariable(name="inVar4") String inVar4) {
			int nErrorCode = 0;
			String strErrorMsg = "";
			Student student = new Student();
			student.setsCode(inVar1);
			student.setsPhone(inVar2);
			student.setsAddress(inVar3);
			student.setsEmail(inVar4);
			NexacroResult result = new NexacroResult();
			int uResult = sService.modifyStudent(student);
			if(uResult > 0) {
				nErrorCode = 0;
				strErrorMsg = "승인이 완료됐습니다";
			}else {
				nErrorCode = -1;
				strErrorMsg = "오류가 발생했습니다";
			}
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
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
