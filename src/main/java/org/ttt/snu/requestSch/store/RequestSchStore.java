package org.ttt.snu.requestSch.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.requestSch.domain.RequestSch;

public interface RequestSchStore {

	int requestSch(SqlSession sqlSession, RequestSch rs);

}
