package org.ttt.snu.enrollLecture.domain;

public class EnrollLectureDomain {
	
	private String dName;
	private String sName;
	public EnrollLectureDomain(String dName, String sName) {
		super();
		this.dName = dName;
		this.sName = sName;
	}
	
	public EnrollLectureDomain() {}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	@Override
	public String toString() {
		return "EnrollLectureDomain [dName=" + dName + ", sName=" + sName + "]";
	}
	
	

}
