package org.ttt.snu.board.controller;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.board.service.logic.BoardServiceImpl;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class BoardController {
	
	@Autowired
	private BoardServiceImpl bService;
	
	// 강의 게시판 조회
	@RequestMapping(value="/board/list.snu", method=RequestMethod.GET)
	public NexacroResult boardListView() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Board> boardList = bService.printAll();
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
	
//	// 강의 게시판 등록
//	public ModelAndView registerBoard(
//				  ModelAndView mv
//				, @ModelAttribute Board board
//				, @RequestParam(value = "uploadFile", required = false) MultipartFile uploadFile
//				, HttpServletRequest request) {
//		try {
//
//			if (uploadFile != null && !uploadFile.getOriginalFilename().equals("")) {
//
//				HashMap<String, String> fileMap = saveFile(uploadFile, request);
//				String filePath = fileMap.get("nFilePath");
//				String fileRename = fileMap.get("nFileName");
//				String fileExtension = fileMap.get("nExtension");
//
//				if (filePath != null && !filePath.equals("")) {
//					
//				}
//					notice.setnFileName(uploadFile.getOriginalFilename());
//					notice.setnFileReName(fileRename);
//					notice.setnFilePath(filePath);
//					notice.setnExtension(fileExtension);
//				}
//			}
//		
//		return mv;
//	}
	
	// 강의 게시판 등록
	@RequestMapping(value="/board/register.snu", method=RequestMethod.POST)
	public NexacroResult registerBoard(
				  @ParamVariable(name="in_var1") String boardTitle
				, @ParamVariable(name="in_var2") String boardContent
				, @ParamVariable(name="in_var3") int boardCount
				, @ParamVariable(name="in_var4") String pCode
				, @ParamVariable(name="in_var5") String pName) {
		NexacroResult result = new NexacroResult();
		int 	nErrorCode  = 0;
		String  strErrorMsg = "START";
		Board board = new Board();
		board.setBoard_title(boardTitle);
		board.setBoard_content(boardContent);
		board.setBoard_count(boardCount);
		board.setP_code(pCode);
		board.setBoard_writer(pName);
		int iResult = bService.registerBoard(board);
		if(iResult > 0) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 수정
	@RequestMapping(value="/board/modify.snu", method=RequestMethod.POST)
	public NexacroResult modifyBoard(
				  @ParamVariable(name="in_var1") String boardTitle
				, @ParamVariable(name="in_var2") String boardContent
				, @ParamVariable(name="in_var3") int boardNo) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Board board = new Board();
		board.setBoard_no(boardNo);
		board.setBoard_title(boardTitle);
		board.setBoard_content(boardContent);
		NexacroResult result = new NexacroResult();
		int uResult = bService.modifyBoard(board);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 조회수
	@RequestMapping(value="/board/count.snu", method=RequestMethod.POST) 
	public NexacroResult boardCount(
				  @ParamVariable(name="in_var1") int boardNo
				, @ParamVariable(name="in_var2") int boardCnt
				, @ParamVariable(name="in_var3") String boardTitle
				, @ParamVariable(name="in_var4") String boardContent) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Board board = new Board();
		board.setBoard_no(boardNo);
		board.setBoard_count(boardCnt);
		board.setBoard_title(boardTitle);
		board.setBoard_content(boardContent);
		NexacroResult result = new NexacroResult();
		int uResult = bService.updateBoardCnt(board);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addDataSet("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
//	//강의 게시판 등록
//	@RequestMapping(value="/board/register.snu", method=RequestMethod.POST)
//	public NexacroResult registerBoard(
//				  @ParamDataSet  (name="in_boardList") DataSet inBoardList
//				, @ParamVariable(name="in_var1") int board_no
//				, @ParamVariable(name="in_var2") String p_code) throws Exception {
//		NexacroResult result = new NexacroResult();
//		int 	nErrorCode  = 0;
//		String  strErrorMsg = "START";
//		int i;
//		int iResult = 0;
//		int uResult = 0;
//		for(i = 0; i < inBoardList.getRowCount(); i++) {
//			int    rowType          = inBoardList.getRowType(i);
//			String board_title      = dsGet(inBoardList, i, "board_title");
//			String board_content    = dsGet(inBoardList, i, "board_content");
//			String board_date       = dsGet(inBoardList, i, "board_date");
//			String b_status         = dsGet(inBoardList, i, "b_status");
//			String board_writer     = dsGet(inBoardList, i, "board_writer");
//			String board_count      = dsGet(inBoardList, i, "board_count");
//			
//		Board board = new Board(
//					board_no
//				,	board_title
//				, 	board_content
//				,	board_date
//				,	b_status
//				,	p_code
//				,   board_writer
//				,	board_count);
//			if(rowType == DataSet.ROW_TYPE_INSERTED) {
//				iResult += bService.registerBoard(board);
//			}else if(rowType == DataSet.ROW_TYPE_UPDATED) {
//				String boardId= inBoardList.getSavedData(i, "board_no").toString();
//				board.setBoard_no(Integer.parseInt(boardId));
//				uResult += bService.modifyBoard(board);
//			}
//		}
//		if(iResult < 0 && uResult < 0) {
//			nErrorCode  = -1;
//			strErrorMsg = "FAIL";
//		}else {
//			nErrorCode  = 0;
//			strErrorMsg = "SUCC";
//		}
//		result.addVariable("ErrorCode", nErrorCode);
//		result.addVariable("errorMsg", strErrorMsg);
//		// result.addVariable("out_var", inVar1);
//		return result;
//	}
	
	// 강의 게시판 삭제
	@RequestMapping(value="/board/delete.snu", method=RequestMethod.POST)
	public NexacroResult removeBoard(
				@ParamVariable(name="in_var1") int boardNo) {
		int     nErrorCode  = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		System.out.println(boardNo);
		Board board = new Board();
		board.setBoard_no(boardNo);
		int dResult = bService.removeBoard(board);
		if(dResult > 0) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 댓글 조회
//		@RequestMapping(value="/comment/list.snu", method=RequestMethod.POST)
//		public NexacroResult commentListView(
//					  @ParamDataSet(name="in_emp") DataSet inEmp
//					, @ParamVariable(name="in_var1") int inVar1) {
//			int    nErrorCode  = 0;
//			String strErrorMsg = "START";
//			NexacroResult result = new NexacroResult();
//			List<Comments> commentList = bService.printAllComments(inVar1, "S001");
//			if(!commentList.isEmpty()) {
//				nErrorCode  = 0;
//				strErrorMsg = "SUCC";
//			}else {
//				nErrorCode  = -1;
//				strErrorMsg = "FAIL";
//			}	
//			result.addDataSet("out_comments", commentList);
//			result.addVariable("ErrorCode", nErrorCode);
//			result.addVariable("ErrorMsg", strErrorMsg);
//			return result;
//		}
		
	// 강의 게시판 댓글 조회
	@RequestMapping(value="/comment/list.snu", method=RequestMethod.POST)
	public NexacroResult commentsList(
				@ParamVariable(name="in_var1") int  boardNo
			  , @ParamVariable(name="in_var2") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Comments> commentList = bService.printAllComments(boardNo, sCode);
		if(!commentList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}	
		result.addDataSet("out_comments", commentList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 댓글 등록
	@RequestMapping(value="/comments/register.snu", method=RequestMethod.POST)
	public NexacroResult commentsRegister(
				  @ParamVariable(name="inVar1") int boardNo
				, @ParamVariable(name="inVar2") String commentContent
				, @ParamVariable(name="inVar3") String pCode) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Comments comments = new Comments();
		NexacroResult result = new NexacroResult();
		comments.setBoard_no(boardNo);
		comments.setComment_content(commentContent);
		comments.setP_code(pCode);
		int iResult = bService.registerComments(comments);
		if(iResult > 0) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 댓글 수정
	@RequestMapping(value="/comments/modify.snu", method=RequestMethod.POST)
	public NexacroResult commentsModify(
				  @ParamVariable(name="inVar1") int board_no
				, @ParamVariable(name="inVar2") int comment_no
				, @ParamVariable(name="inVar3") String commentContent) {
		int nErrorCode = 0;
		String strErrorMsg = "";
		Comments comments = new Comments();
		comments.setBoard_no(board_no);
		comments.setComment_no(comment_no);
		comments.setComment_content(commentContent);
		NexacroResult result = new NexacroResult();
		int uResult = bService.modifyComments(comments);
		if(uResult > 0) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 게시판 댓글 삭제
		@RequestMapping(value="/comments/delete.snu", method=RequestMethod.POST)
		public NexacroResult commentsRemove(
					@ParamVariable(name="in_var1") int commentNo) {
			int     nErrorCode  = 0;
			String  strErrorMsg = "START";
			NexacroResult result = new NexacroResult();
			Comments comments = new Comments();
			comments.setComment_no(commentNo);
			int dResult = bService.removeComments(comments);
			if(dResult > 0) {
				nErrorCode  = 0;
				strErrorMsg = "SUCC";
			}else {
				nErrorCode  = -1;
				strErrorMsg = "FAIL";
			}
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
		}
	
//	// 첨부파일 저장
//	public String saveFile(MultipartFile uploadFile, HttpServletRequest request) {
//		// 파일 경로
//		String root = request.getSession().getServletContext().getRealPath("resources");
//		String savePath = root + "//buploadFiles";
//		// 폴더 선택
//		File folder = new File(savePath);
//		// 폴더 없으면 자동 생성
//		if(!folder.exists()) {
//			folder.mkdir();
//		}
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
//		String originalFileName = uploadFile.getOriginalFilename();
//		String renameFileName = sdf.format(new Date(System.currentTimeMillis()))
//				+"."+originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
//		String filePath = folder + "//" + renameFileName;
//		// 파일 저장
//		try {
//			uploadFile.transferTo(new File(filePath));
//		} catch (IllegalStateException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		// 파일명 리턴
//		return renameFileName;
//	}
	
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
	
//	@RequestMapping(value="/uploadFiles.snu")
//	public NexacroResult uploadFiles(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		//MultipartHttpServletRequest체크
//		if(!(request instanceof MultipartHttpServletRequest)) {
//			if(logger.isDebugEnabled()) {
//				logger.debug("Request is not a MultipartHttpServletRequest");
//			}
//			return new NexacroResult();
//		}
//		
//		logger.debug("----------------------nexacro platform uploadFiles --------");
//		
//		//반환될 파일저장 정보 Dataset 생성
//		DataSet resultDs = createDataSet4UploadResult();
//		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
//		
//		//파라미터 처리
//		uploadParameters(multipartRequest);
//		//파일저장 및 파일정보 반환 Dataset셋팅 처리
//		uploadMultipartFiles(multipartRequest, resultDs);
//		
//		NexacroResult nexacroResult = new NexacroResult();
//		nexacroResult.addDataSet(resultDs);
//		nexacroResult.setErrorCode(0);
//		nexacroResult.setErrorMsg("File Save Success!");
//		
//		return nexacroResult;
//	}//uploadFiles
//
//	//파라미터 셋팅
//	
//	private void uploadParameters(MultipartHttpServletRequest multipartRequest) {
//		// parameter and multipart parameter
//		Enumeration<String> parameterNames = multipartRequest.getParameterNames();
//		
//		while(parameterNames.hasMoreElements()) {
//			String parameterName = parameterNames.nextElement();
//			if(parameterName == null || parameterName.length() == 0) {
//				continue;
//			}
//			
//			String value = multipartRequest.getParameter(parameterName);
//			
//			//화면 FileupTransfer의  setPostData로 셋팅한 저장될 파일경로 String을 셋팅한다. ("file")
//			if("filepath".equals(parameterName)) {
//				if(value != null && !value.equals("")) {
//					sUserPath = SP + value;
//				}
//				continue;
//			}
//		}//while
//	}//uploadParameters
//	
//	//실제파일 저장 및 저장파일 정보 셋팅
//	
//	private void uploadMultipartFiles(MultipartHttpServletRequest multipartRequest, DataSet resultDs) throws IOException {
//		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
//		String filePath = getFilePath();
//		
//		Set<String> keySet = fileMap.keySet();
//		for(String name: keySet) {
//			MultipartFile multipartFile = fileMap.get(name);
//			String originalFilename = multipartFile.getOriginalFilename();
//			
//			if(originalFilename == null || originalFilename.length() == 0) {
//				continue;
//			}
//			
//			File destination = new File(filePath);
//			
//			if(destination.exists() == false) {
//				boolean mkdirs = destination.mkdirs();
//				destination.setWritable(true);
//				
//				logger.debug("------create directory ----{}", mkdirs);
//			}
//			
//			File targetFile = new File(filePath+SP+originalFilename);
//			
//			InputStream inpustStream = multipartFile.getInputStream();
//			FileCopyUtils.copy(inpustStream, new FileOutputStream(targetFile));
//			
//			int row = resultDs.newRow();
//			resultDs.set(row, "fileid", originalFilename);
//			resultDs.set(row, "filename", originalFilename);
//			resultDs.set(row, "filesize", targetFile.length());
//			
//			logger.debug("uploaded file write success, file={}", originalFilename);
//		}//for
//	}//uploadMultipartFiles
//	
//	//반환용 파일정보 데이터셋 생성
//	private DataSet createDataSet4UploadResult() {
//		DataSet ds = new DataSet("ds_output");
//		ds.addColumn("fileid", PlatformDataType.STRING);
//		ds.addColumn("filename", PlatformDataType.STRING);
//		ds.addColumn("filesize", PlatformDataType.INT);
//		
//		return ds;
//	}//createDataset4UploadResult
//	//파일을 저장할 절대경로 반환
//	
//	private String getFilePath() {
//		String uploadPath = PATH + sUserPath;
//		return uploadPath;
//	}//getFilePath
}
