package org.ttt.snu.courseCalendar.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.courseCalendar.store.courseCalendarStore;

@Repository
public class courseCalendarStoreLogic implements courseCalendarStore {
	//수강관련 일정만 뽑아서 조회
	@Override
	public List<courseCalendar> selectCalendar(SqlSession sqlSession, courseCalendar cc) {
		List<courseCalendar> ccList = sqlSession.selectList("courseCalendarMapper.getCalendar", cc);
		return ccList;
	}

}
