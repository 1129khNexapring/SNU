package org.ttt.snu.lectureSchedule.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.lectureSchedule.domain.LectureSchedule;

public interface LectureScheduleStore {

	List<LectureSchedule> selectLectureScheduleList(SqlSession sqlSession);

}
