package org.ttt.snu.requestVolunteer.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.requestVolunteer.domain.RequestVolunteer;
import org.ttt.snu.requestVolunteer.store.RequestVolunteerStore;

@Repository
public class RequestVolunteerStoreLogic implements RequestVolunteerStore {

	@Override
	public int requestVolunteer(SqlSession sqlSession, RequestVolunteer rv) {
		int result = sqlSession.insert("RequestVolunteerMapper.requestVolunteer", rv);
		return result;
	}

	@Override
	public List<RequestVolunteer> printRequestVol(SqlSession sqlSession, String sCode) {
		List<RequestVolunteer> rvList = sqlSession.selectList("RequestVolunteerMapper.printRequestVol", sCode);
		return rvList;
	}

}
