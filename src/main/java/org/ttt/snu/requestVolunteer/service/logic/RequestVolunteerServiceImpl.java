package org.ttt.snu.requestVolunteer.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.requestVolunteer.domain.RequestVolunteer;
import org.ttt.snu.requestVolunteer.service.RequestVolunteerService;
import org.ttt.snu.requestVolunteer.store.RequestVolunteerStore;

@Service
public class RequestVolunteerServiceImpl implements RequestVolunteerService {

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private RequestVolunteerStore rvStore;
	//봉사활동 신청
	@Override
	public int requestVolunteer(RequestVolunteer rv) {
		int result = rvStore.requestVolunteer(sqlSession, rv);
		return result;
	}
	//봉사활동 신청리스트
	@Override
	public List<RequestVolunteer> printRequestVol(String sCode) {
		List<RequestVolunteer> rvList = rvStore.printRequestVol(sqlSession, sCode);
		return rvList;
	}

}
