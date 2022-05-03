package org.ttt.snu.reserveforce.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.reserveforce.service.ReserveforceService;
import org.ttt.snu.student.domain.Student;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ReserveforceController {
	@Autowired
	private ReserveforceService rfService;
	
	//예비군 신청 리스트 조회
	@RequestMapping(value="/reservist/list.snu", method=RequestMethod.GET)
	public NexacroResult printReserveforceList()
	{	
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Reserveforce> rfList = rfService.printRfList();
		//Map<String, Object> map = new HashMap();
		//List<Map<String, Object>> map = rfService.printStudent();
//		List<HashMap<String, Object>> map = rfService.printStudent();
//		System.out.println(map.get(0));
//		System.out.println(map.size());
//		
//		DataSet outMap = new DataSet(); 
//		outMap.add
//		for(int i=0; i<map.size(); i++) {
//			//outMap.set
//		}
//		System.out.println(outMap);
		List<Student> sList = rfService.printStudent();
		if(!rfList.isEmpty() && !sList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "조회성공";
		}else {
			nErrorCode = -1;
			strErrorMsg = "조회실패";
		}
		
		result.addDataSet("out_rfList", rfList);	
		result.addDataSet("out_sList", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
		
	}
	@RequestMapping(value="/reserveforce/approve.snu", method=RequestMethod.POST)
	public NexacroResult approveReserveforce(
			@ParamVariable(name="in_Var1") String inVar1) {
		int nErrorCode = 0;
		String strErrorMsg ="";
		NexacroResult result = new NexacroResult();
		Reserveforce reserveforce = new Reserveforce();
		reserveforce.setsCode(inVar1);
		int uResult = rfService.modifyStatus(reserveforce);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
