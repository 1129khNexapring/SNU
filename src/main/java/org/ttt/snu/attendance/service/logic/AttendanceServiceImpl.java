package org.ttt.snu.attendance.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.attendance.service.AttendanceService;
import org.ttt.snu.attendance.store.AttendanceStore;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.store.LectureStore;

@Service
public class AttendanceServiceImpl implements AttendanceService {
	
	@Autowired
	private AttendanceStore aStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	
	@Override
	public List<Lecture> printLecture() {
		List<Lecture> lectureList = aStore.selectLectureAll(sqlSession);
		return lectureList;
	}

	@Override
	public List<Attendance> printAll(Attendance attendance) {
		
		return null;
	}

	@Override
	public int registerAttendance(Attendance attendance) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyAttendance(Attendance attendance) {
		
		return 0;
	}

	

}
