package org.ttt.snu.attendance.service;

import java.util.List;

import org.ttt.snu.attendance.domain.Attendance;

public interface AttendanceService {
	
	public List<Attendance> printAll(Attendance attendance);
	
	public int registerAttendance(Attendance attendance);
	public int modifyAttendance(Attendance attendance);
	// public int removeAttendance(int )
	
}
