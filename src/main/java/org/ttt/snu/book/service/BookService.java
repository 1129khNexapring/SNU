package org.ttt.snu.book.service;

import java.util.List;

import org.ttt.snu.book.domain.Book;

public interface BookService {

	List<Book> printAllBook();

	int registerBook(Book book);

}
