package org.ttt.snu.reserveforce.store.logic;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.reserveforce.store.ReserveforceStore;
import org.ttt.snu.student.domain.Student;

@Repository
public class ReserveforceStoreLogic implements ReserveforceStore {

	@Override
	public List<Student> selectAllRf(SqlSession sqlSession, String sCode) {
		List<Student> msList = sqlSession.selectList("ReserveforceMapper.selectReserveforce", sCode);
		return msList;
	}

	@Override
	public int requestMil(SqlSession sqlSession, Reserveforce reserveforce) {
		int result = sqlSession.insert("ReserveforceMapper.requestMil", reserveforce);
		return result;
	}

	@Override
	public List<Reserveforce> requestMilList(SqlSession sqlSession, String sCode) {
		List<Reserveforce> rfList = sqlSession.selectList("ReserveforceMapper.requestMilList", sCode);
		return rfList;
	}
}
