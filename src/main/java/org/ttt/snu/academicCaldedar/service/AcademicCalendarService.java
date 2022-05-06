package org.ttt.snu.academicCaldedar.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;

public interface AcademicCalendarService {

	void addSchedule(AcademicCalendar calendar);

	public List<AcademicCalendar> showSchedule();

	

	
	
	
}
