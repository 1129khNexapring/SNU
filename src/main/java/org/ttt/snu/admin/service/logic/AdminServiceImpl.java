package org.ttt.snu.admin.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.service.AdminService;
import org.ttt.snu.admin.store.AdminStore;
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

}
