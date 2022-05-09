package org.ttt.snu.academicCaldedar.store.Logic;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;
@Repository
public class AcademicCalendarStoreLogic implements AcademicCalendarStore {

	@Autowired
	private SqlSession sqlSession;

	public void addSchedule(AcademicCalendar academicCalendar) {
		sqlSession.insert("calendarMapper.addSchedule", academicCalendar);
		
		
	}

	public List<AcademicCalendar> showSchedule() {
		
		return sqlSession.selectList("calendarMapper.showSchedule");
	}

}
