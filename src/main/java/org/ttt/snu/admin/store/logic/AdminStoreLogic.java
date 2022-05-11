package org.ttt.snu.admin.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.store.AdminStore;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.student.domain.Student;

@Repository
public class AdminStoreLogic implements AdminStore {

	@Override
	public Admin selectLoginUser(SqlSession sqlSession, Admin admin) {
		Admin aOne = sqlSession.selectOne("AdminMapper.selectLoginUser", admin);
		return aOne;
	}
	//학생 리스트 출력
	@Override
	public List<Student> selectStudent(SqlSession sqlSession) {
		List<Student> studentList = sqlSession.selectList("AdminMapper.selectStudentList");
		return studentList;
	}
	//교수 리스트 출력
	@Override
	public List<Professor> selectProfessor(SqlSession sqlSession) {
		List<Professor> pList = sqlSession.selectList("AdminMapper.selectProfessorList");
		return pList;
	}
	//학생 등록
	@Override
	public int registerStudent(SqlSession sqlSession, Student student) {
		int iResult = sqlSession.insert("AdminMapper.insertStudent", student);
		return iResult;
	}
	//학생 삭제
	@Override
	public int deleteStudent(SqlSession sqlSession, String sCode) {
		int reuslt = sqlSession.delete("AdminMapper.deleteStudent", sCode);
		return reuslt;
	}
	// 교수등록
	@Override
	public int registerProfessor(SqlSession sqlSession, Professor professor) {
		int iResult = sqlSession.insert("AdminMapper.insertProfessor", professor);
		return iResult;
	}
	// 교수삭제
	@Override
	public int deleteProfessor(SqlSession sqlSession, String pCode) {
		int result = sqlSession.delete("AdminMapper.deleteProfessor", pCode);
		return result;
	}


	

}
