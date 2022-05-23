package org.ttt.snu.vacationSession.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.vacationSession.domain.VacationSession;
import org.ttt.snu.vacationSession.service.VacationSessionService;
import org.ttt.snu.vacationSession.store.VacationSessionStore;

@Service
public class VacationSessionServiceImpl implements VacationSessionService {

	@Autowired
	private VacationSessionStore vsStore;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public int registerVs(VacationSession vs) {
		int result = vsStore.registerVs(sqlSession, vs);
		return result;
	}

	@Override
	public List<VacationSession> printAllRequest(String inVar1) {
		List<VacationSession> vsList = vsStore.selectAllRequest(sqlSession, inVar1);
		return vsList;
	}
}
