package org.ttt.snu.lecture.controller;

import java.util.HashMap;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;

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
	
	//관리자-승인된 강의계획서 조회
	@RequestMapping(value="/Ylecture/list.snu", method=RequestMethod.POST)
	public NexacroResult printLecture(
			 @ParamVariable(name="in_Var1") String inVar1
			,@ParamVariable(name="in_Var2") String inVar2) {
		Lecture lecture = new Lecture();
		lecture.setdCode(inVar1);
		lecture.setlType(inVar2);	
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.printAllYLecture(lecture);
		if(!lList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_lecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//관리자-미승인 강의계획서조회
	@RequestMapping(value="/Nlecture/list.snu", method=RequestMethod.POST)
	public NexacroResult printNLecture(
			 @ParamVariable(name="in_Var1") String inVar1
			,@ParamVariable(name="in_Var2") String inVar2) {
		Lecture lecture = new Lecture();
		lecture.setdCode(inVar1);
		lecture.setlType(inVar2);
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.printAllNLecture(lecture);
		if(!lList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_Nlecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 강의계획서 승인
	@RequestMapping(value="/lecture/approve.snu" , method=RequestMethod.POST)
	public NexacroResult approveLecture(
			@ParamVariable(name="in_Var1") String inVar1) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int uResult = lService.modifyLectureStatus(inVar1);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		//result.addDataSet();
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

		
		
	

}
