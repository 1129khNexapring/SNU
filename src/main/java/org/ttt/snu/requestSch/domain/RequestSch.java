package org.ttt.snu.requestSch.domain;

public class RequestSch {

	private String sCode;
	private String scCode;
	
	public RequestSch() {}

	public RequestSch(String sCode, String scCode) {
		super();
		this.sCode = sCode;
		this.scCode = scCode;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getScCode() {
		return scCode;
	}

	public void setScCode(String scCode) {
		this.scCode = scCode;
	}

	@Override
	public String toString() {
		return "RequestSch [sCode=" + sCode + ", scCode=" + scCode + "]";
	};
	
	
}
