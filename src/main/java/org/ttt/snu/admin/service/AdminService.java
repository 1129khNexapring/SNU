package org.ttt.snu.admin.service;

import java.util.List;

import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.student.domain.Student;

public interface AdminService {

	Admin checklogin(Admin admin);

	List<Student> printAllStudent();

}
