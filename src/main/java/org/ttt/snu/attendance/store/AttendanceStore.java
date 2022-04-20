package org.ttt.snu.attendance.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.attendance.domain.Attendance;

public interface AttendanceStore {
	
	public List<Attendance> selecAll(SqlSession sqlSession, Attendance attendance);
	
	public int insertAttendance(SqlSession sqlSession, Attendance attendance);
	public int updateAttendance(SqlSession sqlSession, Attendance attendance);
//	public int deleteAttendance(SqlSession sqlSession);
}
