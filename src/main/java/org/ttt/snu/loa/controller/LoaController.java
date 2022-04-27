package org.ttt.snu.loa.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.book.domain.Book;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.loa.service.LoaService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class LoaController {
	
	@Autowired
	private LoaService lService;
	
	@RequestMapping(value="/loa/request.snu", method=RequestMethod.POST)
	public NexacroResult requestLoa(
			@ParamDataSet(name="in_loa") DataSet inLoa
			,@ParamVariable(name="inVar1") int inVar1) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		
		int iResult = 0;
		//int uResult = 0;
		for(i=0; i<inLoa.getRowCount(); i++) {
			int rowType = inLoa.getRowType(i);
		int lNum = dsGet(inLoa, i, "lNum") != ""
										? Integer.parseInt(dsGet(inLoa, i, "lNum")) : 0;
		String lReason = dsGet(inLoa, i, "lReason");
		String lRequestDate = dsGet(inLoa, i, "lRequestDate");
		String lStatus = dsGet(inLoa, i, "lStatus");
		String lMsg = dsGet(inLoa, i, "lMsg");
		int lSemester = dsGet(inLoa, i, "lSemester") != ""
				? Integer.parseInt(dsGet(inLoa, i, "lSemester")) : 0;
		String sCode = dsGet(inLoa, i, "sCode");
		Loa loa = new Loa(
				lNum
				,	lReason
				,	lRequestDate
				,	lStatus
				,	lMsg
				,	lSemester
				,	sCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += lService.requestLoa(loa);
			} /*
				 * else if(rowType == DataSet.ROW_TYPE_UPDATED) { String updateBs =
				 * inLoa.getSavedData(i, "sCode").toString(); book.setsCode(updateBs); uResult
				 * += lService.modifyBook(book); }
				 */
		}
		if (iResult < 0 /* && uResult < 0 */) {
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
