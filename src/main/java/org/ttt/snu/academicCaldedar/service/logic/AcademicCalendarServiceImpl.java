package org.ttt.snu.academicCaldedar.service.logic;






import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

@Service
public class AcademicCalendarServiceImpl implements AcademicCalendarService{
		
		@Autowired
		private AcademicCalendarStore aStore;
	
	@Override
	public void addSchedule(AcademicCalendar calendar) {
		aStore.addSchedule(calendar);
		
		
	}

	@Override
	public List<AcademicCalendar> showSchedule() {
		
		return aStore.showSchedule();
	}

	
	
	

}
