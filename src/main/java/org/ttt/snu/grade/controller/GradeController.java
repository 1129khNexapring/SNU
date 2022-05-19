package org.ttt.snu.grade.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.ScoreList;
import org.ttt.snu.grade.service.GradeService;
import org.ttt.snu.grade.service.logic.GradeServiceImpl;
import org.ttt.snu.lecture.domain.Lecture;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class GradeController {
	
	@Autowired
	private GradeServiceImpl gService;
	
	@Autowired
	private GradeService ggService;

	
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
	
	// 성적 입력 저장
	@RequestMapping(value="/grade/save.snu", method=RequestMethod.POST)
	public NexacroResult gradeSave(
				  @ParamVariable(name="inVar1") String sCode
				, @ParamVariable(name="inVar2") String lCode
				, @ParamVariable(name="inVar3") String gCode) {
		NexacroResult result = new NexacroResult();
		int 	nErrorCode  = 0;
		String  strErrorMsg = "START";
		Grade grade  = new Grade();
		System.out.println(sCode);
		System.out.println(lCode);
		System.out.println(gCode);
		grade.setsCode(sCode);
		grade.setlCode(lCode);
		grade.setgCode(gCode);
		int iResult = gService.registerGrade(grade);
		if(iResult < 0) {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("errorMsg", strErrorMsg);
		return null;
	}
		
	//학생 성적조회
	@RequestMapping(value ="/grade/list.snu", method = RequestMethod.POST)
	public NexacroResult printGrade(
			@ParamVariable(name="inVar1") String sCode) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = ggService.printGrade(sCode);
		if (!lList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_grade", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}


}
