package org.ttt.snu.professor.store.logic;


import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.store.ProfessorStore;

@Repository
public class ProfessorStoreLogic implements ProfessorStore{

	@Override
	public Professor selectProfessorById(SqlSession sqlSession, String id) {
		Professor p = sqlSession.selectOne("ProfessorMapper.selectProfessorById", id);
		return p;
	}

}
