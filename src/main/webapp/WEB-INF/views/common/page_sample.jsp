<%@ page language="java" contentType="text/xml; charset=utf-8" pageEncoding="euc-kr"%>

<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>

<%
	String strCharset = "utf-8";
	
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    int iPageNo	= inVariableList.getInt("pageNo");
    int iRowCnt	= inVariableList.getInt("rowCount"); 
	
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    PlatformData outPD = new PlatformData();
	
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
   try {
	   
	   //iTotalRowCount : 조회된 전체 row count (select COUNT(*) from table명)
		int iTotalRowCount	= 1234;
		int nPageBlock	= (int)Math.ceil((double)iTotalRowCount/iRowCnt);
		int nStartRow	= iRowCnt * (iPageNo-1);
		int nEndRow		= nStartRow + iRowCnt;
		
        DataSet outDataSet = new DataSet("output");

        outDataSet.addColumn("Column0",	DataTypes.INT	, 10);
		outDataSet.addColumn("Column1",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column2",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column3",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column4",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column5",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column6",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column7",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column8",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column9",	DataTypes.STRING, 10);
		outDataSet.addColumn("Column10",DataTypes.STRING, 10);

        int nRow;

        for(int i = nStartRow; i < nEndRow; i++) {
			if(i+1 > iTotalRowCount)
			{
				break;
			}
			
            nRow = outDataSet.newRow();

            outDataSet.set(nRow, "Column0", i+1);
			outDataSet.set(nRow, "Column1", "test");
			outDataSet.set(nRow, "Column2", "test");
			outDataSet.set(nRow, "Column3", "test");
			outDataSet.set(nRow, "Column4", "test");
			outDataSet.set(nRow, "Column5", "test");
			outDataSet.set(nRow, "Column6", "test");
			outDataSet.set(nRow, "Column7", "test");
			outDataSet.set(nRow, "Column8", "test");
			outDataSet.set(nRow, "Column9", "test");
			outDataSet.set(nRow, "Column10", "test");
        }
	  
        outDataSetList.add(outDataSet);
		
		Variable pageBlockCount = new Variable("pageBlockCount");
		pageBlockCount.set(nPageBlock);
		
		Variable totRowCount = new Variable("totRowCount");
		totRowCount.set(iTotalRowCount);
		
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "succ");
		outVariableList.add(pageBlockCount);
		outVariableList.add(totRowCount);

    } catch(Exception e) {

        outVariableList.add("ErrorCode", -1);
        outVariableList.add("ErrorMsg",  e.toString());

    } finally {

    	outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList);
        out.clear();
        out = pageContext.pushBody();
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>
