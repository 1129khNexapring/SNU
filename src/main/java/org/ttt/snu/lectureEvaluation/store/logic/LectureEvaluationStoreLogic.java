package org.ttt.snu.lectureEvaluation.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.lectureEvaluation.store.LectureEvaluationStore;

@Repository
public class LectureEvaluationStoreLogic implements LectureEvaluationStore {

	@Override
	public int registerScore(SqlSession sqlSession, LectureEvaluation le) {
		int result = sqlSession.insert("LectureEvaluationMapper.registerScore", le);
		return result;
	}

	@Override
	public int modifyScore(SqlSession sqlSession, LectureEvaluation le) {
		int result = sqlSession.update("LectureEvaluationMapper.modifyScore", le);
		return result;
	}

}
