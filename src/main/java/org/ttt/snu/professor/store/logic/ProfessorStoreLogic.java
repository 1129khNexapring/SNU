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

	@Override
	public List<Professor> selectProfessorListBydCode(SqlSession sqlSession, String dCode) {
		List<Professor> pList = sqlSession.selectList("ProfessorMapper.selectProfessorListBydCode", dCode);
		return pList;
	}

	@Override
	public int updateProf(SqlSession sqlSession, Professor prof) {
		int result = sqlSession.update("ProfessorMapper.updateProfInfo", prof);
		return result;
	}

}
