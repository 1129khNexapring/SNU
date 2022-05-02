package org.ttt.snu.transfer.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;
import org.ttt.snu.transfer.service.TransferService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class TransferController {

	@Autowired
	private TransferService tService;
	

	
	
	@RequestMapping(value="/movedept/list.snu", method=RequestMethod.POST)
	public NexacroResult deptListView(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> sList = tService.printAll(sCode);
		System.out.println(sList);
		if(!sList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_dept", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/allDept/list.snu", method=RequestMethod.GET)
	public NexacroResult allDept() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Department> dList = tService.printAllDept();
		if(!dList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("outDept", dList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/requestTran/list.snu", method=RequestMethod.POST)
	public NexacroResult requestTransfer(
			@ParamDataSet(name="in_tran") DataSet inTran) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
			
		int iResult = 0;
		for(i=0; i<inTran.getRowCount(); i++) {
			int rowType = inTran.getRowType(i);
		int tNo = dsGet(inTran, i, "tNo") != ""
										? Integer.parseInt(dsGet(inTran, i, "tNo")) : 0;
		String tRequestDate = dsGet(inTran, i, "tRequestDate");
		String tStatus = dsGet(inTran, i, "tStatus");
		String tMsg = dsGet(inTran, i, "tMsg");
		String sCode = dsGet(inTran, i, "sCode");
		String dCode = dsGet(inTran, i, "dCode");
		String tdCode = dsGet(inTran, i, "tdCode");
		System.out.println(tRequestDate + tStatus + tMsg + sCode + dCode + tdCode);
		Transfer transfer = new Transfer(
				tNo
				,	tRequestDate
				,	tStatus
				,	tMsg
				,	sCode
				,	dCode
				,	tdCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += tService.requestTransfer(transfer);
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
