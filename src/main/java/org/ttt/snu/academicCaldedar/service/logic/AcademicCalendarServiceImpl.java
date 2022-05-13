package org.ttt.snu.academicCaldedar.service.logic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;
import org.ttt.snu.academicCaldedar.store.AcademicCalendarStore;

@Service
public class AcademicCalendarServiceImpl implements AcademicCalendarService {

	@Autowired
	private AcademicCalendarStore aStore;

	@Override
	public void addSchedule(AcademicCalendar academicCalendar) {
		aStore.addSchedule(academicCalendar);

	}

	@Override
	public List<AcademicCalendar> showSchedule() {

		return aStore.showSchedule();
	}

	@Override
	public void removeSchedule(String title) {
		aStore.deleteSchedule(title);
	}

}
