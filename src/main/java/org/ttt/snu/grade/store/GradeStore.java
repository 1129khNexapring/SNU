package org.ttt.snu.grade.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;

public interface GradeStore {
	
	public List<EnrollLectureDomain> selectEnLectureAll(SqlSession sqlSession, String pCode);
	public List<LectureEvaluation> selectAllLectureInquiry(SqlSession sqlSession, PageInfo pi);
	
	public int insertGrade(SqlSession sqlSession, Grade grade);
	public int updateGrade(SqlSession sqlSession, Grade grade);
}
