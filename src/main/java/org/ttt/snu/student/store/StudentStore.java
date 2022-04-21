package org.ttt.snu.student.store;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.student.domain.Student;

public interface StudentStore {

	Student selectOne(SqlSession sqlSession, Student student);

}
