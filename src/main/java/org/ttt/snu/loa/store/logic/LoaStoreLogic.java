package org.ttt.snu.loa.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.store.LoaStore;

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
		System.out.println(lList);
		return lList;
	}

}
