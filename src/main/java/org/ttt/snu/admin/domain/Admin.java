package org.ttt.snu.admin.domain;

public class Admin {
	private String aCode;
	private String aPassword;
	
	public Admin() {}

	public Admin(String aCode, String aPassword) {
		super();
		this.aCode = aCode;
		this.aPassword = aPassword;
	}

	public String getaCode() {
		return aCode;
	}

	public void setaCode(String aCode) {
		this.aCode = aCode;
	}

	public String getaPassword() {
		return aPassword;
	}

	public void setaPassword(String aPassword) {
		this.aPassword = aPassword;
	}
	
	@Override
	public String toString() {
		return "Admin [관리자코드=" + aCode + ", 관리자비밀번호=" + aPassword + "]";
	}
	
	
}
