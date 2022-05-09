package org.ttt.snu.requestVolunteer.domain;

public class RequestVolunteer {
	private int vRequestNo;
	private String vRequestStatus;
	private String vDate;
	private String sCode;
	private String vName;
	
	public RequestVolunteer() {}

	public RequestVolunteer(int vRequestNo, String vRequestStatus, String vDate, String sCode, String vName) {
		super();
		this.vRequestNo = vRequestNo;
		this.vRequestStatus = vRequestStatus;
		this.vDate = vDate;
		this.sCode = sCode;
		this.vName = vName;
	}

	public int getvRequestNo() {
		return vRequestNo;
	}

	public void setvRequestNo(int vRequestNo) {
		this.vRequestNo = vRequestNo;
	}

	public String getvRequestStatus() {
		return vRequestStatus;
	}

	public void setvRequestStatus(String vRequestStatus) {
		this.vRequestStatus = vRequestStatus;
	}

	public String getvDate() {
		return vDate;
	}

	public void setvDate(String vDate) {
		this.vDate = vDate;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getvName() {
		return vName;
	}

	public void setvName(String vName) {
		this.vName = vName;
	}

	@Override
	public String toString() {
		return "RequestVolunteer [vRequestNo=" + vRequestNo + ", vRequestStatus=" + vRequestStatus + ", vDate=" + vDate
				+ ", sCode=" + sCode + ", vName=" + vName + "]";
	}

	

}
