package org.ttt.snu.grade.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.grade.domain.ScoreList;
import org.ttt.snu.lecture.domain.Lecture;

public interface GradeStore {
	
	public List<EnrollLectureDomain> selectEnLectureAll(SqlSession sqlSession, String pCode);
	public List<ScoreList> selectAllLectureInquiry(SqlSession sqlSession);
	
	public int insertGrade(SqlSession sqlSession, Grade grade);
	public int updateGrade(SqlSession sqlSession, Grade grade);
	public List<Lecture> printGrade(SqlSession sqlSession, String sCode);

}
