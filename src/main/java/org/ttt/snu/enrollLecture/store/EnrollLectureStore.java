package org.ttt.snu.enrollLecture.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.student.domain.Student;

public interface EnrollLectureStore {

	int selectStudent(SqlSession sqlSession, Student student);

	List<courseCalendar> selectDay(SqlSession sqlSession, courseCalendar cc);

	int insertLecture(SqlSession sqlSession, EnrollLecture lecture);

}
