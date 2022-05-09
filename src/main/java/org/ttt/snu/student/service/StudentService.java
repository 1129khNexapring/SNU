package org.ttt.snu.student.service;

import java.util.List;

import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;

public interface StudentService {

	Student checkLogin(Student student);

	List<Student> studentInfo(String sCode);

	List<Department> studentDept(String sCode);

	int modifyStudent(Student student);
	List<Student> printIngStntBydCode(String dCode);

}
