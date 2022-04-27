package org.ttt.snu.book.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.book.service.BookService;
import org.ttt.snu.book.store.BookStore;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookStore bStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Book> printAllBook() {
		List<Book> bList = bStore.selectAllBook(sqlSession);
		return bList;
	}

	@Override
	public int registerBook(Book book) {
		int result = bStore.insertBook(sqlSession, book);
		return result;
	}

	@Override
	public int removeBook(String dBook) {
		int result = bStore.deleteBook(sqlSession, dBook);
		return result;
	}

	@Override
	public int modifyBook(Book book) {
		int result = bStore.updateBook(sqlSession, book);
		return result;
	}

}
