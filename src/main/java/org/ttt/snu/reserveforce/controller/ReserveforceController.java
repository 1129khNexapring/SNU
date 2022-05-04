package org.ttt.snu.reserveforce.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.reserveforce.service.ReserveforceService;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class ReserveforceController {
	
	@Autowired
	private ReserveforceService rfService;
	
	@RequestMapping(value="/military/list.snu", method=RequestMethod.POST)
	public NexacroResult milListView(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> msList = rfService.printAll(sCode);
		System.out.println(msList);
		if(!msList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_dept", msList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/request/milList.snu", method=RequestMethod.POST)
	public NexacroResult milRequestList(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Reserveforce> rfList = rfService.requestMilList(sCode);
		if(!rfList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_mil", rfList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	

	
	@RequestMapping(value="/requestMil/list.snu", method=RequestMethod.POST)
	public NexacroResult requestTransfer(
			@ParamDataSet(name="in_mil") DataSet inMil) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
			
		int iResult = 0;
		for(i=0; i<inMil.getRowCount(); i++) {
			int rowType = inMil.getRowType(i);
		String rfNum = dsGet(inMil, i, "rfNum");
		String rfRequestDate = dsGet(inMil, i, "rfRequestDate");
		String musterDate = dsGet(inMil, i, "musterDate");
		String rfStatus = dsGet(inMil, i, "rfStatus");
		String rfMsg = dsGet(inMil, i, "rfMsg");
		String military = dsGet(inMil, i, "military");
		String rank = dsGet(inMil, i, "rank");
		String sCode = dsGet(inMil, i, "sCode");
		Reserveforce reserveforce = new Reserveforce(
				rfNum
				,	rfRequestDate
				,	musterDate
				,	rfStatus
				,	rfMsg
				,	military
				,	rank
				,	sCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += rfService.requestMilitary(reserveforce);
			}
		}
		if(iResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode",nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
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
