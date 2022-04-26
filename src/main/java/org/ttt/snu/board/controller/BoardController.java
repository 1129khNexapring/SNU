package org.ttt.snu.board.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.service.logic.BoardServiceImpl;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class BoardController {
	
	@Autowired
	private BoardServiceImpl bService;
	
	// 강의 게시판 조회
	@RequestMapping(value="/board/list.snu", method=RequestMethod.GET)
	public NexacroResult boardListView(
				@ModelAttribute Board board) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Board> boardList = bService.printAll(board);
		if(!boardList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_emp", boardList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 등록
	@RequestMapping(value="/board/register.snu", method=RequestMethod.POST)
	public NexacroResult registerBoard(
				  @ParamDataSet  (name="in_boardList") DataSet inBoardList
				, @ParamVariable(name="in_var1") String inVar1) throws Exception {
		NexacroResult result = new NexacroResult();
		int 	nErrorCode  = 0;
		String  strErrorMsg = "START";
		int i;
		int iResult = 0;
		for(i = 0; i < inBoardList.getRowCount(); i++) {
			int    board_no         = dsGet(inBoardList, i, "board_no") != ""
						             ? Integer.parseInt(dsGet(inBoardList, i, "board_no")) : 0;
			String board_title      = dsGet(inBoardList, i, "board_title");
			String board_content    = dsGet(inBoardList, i, "board_content");
			String board_date       = dsGet(inBoardList, i, "board_date");
			String b_status         = dsGet(inBoardList, i, "b_status");
			String p_code           = dsGet(inBoardList, i, "p_code");
			String board_fileName   = dsGet(inBoardList, i, "board_fileName");
			String board_fileReName = dsGet(inBoardList, i, "board_fileReName");
			String board_writer     = dsGet(inBoardList, i, "board_writer");
			String board_count      = dsGet(inBoardList, i, "board_count");
			
		Board board = new Board(
					board_no
				,	board_title
				, 	board_content
				,	board_date
				,	b_status
				,	p_code
				,	board_fileName
				,	board_fileReName
				,   board_writer
				,	board_count);
		iResult += bService.registerBoard(board);
		}
		if(iResult < 0) {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
			System.out.println(strErrorMsg);
		}else {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("errorMsg", strErrorMsg);
		result.addVariable("out_var", inVar1);
		return result;
	}
	
	// 첨부파일 저장
	public String saveFile1(MultipartFile uploadFile, HttpServletRequest request) {
		// 파일 경로
		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "//buploadFiles";
		// 폴더 선택
		File folder = new File(savePath);
		// 폴더 없으면 자동 생성
		if(!folder.exists()) {
			folder.mkdir();
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String originalFileName = uploadFile.getOriginalFilename();
		String renameFileName = sdf.format(new Date(System.currentTimeMillis()))
				+"."+originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
		String filePath = folder + "//" + renameFileName;
		// 파일 저장
		try {
			uploadFile.transferTo(new File(filePath));
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		// 파일명 리턴
		return renameFileName;
	}
	
	// Dataset value
	public String dsGet(DataSet ds, int rowNo, String colId) throws Exception {
		String value;
		value = ds.getString(rowNo, colId);
		if(value == null) {
			return "";
		}else {
			return value;
		}
	}
}
