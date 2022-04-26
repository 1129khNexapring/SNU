package org.ttt.snu.volunteer.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.volunteer.domain.Volunteer;
import org.ttt.snu.volunteer.service.VolunteerService;
import org.ttt.snu.volunteer.store.VolunteerStore;
@Service
public class VolunteerServiceImpl implements VolunteerService {
	
	@Autowired
	private VolunteerStore vStore;
	@Autowired
	private SqlSession sqlSession;
	//관리자- 봉사활동 등록
	@Override
	public int registerVolunteer(Volunteer volunteer) {
		int iResult = vStore.insertVolunteer(sqlSession, volunteer);
		return iResult;
	}
	//관리자- 봉사활동 조회
	@Override
	public List<Volunteer> printAllVolunteer() {
		List<Volunteer> vList = vStore.selectVolunteer(sqlSession);
		return vList;
	}
	//관리자 - 봉사활동 삭제
	@Override
	public int removeVolunteer(String vCode) {
		int result = vStore.deleteVolunteer(sqlSession, vCode);
		return result;
	}
	//관리자-봉사활동 수정
	@Override
	public int modifyVolunteer(Volunteer volunteer) {
		int uResult = vStore.updateVolunteer(sqlSession, volunteer);
		return uResult;
	}
}
