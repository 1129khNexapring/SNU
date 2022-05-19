package org.ttt.snu.board.domain;


public class Comments {
	
	private int comment_no;
	private String comment_content;
	private String comment_date;
	public String p_code;
	public String s_sode;
	public int board_no;
	private String s_name;
	
	public Comments() {}

	public Comments(int comment_no, String comment_content, String comment_date, String p_code, String s_sode,
			int board_no, String s_name) {
		super();
		this.comment_no = comment_no;
		this.comment_content = comment_content;
		this.comment_date = comment_date;
		this.p_code = p_code;
		this.s_sode = s_sode;
		this.board_no = board_no;
		this.s_name = s_name;
	}

	public int getComment_no() {
		return comment_no;
	}

	public void setComment_no(int comment_no) {
		this.comment_no = comment_no;
	}

	public String getComment_content() {
		return comment_content;
	}

	public void setComment_content(String comment_content) {
		this.comment_content = comment_content;
	}

	public String getComment_date() {
		return comment_date;
	}

	public void setComment_date(String comment_date) {
		this.comment_date = comment_date;
	}

	public String getP_code() {
		return p_code;
	}

	public void setP_code(String p_code) {
		this.p_code = p_code;
	}

	public String getS_sode() {
		return s_sode;
	}

	public void setS_sode(String s_sode) {
		this.s_sode = s_sode;
	}

	public int getBoard_no() {
		return board_no;
	}

	public void setBoard_no(int board_no) {
		this.board_no = board_no;
	}

	public String getS_name() {
		return s_name;
	}

	public void setS_name(String s_name) {
		this.s_name = s_name;
	}

	@Override
	public String toString() {
		return "Comments [comment_no=" + comment_no + ", comment_content=" + comment_content + ", comment_date="
				+ comment_date + ", p_code=" + p_code + ", s_sode=" + s_sode + ", board_no=" + board_no + ", s_name="
				+ s_name + "]";
	}

	
}
