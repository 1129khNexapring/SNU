package org.ttt.snu.lectureEvaluation.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.grade.domain.LectureEvaluation;

public interface LectureEvaluationStore {

	int registerScore(SqlSession sqlSession, LectureEvaluation le);

	int modifyScore(SqlSession sqlSession, LectureEvaluation le);

}
