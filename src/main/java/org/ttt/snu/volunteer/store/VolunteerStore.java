package org.ttt.snu.volunteer.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.volunteer.domain.Volunteer;

public interface VolunteerStore {
	//봉사활동 등록
	int insertVolunteer(SqlSession sqlSession, Volunteer volunteer);
	//봉사활동 리스트 출력
	List<Volunteer> selectVolunteer(SqlSession sqlSession);
	//봉사활동 삭제
	int deleteVolunteer(SqlSession sqlSession, String vCode);
	//봉사활동수정
	int updateVolunteer(SqlSession sqlSession, Volunteer volunteer);
	
}
