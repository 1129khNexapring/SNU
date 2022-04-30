package org.ttt.snu.requestScholarship.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.requestScholarship.domain.RequestScholarship;
import org.ttt.snu.requestScholarship.service.requestScholarshipService;
import org.ttt.snu.requestScholarship.store.requestScholarshipStore;
@Service
public class requestScholarshipServiceImpl implements requestScholarshipService {
	@Autowired
	private SqlSession sqlSession;
	@Autowired
	private requestScholarshipStore rsStore;
	
	//해당 장학금 학생리스트
	@Override
	public List<RequestScholarship> printStudentList(String inVar1) {
		List<RequestScholarship> rsList = rsStore.selectStudentList(sqlSession, inVar1);
		return rsList;
	}

}
