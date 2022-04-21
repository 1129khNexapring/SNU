package org.ttt.snu.admin.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.admin.domain.Admin;

public interface AdminStore {

	Admin selectLoginUser(SqlSession sqlSession, Admin admin);

}
