package org.ttt.snu.info.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.store.InfoStore;
@Repository
public class InfoStoreLogic implements InfoStore{

	@Override
	public List<Info> selectAll(SqlSession sqlSession) {
		List<Info> iList = sqlSession.selectList("InfoMapper.selectAllList");
		return iList;
	}

}
