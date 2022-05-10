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
	@ResponseBody
	@RequestMapping(value="/schedule/add.snu", method = RequestMethod.POST)
	public String addSchedule(
			@RequestParam("title") String title
			, @RequestParam("startDate") String startDate
			, @RequestParam("endDate") String endDate) {
		//AcademicCalendar calendar = new AcademicCalendar();
		AcademicCalendar academicCalendar = new AcademicCalendar();
		academicCalendar.setTitle(title);
		academicCalendar.setStartDate(Date.valueOf(startDate));
		academicCalendar.setEndDate(Date.valueOf(endDate));
		aService.addSchedule(academicCalendar);
		
		return null;
	}
	//일정 출력
	
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
	
	@ResponseBody
	@RequestMapping(value="/schedule/delete.snu", method = RequestMethod.GET)
	public String removeSchedule(
			@RequestParam("title") String title)
			 {
		 aService.removeSchedule(title);
		
		
		
		return null;
	}
	
}
