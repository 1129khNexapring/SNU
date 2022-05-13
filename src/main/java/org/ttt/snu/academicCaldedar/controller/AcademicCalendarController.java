package org.ttt.snu.academicCaldedar.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class AcademicCalendarController {
	
	@Autowired
	private AcademicCalendarService aService;
	

	
	//일정 추가 팝업
		@RequestMapping(value = "/schedule/Popup.snu")
		public String schedulePopup()  {
			return "/academicCalendar/schedulePopup";
		}
	
	//일정추가 버튼클릭 
//	@ResponseBody
//	@RequestMapping(value="/schedule/add.snu", method = RequestMethod.POST)
//	public String addSchedule(
//			@RequestParam("title") String title
//			, @RequestParam("startDate") String startDate
//			, @RequestParam("endDate") String endDate) {
//		//AcademicCalendar calendar = new AcademicCalendar();
//		AcademicCalendar academicCalendar = new AcademicCalendar();
//		academicCalendar.setTitle(title);
//		academicCalendar.setStartDate(Date.valueOf(startDate));
//		academicCalendar.setEndDate(Date.valueOf(endDate));
//		aService.addSchedule(academicCalendar);
//		
//		return null;
//	}
	//fullcalendar에서 일정 출력
	
	@RequestMapping(value = "/schedule.snu", method=RequestMethod.GET)
	public String schdule(Model model) {
		List<AcademicCalendar> aList = aService.showSchedule();
		if(!aList.isEmpty()) {
			model.addAttribute("aList", aList);
			return "/academicCalendar/schedule";
		}else {
			model.addAttribute("msg", "조회 실패");
			return "common/errorPage"; 
			
		}
		
	}
	@RequestMapping(value="/schedule/list.snu", method=RequestMethod.GET)
	public NexacroResult selectSchedule()
	{
		int nErrorCode = 0;
		String strErrorMsg="";
		NexacroResult result = new NexacroResult();
		List<AcademicCalendar> aList = aService.printAllSchedule();
		System.out.println(aList);
		if(!aList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "조회 성공";
			
		}else {
			nErrorCode = -1;
			strErrorMsg = "조회 실패";		
			
		}
		result.addDataSet("out_schedule", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	
	}
	
	//넥사에서 일정 추가
	@RequestMapping(value="/schedule/register.snu", method=RequestMethod.POST)
	public NexacroResult registerSchedule(@ParamVariable(name="title") String title
			,@ParamVariable(name="startDate") String startDate
			,@ParamVariable(name="endDate") String endDate) 
	{
		int nErrorCode = 0;
		String strErrorMsg= "";
		NexacroResult result = new NexacroResult();
		AcademicCalendar calendar = new AcademicCalendar();
		calendar.setTitle(title);
		calendar.setStartDate(startDate);
		calendar.setEndDate(endDate);
		int aResult = aService.registerSchedule(calendar);
		System.out.println(title);
		System.out.println(startDate);
		System.out.println(endDate);
		if(aResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "등록 완료";
		} else {
			nErrorCode = -1;
			strErrorMsg = "등록 실패";
		
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

}
	
