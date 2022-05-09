package org.ttt.snu.student.service;

import java.util.List;

import org.ttt.snu.student.domain.Student;

public interface StudentService {

	Student checkLogin(Student student);

	List<Student> printIngStntBydCode(String dCode);

}
