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

	@Override
	public int requestTransfer(Transfer transfer) {
		int result = tStore.requestTran(sqlSession, transfer);
		return result;
	}
	// 관리자 - 학생이름조회
	@Override
	public List<Student> printStudentName() {
		List<Student> sList =  tStore.selectStudent(sqlSession);
		return sList;
	}
	//관리자-전과리스트 조회
	@Override
	public List<Transfer> printTrList() {
		List<Transfer> trList = tStore.selectTransferList(sqlSession);
		return trList;
	}
	//관리자 - 전과승인
	@Override
	public int modifyStatus(Transfer transfer) {
		int uResult = tStore.updateStatus(sqlSession, transfer);
		return uResult;
	}
	//관리자 - 전과반려
	@Override
	public int modifyMsg(Transfer transfer) {
		int uResult = tStore.updateMsg(sqlSession, transfer);
		return uResult;
	}

}
