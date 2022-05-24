package org.ttt.snu.vacationSession.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.vacationSession.domain.VacationSession;
import org.ttt.snu.vacationSession.service.VacationSessionService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class VacationSessionController {

	@Autowired
	private VacationSessionService vsService;
	
	@RequestMapping(value="/season/request.snu", method=RequestMethod.POST)
	public NexacroResult selectAllVs(
			@ParamVariable(name="inVar1") String inVar1,
			@ParamVariable(name="inVar2") String inVar2) {
		
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		VacationSession vs = new VacationSession();
		vs.setsCode(inVar1);
		vs.setlCode(inVar2);
		int iResult = vsService.registerVs(vs);
		if(iResult > 0) {
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
	
	@RequestMapping(value = "/season/requestList.snu", method = RequestMethod.POST)
	public NexacroResult printBook(
				@ParamVariable(name="inVar1") String inVar1) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		VacationSession vs = new VacationSession();
		vs.setsCode(inVar1);
		List<VacationSession> vsList = vsService.printAllRequest(inVar1);
		if (!vsList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_vSession", vsList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
