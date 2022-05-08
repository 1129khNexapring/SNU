package org.ttt.snu.lecture.service.logic;

import java.util.HashMap;
import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;
import org.ttt.snu.lecture.store.LectureStore;

@Service
public class LectureServiceImpl implements LectureService{

	@Autowired
	private LectureStore lStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Lecture> printAllLectures() {
		List<Lecture> lList = lStore.selectAllLectures(sqlSession);
		return lList;
	}
	//관리자 -승인 계획서 조회
	@Override
	public List<Lecture> printAllYLecture(Lecture lecture) {
		List<Lecture> lList = lStore.selectAllYLectures(sqlSession, lecture);
		return lList;
	}
	//관리자 - 미승인 계획서 조회
	@Override
	public List<Lecture> printAllNLecture(Lecture lecture) {
		List<Lecture> NList = lStore.selectAllNLectures(sqlSession, lecture);
		return NList;
	}
	//관리자 - 계획승인
	@Override
	public int modifyLectureStatus(String inVar1) {
		int result = lStore.updateLectureStatus(sqlSession, inVar1);
		return result;
	}
	//교수 - 강의계획서 조회
	@Override
	public List<Lecture> printLpBypCode(String pCode) {
		List<Lecture> lpList = lStore.selectLpBypCode(sqlSession, pCode);
		return lpList;
	}
	//교수 - 강의계획서 등록
	@Override
	public int registerLecture(Lecture lecture) {
		int result = lStore.insertLecture(sqlSession, lecture);
		return result;
	}
	

}
