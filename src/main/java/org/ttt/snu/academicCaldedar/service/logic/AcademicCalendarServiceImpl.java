package org.ttt.snu.academicCaldedar.service.logic;






import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.academicCaldedar.DAO.AcademicCalendarDAO;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

@Service
public class AcademicCalendarServiceImpl implements AcademicCalendarService{
		
		@Autowired
		private AcademicCalendarDAO dao;
	
	@Override
	public void addSchedule(AcademicCalendar calendar) {
		dao.addSchedule(calendar);
		
	}

	@Override
	public List<AcademicCalendar> showSchedule() {
		
		return dao.showSchedule();
	}

	
	
public class AcademicCalendarServiceImpl {

}
