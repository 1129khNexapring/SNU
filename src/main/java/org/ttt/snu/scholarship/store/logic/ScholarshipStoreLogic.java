package org.ttt.snu.scholarship.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.scholarship.domain.Scholarship;
import org.ttt.snu.scholarship.store.ScholarshipStore;

@Repository
public class ScholarshipStoreLogic implements ScholarshipStore {

	@Override
	public List<Scholarship> selectScholarship(SqlSession sqlSession) {
		List<Scholarship> scList = sqlSession.selectList("ScholarshipMapper.selectScholarshipList");
		return scList;
	}
	// 신규장학금 등록
	@Override
	public int insertScholarship(SqlSession sqlSession, Scholarship scholarship) {
		int iResult = sqlSession.insert("ScholarshipMapper.insertScholarship", scholarship);
		return iResult;
	}
	// 장학금 삭제
	@Override
	public int deleteScholarship(SqlSession sqlSession, String scCode) {
		int result = sqlSession.delete("ScholarshipMapper.deleteScholarship", scCode);
		return result;
	}
	// 장학금 수정
	@Override
	public int updateScholarship(SqlSession sqlSession, Scholarship scholarship) {
		int uResult = sqlSession.update("ScholarshipMapper.updateScholarship", scholarship);
		return uResult;
	}
	@Override
	public List<Scholarship> selectSch(SqlSession sqlSession) {
		List<Scholarship> schList = sqlSession.selectList("ScholarshipMapper.selectMoneyList");
		return schList;
	}
	@Override
	public List<Scholarship> selectRequestSch(SqlSession sqlSession, String sCode) {
		List<Scholarship> schList = sqlSession.selectList("ScholarshipMapper.selectRequestList", sCode);
		return schList;
	}

}
