package org.ttt.snu.loa.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.service.LoaService;
import org.ttt.snu.loa.store.LoaStore;

@Service
public class LoaServiceImpl implements LoaService {

	@Autowired
	private LoaStore lStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int requestLoa(Loa loa) {
		int result = lStore.requestLoa(sqlSession, loa);
		return result;
	}
	
	//관리자-휴학 학생신청리스트 출력
	@Override
	public List<Loa> printRequestList() {
		List<Loa> lList = lStore.selectLoaStudentList(sqlSession);
		return lList;
	}

}
