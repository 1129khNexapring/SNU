package org.ttt.snu.academicCaldedar.controller;

import java.util.HashMap;
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
	

	
	@RequestMapping(value="/addSchedule.snu", method = RequestMethod.POST)
	public Map<Object,Object> addSchedule(@RequestBody AcademicCalendar calendar) {
		Map<Object,Object> map = new HashMap<Object,Object>();
		
		aService.addSchedule(calendar);
		
		return map;
	}
	@RequestMapping(value = "/schedule.snu", method=RequestMethod.GET)
	public String schdule(Model model) {
		model.addAttribute("showSchdule", aService.showSchedule());
		
		return "academicCalendar/schedule";
	}
	
}
