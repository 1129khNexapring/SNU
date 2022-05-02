package org.ttt.snu.attendance.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.lecture.domain.Lecture;

public interface AttendanceStore {
	
	public List<Lecture> selectLectureAll(SqlSession sqlSession);
	public List<EnrollLecture> selectEnLectureAll(SqlSession sqlSession, String lCode);
	public List<Attendance> selecAll(SqlSession sqlSession, Attendance attendance);
	
	public int insertAttendance(SqlSession sqlSession, Attendance attendance);
	public int updateAttendance(SqlSession sqlSession, Attendance attendance);
//	public int deleteAttendance(SqlSession sqlSession);

}
