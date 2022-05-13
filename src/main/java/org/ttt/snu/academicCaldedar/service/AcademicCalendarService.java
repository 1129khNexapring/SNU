package org.ttt.snu.academicCaldedar.service;

import java.util.List;

import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;

public interface AcademicCalendarService {
	//fullcalendar에 데이터 출력
	public List<AcademicCalendar> showSchedule();
	//fullcalendar에서 일정 추가
//	public void addSchedule(AcademicCalendar academicCalendar);

	public void removeSchedule(String title);
	
	
	//넥사에서 일정 추가
	public int registerSchedule(AcademicCalendar calendar);
	//넥사에서 조회
	public List<AcademicCalendar> printAllSchedule();

	public int modifySchedule(AcademicCalendar calendar);

}

