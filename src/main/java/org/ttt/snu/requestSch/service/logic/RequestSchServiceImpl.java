package org.ttt.snu.requestSch.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.requestSch.domain.RequestSch;
import org.ttt.snu.requestSch.service.RequestSchService;
import org.ttt.snu.requestSch.store.RequestSchStore;

@Service
public class RequestSchServiceImpl implements RequestSchService {

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private RequestSchStore rsStore;
	
	@Override
	public int requestSch(RequestSch rs) {
		int result = rsStore.requestSch(sqlSession, rs);
		return result;
	}

}
