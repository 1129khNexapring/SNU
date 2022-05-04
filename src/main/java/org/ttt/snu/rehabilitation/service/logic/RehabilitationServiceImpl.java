package org.ttt.snu.rehabilitation.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.rehabilitation.service.RehabilitationService;
import org.ttt.snu.rehabilitation.store.RehabilitationStore;
import org.ttt.snu.student.domain.Student;

@Service
public class RehabilitationServiceImpl implements RehabilitationService{

	@Autowired
	private RehabilitationStore rStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	
	@Override
	public int requestRehab(Rehabilitation rehab) {
		int result = rStore.requestRehab(sqlSession, rehab);
		return result;
	}

	@Override
	public List<Rehabilitation> printRehab(String sCode) {
		List<Rehabilitation> rList = rStore.selectRehabList(sqlSession, sCode);
		return rList;
	}
	//학생전체이름조회
	@Override
	public List<Student> printStudentName() {
		List<Student> sList = rStore.selectStudent(sqlSession);
		return sList;
	}
	//복학신청리스트 출력
	@Override
	public List<Rehabilitation> printReList() {
		List<Rehabilitation> reList = rStore.selectReList(sqlSession);
		return reList;
	}
	//관리자 복학 승인
	@Override
	public int modifyStatus(Rehabilitation rehab) {
		int uResult = rStore.updateStatus(sqlSession, rehab);
		return uResult;
	}
	//관리자 복학반려메시지 
	@Override
	public int modifyMsg(Rehabilitation rehab) {
		int uResult = rStore.updateMsg(sqlSession, rehab);
		return uResult;
	}

}
