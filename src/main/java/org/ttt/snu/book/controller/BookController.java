package org.ttt.snu.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.book.service.BookService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class BookController {

	@Autowired
	private BookService bService;
	
	@RequestMapping(value="/book/list.snu", method=RequestMethod.GET)
	public NexacroResult printBook() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Book> bList = bService.printAllBook();
		if(!bList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_book", bList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/book/register.snu", method=RequestMethod.POST)
	public NexacroResult registerBook(
			@ParamVariable(name="inVar1") String invarar) {
		
		System.out.println(invarar);

		
		return null;
	}
			
	
	
	
	
//	@RequestMapping(value="/book/register.snu", method=RequestMethod.POST)
//	public NexacroResult registerBook(
//			@ParamDataSet(name="in_book") DataSet inBook
//			,@ParamVariable(name="in_var") String inVar) throws Exception{
//		int nErrorCode = 0;
//		String strErrorMsg = "START";
//		NexacroResult result = new NexacroResult();
//		int i;
//		
//		int iResult = 0;
//////		for(i = 0; i < inBook.getRowCount(); i++) {
////			int rowType = inBook.getRowType(i);
////			int bsNo = dsGet(inBook, i, "bsNo") != ""
////											? Integer.parseInt(dsGet(inBook, i, "bsNo")) : 0;
////			String bsTitle = dsGet(inBook, i, "bsTitle");
////			String bsContent = dsGet(inBook, i, "bsContent");
////			String bsDate = dsGet(inBook, i, "bsDate");
////			String bsStatus = dsGet(inBook, i, "bsStatus");
////			int bsCount = dsGet(inBook, i, "bsCount") != ""
////					? Integer.parseInt(dsGet(inBook, i, "bsCount")) : 0;
////			String sCode = dsGet(inBook, i, "sCode");
////			Book book = new Book(
////						bsNo
////					,	bsTitle
////					,	bsContent
////					,	bsDate
////					,	bsStatus
////					,	bsCount
////					,	sCode);
////		
////			if( rowType == DataSet.ROW_TYPE_INSERTED) {
////				iResult += bService.registerBook(book);
////			}else if( rowType == DataSet.ROW_TYPE_UPDATED) {
////				strErrorMsg = "Fail";
////			}
//////		}
//		result.addVariable("ErrorCode", nErrorCode);
//		result.addVariable("ErrorMsg", strErrorMsg);
//		return result;
//		
//		
//	}
//
//	private String dsGet(DataSet inBook, int i, String string) throws Exception {
//		String value;
//		value = inBook.getString(i, string);
//		if( value == null )
//			return "";
//		else
//			return value;
//	}
//

}
