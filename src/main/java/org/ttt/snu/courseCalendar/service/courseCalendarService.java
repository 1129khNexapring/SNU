package org.ttt.snu.courseCalendar.service;

import java.util.List;

import org.ttt.snu.courseCalendar.domain.courseCalendar;

public interface courseCalendarService {

	List<courseCalendar> getCalendar(courseCalendar cc);

}
