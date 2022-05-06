package org.ttt.snu.lecture.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class LectureController {
	
	@Autowired
	private LectureService lService;
	
	@RequestMapping(value="/lecture/list.snu", method=RequestMethod.GET)
	public String boardListView(
			Model model) {
		List<Lecture> lList = lService.printAllLectures();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return "common/errorPage";
		}
	}
	
	@RequestMapping(value="/lecturePlan/list.snu", method=RequestMethod.GET)
	public String lecturePlanList(
			Model model) {
		List<Lecture> lList = lService.printLecturePlanList();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
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
