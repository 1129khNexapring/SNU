package org.ttt.snu.rehabilitation.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.rehabilitation.service.RehabilitationService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class RehabilitationController {
	
	@Autowired
	private RehabilitationService rService;
	

	@RequestMapping(value="/rehab/request.snu", method=RequestMethod.POST)
	public NexacroResult requestRehab(
			@ParamDataSet(name="in_rehab") DataSet inRehab
			,@ParamVariable(name="inVar1") int inVar1) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		
		int iResult = 0;
		//int uResult = 0;
		for(i=0; i<inRehab.getRowCount(); i++) {
			int rowType = inRehab.getRowType(i);
		int rNum = dsGet(inRehab, i, "rNum") != ""
										? Integer.parseInt(dsGet(inRehab, i, "rNum")) : 0;
		String rReason = dsGet(inRehab, i, "rReason");
		int rSemester = dsGet(inRehab, i, "rSemester") != ""
				? Integer.parseInt(dsGet(inRehab, i, "rSemester")) : 0;
		int rYear = dsGet(inRehab, i, "rYear") != ""
				? Integer.parseInt(dsGet(inRehab, i, "rYear")) : 0;
		String rStatus = dsGet(inRehab, i, "rStatus");
		String rRequestDate = dsGet(inRehab, i, "rRequestDate");
		String rMsg = dsGet(inRehab, i, "rMsg");
		String sCode = dsGet(inRehab, i, "sCode");
		Rehabilitation rehab = new Rehabilitation(
				rNum
				,	rReason
				,	rSemester
				,	rYear
				,	rStatus
				,	rRequestDate
				,	rMsg
				,	sCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += rService.requestRehab(rehab);
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
