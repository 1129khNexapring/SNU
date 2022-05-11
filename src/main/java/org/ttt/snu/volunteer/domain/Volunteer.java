package org.ttt.snu.volunteer.domain;

public class Volunteer {
	private String vCode;
	private String vName;
	private String vArea;
	private String vHour;
	private String vStart;
	private String vEnd;
	private String vEnrollDate;
	private String vInfo;
	
	public Volunteer() {}

	public Volunteer(String vCode, String vName, String vArea, String vHour, String vStart, String vEnd,
			String vEnrollDate, String vInfo) {
		super();
		this.vCode = vCode;
		this.vName = vName;
		this.vArea = vArea;
		this.vHour = vHour;
		this.vStart = vStart;
		this.vEnd = vEnd;
		this.vEnrollDate = vEnrollDate;
		this.vInfo = vInfo;
	}

	public String getvCode() {
		return vCode;
	}

	public void setvCode(String vCode) {
		this.vCode = vCode;
	}

	public String getvName() {
		return vName;
	}

	public void setvName(String vName) {
		this.vName = vName;
	}

	public String getvArea() {
		return vArea;
	}

	public void setvArea(String vArea) {
		this.vArea = vArea;
	}

	public String getvHour() {
		return vHour;
	}

	public void setvHour(String vHour) {
		this.vHour = vHour;
	}

	public String getvStart() {
		return vStart;
	}

	public void setvStart(String vStart) {
		this.vStart = vStart;
	}

	public String getvEnd() {
		return vEnd;
	}

	public void setvEnd(String vEnd) {
		this.vEnd = vEnd;
	}

	public String getvEnrollDate() {
		return vEnrollDate;
	}

	public void setvEnrollDate(String vEnrollDate) {
		this.vEnrollDate = vEnrollDate;
	}

	public String getvInfo() {
		return vInfo;
	}

	public void setvInfo(String vInfo) {
		this.vInfo = vInfo;
	}

	@Override
	public String toString() {
		return "Volunteer [vCode=" + vCode + ", vName=" + vName + ", vArea=" + vArea + ", vHour=" + vHour + ", vStart="
				+ vStart + ", vEnd=" + vEnd + ", vEnrollDate=" + vEnrollDate + ", vInfo=" + vInfo + "]";
	}

	
	
	
	
	
	
}
