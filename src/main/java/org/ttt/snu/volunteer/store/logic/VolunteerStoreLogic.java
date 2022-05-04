package org.ttt.snu.volunteer.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.volunteer.domain.Volunteer;
import org.ttt.snu.volunteer.store.VolunteerStore;
@Repository
public class VolunteerStoreLogic implements VolunteerStore {

	@Override
	public int insertVolunteer(SqlSession sqlSession, Volunteer volunteer) {
		int iResult = sqlSession.insert("VolunteerMapper.insertVolunteer", volunteer);
		return iResult;
	}

	@Override
	public List<Volunteer> selectVolunteer(SqlSession sqlSession) {
		List<Volunteer> vList = sqlSession.selectList("VolunteerMapper.selectVolunteerList");
		return vList;
	}

	@Override
	public int deleteVolunteer(SqlSession sqlSession, String vCode) {
		int result = sqlSession.delete("VolunteerMapper.deleteVolunteer", vCode);
		return result;
	}

	@Override
	public int updateVolunteer(SqlSession sqlSession, Volunteer volunteer) {
		int uResult = sqlSession.update("VolunteerMapper.updateVolunteer", volunteer);
		return uResult;
	}
	
}
