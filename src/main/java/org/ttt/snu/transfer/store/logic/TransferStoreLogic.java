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
	//관리자 학생-전체출력
	@Override
	public List<Student> selectStudent(SqlSession sqlSession) {
		List<Student> sList = sqlSession.selectList("TransferMapper.selectStudentList");
		return sList;
	}
	//관리자 전과 리스트 출력
	@Override
	public List<Transfer> selectTransferList(SqlSession sqlSession) {
		List<Transfer> trList = sqlSession.selectList("TransferMapper.selectTransferList");
		return trList;
	}
	//관리자-전과승인
	@Override
	public int updateStatus(SqlSession sqlSession, Transfer transfer) {
		int uResult = sqlSession.update("TransferMapper.approveTransfer", transfer);
		return uResult;
	}
	//관리자-전과반려
	@Override
	public int updateMsg(SqlSession sqlSession, Transfer transfer) {
		int uResult = sqlSession.update("TransferMapper.rejectTransfer", transfer);
		System.out.println(uResult);
		return uResult;
	}

	@Override
	public List<Transfer> requestMoveList(SqlSession sqlSession, String sCode) {
		List<Transfer> tList = sqlSession.selectList("TransferMapper.requestMoveList", sCode);
		return tList;
	}

}
