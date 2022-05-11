package org.ttt.snu.info.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.store.InfoStore;
@Repository
public class InfoStoreLogic implements InfoStore{

	@Override
	public List<Info> selectAll(SqlSession sqlSession) {
		List<Info> iList = sqlSession.selectList("InfoMapper.selectAllList");
		return iList;
	}
	//관리자 학교알림이 등록
	@Override
	public int insertInfo(SqlSession sqlSession, Info info) {
		int result = sqlSession.insert("InfoMapper.insertInfo", info);
		return result;
	}
	//관리자 학교알림이(게시글상태N) 조회
	@Override
	public List<Info> selectNInfo(SqlSession sqlSession) {
		List<Info> iList = sqlSession.selectList("InfoMapper.selectAllNInfo");
		return iList;
	}
	//관리자 학교알림이 수정
	@Override
	public int updateInfo(SqlSession sqlSession, Info info) {
		int result = sqlSession.update("InfoMapper.updateInfo", info);
		return result;
	}
	//관리자 학교알림이 상태변경(Y->N)
	@Override
	public int closeInfo(SqlSession sqlSession, Info info) {
		int result = sqlSession.update("InfoMapper.closeInfo", info);
		return result;
	}
	//관리자 학교알림이 상태변경(N->Y)
	@Override
	public int openInfo(SqlSession sqlSession, Info info) {
		int result = sqlSession.update("InfoMapper.openInfo", info);
		return result;
	}
	//관리자 학교알림이 삭제
	@Override
	public int deleteInfo(SqlSession sqlSession, Info info) {
		int result = sqlSession.delete("InfoMapper.deleteInfo", info);
		return result;
	}

}
