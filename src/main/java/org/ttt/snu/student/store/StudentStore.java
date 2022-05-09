package org.ttt.snu.student.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.student.domain.Student;

public interface StudentStore {

	Student selectOne(SqlSession sqlSession, Student student);

	List<Student> selectIngStntBydCode(SqlSession sqlSession, String dCode);

}
