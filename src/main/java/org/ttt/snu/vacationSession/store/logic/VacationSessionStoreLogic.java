package org.ttt.snu.vacationSession.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.vacationSession.domain.VacationSession;
import org.ttt.snu.vacationSession.store.VacationSessionStore;

@Repository
public class VacationSessionStoreLogic implements VacationSessionStore {

	@Override
	public int registerVs(SqlSession sqlSession, VacationSession vs) {
		int result = sqlSession.insert("VacationSessionMapper.registerVs", vs);
		return result;
	}

	@Override
	public List<VacationSession> selectAllRequest(SqlSession sqlSession, String inVar1) {
		List<VacationSession> vsList = sqlSession.selectList("VacationSessionMapper.selectAllRequest", inVar1);
		return vsList;
	}

}
