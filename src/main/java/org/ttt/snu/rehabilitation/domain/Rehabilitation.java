package org.ttt.snu.rehabilitation.domain;

public class Rehabilitation {
	
	private int rNum;
	private String rReason;
	private int rSemester;
	private int rYear;
	private String rStatus;
	private String rRequestDate;
	private String rMsg;
	private String sCode;
	
	public Rehabilitation() {}

	public Rehabilitation(int rNum, String rReason, int rSemester, int rYear, String rStatus, String rRequestDate,
			String rMsg, String sCode) {
		super();
		this.rNum = rNum;
		this.rReason = rReason;
		this.rSemester = rSemester;
		this.rYear = rYear;
		this.rStatus = rStatus;
		this.rRequestDate = rRequestDate;
		this.rMsg = rMsg;
		this.sCode = sCode;
	}

	public int getrNum() {
		return rNum;
	}

	public void setrNum(int rNum) {
		this.rNum = rNum;
	}

	public String getrReason() {
		return rReason;
	}

	public void setrReason(String rReason) {
		this.rReason = rReason;
	}

	public int getrSemester() {
		return rSemester;
	}

	public void setrSemester(int rSemester) {
		this.rSemester = rSemester;
	}

	public int getrYear() {
		return rYear;
	}

	public void setrYear(int rYear) {
		this.rYear = rYear;
	}

	public String getrStatus() {
		return rStatus;
	}

	public void setrStatus(String rStatus) {
		this.rStatus = rStatus;
	}

	public String getrRequestDate() {
		return rRequestDate;
	}

	public void setrRequestDate(String rRequestDate) {
		this.rRequestDate = rRequestDate;
	}

	public String getrMsg() {
		return rMsg;
	}

	public void setrMsg(String rMsg) {
		this.rMsg = rMsg;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "Rehabilitation [rNum=" + rNum + ", rReason=" + rReason + ", rSemester=" + rSemester + ", rYear=" + rYear
				+ ", rStatus=" + rStatus + ", rRequestDate=" + rRequestDate + ", rMsg=" + rMsg + ", sCode=" + sCode
				+ "]";
	}
	
	
}
