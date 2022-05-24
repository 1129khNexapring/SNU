package org.ttt.snu.professor.service.logic;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import org.ttt.snu.professor.store.ProfessorStore;

@Service
public class ProfessorServiceImpl implements ProfessorService{
	
	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private ProfessorStore pStore;

	@Override
	public Professor printProfessorById(String id) {
		Professor p = pStore.selectProfessorById(sqlSession, id);
		return p;
	}

	@Override
	public List<Professor> printProfessorListBydCode(String dCode) {
		List<Professor> pList = pStore.selectProfessorListBydCode(sqlSession, dCode);
		return pList;
	}

	@Override
	public int modifyProf(Professor prof) {
		int result = pStore.updateProf(sqlSession, prof);
		return result;
	}

}
