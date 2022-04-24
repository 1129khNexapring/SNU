package org.ttt.snu.admin.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.student.domain.Student;

public interface AdminStore {

	Admin selectLoginUser(SqlSession sqlSession, Admin admin);

	List<Student> selectStudent(SqlSession sqlSession);

}
