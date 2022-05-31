package org.ttt.snu.qna.service;

import java.util.List;

import org.ttt.snu.qna.domain.Qna;
import org.ttt.snu.qna.domain.QnaReply;

public interface QnaService {

	List<Qna> printAllQna(Qna qna);

	int updateCount(Qna qna);

	int registerQna(Qna qna);

	List<QnaReply> printAllQnaReply(int qnaNo);

	int registerQnaReply(QnaReply qnaReply);

	int modifyQnaReply(QnaReply qnaReply);

	int removeQnaReply(QnaReply qnaReply);

}
