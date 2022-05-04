package org.ttt.snu.transfer.domain;

public class Transfer {
	private int tNo;
	private String tRequestDate;
	private String tStatus;
	private String tMsg;
	private String sCode;
	private String dCode;
	private String tdCode;
	
	public Transfer() {}

	public Transfer(int tNo, String tRequestDate, String tStatus, String tMsg, String sCode, String dCode,
			String tdCode) {
		super();
		this.tNo = tNo;
		this.tRequestDate = tRequestDate;
		this.tStatus = tStatus;
		this.tMsg = tMsg;
		this.sCode = sCode;
		this.dCode = dCode;
		this.tdCode = tdCode;
	}

	public int gettNo() {
		return tNo;
	}

	public void settNo(int tNo) {
		this.tNo = tNo;
	}

	public String gettRequestDate() {
		return tRequestDate;
	}

	public void settRequestDate(String tRequestDate) {
		this.tRequestDate = tRequestDate;
	}

	public String gettStatus() {
		return tStatus;
	}

	public void settStatus(String tStatus) {
		this.tStatus = tStatus;
	}

	public String gettMsg() {
		return tMsg;
	}

	public void settMsg(String tMsg) {
		this.tMsg = tMsg;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getdCode() {
		return dCode;
	}

	public void setdCode(String dCode) {
		this.dCode = dCode;
	}

	public String getTdCode() {
		return tdCode;
	}

	public void setTdCode(String tdCode) {
		this.tdCode = tdCode;
	}

	@Override
	public String toString() {
		return "Transfer [tNo=" + tNo + ", tRequestDate=" + tRequestDate + ", tStatus=" + tStatus + ", tMsg=" + tMsg
				+ ", sCode=" + sCode + ", dCode=" + dCode + ", tdCode=" + tdCode + "]";
	}

	

}
