package org.ttt.snu.notice.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.NoticeAttachment;
import org.ttt.snu.notice.domain.PageInfo;

public interface NoticeStore {
	public int selectListCount(SqlSession sqlSession);
	public List<Notice> selectAll(SqlSession sqlSession, PageInfo pi);
	public Notice selectOneByNo(SqlSession sqlSession, Integer noticeNo);
	public int insertNotice(SqlSession sqlSession, Notice notice);
	public int updateNotice(SqlSession sqlSession , Notice notice);
	public int deleteNotice(SqlSession sqlSession , int noticeNo);
	public int updateCount(SqlSession sqlSession , int noticeNo);
	//넥사
	public List<Notice> selectAllNoticeList(SqlSession sqlSession);
	public int insertNoticeFromNexa(SqlSession sqlSession, Notice notice);
	

}
