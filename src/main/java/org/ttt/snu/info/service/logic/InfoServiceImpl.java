package org.ttt.snu.info.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.service.InfoService;
import org.ttt.snu.info.store.InfoStore;
import org.ttt.snu.notice.store.NoticeStore;
@Service
public class InfoServiceImpl implements InfoService {
		
	@Autowired
	private InfoStore iStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Info> printAll() {
		List<Info> iList = iStore.selectAll(sqlSession);
		return iList;
	}
	//관리자 학교알림이 등록
	@Override
	public int registerInfo(Info info) {
		int result = iStore.insertInfo(sqlSession, info);
		return result;
	}
	//관리자 학교알림이(게시글상태N) 조회
	@Override
	public List<Info> printAllNInfo() {
		List<Info> iList = iStore.selectNInfo(sqlSession);
		return iList;
	}
	//관리자 학교알림이 수정
	@Override
	public int modifyInfo(Info info) {
		int result = iStore.updateInfo(sqlSession, info);
		return result;
	}
	//관리자 학교알림이 게시글 상태(Y->N)
	@Override
	public int closeInfo(Info info) {
		int result = iStore.closeInfo(sqlSession, info);
		return result;
	}
	//관리자 학교알림이 게시글 상태(N->Y)
	@Override
	public int openInfo(Info info) {
		int result = iStore.openInfo(sqlSession, info);
		return result;
	}
	//관리자 학교알림이 게시글 삭제(넥사크로)
	@Override
	public int removeInfo(Info info) {
		int result = iStore.deleteInfo(sqlSession, info);
		return result;
	}

}
