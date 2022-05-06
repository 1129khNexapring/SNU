package org.ttt.snu.lecture.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.store.LectureStore;

@Repository
public class LectureStoreLogic implements LectureStore{

	@Override
	public List<Lecture> selectAllLectures(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllLectures");
		return lList;
	}

	@Override
	public List<Lecture> selectLecturePlanList(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllLecturePlans");
		return lList;
	}
	

}
