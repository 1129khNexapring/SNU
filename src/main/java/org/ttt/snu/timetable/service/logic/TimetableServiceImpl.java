package org.ttt.snu.timetable.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.timetable.domain.Timetable;
import org.ttt.snu.timetable.service.TimetableService;
import org.ttt.snu.timetable.store.TimetableStore;
@Service
public class TimetableServiceImpl implements TimetableService {
	@Autowired
	private TimetableStore ttStore;
	@Autowired
	private SqlSession sqlSession;
	//시간표조회
	@Override
	public List<Timetable> printTimetable(String inVar1) {
		List<Timetable> tList = ttStore.selectTimetable(sqlSession, inVar1);
		return tList;
	}

}
