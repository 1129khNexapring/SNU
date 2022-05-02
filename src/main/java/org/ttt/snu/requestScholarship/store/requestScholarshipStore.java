package org.ttt.snu.requestScholarship.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.requestScholarship.domain.RequestScholarship;

public interface requestScholarshipStore {
	//해당 장학금 학생 리스트 출력
	List<RequestScholarship> selectStudentList(SqlSession sqlSession, String inVar1);

}
