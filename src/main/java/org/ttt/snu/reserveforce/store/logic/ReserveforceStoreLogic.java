package org.ttt.snu.reserveforce.store.logic;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.reserveforce.store.ReserveforceStore;
import org.ttt.snu.student.domain.Student;


@Repository
public class ReserveforceStoreLogic implements ReserveforceStore {
	
	//관리자 예비군 리스트 조회
	@Override
	public List<Reserveforce> selectRfList(SqlSession sqlSession) {
		List<Reserveforce> rfList = sqlSession.selectList("ReserveforceMapper.selectRfList");
		System.out.println(rfList);
		return rfList;
	}
	//관리자  학생 이름 조회
	@Override
	public List<Student> selectStudent(SqlSession sqlSession) {
		List<Student> sList = sqlSession.selectList("ReserveforceMapper.selectStudent");
		return sList;
	}
	//관리자 예비군 승인
	@Override
	public int updateStatus(SqlSession sqlSession, Reserveforce reserveforce) {
		int uResult = sqlSession.update("ReserveforceMapper.approveReserveforce", reserveforce);
		return uResult;
	}

//	@Override
//	public List<HashMap<String, Object>> selectStudent(SqlSession sqlSession) {
//		List<HashMap<String, Object>> map = sqlSession.selectList("ReserveforceMapper.selectStudent");
//		System.out.println(map);
//		return map;
//	}

	@Override
	public List<Student> selectAllRf(SqlSession sqlSession, String sCode) {
		List<Student> msList = sqlSession.selectList("ReserveforceMapper.selectReserveforce", sCode);
		return msList;
	}

	@Override
	public int requestMil(SqlSession sqlSession, Reserveforce reserveforce) {
		int result = sqlSession.insert("ReserveforceMapper.requestMil", reserveforce);
		return result;
	}

	@Override
	public List<Reserveforce> requestMilList(SqlSession sqlSession, String sCode) {
		List<Reserveforce> rfList = sqlSession.selectList("ReserveforceMapper.requestMilList", sCode);
		return rfList;
	}
}


