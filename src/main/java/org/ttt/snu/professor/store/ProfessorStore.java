package org.ttt.snu.professor.store;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.professor.domain.Professor;

public interface ProfessorStore {

	Professor selectProfessorById(SqlSession sqlSession, String id);

	List<Professor> selectProfessorListBydCode(SqlSession sqlSession, String dCode);

}
