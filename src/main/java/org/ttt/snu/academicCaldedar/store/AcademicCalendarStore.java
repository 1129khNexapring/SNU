package org.ttt.snu.academicCaldedar.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
@Repository
public class AcademicCalendarStore {
	@Autowired
	private SqlSession sqlSession;

	public void addSchedule(AcademicCalendar calendar) {
		sqlSession.insert("calendarMapper.addSchedule", calendar);
		
		
	}

	public List<AcademicCalendar> showSchedule() {
		return sqlSession.selectList("calendarMapper.showSchedule");
	}

}
