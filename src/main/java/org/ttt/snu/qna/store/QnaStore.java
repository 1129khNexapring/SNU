package org.ttt.snu.qna.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.qna.domain.Qna;
import org.ttt.snu.qna.domain.QnaReply;

public interface QnaStore {

	List<Qna> printAllQna(SqlSession sqlSession);

	int updateCount(SqlSession sqlSession, Qna qna);

	int registerQna(SqlSession sqlSession, Qna qna);

	List<QnaReply> printAllQnaReply(SqlSession sqlSession, int qnaNo);

}
