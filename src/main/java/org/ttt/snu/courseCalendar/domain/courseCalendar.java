package org.ttt.snu.courseCalendar.domain;

public class courseCalendar {
	private String Date;
	private String Title;
	
	public courseCalendar() {}

	public courseCalendar(String date, String title) {
		super();
		Date = date;
		Title = title;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	@Override
	public String toString() {
		return "courseCalendar [Date=" + Date + ", Title=" + Title + "]";
	}
	
	
}
