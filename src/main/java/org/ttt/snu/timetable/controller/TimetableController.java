package org.ttt.snu.timetable.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.timetable.domain.Timetable;
import org.ttt.snu.timetable.service.TimetableService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class TimetableController {
	@Autowired
	private TimetableService ttService;
	//넥사크로 학생 시간표 조회
	@RequestMapping(value="/timetable/list.snu",method=RequestMethod.POST)
	public NexacroResult timetableByStudent(
			@ParamVariable(name="in_Var1") String inVar1)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Timetable> tList = ttService.printTimetable(inVar1);
		if(!tList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("outTimetable", tList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
