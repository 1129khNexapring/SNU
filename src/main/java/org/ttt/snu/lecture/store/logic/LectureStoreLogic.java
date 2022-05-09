package org.ttt.snu.lecture.store.logic;

import java.util.HashMap;
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
	//관리자-승인된 강의 조회
	@Override
	public List<Lecture> selectAllYLectures(SqlSession sqlSession, Lecture lecture) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllYLectures", lecture);
		return lList;
	}
	//관리자-미승인 강의 조회
	@Override
	public List<Lecture> selectAllNLectures(SqlSession sqlSession, Lecture lecture) {
		List<Lecture> NList = sqlSession.selectList("LectureMapper.selectAllNLectures", lecture);
		return NList;
	}
	//관리자-계획서승인
	@Override
	public int updateLectureStatus(SqlSession sqlSession, String inVar1) {
		int result = sqlSession.update("LectureMapper.updateLectureStatus", inVar1);
		return result;
	}
	@Override
	public List<Lecture> selectMyLecture(SqlSession sqlSession, String sCode) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectMyLecture", sCode);
		return lList;
	}
	
	

}
