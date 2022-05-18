package org.ttt.snu.grade.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.attendance.store.AttendanceStore;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.grade.domain.ScoreList;
import org.ttt.snu.grade.service.GradeService;
import org.ttt.snu.grade.store.GradeStore;
import org.ttt.snu.lecture.domain.Lecture;

@Service
public class GradeServiceImpl implements GradeService{
	
	@Autowired
	private GradeStore gStore;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public int getListCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<EnrollLectureDomain> printEnLecture(String pCode) {
		List<EnrollLectureDomain> enLectureList = gStore.selectEnLectureAll(sqlSession, pCode);
		return enLectureList;
	}

	@Override
	public List<ScoreList> printAllLE() {
		List<ScoreList> sList = gStore.selectAllLectureInquiry(sqlSession);
		return sList;
	}

	@Override
	public int registerGrade(Grade grade) {
		int result = gStore.insertGrade(sqlSession, grade);
		return result;
	}

	@Override
	public int modifyGrade(Grade grade) {
		// TODO Auto-generated method stub
		return 0;
	}

	//학생 성적조회
	@Override
	public List<Lecture> printGrade(String sCode) {
		List<Lecture> lList = gStore.printGrade(sqlSession, sCode);
		return lList;
	}

}
