package org.ttt.snu.admin.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.service.AdminService;
import org.ttt.snu.admin.store.AdminStore;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.student.domain.Student;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminStore aStore;
	@Autowired
	private SqlSession sqlSession;
	
	//교수 로그인 체크
	@Override
	public Admin checklogin(Admin admin) {
		Admin aOne = aStore.selectLoginUser(sqlSession, admin);
		return aOne;
	}

	// 관리자-학생리스트 출력
	@Override
	public List<Student> printAllStudent() {
		List<Student> studentList = aStore.selectStudent(sqlSession);
		return studentList;
	}
	
	// 관리자-교수리스트 출력
	@Override
	public List<Professor> printAllProfessor() {
		List<Professor> pList = aStore.selectProfessor(sqlSession);
		return pList;
	}
	
	// 관리자-학생 등록
	@Override
	public int registerStudent(Student student) {
		int iResult = aStore.registerStudent(sqlSession, student);
		return iResult;
	}
	// 관리자-학생 삭제
	@Override
	public int removeStudent(String sCode) {
		int result = aStore.deleteStudent(sqlSession, sCode);
		return result;
		
	}
	

}
