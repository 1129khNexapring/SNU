package org.ttt.snu.timetable.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.timetable.domain.Timetable;

public interface TimetableStore {

	List<Timetable> selectTimetable(SqlSession sqlSession, String inVar1);

}
