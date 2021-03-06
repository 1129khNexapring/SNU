package org.ttt.snu.student.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.service.StudentService;
import org.ttt.snu.student.store.StudentStore;

@Service
public class StudentServiceImpl implements StudentService {
	
	
	@Autowired
	private StudentStore sStore;
	
	@Autowired
	private SqlSession sqlSession;


	@Override
	public Student checkLogin(Student student) {
		Student result = sStore.selectOne(sqlSession, student);
		return result;
	}


	@Override

	public List<Student> studentInfo(String sCode) {
		List<Student> sList = sStore.selectAllStudent(sqlSession, sCode);
		return sList;
	}


	@Override
	public List<Department> studentDept(String sCode) {
		List<Department> dList = sStore.selectAllDept(sqlSession, sCode);
		return dList;
	}

	@Override
	public int modifyStudent(Student student) {
		int result = sStore.updateStudent(sqlSession, student);
		return result;
	}


	public List<Student> printIngStntBydCode(String dCode) {
		List<Student> sList = sStore.selectIngStntBydCode(sqlSession, dCode);
		return sList;
	}
}
