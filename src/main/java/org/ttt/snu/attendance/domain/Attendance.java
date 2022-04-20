package org.ttt.snu.attendance.domain;

import java.sql.Date;

public class Attendance {
	
	private Date lDate;
	private String sCode;
	private String lCode;
	private String attendanceStatus;
	
	public Attendance() {}

	public Attendance(Date lDate, String sCode, String lCode, String attendanceStatus) {
		super();
		this.lDate = lDate;
		this.sCode = sCode;
		this.lCode = lCode;
		this.attendanceStatus = attendanceStatus;
	}

	public Date getlDate() {
		return lDate;
	}

	public void setlDate(Date lDate) {
		this.lDate = lDate;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getlCode() {
		return lCode;
	}

	public void setlCode(String lCode) {
		this.lCode = lCode;
	}

	public String getAttendanceStatus() {
		return attendanceStatus;
	}

	public void setAttendanceStatus(String attendanceStatus) {
		this.attendanceStatus = attendanceStatus;
	}

	@Override
	public String toString() {
		return "Attendance [lDate=" + lDate + ", sCode=" + sCode + ", lCode=" + lCode + ", attendanceStatus="
				+ attendanceStatus + "]";
	}
	
	
	
}
