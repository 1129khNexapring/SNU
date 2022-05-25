package org.ttt.snu.qna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.qna.domain.Qna;
import org.ttt.snu.qna.domain.QnaReply;
import org.ttt.snu.qna.service.QnaService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class QnaController {

	@Autowired
	private QnaService qService;

	@RequestMapping(value = "/qna/list.snu", method = RequestMethod.POST)
	public NexacroResult printQna() {
		Qna qna = new Qna();
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Qna> qList = qService.printAllQna(qna);
		if (!qList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_qna", qList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/qna/count.snu", method = RequestMethod.POST)
	public NexacroResult updateCount(
			@ParamVariable(name = "inVar1") int inVar1,
			@ParamVariable(name = "inVar2") int inVar2) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Qna qna = new Qna();
		qna.setQnaNo(inVar1);
		qna.setQnaCount(inVar2+1);
		NexacroResult result = new NexacroResult();
		int uResult = qService.updateCount(qna);
		if (uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		} else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/qna/register.snu", method=RequestMethod.POST)
	public NexacroResult bookRegister(
			@ParamVariable(name="inVar1") String inVar1,
			@ParamVariable(name="inVar2") String inVar2,
			@ParamVariable(name="inVar3") String inVar3) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Qna qna = new Qna();
		qna.setQnaTitle(inVar1);
		qna.setQnaContent(inVar2);
		qna.setsCode(inVar3);
		NexacroResult result = new NexacroResult();
		int iResult = qService.registerQna(qna);
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
	
	//댓글리스트 조회
	@RequestMapping(value="/qnaReply/list.snu")
	public NexacroResult qnaReplyList(@ParamVariable(name="in_var1") int  qnaNo) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<QnaReply> qnaReply = qService.printAllQnaReply(qnaNo);
		System.out.println(qnaReply);
		if(!qnaReply.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}	
		result.addDataSet("out_qnaReply", qnaReply);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
		
	@RequestMapping(value="/qnaReply/register.snu", method=RequestMethod.POST)
	public NexacroResult qnaReplyRegister(
				  @ParamVariable(name="in_var1") int qnaNo
				, @ParamVariable(name="in_var2") String qnaReplyContent
				) {
		System.out.println(qnaNo);
		System.out.println(qnaReplyContent);
		int nErrorCode = 0;
		String strErrorMsg = "";
		QnaReply qnaReply = new QnaReply();
		NexacroResult result = new NexacroResult();
		qnaReply.setQnaNo(qnaNo);
		qnaReply.setQnaReplyContent(qnaReplyContent);
		int qResult = qService.registerQnaReply(qnaReply);
		if(qResult > 0) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	@RequestMapping(value="/qnaReply/modify.snu", method=RequestMethod.POST)
	public NexacroResult modifyQnaReply(
					@ParamVariable(name="in_var1") int qnaNo
					,@ParamVariable(name="in_var2") int qnaReplyNo
					,@ParamVariable(name="in_var3") String qnaReplyContent
					) {
		
			System.out.println(qnaReplyNo);
			System.out.println(qnaReplyContent);
			int nErrorCode = 0;
			String strErrorMsg = "";
			QnaReply qnaReply = new QnaReply();
			NexacroResult result = new NexacroResult();
			qnaReply.setQnaNo(qnaNo);
			qnaReply.setQnaReplyNo(qnaReplyNo);
			qnaReply.setQnaReplyContent(qnaReplyContent);
			int uResult = qService.modifyQnaReply(qnaReply);
				if(uResult > 0) {
					nErrorCode  = 0;
					strErrorMsg = "SUCC";
				}else {
					nErrorCode  = -1;
					strErrorMsg = "FAIL";
				}
				result.addVariable("ErrorCode", nErrorCode);
				result.addVariable("ErrorMsg", strErrorMsg);
				return result;
	}
	@RequestMapping(value="/qnaReply/delete.snu", method=RequestMethod.POST)
	public NexacroResult removeQnaReply(@ParamVariable(name="in_var1") int qnaReplyNo) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		QnaReply qnaReply = new QnaReply();
		qnaReply.setQnaReplyNo(qnaReplyNo);
		int dResult = qService.removeQnaReply(qnaReply);
		if(dResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
			
		}else {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
			
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
}
