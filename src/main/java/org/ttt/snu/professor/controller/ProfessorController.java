package org.ttt.snu.professor.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.department.service.DepartmentService;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;


@Controller
public class ProfessorController {
	
	@Autowired
	private ProfessorService pService;
	
	@Autowired
	private DepartmentService dService;
	
	@ResponseBody
	@RequestMapping(value="/login/professorcheck.snu", method=RequestMethod.POST)
	public String professorLoginCheck(
			Model model
			, HttpServletRequest request
			, @RequestParam("professor_id") String id
			, @RequestParam("professor_pwd") String pwd) {
		Professor p = pService.printProfessorById(id);
		if(p.getpPassword().equals(pwd)) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(p);
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return null;
		}
	}
	
	@RequestMapping(value="/prof/deptList.snu", method=RequestMethod.POST)
	public NexacroResult professorDeptList(
			@ParamVariable(name="in_var1") String pCode
			) {
		
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Professor p = pService.printProfessorById(pCode);
		String dCode = p.getdCode();
		List<Professor> pList = pService.printProfessorListBydCode(dCode);
		if(!pList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_prof", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;

	}
	
	@RequestMapping(value="/prof/selectProfBypCode.snu", method=RequestMethod.POST)
	public NexacroResult selectProfBypCode(
			@ParamVariable(name="in_var1") String pCode
			) {
		
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Professor p = pService.printProfessorById(pCode);
		List<Professor> pList = new ArrayList<Professor>();
		pList.add(p);
		if(!pList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_prof", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;

	}
}