package org.ttt.snu.department.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.department.service.DepartmentService;
import org.ttt.snu.department.store.DepartmentStore;

@Service
public class DepartmentServiceImpl implements DepartmentService{
	
	@Autowired
	private DepartmentStore dStore;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public Department printDeptByCode(String dCode) {
		Department dept = dStore.selectDeptByCode(sqlSession, dCode);
		return dept;
	}

	@Override
	public Department printDeptBypCode(String profCode) {
		Department dept = dStore.selectDeptBypCode(sqlSession, profCode);
		return dept;
	}

}
