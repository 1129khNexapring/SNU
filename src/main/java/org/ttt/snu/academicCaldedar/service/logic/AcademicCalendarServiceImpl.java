package org.ttt.snu.academicCaldedar.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

@Service
public class AcademicCalendarServiceImpl implements AcademicCalendarService {

	@Autowired
	private AcademicCalendarStore aStore;
	
	@Autowired
	private SqlSession sqlSession;
//	@Override
//	public void addSchedule(AcademicCalendar academicCalendar) {
//		aStore.addSchedule(academicCalendar);
//
//	}

	@Override
	public List<AcademicCalendar> showSchedule() {

		return aStore.showSchedule();
	}

	@Override
	public void removeSchedule(String title) {
		aStore.deleteSchedule(title);
	}

	@Override
	public int registerSchedule(AcademicCalendar calendar) {
		int result = aStore.registerSchedule(sqlSession, calendar);
		return result;
		
	}

	@Override
	public List<AcademicCalendar> printAllSchedule() {
		List<AcademicCalendar> aList = aStore.printAllSchedule(sqlSession);
		return aList;
	}

}
