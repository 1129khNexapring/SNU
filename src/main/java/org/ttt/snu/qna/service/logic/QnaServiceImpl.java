package org.ttt.snu.qna.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.qna.domain.Qna;
import org.ttt.snu.qna.domain.QnaReply;
import org.ttt.snu.qna.service.QnaService;
import org.ttt.snu.qna.store.QnaStore;

@Service
public class QnaServiceImpl implements QnaService{
	
	@Autowired
	private QnaStore qStore;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<Qna> printAllQna(Qna qna) {
		List<Qna> qList = qStore.printAllQna(sqlSession);
		return qList;
	}

	@Override
	public int updateCount(Qna qna) {
		int result = qStore.updateCount(sqlSession, qna);
		return result;
	}

	@Override
	public int registerQna(Qna qna) {
		int result = qStore.registerQna(sqlSession, qna);
		return result;
	}

	@Override
	public List<QnaReply> printAllQnaReply(int qnaNo) {
		List<QnaReply> qnaReply = qStore.printAllQnaReply(sqlSession, qnaNo);
		return qnaReply;
	}

}
