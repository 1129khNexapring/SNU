package org.ttt.snu.reserveforce.service.logic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.reserveforce.service.ReserveforceService;
import org.ttt.snu.reserveforce.store.ReserveforceStore;
import org.ttt.snu.student.domain.Student;
@Service
public class ReserveforceServiceImpl implements ReserveforceService {
	
	@Autowired
	private ReserveforceStore rfStore;
	@Autowired
	private SqlSession sqlSession;
	//관리자 예비군 리스트 조회
	@Override
	public List<Reserveforce> printRfList() {
		List<Reserveforce> rfList = rfStore.selectRfList(sqlSession);
		return rfList;
	}
//	@Override
//	public List<HashMap<String, Object>> printStudent() {
//		List<HashMap<String, Object>> map = rfStore.selectStudent(sqlSession);
//		return map;
//	}
	//관리자 학생 이름 조회
	@Override
	public List<Student> printStudent() {
		List<Student> sList = rfStore.selectStudent(sqlSession);
		return sList;
	}
	//관리자 예비군 승인
	@Override
	public int modifyStatus(Reserveforce reserveforce) {
		int uResult = rfStore.updateStatus(sqlSession, reserveforce);
		return uResult;
	}
	


}
