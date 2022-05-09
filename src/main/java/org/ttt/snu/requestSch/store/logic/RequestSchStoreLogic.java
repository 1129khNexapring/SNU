package org.ttt.snu.requestSch.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.requestSch.domain.RequestSch;
import org.ttt.snu.requestSch.store.RequestSchStore;

@Repository
public class RequestSchStoreLogic implements RequestSchStore {

	@Override
	public int requestSch(SqlSession sqlSession, RequestSch rs) {
		int result = sqlSession.insert("RequestSchMapper.requestSch", rs);
		return result;
	}

}
