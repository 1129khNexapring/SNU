package org.ttt.snu.loa.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.student.domain.Student;

public interface LoaStore {

	int requestLoa(SqlSession sqlSession, Loa loa);

	List<Loa> selectLoaStudentList(SqlSession sqlSession);

	List<Student> selectStudentName(SqlSession sqlSession);

	int updateStatus(SqlSession sqlSession, Loa loa);

	int updateMsg(SqlSession sqlSession, Loa loa);

	List<Loa> selectLoaList(SqlSession sqlSession, String sCode);

	int deleteLoa(SqlSession sqlSession, String lDelete);

}
