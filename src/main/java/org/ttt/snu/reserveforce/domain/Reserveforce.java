package org.ttt.snu.reserveforce.domain;

public class Reserveforce {
	private int rfNum;
	private String rfRequestDate;
	private String muterDate;
	private String rfStatus;
	private String rfMsg;
	private String military;
	private String rank;
	private String sCode;
	
	public Reserveforce() {}

	public Reserveforce(int rfNum, String rfRequestDate, String muterDate, String rfStatus, String rfMsg,
			String military, String rank, String sCode) {
		super();
		this.rfNum = rfNum;
		this.rfRequestDate = rfRequestDate;
		this.muterDate = muterDate;
		this.rfStatus = rfStatus;
		this.rfMsg = rfMsg;
		this.military = military;
		this.rank = rank;
		this.sCode = sCode;
	}

	public int getRfNum() {
		return rfNum;
	}

	public void setRfNum(int rfNum) {
		this.rfNum = rfNum;
	}

	public String getRfRequestDate() {
		return rfRequestDate;
	}

	public void setRfRequestDate(String rfRequestDate) {
		this.rfRequestDate = rfRequestDate;
	}

	public String getMuterDate() {
		return muterDate;
	}

	public void setMuterDate(String muterDate) {
		this.muterDate = muterDate;
	}

	public String getRfStatus() {
		return rfStatus;
	}

	public void setRfStatus(String rfStatus) {
		this.rfStatus = rfStatus;
	}

	public String getRfMsg() {
		return rfMsg;
	}

	public void setRfMsg(String rfMsg) {
		this.rfMsg = rfMsg;
	}

	public String getMilitary() {
		return military;
	}

	public void setMilitary(String military) {
		this.military = military;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "Reserveforce [rfNum=" + rfNum + ", rfRequestDate=" + rfRequestDate + ", muterDate=" + muterDate
				+ ", rfStatus=" + rfStatus + ", rfMsg=" + rfMsg + ", military=" + military + ", rank=" + rank
				+ ", sCode=" + sCode + "]";
	}
	
	
}
