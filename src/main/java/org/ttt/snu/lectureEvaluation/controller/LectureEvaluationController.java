package org.ttt.snu.lectureEvaluation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.lectureEvaluation.service.LectureEvaluationService;
import org.ttt.snu.student.domain.Student;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class LectureEvaluationController {

	@Autowired
	private LectureEvaluationService leService;
	
	@RequestMapping(value="/score/register.snu", method=RequestMethod.POST)
	public NexacroResult scoreRegister(
			@ParamVariable(name="inVar1") String inVar1,
			@ParamVariable(name="inVar2") String inVar2,
			@ParamVariable(name="inVar3") int inVar3) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		LectureEvaluation le = new LectureEvaluation();
		le.setsCode(inVar1);
		le.setlCode(inVar2);
		le.setLeScore(inVar3);
		NexacroResult result = new NexacroResult();
		int iResult = leService.registerScore(le);
		if(iResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/score/modify.snu", method=RequestMethod.POST)
	public NexacroResult scoreModify(
			@ParamVariable(name="inVar1") String inVar1,
			@ParamVariable(name="inVar2") String inVar2,
			@ParamVariable(name="inVar3") int inVar3) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		LectureEvaluation le = new LectureEvaluation();
		le.setsCode(inVar1);
		le.setlCode(inVar2);
		le.setLeScore(inVar3);
		NexacroResult result = new NexacroResult();
		int uResult = leService.modifyScore(le);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
