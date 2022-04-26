package org.ttt.snu.book.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.book.domain.Book;

public interface BookStore {

	List<Book> selectAllBook(SqlSession sqlSession);

	int insertBook(SqlSession sqlSession, Book book);

}
