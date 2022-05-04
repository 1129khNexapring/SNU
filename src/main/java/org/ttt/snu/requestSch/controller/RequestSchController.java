package org.ttt.snu.requestSch.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.requestSch.domain.RequestSch;
import org.ttt.snu.requestSch.service.RequestSchService;
import org.ttt.snu.requestScholarship.service.requestScholarshipService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class RequestSchController {
	
	@Autowired
	private RequestSchService rsService;
	
	@RequestMapping(value="/sch/request.snu", method=RequestMethod.POST)
	public NexacroResult requestSch(
			@ParamDataSet(name="in_sch") DataSet inSch) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
			
		int iResult = 0;
		for(i=0; i<inSch.getRowCount(); i++) {
			int rowType = inSch.getRowType(i);
		
		String sCode = dsGet(inSch, i, "sCode");
		String scCode = dsGet(inSch, i, "scCode");
		RequestSch rs = new RequestSch(
				sCode
				,scCode);
		if(rowType == DataSet.ROW_TYPE_INSERTED) {
			iResult += rsService.requestSch(rs);
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