package org.ttt.snu.requestVolunteer.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.requestVolunteer.domain.RequestVolunteer;

public interface RequestVolunteerStore {

	int requestVolunteer(SqlSession sqlSession, RequestVolunteer rv);

	List<RequestVolunteer> printRequestVol(SqlSession sqlSession, String sCode);

}
