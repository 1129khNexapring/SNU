package org.ttt.snu.academicCaldedar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

public interface AcademicCalendarService {

	void addSchedule(AcademicCalendar calendar);

	List<AcademicCalendar> showSchedule();

	

	
	
	
}
