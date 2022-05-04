package org.ttt.snu.scholarship.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.scholarship.domain.Scholarship;
import org.ttt.snu.scholarship.service.ScholarshipService;
import org.ttt.snu.scholarship.store.ScholarshipStore;
@Service
public class ScholarshipServiceImpl implements ScholarshipService {
	@Autowired
	private ScholarshipStore scStore;
	@Autowired
	private SqlSession sqlSession;
	
	//장학금 리스트 출력
	@Override
	public List<Scholarship> printAllScholarship() {
		List<Scholarship> scList = scStore.selectScholarship(sqlSession);
		return scList;
	}
	//신규장학금 등록
	@Override
	public int registerScholarship(Scholarship scholarship) {
		int iResult = scStore.insertScholarship(sqlSession, scholarship);
		return iResult;
	}
	//장학금 삭제
	@Override
	public int removeScholarship(String scCode) {
		int result = scStore.deleteScholarship(sqlSession, scCode);
		return result;
		
	}
	//장학금 수정
	@Override
	public int modifyScholarship(Scholarship scholarship) {
		int uResult = scStore.updateScholarship(sqlSession, scholarship);
		return uResult;
	}
	@Override
	public List<Scholarship> printAllSch() {
		List<Scholarship> schList = scStore.selectSch(sqlSession);
		return schList;
	}
	//신청한 장학금리스트 출력
	@Override
	public List<Scholarship> printRequestSch(String sCode) {
		List<Scholarship> schList = scStore.selectRequestSch(sqlSession, sCode);
		return schList;
	}

}
