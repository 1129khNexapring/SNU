package org.ttt.snu.academicCaldedar.store;

import java.util.List;

import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;

public interface AcademicCalendarStore {

	List<AcademicCalendar> showSchedule();

	void addSchedule(AcademicCalendar academicCalendar);

	void deleteSchedule(String title);

}
