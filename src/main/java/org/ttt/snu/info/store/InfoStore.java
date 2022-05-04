package org.ttt.snu.info.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.info.domain.Info;

public interface InfoStore {

	List<Info> selectAll(SqlSession sqlSession);

}
