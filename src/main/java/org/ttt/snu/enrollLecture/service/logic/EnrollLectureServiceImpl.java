package org.ttt.snu.enrollLecture.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.enrollLecture.service.EnrollLectureService;
import org.ttt.snu.enrollLecture.store.EnrollLectureStore;
import org.ttt.snu.student.domain.Student;

@Service
public class EnrollLectureServiceImpl implements EnrollLectureService {
	@Autowired
	private EnrollLectureStore eStore;
	@Autowired
	private SqlSession sqlSession;
	
	//수강신청한 학생의 데이터가 존재하는 지 check
	@Override
	public int checkStudent(Student student) {
		int result = eStore.selectStudent(sqlSession, student);
		return result;
	}
	//수강신청 한 학생 데이터가 존재하면 해당 수강신청 날짜 가져오기
	@Override
	public List<courseCalendar> getDay(courseCalendar cc) {
		List<courseCalendar> ccList = eStore.selectDay(sqlSession, cc);
		return ccList;
	}
	//수강신청 
	@Override
	public int registerCourse(EnrollLecture lecture) {
		int result = eStore.insertLecture(sqlSession, lecture);
		return result;
	}
}
