package org.ttt.snu.requestScholarship.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.requestScholarship.domain.RequestScholarship;
import org.ttt.snu.requestScholarship.service.requestScholarshipService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class requestScholarshipController {
	
	@Autowired
	private requestScholarshipService rsService;
	
	@RequestMapping(value="/requestScholarship/list.snu", method=RequestMethod.POST)
	public NexacroResult printRequestStudentList(
			@ParamVariable(name="in_Var1") String inVar1) {
		//System.out.println(inVar1);
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<RequestScholarship> rsList = rsService.printStudentList(inVar1);
		if(!rsList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_List", rsList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
