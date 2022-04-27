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
	//관리자 승인된 강의리스트 출력
	@Override
	public List<Lecture> selectYLecture(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectYLectures");
		return lList;
	}
	

}
