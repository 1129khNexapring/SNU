package org.ttt.snu.loa.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.loa.domain.Loa;

public interface LoaStore {

	int requestLoa(SqlSession sqlSession, Loa loa);

	List<Loa> selectLoaStudentList(SqlSession sqlSession);

}
