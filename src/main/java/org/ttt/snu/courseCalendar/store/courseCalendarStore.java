package org.ttt.snu.courseCalendar.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.courseCalendar.domain.courseCalendar;

public interface courseCalendarStore {

	List<courseCalendar> selectCalendar(SqlSession sqlSession, courseCalendar cc);

}
