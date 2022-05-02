package org.ttt.snu.requestScholarship.domain;

public class RequestScholarship {
	private String sCode;
	private String sName;
	private int amount;
	private String dName;
	private String dField;
	
	public RequestScholarship() {}

	public RequestScholarship(String sCode, String sName, int amount, String dName, String dField) {
		super();
		this.sCode = sCode;
		this.sName = sName;
		this.amount = amount;
		this.dName = dName;
		this.dField = dField;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public String getdField() {
		return dField;
	}

	public void setdField(String dField) {
		this.dField = dField;
	}

	@Override
	public String toString() {
		return "RequestScholarship [sCode=" + sCode + ", sName=" + sName + ", amount=" + amount + ", dName=" + dName
				+ ", dField=" + dField + "]";
	}
	
	
}
