package org.ttt.snu.admin.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.service.AdminService;
import org.ttt.snu.admin.store.AdminStore;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminStore aStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public Admin checklogin(Admin admin) {
		Admin aOne = aStore.selectLoginUser(sqlSession, admin);
		return aOne;
	}

}
