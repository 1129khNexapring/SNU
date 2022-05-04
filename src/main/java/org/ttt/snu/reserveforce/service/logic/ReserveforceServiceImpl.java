package org.ttt.snu.reserveforce.service.logic;

import java.util.List;

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
	
	@Override
	public List<Student> printAll(String sCode) {
		List<Student> msList = rfStore.selectAllRf(sqlSession, sCode);
		return msList;
	}

	@Override
	public int requestMilitary(Reserveforce reserveforce) {
		int result = rfStore.requestMil(sqlSession, reserveforce);
		return result;
	}

	@Override
	public List<Reserveforce> requestMilList(String sCode) {
		List<Reserveforce> rfList = rfStore.requestMilList(sqlSession, sCode);
		return rfList;
	}

}
