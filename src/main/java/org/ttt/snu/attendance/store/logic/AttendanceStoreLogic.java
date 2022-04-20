package org.ttt.snu.attendance.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.attendance.store.AttendanceStore;

@Repository
public class AttendanceStoreLogic implements AttendanceStore {

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
