package org.ttt.snu.grade.service.logic;

import java.util.List;

import org.springframework.stereotype.Service;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.grade.domain.Grade;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.grade.service.GradeService;

@Service
public class GradeServiceImpl implements GradeService{

	@Override
	public int getListCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Grade> printAll(PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<LectureEvaluation> printAllLE(PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int registerGrade(Grade grade) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyGrade(Grade grade) {
		// TODO Auto-generated method stub
		return 0;
	}

}
