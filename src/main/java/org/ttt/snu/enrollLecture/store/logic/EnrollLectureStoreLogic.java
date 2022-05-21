package org.ttt.snu.enrollLecture.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.enrollLecture.store.EnrollLectureStore;
import org.ttt.snu.student.domain.Student;

@Repository
public class EnrollLectureStoreLogic implements EnrollLectureStore {
	//수강신청한 학생이 존재하는 지 check
	@Override
	public int selectStudent(SqlSession sqlSession, Student student) {
		int result = sqlSession.selectOne("StudentMapper.checkStudent", student);
		System.out.println(result);
		return result;
	}
	//수강신청한 학생 정보 check후 날짜 가져오기
	@Override
	public List<courseCalendar> selectDay(SqlSession sqlSession, courseCalendar cc) {
		List<courseCalendar> ccList = sqlSession.selectList("courseCalendarMapper.getCalendar", cc);
		return ccList;
	}
	//수강신청
	@Override
	public int insertLecture(SqlSession sqlSession, EnrollLecture lecture) {
		int result = sqlSession.insert("LectureMapper.courseRegister", lecture);
		return result;
	}
	
	
}
