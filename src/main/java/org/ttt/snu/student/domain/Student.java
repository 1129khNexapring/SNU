package org.ttt.snu.student.domain;

import java.sql.Date;

public class Student {
	private String sCode;
	private String sName;
	private String sRrn;
	private String sPassword;
	private String sAddress;
	private String sEmail;
	private String sGender;
	private String sPhone;
	private String sAddmission;
	private String absenceYN;
	private String transferYN;
	private String dCode;
	
	Student() {}
	
	
	



	public Student(String sCode, String sName, String sRrn, String sPassword, String sAddress, String sEmail,
			String sGender, String sPhone, String sAddmission, String absenceYN, String transferYN, String dCode) {
		super();
		this.sCode = sCode;
		this.sName = sName;
		this.sRrn = sRrn;
		this.sPassword = sPassword;
		this.sAddress = sAddress;
		this.sEmail = sEmail;
		this.sGender = sGender;
		this.sPhone = sPhone;
		this.sAddmission = sAddmission;
		this.absenceYN = absenceYN;
		this.transferYN = transferYN;
		this.dCode = dCode;
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






	public String getsRrn() {
		return sRrn;
	}






	public void setsRrn(String sRrn) {
		this.sRrn = sRrn;
	}






	public String getsPassword() {
		return sPassword;
	}






	public void setsPassword(String sPassword) {
		this.sPassword = sPassword;
	}






	public String getsAddress() {
		return sAddress;
	}






	public void setsAddress(String sAddress) {
		this.sAddress = sAddress;
	}






	public String getsEmail() {
		return sEmail;
	}






	public void setsEmail(String sEmail) {
		this.sEmail = sEmail;
	}






	public String getsGender() {
		return sGender;
	}






	public void setsGender(String sGender) {
		this.sGender = sGender;
	}






	public String getsPhone() {
		return sPhone;
	}






	public void setsPhone(String sPhone) {
		this.sPhone = sPhone;
	}






	public String getsAddmission() {
		return sAddmission;
	}






	public void setsAddmission(String sAddmission) {
		this.sAddmission = sAddmission;
	}






	public String getAbsenceYN() {
		return absenceYN;
	}






	public void setAbsenceYN(String absenceYN) {
		this.absenceYN = absenceYN;
	}






	public String getTransferYN() {
		return transferYN;
	}






	public void setTransferYN(String transferYN) {
		this.transferYN = transferYN;
	}






	public String getdCode() {
		return dCode;
	}






	public void setdCode(String dCode) {
		this.dCode = dCode;
	}






	@Override
	public String toString() {
		return "Student [학번=" + sCode + ", 이름=" + sName + ", 주민번호=" + sRrn + ", 비밀번호=" + sPassword
				+ ", 주소=" + sAddress + ", 이메일=" + sEmail + ", 성별=" + sGender + ", 휴대폰번호=" + sPhone
				+ ", 입학일=" + sAddmission + ", 출석여부=" + absenceYN + ", 전과여부=" + transferYN
				+ ", 학과코드=" + dCode + "]";
	};
	
	
	
	

}
