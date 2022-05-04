package org.ttt.snu.common;

import org.ttt.snu.notice.domain.PageInfo;

public class NoticePagenation {
	public static PageInfo getPageInfo(int currentPage, int totalCount) {
		PageInfo pi = null;
		int noticeLimit = 5;
		int naviLimit = 5;
		int maxPage;
		int startNavi;
		int endNavi;
		boolean prev, next;
		maxPage = (int) ((double) totalCount / noticeLimit + 0.9);
		startNavi = (((int) ((double) currentPage / naviLimit + 0.9)) - 1) * naviLimit + 1;
		endNavi = startNavi + naviLimit - 1;
		prev = startNavi > 1;
		next = endNavi < maxPage;
		if (maxPage < endNavi) {
			endNavi = maxPage;
		}
		pi = new PageInfo(currentPage, noticeLimit, naviLimit, startNavi, endNavi, totalCount, maxPage, prev, next);
		return pi;
	}
}
