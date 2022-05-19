package org.ttt.snu.lecture.domain;

import java.util.List;

import org.ttt.snu.grade.domain.Grade;

public class Lecture {
	private String lCode;
	private String lType;
	private String lName;
	private String lObjective;
	private String lContents;
	private String textbook;
	private int lDays;
	private int credit;
	private int lYear;
	private int lSemester;
	private int lCapacity;
	private String lStatus;
	private String pCode;
	private String dCode;

	public Lecture() {}

	public Lecture(String lCode, String lType, String lName, String lObjective, String lContents, String textbook,
			int lDays, int credit, int lYear, int lSemester, int lCapacity, String lStatus, String pCode,
			String dCode) {
		super();
		this.lCode = lCode;
		this.lType = lType;
		this.lName = lName;
		this.lObjective = lObjective;
		this.lContents = lContents;
		this.textbook = textbook;
		this.lDays = lDays;
		this.credit = credit;
		this.lYear = lYear;
		this.lSemester = lSemester;
		this.lCapacity = lCapacity;
		this.lStatus = lStatus;
		this.pCode = pCode;
		this.dCode = dCode;
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

	public String getlObjective() {
		return lObjective;
	}

	public void setlObjective(String lObjective) {
		this.lObjective = lObjective;
	}

	public String getlContents() {
		return lContents;
	}

	public void setlContents(String lContents) {
		this.lContents = lContents;
	}

	public String getTextbook() {
		return textbook;
	}

	public void setTextbook(String textbook) {
		this.textbook = textbook;
	}

	public int getlDays() {
		return lDays;
	}

	public void setlDays(int lDays) {
		this.lDays = lDays;
	}

	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	public int getlYear() {
		return lYear;
	}

	public void setlYear(int lYear) {
		this.lYear = lYear;
	}

	public int getlSemester() {
		return lSemester;
	}

	public void setlSemester(int lSemester) {
		this.lSemester = lSemester;
	}

	public int getlCapacity() {
		return lCapacity;
	}

	public void setlCapacity(int lCapacity) {
		this.lCapacity = lCapacity;
	}

	public String getlStatus() {
		return lStatus;
	}

	public void setlStatus(String lStatus) {
		this.lStatus = lStatus;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public String getdCode() {
		return dCode;
	}

	public void setdCode(String dCode) {
		this.dCode = dCode;
	}

	@Override
	public String toString() {
		return "Lecture [lCode=" + lCode + ", lType=" + lType + ", lName=" + lName + ", lObjective=" + lObjective
				+ ", lContents=" + lContents + ", textbook=" + textbook + ", lDays=" + lDays + ", credit=" + credit
				+ ", lYear=" + lYear + ", lSemester=" + lSemester + ", lCapacity=" + lCapacity + ", lStatus=" + lStatus
				+ ", pCode=" + pCode + ", dCode=" + dCode + "]";
	}
	
	

}
