package org.ttt.snu.loa.domain;

public class Loa {
	private int lNum;
	private String lReason;
	private String lRequestDate;
	private String lStatus;
	private String lMsg;
	private int lSemester;
	private String sCode;
	
	public Loa() {}

	public Loa(int lNum, String lReason, String lRequestDate, String lStatus, String lMsg, int lSemester,
			String sCode) {
		super();
		this.lNum = lNum;
		this.lReason = lReason;
		this.lRequestDate = lRequestDate;
		this.lStatus = lStatus;
		this.lMsg = lMsg;
		this.lSemester = lSemester;
		this.sCode = sCode;
	}

	public int getlNum() {
		return lNum;
	}

	public void setlNum(int lNum) {
		this.lNum = lNum;
	}

	public String getlReason() {
		return lReason;
	}

	public void setlReason(String lReason) {
		this.lReason = lReason;
	}

	public String getlRequestDate() {
		return lRequestDate;
	}

	public void setlRequestDate(String lRequestDate) {
		this.lRequestDate = lRequestDate;
	}

	public String getlStatus() {
		return lStatus;
	}

	public void setlStatus(String lStatus) {
		this.lStatus = lStatus;
	}

	public String getlMsg() {
		return lMsg;
	}

	public void setlMsg(String lMsg) {
		this.lMsg = lMsg;
	}

	public int getlSemester() {
		return lSemester;
	}

	public void setlSemester(int lSemester) {
		this.lSemester = lSemester;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "Loa [lNum=" + lNum + ", lReason=" + lReason + ", lRequestDate=" + lRequestDate + ", lStatus=" + lStatus
				+ ", lMsg=" + lMsg + ", lSemester=" + lSemester + ", sCode=" + sCode + "]";
	}

	

}
