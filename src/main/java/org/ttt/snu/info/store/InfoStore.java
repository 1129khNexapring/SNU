package org.ttt.snu.info.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.info.domain.Info;

public interface InfoStore {

	List<Info> selectAll(SqlSession sqlSession);
	int insertInfo(SqlSession sqlSession, Info info);
	List<Info> selectNInfo(SqlSession sqlSession);
	int updateInfo(SqlSession sqlSession, Info info);
	int closeInfo(SqlSession sqlSession, Info info);
	int openInfo(SqlSession sqlSession, Info info);
	int deleteInfo(SqlSession sqlSession, Info info);

}
