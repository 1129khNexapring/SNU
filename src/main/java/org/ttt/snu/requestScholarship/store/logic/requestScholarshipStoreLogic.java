package org.ttt.snu.requestScholarship.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.requestScholarship.domain.RequestScholarship;
import org.ttt.snu.requestScholarship.store.requestScholarshipStore;

@Repository
public class requestScholarshipStoreLogic implements requestScholarshipStore {
	// 관리자 해당 장학금 학생 리스트 출력
	@Override
	public List<RequestScholarship> selectStudentList(SqlSession sqlSession, String inVar1) {
		List<RequestScholarship> rsList = sqlSession.selectList("requestScholarshipMapper.selectScholarshipStudent", inVar1);
		return rsList;
	}

}
