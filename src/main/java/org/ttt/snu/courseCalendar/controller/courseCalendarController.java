package org.ttt.snu.courseCalendar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.courseCalendar.service.courseCalendarService;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class courseCalendarController {
	@Autowired
	private courseCalendarService ccService;
	
	@RequestMapping(value="/calendar/list.snu", method=RequestMethod.GET)
	public NexacroResult getCalendar()
	{	
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		courseCalendar cc = new courseCalendar();
		cc.setTitle("수강");
		List<courseCalendar> ccList = ccService.getCalendar(cc);
		System.out.println(ccList);
		if(!ccList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "success";
		}else {
			nErrorCode = -1;
			strErrorMsg = "fail";
		}
		result.addDataSet("outCalendar", ccList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
