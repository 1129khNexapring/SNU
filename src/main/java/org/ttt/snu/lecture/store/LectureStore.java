package org.ttt.snu.lecture.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.lecture.domain.Lecture;

public interface LectureStore {

	List<Lecture> selectAllLectures(SqlSession sqlSession);

	List<Lecture> selectLecturePlanList(SqlSession sqlSession);


}
