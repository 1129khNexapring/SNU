package org.ttt.snu.loa.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.loa.domain.Loa;

public interface LoaStore {

	int requestLoa(SqlSession sqlSession, Loa loa);

}
