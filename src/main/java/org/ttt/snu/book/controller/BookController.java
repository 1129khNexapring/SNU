package org.ttt.snu.book.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.book.service.BookService;
import org.ttt.snu.grade.domain.LectureEvaluation;
import org.ttt.snu.student.domain.Student;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class BookController {

	@Autowired
	private BookService bService;
	
	@RequestMapping(value="/book/register.snu", method=RequestMethod.POST)
	public NexacroResult bookRegister(
			@ParamVariable(name="inVar1") String inVar1,
			@ParamVariable(name="inVar2") String inVar2,
			@ParamVariable(name="inVar3") String inVar3) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Book book = new Book();
		book.setsCode(inVar1);
		book.setBsTitle(inVar2);
		book.setBsContent(inVar3);
		NexacroResult result = new NexacroResult();
		int iResult = bService.registerBook(book);
		if(iResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/book/delete.snu", method=RequestMethod.POST)
	public NexacroResult bookDelete(
			@ParamVariable(name="inVar1") int inVar1) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Book book = new Book();
		book.setBsNo(inVar1);
		NexacroResult result = new NexacroResult();
		int dResult = bService.removeBook(book);
		if(dResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/book/modify.snu", method=RequestMethod.POST)
	public NexacroResult bookModify(
			@ParamVariable(name="inVar1") int inVar1,
			@ParamVariable(name="inVar2") String inVar2,
			@ParamVariable(name="inVar3") String inVar3) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Book book = new Book();
		book.setBsNo(inVar1);
		book.setBsTitle(inVar2);
		book.setBsContent(inVar3);
		NexacroResult result = new NexacroResult();
		int uResult = bService.modifyBook(book);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "승인이 완료됐습니다";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value = "/book/student.snu", method = RequestMethod.GET)
	public NexacroResult printAllStudent() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> sList = bService.printAllStudent();
		if (!sList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_student", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/book/list.snu", method = RequestMethod.GET)
	public NexacroResult printBook() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Book> bList = bService.printAllBook();
		if (!bList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_book", bList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
