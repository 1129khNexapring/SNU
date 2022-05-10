package org.ttt.snu.grade.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.ScoreList;
import org.ttt.snu.grade.service.logic.GradeServiceImpl;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class GradeController {
	
	@Autowired
	private GradeServiceImpl gService;
	
	// 강의평가 조회
	@RequestMapping(value="/lectureScore/list.snu", method=RequestMethod.GET)
	public NexacroResult lectureScoreList() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<ScoreList> sList = gService.printAllLE();
		if(!sList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC"; 
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_scoreList", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	
	// 수강장바구니 학생 조회
	@RequestMapping(value="/EnLectureList/list.snu", method=RequestMethod.POST)
	public NexacroResult enLectureListView(
				@ParamVariable(name="in_var1") String pCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<EnrollLectureDomain> EnLectureList = gService.printEnLecture(pCode);
		if(!EnLectureList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC"; 
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_EnLectureList", EnLectureList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
		
		

}
