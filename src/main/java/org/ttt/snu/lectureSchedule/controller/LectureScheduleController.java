package org.ttt.snu.lectureSchedule.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class LectureScheduleController {
	
	@Autowired
	private LectureService lService;
	
	//강의계획서조회화면
		@RequestMapping(value="/lecture/viewlist.snu", method=RequestMethod.POST)
		public NexacroResult viewList(
				@ParamVariable(name="inVar1") String sCode) {
			int    nErrorCode  = 0;
			String strErrorMsg = "START";
			NexacroResult result = new NexacroResult();
			List<Lecture> lList = lService.viewList(sCode);
			System.out.println(lList);
			if(!lList.isEmpty()) {
				nErrorCode  = 0;
				strErrorMsg = "SUCC";
			}else {
				nErrorCode  = -1;
				strErrorMsg = "FAIL";
			}
			result.addDataSet("out_lecture", lList);
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
		}
}
