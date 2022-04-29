package org.ttt.snu.transfer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.service.TransferService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class TransferController {

	@Autowired
	private TransferService tService;
	
	
	@RequestMapping(value="/movedept/list.snu", method=RequestMethod.POST)
	public NexacroResult deptListView(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> sList = tService.printAll(sCode);
		System.out.println(sList);
		if(!sList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_dept", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/allDept/list.snu", method=RequestMethod.GET)
	public NexacroResult allDept() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Department> dList = tService.printAllDept();
		if(!dList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("outDept", dList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	
}
