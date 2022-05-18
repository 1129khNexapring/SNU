package org.ttt.snu.lectureSchedule.domain;

import java.sql.Date;

public class ViewLectureSchedule {
	private int lsNo;
	private Date lsDate;
	private String lsDay;
	private String lsDay1;
	private String lsRoom;
	private String lCode;
	private String lType;
	private String lName;
	private String lsContents;
	private int lDays;
	private String pCode;
	private String sCode;
	
	public ViewLectureSchedule() {}

	public ViewLectureSchedule(int lsNo, Date lsDate, String lsDay, String lsDay1, String lsRoom, String lCode,
			String lType, String lName, String lsContents, int lDays, String pCode, String sCode) {
		super();
		this.lsNo = lsNo;
		this.lsDate = lsDate;
		this.lsDay = lsDay;
		this.lsDay1 = lsDay1;
		this.lsRoom = lsRoom;
		this.lCode = lCode;
		this.lType = lType;
		this.lName = lName;
		this.lsContents = lsContents;
		this.lDays = lDays;
		this.pCode = pCode;
		this.sCode = sCode;
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

	public String getLsDay() {
		return lsDay;
	}

	public void setLsDay(String lsDay) {
		this.lsDay = lsDay;
	}

	public String getLsDay1() {
		return lsDay1;
	}

	public void setLsDay1(String lsDay1) {
		this.lsDay1 = lsDay1;
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

	public String getlType() {
		return lType;
	}

	public void setlType(String lType) {
		this.lType = lType;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getLsContents() {
		return lsContents;
	}

	public void setLsContents(String lsContents) {
		this.lsContents = lsContents;
	}

	public int getlDays() {
		return lDays;
	}

	public void setlDays(int lDays) {
		this.lDays = lDays;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "ViewLectureSchedule [lsNo=" + lsNo + ", lsDate=" + lsDate + ", lsDay=" + lsDay + ", lsDay1=" + lsDay1
				+ ", lsRoom=" + lsRoom + ", lCode=" + lCode + ", lType=" + lType + ", lName=" + lName + ", lsContents="
				+ lsContents + ", lDays=" + lDays + ", pCode=" + pCode + ", sCode=" + sCode + "]";
	}

	
}
