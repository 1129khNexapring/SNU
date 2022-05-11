package org.ttt.snu.book.service;

import java.util.List;

import org.ttt.snu.book.domain.Book;
import org.ttt.snu.student.domain.Student;

public interface BookService {

	List<Book> printAllBook();

	int registerBook(Book book);

	int removeBook(Book book);

	int modifyBook(Book book);

	List<Student> printAllStudent();

}
