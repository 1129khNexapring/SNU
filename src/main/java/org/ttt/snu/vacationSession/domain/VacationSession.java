package org.ttt.snu.vacationSession.domain;

public class VacationSession {
	private int vNo;
	private String vRequestDate;
	private String vStatus;
	private String vMsg;
	private String sCode;
	private String lCode;
	
	public VacationSession() {}

	public VacationSession(int vNo, String vRequestDate, String vStatus, String vMsg, String sCode, String lCode) {
		super();
		this.vNo = vNo;
		this.vRequestDate = vRequestDate;
		this.vStatus = vStatus;
		this.vMsg = vMsg;
		this.sCode = sCode;
		this.lCode = lCode;
	}

	public int getvNo() {
		return vNo;
	}

	public void setvNo(int vNo) {
		this.vNo = vNo;
	}

	public String getvRequestDate() {
		return vRequestDate;
	}

	public void setvRequestDate(String vRequestDate) {
		this.vRequestDate = vRequestDate;
	}

	public String getvStatus() {
		return vStatus;
	}

	public void setvStatus(String vStatus) {
		this.vStatus = vStatus;
	}

	public String getvMsg() {
		return vMsg;
	}

	public void setvMsg(String vMsg) {
		this.vMsg = vMsg;
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

	@Override
	public String toString() {
		return "VacationSession [vNo=" + vNo + ", vRequestDate=" + vRequestDate + ", vStatus=" + vStatus + ", vMsg="
				+ vMsg + ", sCode=" + sCode + ", lCode=" + lCode + "]";
	}
	
	
}
