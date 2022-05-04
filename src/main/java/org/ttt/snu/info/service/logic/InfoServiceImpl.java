package org.ttt.snu.info.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.service.InfoService;
import org.ttt.snu.info.store.InfoStore;
import org.ttt.snu.notice.store.NoticeStore;
@Service
public class InfoServiceImpl implements InfoService {
		
	@Autowired
	private InfoStore iStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Info> printAll() {
		List<Info> iList = iStore.selectAll(sqlSession);
		return iList;
	}

}
