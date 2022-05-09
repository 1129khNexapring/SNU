package org.ttt.snu.student.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.store.StudentStore;

@Repository
public class StudentStoreLogic implements StudentStore {


	@Override
	public Student selectOne(SqlSession sqlSession, Student student) {
		Student result = sqlSession.selectOne("StudentMapper.selectLoginUser", student);
		return result;
	}

	@Override
	public List<Student> selectIngStntBydCode(SqlSession sqlSession, String dCode) {
		List<Student> sList = sqlSession.selectList("StudentMapper.selectIngListBydCode", dCode);
		return sList;
	}
}
