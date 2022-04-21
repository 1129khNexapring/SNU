package org.ttt.snu.professor.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.store.ProfessorStore;

@Repository
public class ProfessorStoreLogic implements ProfessorStore {

	@Override
	public Professor selectCheckLogin(SqlSession sqlSession, Professor professor) {
		Professor pOne = sqlSession.selectOne("ProfessorMapper.selectCheckLogin", professor);
		return pOne;
	}

}
