package org.ttt.snu.admin.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.service.AdminService;
import org.ttt.snu.student.domain.Student;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class AdminController {
	
	@Autowired
	private AdminService aService;
	
	@ResponseBody
	@RequestMapping(value="/login/admincheck.snu", method=RequestMethod.POST)
	public String adminLogin(HttpServletRequest request
							,@ModelAttribute Admin admin
							,@RequestParam("admin_id") String aCode
							,@RequestParam("admin_pwd") String aPassword) {		
		admin.setaCode(aCode);
		admin.setaPassword(aPassword);
		Admin loginUser = aService.checklogin(admin);
		if(loginUser != null) {
			Gson gson = new GsonBuilder().create();
			return gson.toJson(loginUser);
		}else {
			return "fail";
		}
		
		
	}
	
	@RequestMapping(value="/student/list.snu", method=RequestMethod.GET)
	public NexacroResult printStudent() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> studentList = aService.printAllStudent();
		if(!studentList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_Info", studentList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

}
