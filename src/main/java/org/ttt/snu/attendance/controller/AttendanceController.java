package org.ttt.snu.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.attendance.service.logic.AttendanceServiceImpl;
import org.ttt.snu.lecture.domain.Lecture;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class AttendanceController {
	
	@Autowired
	private AttendanceServiceImpl aService;
	
	// 출결관리 교과목명 조회
	@RequestMapping(value="/attendance/list.snu", method=RequestMethod.GET)
	public NexacroResult lectureListView() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lectureList = aService.printLecture();
		if(!lectureList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC"; 
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_lectureList", lectureList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
}
