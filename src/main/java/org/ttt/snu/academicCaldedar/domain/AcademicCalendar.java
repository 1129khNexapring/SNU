package org.ttt.snu.academicCaldedar.domain;

import java.sql.Date;

public class AcademicCalendar {
	private int acNo;
	private String aCode;
	private String title;
	private Date startDate;
	private Date endDate;
	
	public AcademicCalendar() {}

	public AcademicCalendar(int acNo, String aCode, String title, Date startDate, Date endDate) {
		super();
		this.acNo = acNo;
		this.aCode = aCode;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public int getAcNo() {
		return acNo;
	}

	public void setAcNo(int acNo) {
		this.acNo = acNo;
	}

	public String getaCode() {
		return aCode;
	}

	public void setaCode(String aCode) {
		this.aCode = aCode;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "AcademicCalendar [acNo=" + acNo + ", aCode=" + aCode + ", title=" + title + ", startDate=" + startDate
				+ ", endDate=" + endDate + "]";
	}
}
