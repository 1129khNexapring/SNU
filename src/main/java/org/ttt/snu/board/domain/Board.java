package org.ttt.snu.board.domain;


public class Board {
	
	private int board_no;
	private String board_title;
	private String board_content;
	private String board_date;
	private String b_status;
	private String p_code;
	private String board_fileName;
	private String board_fileReName;
	private String board_writer;
	private String board_count;
	
	public Board() {}

	public Board(int board_no, String board_title, String board_content, String board_date, String b_status,
			String p_code, String board_fileName, String board_fileReName, String board_writer, String board_count) {
		super();
		this.board_no = board_no;
		this.board_title = board_title;
		this.board_content = board_content;
		this.board_date = board_date;
		this.b_status = b_status;
		this.p_code = p_code;
		this.board_fileName = board_fileName;
		this.board_fileReName = board_fileReName;
		this.board_writer = board_writer;
		this.board_count = board_count;
	}

	public int getBoard_no() {
		return board_no;
	}

	public void setBoard_no(int board_no) {
		this.board_no = board_no;
	}

	public String getBoard_title() {
		return board_title;
	}

	public void setBoard_title(String board_title) {
		this.board_title = board_title;
	}

	public String getBoard_content() {
		return board_content;
	}

	public void setBoard_content(String board_content) {
		this.board_content = board_content;
	}

	public String getBoard_date() {
		return board_date;
	}

	public void setBoard_date(String board_date) {
		this.board_date = board_date;
	}

	public String getB_status() {
		return b_status;
	}

	public void setB_status(String b_status) {
		this.b_status = b_status;
	}

	public String getP_code() {
		return p_code;
	}

	public void setP_code(String p_code) {
		this.p_code = p_code;
	}

	public String getBoard_fileName() {
		return board_fileName;
	}

	public void setBoard_fileName(String board_fileName) {
		this.board_fileName = board_fileName;
	}

	public String getBoard_fileReName() {
		return board_fileReName;
	}

	public void setBoard_fileReName(String board_fileReName) {
		this.board_fileReName = board_fileReName;
	}

	public String getBoard_writer() {
		return board_writer;
	}

	public void setBoard_writer(String board_writer) {
		this.board_writer = board_writer;
	}

	public String getBoard_count() {
		return board_count;
	}

	public void setBoard_count(String board_count) {
		this.board_count = board_count;
	}

	@Override
	public String toString() {
		return "Board [board_no=" + board_no + ", board_title=" + board_title + ", board_content=" + board_content
				+ ", board_date=" + board_date + ", b_status=" + b_status + ", p_code=" + p_code + ", board_fileName="
				+ board_fileName + ", board_fileReName=" + board_fileReName + ", board_writer=" + board_writer
				+ ", board_count=" + board_count + "]";
	}

	
	
}
