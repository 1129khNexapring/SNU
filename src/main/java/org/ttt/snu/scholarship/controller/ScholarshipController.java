package org.ttt.snu.scholarship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.scholarship.domain.Scholarship;
import org.ttt.snu.scholarship.service.ScholarshipService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ScholarshipController {
	@Autowired
	private ScholarshipService scService;
	
	@RequestMapping(value="/money/list.snu", method=RequestMethod.GET)
	public NexacroResult printSch() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> schList = scService.printAllSch();
		if(!schList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_sch", schList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/request/schlist.snu", method=RequestMethod.POST)
	public NexacroResult printRequestSch(
			@ParamVariable(name="inVar1") String sCode) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> schList = scService.printRequestSch(sCode);
		System.out.println(schList);
		if(!schList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_sch", schList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	

	
	@RequestMapping(value="/scholarship/list.snu", method=RequestMethod.GET)
	public NexacroResult printScholarship() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> scList = scService.printAllScholarship();
		if(!scList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_scholarship", scList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	
	@RequestMapping(value="/scholarship/changeInfo.snu", method=RequestMethod.POST)
	public NexacroResult changeScholarshipInfo(
			@ParamDataSet(name="in_scholarship") DataSet inScholarship) throws Exception {
		int  	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i; 
		//DELETE
		for(i=0; i<inScholarship.getRemovedRowCount(); i++) {
			String scCode = inScholarship.getRemovedData(i, "scCode").toString();
			scService.removeScholarship(scCode);
		}
		//INSERT, UPDATE
		int iResult = 0;
		int uResult = 0;
		for(i=0; i<inScholarship.getRowCount(); i++) {
			int rowType = inScholarship.getRowType(i);
			String scCode = 			dsGet(inScholarship, i, "scCode");
			String scName = 			dsGet(inScholarship, i, "scName");
			int amount =Integer.parseInt(dsGet(inScholarship, i, "amount"));
			String scCondition =		dsGet(inScholarship, i, "scCondition");
			String scDate      =		dsGet(inScholarship, i, "scDate");
			String scStatus    = 		dsGet(inScholarship, i, "scStatus");
			String dCode       =		dsGet(inScholarship, i, "dCode");
			String scEnrollDate=		dsGet(inScholarship, i, "scEnrollDate");
			Scholarship scholarship = new Scholarship(scCode, scName, amount, scCondition, scDate, scStatus, dCode, scEnrollDate);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += scService.registerScholarship(scholarship);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED)
			{
				//scOrgCode = inScholarship.getSavedData(i, "scCode").toString();
				//scholarship.setScCode(scCode);
				scholarship.setScCode(inScholarship.getSavedData(i, "scCode").toString());
				uResult += scService.modifyScholarship(scholarship);
			}
			
		}
			if(iResult < 0 && uResult < 0) {
				nErrorCode = -1;
				strErrorMsg = "Fail";
			}else {
				nErrorCode = 0;
				strErrorMsg = "SUCC";
			}
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
	}
	
	
	// Dataset value
				public String dsGet(DataSet ds, int rowno, String colid) throws Exception
				{
				    String value;
				    value = ds.getString(rowno, colid);
				    if( value == null )
				        return "";
				    else
				        return value;
				} 
}
