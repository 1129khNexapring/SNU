package org.ttt.snu.reserveforce.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.student.domain.Student;

public interface ReserveforceStore {

	List<Student> selectAllRf(SqlSession sqlSession, String sCode);

	int requestMil(SqlSession sqlSession, Reserveforce reserveforce);

	List<Reserveforce> requestMilList(SqlSession sqlSession, String sCode);

}
