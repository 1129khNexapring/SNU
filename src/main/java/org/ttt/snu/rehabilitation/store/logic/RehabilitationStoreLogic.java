package org.ttt.snu.rehabilitation.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.rehabilitation.store.RehabilitationStore;
import org.ttt.snu.student.domain.Student;

@Repository
public class RehabilitationStoreLogic implements RehabilitationStore {

	@Override
	public int requestRehab(SqlSession sqlSession, Rehabilitation rehab) {
		int result = sqlSession.insert("RehabMapper.requestRehab", rehab);
		return result;
	}

	@Override
	public List<Rehabilitation> selectRehabList(SqlSession sqlSession, String sCode) {
		List<Rehabilitation> rList = sqlSession.selectList("RehabMapper.selectRehab", sCode);
		return rList;
	}
	//관리자 학생 이름 출력
	@Override
	public List<Student> selectStudent(SqlSession sqlSession) {
		List<Student> sList = sqlSession.selectList("RehabMapper.printStudent");
		return sList;
	}
	//관리자 복학 신청리스트 출력
	@Override
	public List<Rehabilitation> selectReList(SqlSession sqlSession) {
		List<Rehabilitation> reList = sqlSession.selectList("RehabMapper.printRehabilitationList");
		return reList;
	}
	//관리자 복학 승인
	@Override
	public int updateStatus(SqlSession sqlSession, Rehabilitation rehab) {
		int result = sqlSession.update("RehabMapper.approveRehabilitation", rehab);
		return result;
	}
	//관리자 복학메시지 업데이트
	@Override
	public int updateMsg(SqlSession sqlSession, Rehabilitation rehab) {
		int result = sqlSession.update("RehabMapper.updateRehabMsg", rehab);
		return result;
	}

}
