package org.ttt.snu.department.domain;

public class Department {
	private String dCode;
	private String dName;
	private String dField;
	private String officeName;
	private int tuitionFee;
	private int dCapacity;
	
	public Department() {}

	public Department(String dCode, String dName, String dField, String officeName, int tuitionFee, int dCapacity) {
		super();
		this.dCode = dCode;
		this.dName = dName;
		this.dField = dField;
		this.officeName = officeName;
		this.tuitionFee = tuitionFee;
		this.dCapacity = dCapacity;
	}

	public String getdCode() {
		return dCode;
	}

	public void setdCode(String dCode) {
		this.dCode = dCode;
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

	public String getOfficeName() {
		return officeName;
	}

	public void setOfficeName(String officeName) {
		this.officeName = officeName;
	}

	public int getTuitionFee() {
		return tuitionFee;
	}

	public void setTuitionFee(int tuitionFee) {
		this.tuitionFee = tuitionFee;
	}

	public int getdCapacity() {
		return dCapacity;
	}

	public void setdCapacity(int dCapacity) {
		this.dCapacity = dCapacity;
	}

	@Override
	public String toString() {
		return "Department [dCode=" + dCode + ", dName=" + dName + ", dField=" + dField + ", officeName=" + officeName
				+ ", tuitionFee=" + tuitionFee + ", dCapacity=" + dCapacity + "]";
	}
	
	

}
