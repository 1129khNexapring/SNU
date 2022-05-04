package org.ttt.snu.rehabilitation.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;

public interface RehabilitationStore {

	int requestRehab(SqlSession sqlSession, Rehabilitation rehab);

	List<Rehabilitation> selectRehabList(SqlSession sqlSession, String sCode);

}
