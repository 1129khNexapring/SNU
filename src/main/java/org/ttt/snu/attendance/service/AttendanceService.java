package org.ttt.snu.attendance.service;

import java.util.List;

import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.lecture.domain.Lecture;

public interface AttendanceService {
	
	public List<Lecture> printLecture();
	public List<Attendance> printAll(Attendance attendance);
	
	public int registerAttendance(Attendance attendance);
	public int modifyAttendance(Attendance attendance);
	// public int removeAttendance(int )
	
}
