package org.ttt.snu.qna.service;

import java.util.List;

import org.ttt.snu.qna.domain.Qna;

public interface QnaService {

	List<Qna> printAllQna(Qna qna);

	int updateCount(Qna qna);

	int registerQna(Qna qna);

}
