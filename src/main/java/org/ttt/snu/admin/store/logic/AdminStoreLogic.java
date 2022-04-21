package org.ttt.snu.admin.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.store.AdminStore;

@Repository
public class AdminStoreLogic implements AdminStore {

	@Override
	public Admin selectLoginUser(SqlSession sqlSession, Admin admin) {
		Admin aOne = sqlSession.selectOne("AdminMapper.selectLoginUser", admin);
		return aOne;
	}

}
