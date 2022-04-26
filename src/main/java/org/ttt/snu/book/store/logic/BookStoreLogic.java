package org.ttt.snu.book.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.book.store.BookStore;

@Repository
public class BookStoreLogic implements BookStore {

	@Override
	public List<Book> selectAllBook(SqlSession sqlSession) {
		List<Book> bList = sqlSession.selectList("BookMapper.selectAllBook");
		return bList;
	}

	@Override
	public int insertBook(SqlSession sqlSession, Book book) {
		int result = sqlSession.insert("BookMapper.insertBook", book);
		return result;
	}

}
