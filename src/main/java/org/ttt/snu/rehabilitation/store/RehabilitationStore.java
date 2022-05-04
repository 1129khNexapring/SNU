package org.ttt.snu.rehabilitation.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.student.domain.Student;

public interface RehabilitationStore {

	int requestRehab(SqlSession sqlSession, Rehabilitation rehab);

	List<Rehabilitation> selectRehabList(SqlSession sqlSession, String sCode);
	List<Student> selectStudent(SqlSession sqlSession);

	List<Rehabilitation> selectReList(SqlSession sqlSession);

	int updateStatus(SqlSession sqlSession, Rehabilitation rehab);

	int updateMsg(SqlSession sqlSession, Rehabilitation rehab);

}
