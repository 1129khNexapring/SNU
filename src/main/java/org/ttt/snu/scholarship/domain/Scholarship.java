package org.ttt.snu.scholarship.domain;

public class Scholarship {
	private String scCode;
	private String scName;
	private int amount;
	private String scCondition;
	private String scDate;
	private String scStatus;
	private String dCode;
	private String scEnrollDate;
	
	public Scholarship() {}

	
	
	
	




	public Scholarship(String scCode, String scName, int amount, String scCondition, String scDate, String scStatus,
			String dCode, String scEnrollDate) {
		super();
		this.scCode = scCode;
		this.scName = scName;
		this.amount = amount;
		this.scCondition = scCondition;
		this.scDate = scDate;
		this.scStatus = scStatus;
		this.dCode = dCode;
		this.scEnrollDate = scEnrollDate;
	}









	



	public String getScCode() {
		return scCode;
	}









	public void setScCode(String scCode) {
		this.scCode = scCode;
	}









	public String getScName() {
		return scName;
	}









	public void setScName(String scName) {
		this.scName = scName;
	}









	public int getAmount() {
		return amount;
	}









	public void setAmount(int amount) {
		this.amount = amount;
	}









	public String getScCondition() {
		return scCondition;
	}









	public void setScCondition(String scCondition) {
		this.scCondition = scCondition;
	}









	public String getScDate() {
		return scDate;
	}









	public void setScDate(String scDate) {
		this.scDate = scDate;
	}









	public String getScStatus() {
		return scStatus;
	}









	public void setScStatus(String scStatus) {
		this.scStatus = scStatus;
	}









	public String getdCode() {
		return dCode;
	}









	public void setdCode(String dCode) {
		this.dCode = dCode;
	}









	public String getScEnrollDate() {
		return scEnrollDate;
	}









	public void setScEnrollDate(String scEnrollDate) {
		this.scEnrollDate = scEnrollDate;
	}









	@Override
	public String toString() {
		return "Scholarship [scCode=" + scCode + ", scName=" + scName + ", amount=" + amount + ", scCondition="
				+ scCondition + ", scDate=" + scDate + ", scStatus=" + scStatus + ", dCode=" + dCode + ", scEnrollDate="
				+ scEnrollDate + "]";
	}









	
	
	
}
