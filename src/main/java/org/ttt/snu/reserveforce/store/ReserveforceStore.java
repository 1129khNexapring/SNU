package org.ttt.snu.reserveforce.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.student.domain.Student;

public interface ReserveforceStore {

	List<Reserveforce> selectRfList(SqlSession sqlSession);

	List<Student> selectStudent(SqlSession sqlSession);

	int updateStatus(SqlSession sqlSession, Reserveforce reserveforce);

//	List<HashMap<String, Object>> selectStudent(SqlSession sqlSession);

	

	

}
