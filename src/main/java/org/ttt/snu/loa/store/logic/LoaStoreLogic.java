package org.ttt.snu.loa.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.store.LoaStore;
import org.ttt.snu.student.domain.Student;

@Repository
public class LoaStoreLogic implements LoaStore {

	@Override
	public int requestLoa(SqlSession sqlSession, Loa loa) {
		int result = sqlSession.insert("LoaMapper.requestLoa", loa);
		return result;
	}
	//관리자 휴학신청학생리스트 출력
	@Override
	public List<Loa> selectLoaStudentList(SqlSession sqlSession) {
		List<Loa> lList = sqlSession.selectList("LoaMapper.selectLoaList");
		//System.out.println(lList);
		return lList;
	}
	//관리자-학생전체이름
	@Override
	public List<Student> selectStudentName(SqlSession sqlSession) {
		List<Student> sList = sqlSession.selectList("LoaMapper.selectStudentList");
		//System.out.println(sList);
		return sList;
	}
	//관리자-휴학승인
	@Override
	public int updateStatus(SqlSession sqlSession, Loa loa) {
		int result = sqlSession.update("LoaMapper.updateloaStatus", loa);
		return result;
	}
	//관리자-휴학반려
	@Override
	public int updateMsg(SqlSession sqlSession, Loa loa) {
		int result = sqlSession.update("LoaMapper.updateloaMsg", loa);
		return result;
	}
	@Override
	public List<Loa> selectLoaList(SqlSession sqlSession, String sCode) {
		List<Loa> slList = sqlSession.selectList("LoaMapper.selectLoa", sCode); 
		return slList;
	}
	@Override
	public int deleteLoa(SqlSession sqlSession, String lDelete) {
		int result = sqlSession.delete("LoaMapper.deleteLoa", lDelete);
		return result;
	}

}
