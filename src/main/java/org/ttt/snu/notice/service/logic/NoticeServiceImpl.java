package org.ttt.snu.notice.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.NoticeAttachment;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.service.NoticeService;
import org.ttt.snu.notice.store.NoticeStore;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	private NoticeStore nStore;
	@Autowired
	private SqlSession sqlSession;
	
	
	@Override
	public List<Notice> printAll(PageInfo pi) {
		List<Notice> nList = nStore.selectAll(sqlSession, pi);
		return nList;
	}
	
	@Override
	public int registerNotice(Notice notice) {
		int result = nStore.insertNotice(sqlSession, notice);
		return result;
	}

	@Override 
	public int getListCount() {
		int totalCount = nStore.selectListCount(sqlSession);
		return totalCount;
	}

	@Override
	public Notice printOneByNo(Integer noticeNo) {
		Notice notice = nStore.selectOneByNo(sqlSession, noticeNo);
		return notice;
	}

	@Override
	public int modifyNotice(Notice notice) {
		int result = nStore.updateNotice(sqlSession, notice);
		return result;
	}

	@Override
	public int deleteNotice(int noticeNo) {
		int result = nStore.deleteNotice(sqlSession, noticeNo);
		return result;
	}

	@Override
	public int updateCount(int noticeNo) {
		int result = nStore.updateCount(sqlSession, noticeNo);
		return result;
	}
	//넥사크로 관리자 - 게시글 조회
	@Override
	public List<Notice> printAllNotice() {
		List<Notice> nList = nStore.selectAllNoticeList(sqlSession);
		return nList;
	}



}
