package org.ttt.snu.department.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.department.service.DepartmentService;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class DepartmentController {
	
	@Autowired
	private DepartmentService dService;
	
	@Autowired
	private ProfessorService pService;
	
	// 교수 학과 정보 조회
	@RequestMapping(value="/dept/info.snu", method=RequestMethod.POST)
	public NexacroResult printDeptBypCode(
			@ParamVariable(name="in_var1") String pCode) {
		// ErrorCode, ErrorMsg, Dataset 선언
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Department dept = dService.printDeptBypCode(pCode);
		List<Department> deptList = new ArrayList<Department>();
		deptList.add(dept);
		if(!deptList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_dept", deptList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
}
