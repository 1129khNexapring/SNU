package org.ttt.snu.book.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.student.domain.Student;

public interface BookStore {

	List<Book> selectAllBook(SqlSession sqlSession);

	int insertBook(SqlSession sqlSession, Book book);

	int deleteBook(SqlSession sqlSession, Book book );

	int updateBook(SqlSession sqlSession, Book book);

	List<Student> selectAllStudent(SqlSession sqlSession);

}
