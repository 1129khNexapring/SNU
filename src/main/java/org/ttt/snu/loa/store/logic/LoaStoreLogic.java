package org.ttt.snu.loa.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.store.LoaStore;

@Repository
public class LoaStoreLogic implements LoaStore {

	@Override
	public int requestLoa(SqlSession sqlSession, Loa loa) {
		int result = sqlSession.insert("LoaMapper.requestLoa", loa);
		return result;
	}

}
