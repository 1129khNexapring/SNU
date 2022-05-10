package org.ttt.snu.lectureEvaluation.service;

import org.ttt.snu.grade.domain.LectureEvaluation;

public interface LectureEvaluationService {

	int registerScore(LectureEvaluation le);

	int modifyScore(LectureEvaluation le);

}
