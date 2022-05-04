package org.ttt.snu.rehabilitation.store.logic;

import java.util.List;

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

	@Override
	public List<Rehabilitation> selectRehabList(SqlSession sqlSession, String sCode) {
		List<Rehabilitation> rList = sqlSession.selectList("RehabMapper.selectRehab", sCode);
		return rList;
	}

}
