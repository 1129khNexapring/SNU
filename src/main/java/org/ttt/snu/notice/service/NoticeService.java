package org.ttt.snu.notice.service;

import java.util.List;

import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.NoticeAttachment;
import org.ttt.snu.notice.domain.PageInfo;

public interface NoticeService {

	public int getListCount();
	public List<Notice> printAll(PageInfo pi);
	public Notice printOneByNo(Integer noticeNo);
	public int registerNotice(Notice notice);
	public int modifyNotice(Notice notice);
	public int deleteNotice(int noticeNo);
	public int updateCount(int noticeNo);
	//넥사크로
	public List<Notice> printAllNotice();
	public int registerNoticeFromNexa(Notice notice);
	

}
