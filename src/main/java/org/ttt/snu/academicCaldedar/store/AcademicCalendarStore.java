package org.ttt.snu.academicCaldedar.store;

import java.util.List;
import java.util.Map;

import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;

public interface AcademicCalendarStore {

	List<AcademicCalendar> showSchedule();

	void addSchedule(AcademicCalendar academicCalendar);

}
