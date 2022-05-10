package org.ttt.snu.info.domain;

import java.sql.Date;

public class Info {
	private int infoNo;
	private String infoContent;
	private String infoStatus;
	private String infoEnrollDate;
	private String aCode;
	
	public Info() {}
	
	public Info(int infoNo, String infoContent, String infoStatus, String infoEnrollDate, String aCode) {
		super();
		this.infoNo = infoNo;
		this.infoContent = infoContent;
		this.infoStatus = infoStatus;
		this.infoEnrollDate = infoEnrollDate;
		this.aCode = aCode;
	}

	public int getInfoNo() {
		return infoNo;
	}

	public void setInfoNo(int infoNo) {
		this.infoNo = infoNo;
	}

	public String getInfoContent() {
		return infoContent;
	}

	public void setInfoContent(String infoContent) {
		this.infoContent = infoContent;
	}

	public String getInfoStatus() {
		return infoStatus;
	}

	public void setInfoStatus(String infoStatus) {
		this.infoStatus = infoStatus;
	}

	public String getInfoEnrollDate() {
		return infoEnrollDate;
	}

	public void setInfoEnrollDate(String infoEnrollDate) {
		this.infoEnrollDate = infoEnrollDate;
	}

	public String getaCode() {
		return aCode;
	}

	public void setaCode(String aCode) {
		this.aCode = aCode;
	}

	@Override
	public String toString() {
		return "Info [infoNo=" + infoNo + ", infoContent=" + infoContent + ", infoStatus=" + infoStatus
				+ ", infoEnrollDate=" + infoEnrollDate + ", aCode=" + aCode + "]";
	}
	
	
}
