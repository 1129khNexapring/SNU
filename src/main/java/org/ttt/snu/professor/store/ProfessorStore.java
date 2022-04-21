package org.ttt.snu.professor.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.professor.domain.Professor;

public interface ProfessorStore {

	Professor selectCheckLogin(SqlSession sqlSession, Professor professor);

}
