package org.ttt.snu.department.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.department.domain.Department;

public interface DepartmentStore {

	Department selectDeptByCode(SqlSession sqlSession, String dCode);

}
