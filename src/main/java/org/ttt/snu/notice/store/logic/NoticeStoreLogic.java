package org.ttt.snu.notice.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.NoticeAttachment;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.store.NoticeStore;

@Repository
public class NoticeStoreLogic implements NoticeStore {

	@Override
	public List<Notice> selectAll(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getNoticeLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage -1) * limit ;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Notice> nList = sqlSession.selectList("NoticeMapper.selectAllList", pi, rowBounds);
		return nList;
	}
	@Override
	public int selectListCount(SqlSession sqlSession ) {
		int totalCount = sqlSession.selectOne("NoticeMapper.selectListCount");
		return totalCount;
	}
	
	@Override
	public Notice selectOneByNo(SqlSession sqlSession, Integer noticeNo) {
		Notice notice = sqlSession.selectOne("NoticeMapper.selectOneByNo", noticeNo);
		return notice;
	}
	@Override
	public int insertNotice(SqlSession sqlSession, Notice notice) {
		int result = sqlSession.insert("NoticeMapper.insertNotice", notice);
		return result;
	}
	@Override
	public int updateNotice(SqlSession sqlSession, Notice notice) {
		int result = sqlSession.update("NoticeMapper.updateNotice", notice);
		return result;
	}
	@Override
	public int deleteNotice(SqlSession sqlSession, int noticeNo) {
		int result = sqlSession.delete("NoticeMapper.deleteNotice", noticeNo);
		return result;
	}
	@Override
	public int updateCount(SqlSession sqlSession, int noticeNo) {
		int result = sqlSession.update("NoticeMapper.updateCount", noticeNo);
		return result;
	}
	//넥사크로 관리자- 게시글 조회
	@Override
	public List<Notice> selectAllNoticeList(SqlSession sqlSession) {
		List<Notice> nList = sqlSession.selectList("NoticeMapper.selectNoticeList");
		return nList;
	}
	//넥사크로 관리자 - 게시글 등록
	@Override
	public int insertNoticeFromNexa(SqlSession sqlSession, Notice notice) {
		int result = sqlSession.insert("NoticeMapper.insertNoticeFromNexa", notice);
		System.out.println(result);
		return result;
	}
	
	
	

}
