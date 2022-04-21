package org.ttt.snu.professor.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import org.ttt.snu.professor.store.ProfessorStore;

@Service
public class ProfessorServiceImpl implements ProfessorService{

	@Autowired
	private ProfessorStore pStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public Professor checkLogin(Professor professor) {
		Professor pOne = pStore.selectCheckLogin(sqlSession, professor);
		return pOne;
	}

}
