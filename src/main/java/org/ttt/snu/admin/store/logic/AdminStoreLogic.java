package org.ttt.snu.admin.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.store.AdminStore;
import org.ttt.snu.student.domain.Student;

@Repository
public class AdminStoreLogic implements AdminStore {

	@Override
	public Admin selectLoginUser(SqlSession sqlSession, Admin admin) {
		Admin aOne = sqlSession.selectOne("AdminMapper.selectLoginUser", admin);
		return aOne;
	}

	@Override
	public List<Student> selectStudent(SqlSession sqlSession) {
		List<Student> studentList = sqlSession.selectList("AdminMapper.selectStudentList");
		return studentList;
	}

}
