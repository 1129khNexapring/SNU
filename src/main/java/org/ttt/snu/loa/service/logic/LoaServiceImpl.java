package org.ttt.snu.loa.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.service.LoaService;
import org.ttt.snu.loa.store.LoaStore;
import org.ttt.snu.student.domain.Student;

@Service
public class LoaServiceImpl implements LoaService {

	@Autowired
	private LoaStore lStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int requestLoa(Loa loa) {
		int result = lStore.requestLoa(sqlSession, loa);
		return result;
	}
	
	//관리자-휴학 학생신청리스트 출력
	@Override
	public List<Loa> printRequestList() {
		List<Loa> lList = lStore.selectLoaStudentList(sqlSession);
		return lList;
	}
	//관리자 - 전체학생이름 출력
	@Override
	public List<Student> printStudentName() {
		List<Student> sList = lStore.selectStudentName(sqlSession);
		return sList;
	}
	//관리자-휴학승인
	@Override
	public int modifyStatus(Loa loa) {
		int result = lStore.updateStatus(sqlSession, loa);
		return result;
	}

	@Override
	public int modifyMsg(Loa loa) {
		int result = lStore.updateMsg(sqlSession, loa);
		return result;
	}

	@Override
	public List<Loa> printLoa(String sCode) {
		List<Loa> slList = lStore.selectLoaList(sqlSession, sCode);
		return slList;
	}

	@Override
	public int removeLoa(String lDelete) {
		int result = lStore.deleteLoa(sqlSession, lDelete);
		return result;
	}

}
