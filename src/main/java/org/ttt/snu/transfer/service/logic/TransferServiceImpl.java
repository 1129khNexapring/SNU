package org.ttt.snu.transfer.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;
import org.ttt.snu.transfer.service.TransferService;
import org.ttt.snu.transfer.store.TransferStore;

@Service
public class TransferServiceImpl implements TransferService {

	@Autowired
	private TransferStore tStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Student> printAll(String sCode) {
		List<Student> tList = tStore.selectAllDept(sqlSession, sCode);
		return tList;
	}

	@Override
	public List<Department> printAllDept() {
		List<Department> dList = tStore.selectDept(sqlSession);
		return dList;
	}

}
