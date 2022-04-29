package org.ttt.snu.rehabilitation.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.rehabilitation.store.RehabilitationStore;

@Repository
public class RehabilitationStoreLogic implements RehabilitationStore {

	@Override
	public int requestRehab(SqlSession sqlSession, Rehabilitation rehab) {
		int result = sqlSession.insert("RehabMapper.requestRehab", rehab);
		return result;
	}

}
