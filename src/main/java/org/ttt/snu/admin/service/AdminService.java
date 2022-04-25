package org.ttt.snu.admin.service;

import java.util.List;

import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.student.domain.Student;

public interface AdminService {
	//학생 로그인
	Admin checklogin(Admin admin);
	//학생 조회
	List<Student> printAllStudent();
	//교수 조회
	List<Professor> printAllProfessor();
	//학생 등록
	int registerStudent(Student student);
	//학생 삭제
	int removeStudent(String sCode);
	
	

}
