package org.ttt.snu.grade.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.grade.store.GradeStore;

@Repository
public class GradeStoreLogic implements GradeStore{

	@Override
	public List<EnrollLectureDomain> selectEnLectureAll(SqlSession sqlSession, String pCode) {
		List<EnrollLectureDomain> enLectureList = sqlSession.selectList("GradeMapper.selectAllEnLectureList", pCode);
		return enLectureList;
	}

	@Override
	public List<LectureEvaluation> selectAllLectureInquiry(SqlSession sqlSession, PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertGrade(SqlSession sqlSession, Grade grade) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateGrade(SqlSession sqlSession, Grade grade) {
		// TODO Auto-generated method stub
		return 0;
	}

}
