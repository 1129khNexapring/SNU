package org.ttt.snu.professor.domain;

import java.sql.Date;

public class Professor {
	
	private String pCode;
	private String pName;
	private String pPassword;
	private String pRrn;
	private String pAddress;
	private String pEmail;
	private String pGender;
	private String pPhone;
	private String pAddmission;
	private String advisorYN;
	private String dCode;
	
	public Professor() {}
	
	public Professor(String pCode, String pName, String pPassword, String pRrn, String pAddress, String pEmail,
			String pGender, String pPhone, String pAddmission, String advisorYN, String dCode) {
		super();
		this.pCode = pCode;
		this.pName = pName;
		this.pPassword = pPassword;
		this.pRrn = pRrn;
		this.pAddress = pAddress;
		this.pEmail = pEmail;
		this.pGender = pGender;
		this.pPhone = pPhone;
		this.pAddmission = pAddmission;
		this.advisorYN = advisorYN;
		this.dCode = dCode;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpPassword() {
		return pPassword;
	}

	public void setpPassword(String pPassword) {
		this.pPassword = pPassword;
	}

	public String getpRrn() {
		return pRrn;
	}

	public void setpRrn(String pRrn) {
		this.pRrn = pRrn;
	}

	public String getpAddress() {
		return pAddress;
	}

	public void setpAddress(String pAddress) {
		this.pAddress = pAddress;
	}

	public String getpEmail() {
		return pEmail;
	}

	public void setpEmail(String pEmail) {
		this.pEmail = pEmail;
	}

	public String getpGender() {
		return pGender;
	}

	public void setpGender(String pGender) {
		this.pGender = pGender;
	}

	public String getpPhone() {
		return pPhone;
	}

	public void setpPhone(String pPhone) {
		this.pPhone = pPhone;
	}

	public String getpAddmission() {
		return pAddmission;
	}

	public void setpAddmission(String pAddmission) {
		this.pAddmission = pAddmission;
	}

	public String getAdvisorYN() {
		return advisorYN;
	}

	public void setAdvisorYN(String advisorYN) {
		this.advisorYN = advisorYN;
	}

	public String getdCode() {
		return dCode;
	}

	public void setdCode(String dCode) {
		this.dCode = dCode;
	}

	@Override
	public String toString() {
		return "Professor [pCode=" + pCode + ", pName=" + pName + ", pPassword=" + pPassword + ", pRrn=" + pRrn
				+ ", pAddress=" + pAddress + ", pEmail=" + pEmail + ", pGender=" + pGender + ", pPhone=" + pPhone
				+ ", pAddmission=" + pAddmission + ", advisorYN=" + advisorYN + ", dCode=" + dCode + "]";
	}
	
	

}
