package org.ttt.snu.timetable.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.timetable.domain.Timetable;
import org.ttt.snu.timetable.store.TimetableStore;

@Repository
public class TimetableStoreLogic implements  TimetableStore {
	
	//시간표조회
	@Override
	public List<Timetable> selectTimetable(SqlSession sqlSession, String inVar1) {
		List<Timetable> tList = sqlSession.selectList("timetableMapper.selectTimetable", inVar1);
		return tList;
	}

}
