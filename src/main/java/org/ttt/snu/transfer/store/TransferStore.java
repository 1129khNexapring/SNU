package org.ttt.snu.transfer.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;

public interface TransferStore {

	List<Student> selectAllDept(SqlSession sqlSession, String sCode);

	List<Department> selectDept(SqlSession sqlSession);

	int requestTran(SqlSession sqlSession, Transfer transfer);


	List<Transfer> requestMoveList(SqlSession sqlSession, String sCode);

	List<Student> selectStudent(SqlSession sqlSession);

	List<Transfer> selectTransferList(SqlSession sqlSession);

	int updateStatus(SqlSession sqlSession, Transfer transfer);

	int updateMsg(SqlSession sqlSession, Transfer transfer);

}
