package org.ttt.snu.academicCaldedar.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;

public interface AcademicCalendarStore {

	List<AcademicCalendar> showSchedule();

	void addSchedule(AcademicCalendar academicCalendar);

	void deleteSchedule(String title);
	
	int registerSchedule(SqlSession sqlSession, AcademicCalendar calendar);

	List<AcademicCalendar> printAllSchedule();

	int modifySchedule(SqlSession sqlSession, AcademicCalendar calendar);
}
