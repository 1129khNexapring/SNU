package org.ttt.snu.grade.domain;

public class ScoreList {
	
	private String lName;
	private String pName;
	private String leScore;
	
	public ScoreList() {}

	public ScoreList(String lName, String pName, String leScore) {
		super();
		this.lName = lName;
		this.pName = pName;
		this.leScore = leScore;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getLeScore() {
		return leScore;
	}

	public void setLeScore(String leScore) {
		this.leScore = leScore;
	}

	@Override
	public String toString() {
		return "ScoreList [lName=" + lName + ", pName=" + pName + ", leScore=" + leScore + "]";
	}
	
	

}
