package org.ttt.snu.admin.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.student.domain.Student;

public interface AdminStore {
	//관리자 로그인
	Admin selectLoginUser(SqlSession sqlSession, Admin admin);
	//학생리스트
	List<Student> selectStudent(SqlSession sqlSession);
	//교수리스트
	List<Professor> selectProfessor(SqlSession sqlSession);
	//학생등록
	int registerStudent(SqlSession sqlSession, Student student);
	//학생 삭제
	int deleteStudent(SqlSession sqlSession, String sCode);
	// 교수등록
	int registerProfessor(SqlSession sqlSession, Professor professor);
	//교수 삭제
	int deleteProfessor(SqlSession sqlSession, String pCode);


	

}
