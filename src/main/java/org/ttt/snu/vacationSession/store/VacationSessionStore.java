package org.ttt.snu.vacationSession.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.vacationSession.domain.VacationSession;

public interface VacationSessionStore {

	int registerVs(SqlSession sqlSession, VacationSession vs);

	List<VacationSession> selectAllRequest(SqlSession sqlSession, String inVar1);

}
