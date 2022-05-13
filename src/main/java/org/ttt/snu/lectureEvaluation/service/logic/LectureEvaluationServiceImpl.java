package org.ttt.snu.lectureEvaluation.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.lectureEvaluation.service.LectureEvaluationService;
import org.ttt.snu.lectureEvaluation.store.LectureEvaluationStore;

@Service
public class LectureEvaluationServiceImpl implements LectureEvaluationService {

	@Autowired
	private LectureEvaluationStore leStore; 
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int registerScore(LectureEvaluation le) {
		int result = leStore.registerScore(sqlSession, le);
		return result;
	}

	@Override
	public int modifyScore(LectureEvaluation le) {
		int result = leStore.modifyScore(sqlSession, le);
		return result;
	}

}
