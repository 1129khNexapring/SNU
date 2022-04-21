package org.ttt.snu.lectureSchedule.domain;

import java.sql.Date;

public class LectureSchedule {
	private int lsNo;
	private Date lsDate;
	private int lsStartTime;
	private int lsEndTime;
	private String lsRoom;
	private String lCode;
	
	public LectureSchedule() {}

	public LectureSchedule(int lsNo, Date lsDate, int lsStartTime, int lsEndTime, String lsRoom, String lCode) {
		super();
		this.lsNo = lsNo;
		this.lsDate = lsDate;
		this.lsStartTime = lsStartTime;
		this.lsEndTime = lsEndTime;
		this.lsRoom = lsRoom;
		this.lCode = lCode;
	}

	public int getLsNo() {
		return lsNo;
	}

	public void setLsNo(int lsNo) {
		this.lsNo = lsNo;
	}

	public Date getLsDate() {
		return lsDate;
	}

	public void setLsDate(Date lsDate) {
		this.lsDate = lsDate;
	}

	public int getLsStartTime() {
		return lsStartTime;
	}

	public void setLsStartTime(int lsStartTime) {
		this.lsStartTime = lsStartTime;
	}

	public int getLsEndTime() {
		return lsEndTime;
	}

	public void setLsEndTime(int lsEndTime) {
		this.lsEndTime = lsEndTime;
	}

	public String getLsRoom() {
		return lsRoom;
	}

	public void setLsRoom(String lsRoom) {
		this.lsRoom = lsRoom;
	}

	public String getlCode() {
		return lCode;
	}

	public void setlCode(String lCode) {
		this.lCode = lCode;
	}

	@Override
	public String toString() {
		return "LectureSchedule [lsNo=" + lsNo + ", lsDate=" + lsDate + ", lsStartTime=" + lsStartTime + ", lsEndTime="
				+ lsEndTime + ", lsRoom=" + lsRoom + ", lCode=" + lCode + "]";
	}
	
	

}
