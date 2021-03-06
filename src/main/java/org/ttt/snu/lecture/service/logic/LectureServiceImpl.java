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
	
	//학생 - 강의평가조회
	@Override
	public List<Lecture> printMyLecture(String sCode) {
		List<Lecture> lList = lStore.selectMyLecture(sqlSession, sCode);
		return lList;
	}

	//학생 수강신청 가능 강의 조회
	@Override
	public List<Lecture> getLectureList() {
		List<Lecture> lList = lStore.selectEnrollLectureList(sqlSession);
		return lList;
	}
	@Override
	public List<Lecture> viewList(String sCode) {
		List<Lecture> vlList = lStore.viewLecture(sqlSession, sCode);
		return vlList;
	}

	@Override
	public List<Lecture> seaonList(String sCode) {
		List<Lecture> lList = lStore.seasonList(sqlSession, sCode);
		return lList;
	}
	//교수 - 강의 계획서 삭제
	@Override
	public int removeLecture(String lCode) {
		int result = lStore.deleteLecture(sqlSession, lCode);
		return result;
	}
	//교수 - 강의 계획서 수정
	@Override
	public int modifyLecture(Lecture lecture) {
		int result = lStore.updateLecture(sqlSession, lecture);
		return result;
	}
	//학생 - 시간표클릭 시 해당 강의 관련 상세정보 조회
	@Override
	public List<Lecture> printLectureBylName(Lecture lecture) {
		List<Lecture> list = lStore.selectLectureByClick(sqlSession,lecture);
		return list;
	}
	

}
