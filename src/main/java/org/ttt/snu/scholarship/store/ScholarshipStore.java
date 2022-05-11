package org.ttt.snu.scholarship.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.scholarship.domain.Scholarship;

public interface ScholarshipStore {

	List<Scholarship> selectScholarship(SqlSession sqlSession);

	int insertScholarship(SqlSession sqlSession, Scholarship scholarship);

	int deleteScholarship(SqlSession sqlSession, String scCode);

	int updateScholarship(SqlSession sqlSession, Scholarship scholarship);

	List<Scholarship> selectSch(SqlSession sqlSession);

	List<Scholarship> selectRequestSch(SqlSession sqlSession, String sCode);

}
