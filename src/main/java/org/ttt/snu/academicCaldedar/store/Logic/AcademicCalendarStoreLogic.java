package org.ttt.snu.academicCaldedar.store.Logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

@Repository
public class AcademicCalendarStoreLogic implements AcademicCalendarStore {

	@Autowired
	private SqlSession sqlSession;

//	public void addSchedule(AcademicCalendar academicCalendar) {
//		sqlSession.insert("calendarMapper.addSchedule", academicCalendar);
//
//	}

	public List<AcademicCalendar> showSchedule() {

		return sqlSession.selectList("calendarMapper.showSchedule");
	}

	@Override
	public void deleteSchedule(String title) {
		sqlSession.delete("calendarMapper.deleteSchedule", title);

	}
	@Override
	public int registerSchedule(SqlSession sqlSession, AcademicCalendar calendar) {
		int result = sqlSession.insert("calendarMapper.insertSchedule", calendar);
		return result;
	}

	@Override
	public List<AcademicCalendar> printAllSchedule() {
		List<AcademicCalendar> aList = sqlSession.selectList("calendarMapper.selectScheduleList");
		System.out.println(aList);
		return aList;
	}

	@Override
	public int modifySchedule(SqlSession sqlSession, AcademicCalendar calendar) {
		int result = sqlSession.update("calendarMapper.updateSchedule", calendar);
		
		return result;
	}

}
