package org.ttt.snu.lectureSchedule.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.lectureSchedule.domain.LectureSchedule;
import org.ttt.snu.lectureSchedule.service.LectureScheduleService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public class LectureScheduleController {
	
	@Autowired
	private LectureScheduleService lsService;
	
	@RequestMapping(value="/lectureSchedule/list.snu", method=RequestMethod.GET)
	public String lectureScheduleList(
			Model model) {
		List<LectureSchedule> lsList = lsService.printLectureScheduleList();
		if(!lsList.isEmpty()) {
			model.addAttribute("lList", lsList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "강의 스케줄 전체조회 실패");
			return "common/errorPage";
		}
	}
	
	@RequestMapping(value="/dept/info.snu", method=RequestMethod.POST)
	public NexacroResult printDeptBypCode(
			@ParamVariable(name="in_var1") String profCode) {
		// ErrorCode, ErrorMsg, Dataset 선언
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Department deptJoin = null;
		List<Department> deptList = new ArrayList<Department>();
		deptList.add(deptJoin);
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
