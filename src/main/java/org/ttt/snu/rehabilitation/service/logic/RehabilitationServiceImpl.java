package org.ttt.snu.rehabilitation.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.rehabilitation.service.RehabilitationService;
import org.ttt.snu.rehabilitation.store.RehabilitationStore;

@Service
public class RehabilitationServiceImpl implements RehabilitationService{

	@Autowired
	private RehabilitationStore rStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	
	@Override
	public int requestRehab(Rehabilitation rehab) {
		int result = rStore.requestRehab(sqlSession, rehab);
		return result;
	}


	@Override
	public List<Rehabilitation> printRehab(String sCode) {
		List<Rehabilitation> rList = rStore.selectRehabList(sqlSession, sCode);
		return rList;
	}

}
