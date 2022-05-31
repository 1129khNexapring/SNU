package org.ttt.snu.courseCalendar.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.courseCalendar.service.courseCalendarService;
import org.ttt.snu.courseCalendar.store.courseCalendarStore;

@Service
public class courseCalendarServiceImpl implements courseCalendarService {
	@Autowired
	private SqlSession sqlSession;
	@Autowired
	private courseCalendarStore ccStore;
	//수강관련 일정받아오기(학생)
	@Override
	public List<courseCalendar> getCalendar(courseCalendar cc) {
		List<courseCalendar> ccList = ccStore.selectCalendar(sqlSession, cc);
		return ccList;
	}

}
