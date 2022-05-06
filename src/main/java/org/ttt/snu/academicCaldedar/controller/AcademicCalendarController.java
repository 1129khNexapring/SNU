package org.ttt.snu.academicCaldedar.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;

@Controller
public class AcademicCalendarController {
	
	@Autowired
	private AcademicCalendarService aService;
	

	
	//일정 추가 팝업
		@RequestMapping(value = "/schedulePopup.snu")
		public String schedulePopup()  {
			return "/academicCalendar/schedulePopup";
		}
	
	//일정추가 버튼클릭 
	@RequestMapping(value="/addSchedule.snu", method = RequestMethod.POST)
	public Map<Object,Object> addSchedule(@RequestBody AcademicCalendar calendar) {
		Map<Object,Object> map = new HashMap<Object,Object>();
		
		aService.addSchedule(calendar);
		
		return map;
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
	
}
