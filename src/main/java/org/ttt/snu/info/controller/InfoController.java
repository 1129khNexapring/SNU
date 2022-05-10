package org.ttt.snu.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.ttt.snu.common.NoticePagenation;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.service.InfoService;
import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.service.NoticeService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
@Controller
public class InfoController {

	@Autowired
	private InfoService iService;
	
	
	public String NoticeListView(Model model ) {
		List<Info> iList = iService.printAll();
		if (!iList.isEmpty()) {
			model.addAttribute("iList", iList);
			
			return "/info/popup";
		} else {
			model.addAttribute("msg", "조회실패");
			return "common/errorpage";
		}

	}
	
	//관리자 학교알림이 넥사크로에서 조회
	@RequestMapping(value="/info/list.snu", method=RequestMethod.GET)
	public NexacroResult printAllinfo()
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Info> iList = iService.printAllNInfo();
		if(!iList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "fail";
		}
		result.addDataSet("out_info", iList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//관리자 학교알림이 등록(넥사크로)
	@RequestMapping(value="/info/write.snu", method=RequestMethod.POST)
	public NexacroResult registerInfo(
			@ParamVariable(name="in_Var1") String title)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Info info = new Info();
		info.setaCode("admin");
		info.setInfoContent(title);
		int iResult = iService.registerInfo(info);
		if(iResult>0)
		{
			nErrorCode = 0;
			strErrorMsg = "등록이 완료됐습니다.";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다.";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 학교알림이 수정(넥사크로)
	@RequestMapping(value="/info/modify.snu", method=RequestMethod.POST)
	public NexacroResult modifyInfo(
			@ParamVariable(name="in_Var1") int inVar1
			,@ParamVariable(name="in_Var2") String inVar2)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Info info = new Info();
		info.setInfoNo(inVar1);
		info.setInfoContent(inVar2);
		int uResult = iService.modifyInfo(info);
		if(uResult > 0)
		{
			nErrorCode = 0;
			strErrorMsg = "수정이 완료됐습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다!";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 학교알림이 내리기(넥사크로)
	@RequestMapping(value="/info/close.snu", method=RequestMethod.POST)
	public NexacroResult closeInfo(
			@ParamVariable(name="in_Var1") int inVar1)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Info info = new Info();
		info.setInfoNo(inVar1);
		int uResult = iService.closeInfo(info);
		if(uResult > 0)
		{
			nErrorCode = 0;
			strErrorMsg = "게시글을 내렸습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다!";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 학교알림이 게시(넥사크로)
	@RequestMapping(value="/info/open.snu", method=RequestMethod.POST)
	public NexacroResult openInfo(
			@ParamVariable(name="in_Var1") int inVar1) 
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Info info = new Info();
		info.setInfoNo(inVar1);
		int uResult = iService.openInfo(info);
		if(uResult > 0)
		{
			nErrorCode = 0;
			strErrorMsg = "게시글을 게시했습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다!";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 학교알림이 삭제(넥사크로)
	@RequestMapping(value="/info/delete.snu", method=RequestMethod.POST)
	public NexacroResult removeInfo(
			@ParamVariable(name="in_Var1") int inVar1)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Info info = new Info();
		info.setInfoNo(inVar1);
		int dResult = iService.removeInfo(info);
		if(dResult > 0)
		{
			nErrorCode = 0;
			strErrorMsg = "게시글이 삭제됐습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

}
