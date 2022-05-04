package org.ttt.snu.attendance.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.attendance.store.AttendanceStore;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.lecture.domain.Lecture;

@Repository
public class AttendanceStoreLogic implements AttendanceStore {
	
	@Override
	public List<Lecture> selectLectureAll(SqlSession sqlSession) {
		List<Lecture> lectureList = sqlSession.selectList("AttendanceMapper.selectAllLectureList");
		return lectureList;
	}
	
	@Override
	public List<EnrollLecture> selectEnLectureAll(SqlSession sqlSession, String lCode) {
		List<EnrollLecture> enLectureList = sqlSession.selectList("AttendanceMapper.selectAllEnLectureList", lCode);
		return enLectureList;
	}

	@Override
	public List<Attendance> selecAll(SqlSession sqlSession, Attendance attendance) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertAttendance(SqlSession sqlSession, Attendance attendance) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateAttendance(SqlSession sqlSession, Attendance attendance) {
		// TODO Auto-generated method stub
		return 0;
	}

	

	
	
}
