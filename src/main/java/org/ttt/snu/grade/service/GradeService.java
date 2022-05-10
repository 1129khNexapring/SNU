package org.ttt.snu.grade.service;

import java.util.List;

import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.enrollLecture.domain.EnrollLectureDomain;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.grade.domain.ScoreList;

public interface GradeService {
	
	public int getListCount();
	public List<EnrollLectureDomain> printEnLecture(String pCode);
	public List<ScoreList> printAllLE();
	
	public int registerGrade(Grade grade);
	public int modifyGrade(Grade grade);
	
}
