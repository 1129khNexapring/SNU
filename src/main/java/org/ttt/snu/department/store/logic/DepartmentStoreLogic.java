package org.ttt.snu.department.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.department.store.DepartmentStore;

@Repository
public class DepartmentStoreLogic implements DepartmentStore{

	@Override
	public Department selectDeptByCode(SqlSession sqlSession, String dCode) {
		Department dept = sqlSession.selectOne("DepartmentMapper.selectDeptByCode", dCode);
		return dept;
	}

	@Override
	public Department selectDeptBypCode(SqlSession sqlSession, String profCode) {
		Department dept = sqlSession.selectOne("DepartmentMapper.selectDeptBypCode", profCode);
		return dept;
	}
	
	

}
