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

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class BookController {

	@Autowired
	private BookService bService;

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

	@RequestMapping(value="/book/register.snu", method=RequestMethod.POST)
	public NexacroResult registerBook(
			@ParamDataSet(name="in_book") DataSet inBook
			,@ParamVariable(name="inVar1") int inVar1) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		
		for(i=0; i< inBook.getRemovedRowCount(); i++) {
			String dBook = inBook.getRemovedData(i, "bsNo").toString();
			bService.removeBook(dBook);
		}
		
		int iResult = 0;
		int uResult = 0;
		for(i=0; i<inBook.getRowCount(); i++) {
			int rowType = inBook.getRowType(i);
		int bsNo = dsGet(inBook, i, "bsNo") != ""
										? Integer.parseInt(dsGet(inBook, i, "bsNo")) : 0;
		String bsTitle = dsGet(inBook, i, "bsTitle");
		String bsContent = dsGet(inBook, i, "bsContent");
		String bsDate = dsGet(inBook, i, "bsDate");
		String bsStatus = dsGet(inBook, i, "bsStatus");
		int bsCount = dsGet(inBook, i, "bsCount") != ""
				? Integer.parseInt(dsGet(inBook, i, "bsCount")) : 0;
		String sCode = dsGet(inBook, i, "sCode");
		Book book = new Book(
					bsNo
				,	bsTitle
				,	bsContent
				,	bsDate
				,	bsStatus
				,	bsCount
				,	sCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += bService.registerBook(book);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED) {
				String updateBs = inBook.getSavedData(i, "sCode").toString();
				book.setsCode(updateBs);
				uResult += bService.modifyBook(book);
			}
		}
		if(iResult < 0 && uResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode",nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		result.addVariable("outVar", inVar1);
		
		return result;
	}

	public DataSet RsToDs(ResultSet rs, String dsID) throws Exception {
		int i;
		int iColCnt;
		String sColName;
		String sColType;
		;
		int ColType = 0;
		int ColSize = 255;

		DataSet ds = new DataSet(dsID);
		ResultSetMetaData rsmd = rs.getMetaData();

		iColCnt = rsmd.getColumnCount();
		for (i = 1; i <= iColCnt; i++) {
			sColName = rsmd.getColumnName(i).toUpperCase();
			sColType = rsmd.getColumnTypeName(i);

			ColType = DataTypes.STRING;
			if (sColType.equals("INTEGER"))
				ColType = DataTypes.INT;
			if (sColType.equals("DECIMAL"))
				ColType = DataTypes.DECIMAL;

			ds.addColumn(sColName, ColType, ColSize);
		}
		while (rs.next()) {
			int row = ds.newRow();
			for (i = 1; i <= iColCnt; i++) {
				sColName = rsmd.getColumnName(i).toUpperCase();
				ds.set(row, sColName, rsGet(rs, sColName));
			}
		}

		return ds;
	}

	// ResultSet value
	public String rsGet(ResultSet rs, String id) throws Exception {
		if (rs.getString(id) == null) {
			return "";
		} else {
			return rs.getString(id);
		}
	}

	// Dataset value
	public String dsGet(DataSet ds, int rowno, String colid) throws Exception {
		String value;
		value = ds.getString(rowno, colid);
		if (value == null)
			return "";
		else
			return value;
	}

}
