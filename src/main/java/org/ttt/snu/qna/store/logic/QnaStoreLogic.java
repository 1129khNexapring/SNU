package org.ttt.snu.qna.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.ttt.snu.qna.domain.Qna;
import org.ttt.snu.qna.domain.QnaReply;
import org.ttt.snu.qna.store.QnaStore;

@Repository
public class QnaStoreLogic implements QnaStore {

	@Autowired
	private SqlSession sqlSession;
		
	@Override
	public List<Qna> printAllQna(SqlSession sqlSession) {
		List<Qna> qList = sqlSession.selectList("QnaMapper.printAllQna");
		return qList;
	}

	@Override
	public int updateCount(SqlSession sqlSession, Qna qna) {
		int result = sqlSession.update("QnaMapper.updateCount", qna);
		return result;
	}

	@Override
	public int registerQna(SqlSession sqlSession, Qna qna) {
		int result = sqlSession.insert("QnaMapper.registerQna", qna);
		return result;
	}

	@Override
	public List<QnaReply> printAllQnaReply(SqlSession sqlSession, int qnaNo) {
		List<QnaReply> qnaReply = sqlSession.selectList("QnaMapper.qnaReplyList", qnaNo);
		return qnaReply;
	}

	@Override
	public int registerQnaReply(SqlSession sqlSession, QnaReply qnaReply) {
		int result = sqlSession.insert("QnaMapper.insertQnaReply", qnaReply);
		return result;
	}

	@Override
	public int modifyQnaReply(SqlSession sqlSession, QnaReply qnaReply) {
		int result = sqlSession.update("QnaMapper.updateQnaReply", qnaReply);
		return result;
	}

	@Override
	public int removeQnaReply(SqlSession sqlSession, QnaReply qnaReply) {
		int result = sqlSession.delete("QnaMapper.deleteQnaReply", qnaReply);
		return result;
	}

	@Override
	public int adminUpdateQnaReply(SqlSession sqlSession, int qnaNo) {
		int result = sqlSession.update("QnaMapper.updateQnaReplyStatus", qnaNo);
		
		return result;
	}

	


	
	

	
}
