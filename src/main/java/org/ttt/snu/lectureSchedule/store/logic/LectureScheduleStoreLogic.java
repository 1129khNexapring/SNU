package org.ttt.snu.lectureSchedule.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.lectureSchedule.domain.LectureSchedule;
import org.ttt.snu.lectureSchedule.store.LectureScheduleStore;

@Repository
public class LectureScheduleStoreLogic implements LectureScheduleStore{

	@Override
	public List<LectureSchedule> selectLectureScheduleList(SqlSession sqlSession) {
		List<LectureSchedule> lsList = sqlSession.selectList("LectureScheduleMapper.selectAllLectureSchedule");
		return lsList;
	}

}
