package org.ttt.snu.transfer.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;
import org.ttt.snu.transfer.store.TransferStore;

@Repository
public class TransferStoreLogic implements TransferStore{

	@Override
	public List<Student> selectAllDept(SqlSession sqlSession, String sCode) {
		List<Student> tList = sqlSession.selectList("TransferMapper.selectAllDept", sCode);
		return tList;
	}

	@Override
	public List<Department> selectDept(SqlSession sqlSession) {
		List<Department> dList = sqlSession.selectList("TransferMapper.selectListDept");
		return dList;
	}

	@Override
	public int requestTran(SqlSession sqlSession, Transfer transfer) {
		int result = sqlSession.insert("TransferMapper.requestTransfer", transfer);
		return result;
	}

}
