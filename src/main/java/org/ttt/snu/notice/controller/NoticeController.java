package org.ttt.snu.notice.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.ttt.snu.common.NoticePagenation;
import org.ttt.snu.common.Pagenation;
import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.service.NoticeService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.datatype.PlatformDataType;

@Controller
public class NoticeController {
	private Logger logger = LoggerFactory.getLogger(NoticeController.class); 
	private static final String SP = File.separator;
	private static final String PATH = "C:\\Users\\User\\Desktop\\SNU\\src\\main\\webapp\\resources\\nuploadFiles"; //서버 첨부파일 경로
	private static String sUserPath = "";
	@Autowired
	private NoticeService nService;
	//공지사항 리스트
	@RequestMapping(value = "/notice/list.snu", method = RequestMethod.GET)
	public String NoticeListView(Model model, @RequestParam(value = "page", required = false) Integer page) {

		int currentpage = (page != null) ? page : 1;
		int totalCount = nService.getListCount();
		PageInfo pi = NoticePagenation.getPageInfo(currentpage, totalCount);
		List<Notice> nList = nService.printAll(pi);
		if (!nList.isEmpty()) {
			model.addAttribute("nList", nList);
			model.addAttribute("pi", pi);
			return "/notice/noticeListView";
		} else {
			model.addAttribute("msg", "공지사항 조회실패");
			return "common/errorpage";
		}

	}
	//공지사항 상세 페이지
	@RequestMapping(value = "notice/Detail.snu", method = RequestMethod.GET)
	public String NoticeDetailView(Model model, @RequestParam("noticeNo") Integer noticeNo) {
		nService.updateCount(noticeNo);
		Notice notice = nService.printOneByNo(noticeNo);
		if (notice != null) {
			model.addAttribute("notice", notice);
			return "notice/noticeDetailView";
		} else {
			model.addAttribute("msg", "조회 실패");
			return "common/errorPage";
		}

	}
	
	@RequestMapping(value = "/notice/writeView.snu", method = RequestMethod.GET)
	public String noticeWriteView() {
		return "notice/noticeWriteForm";
	}
//	공지사항 등록
	@RequestMapping(value = "/notice/register.snu", method = RequestMethod.POST)
	public ModelAndView noticeRegister(ModelAndView mv, @ModelAttribute Notice notice,
			@RequestParam(value = "uploadFile", required = false) MultipartFile uploadFile,
			HttpServletRequest request) {
		try {

			if (uploadFile != null && !uploadFile.getOriginalFilename().equals("")) {

				HashMap<String, String> fileMap = saveFile(uploadFile, request);
				String filePath = fileMap.get("nFilePath");
				String fileRename = fileMap.get("nFileName");
				String fileExtension = fileMap.get("nExtension");

				if (filePath != null && !filePath.equals("")) {
					notice.setnFileName(uploadFile.getOriginalFilename());
					notice.setnFileReName(fileRename);
					notice.setnFilePath(filePath);
					notice.setnExtension(fileExtension);
				}
			}

			int result = nService.registerNotice(notice);
			if (result > 0) {
				mv.setViewName("redirect:/notice/list.snu");
			} else {
				mv.addObject("msg", "공지사항 등록 실패");
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			mv.setViewName("common/errorPage");
			mv.addObject("msg", e.toString());
		}
		return mv;
	}

	public HashMap<String, String> saveFile(MultipartFile file, HttpServletRequest request) {
		String filePath = "";
		HashMap<String, String> fileMap = new HashMap<String, String>();
		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\nuploadFiles";
		File folder = new File(savePath);
		if (!folder.exists())
			folder.mkdir();

		
		String originalFileName = file.getOriginalFilename();
		String extensionName = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
		String renameFileName = originalFileName + "." + extensionName;

		filePath = folder + "\\" + renameFileName;
		fileMap.put("nFilePath", filePath);
		fileMap.put("nFileName", renameFileName);
		fileMap.put("nExtension", extensionName);

		try {
			file.transferTo(new File(filePath));

		} catch (Exception e) {

			e.printStackTrace();
		}

		return fileMap;

	}
	//공지사항 수정
	@RequestMapping(value = "/notice/update.snu", method = RequestMethod.POST)
	public ModelAndView noticeUpdate(ModelAndView mv, @ModelAttribute Notice notice,
			@RequestParam(value = "reloadFile", required = false) MultipartFile reloadFile,
			HttpServletRequest request) {
		try {

			if (reloadFile != null && !reloadFile.isEmpty()) {

				deleteFile(notice.getnFilePath(), request);
				HashMap<String, String> fileMap = saveFile(reloadFile, request);
				String savePath = fileMap.get("nFilePath");
				String fileRename = fileMap.get("nFileName");

				if (savePath != null) {
					notice.setnFileName(reloadFile.getOriginalFilename());
					notice.setnFileReName(fileRename);
					notice.setnFilePath(savePath);

				}
			}
			int result = nService.modifyNotice(notice);
			if (result > 0) {
				mv.setViewName("redirect:/notice/Detail.snu?noticeNo=" + notice.getNoticeNo());
			} else {
				mv.addObject("msg", "공지사항 수정실패");
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}
	//파일 삭제
	public void deleteFile(String filePath, HttpServletRequest request) {
		File deleteFile = new File(filePath);
		if (deleteFile.exists()) {
			deleteFile.delete();
		}
	}
	//공지사항 수정
	@RequestMapping(value = "notice/modifyView.snu", method = RequestMethod.GET)
	public String noticeModifyView(Model model, @RequestParam("noticeNo") int noticeNo) {
		try {
			Notice notice = nService.printOneByNo(noticeNo);
			if (notice != null) {
				model.addAttribute("notice", notice);
				return "notice/noticeUpdateView";
			} else {
				
				model.addAttribute("msg", "데이터가 없습니다");
				return "common/errorPage";

			}
		} catch (Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}
	}
	//공지사항 삭제
	@RequestMapping(value = "/notice/delete.snu", method = RequestMethod.GET)
	public String noticeDelete(Model model, @RequestParam("noticeNo") int noticeNo) {
		try {
			int result = nService.deleteNotice(noticeNo);
			if (result > 0) {
				return "redirect:/notice/list.snu";

			} else {
				model.addAttribute("msg", "공지사항 삭제 실패");
				return "common/errorPage";
			}
		} catch (Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}

	}
	//관리자 넥사크로 게시글 리스트 조회
	@RequestMapping(value="/notice/nList.snu", method=RequestMethod.GET)
	public NexacroResult printNoticeList() 
	{
		int nErrorCode = 0;
		String strErrorMsg="";
		
		NexacroResult result = new NexacroResult();
		List<Notice> nList = nService.printAllNotice();

		if(!nList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "SUCC";
			
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_notice", nList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
		
	}
	//관리자 넥사크로 게시글 등록
	@RequestMapping(value="/noticeNexa/register.snu", method=RequestMethod.POST)
	public NexacroResult registerNoticeFromNexa(
			 @ParamVariable(name="title") String title
			,@ParamVariable(name="content") String content
			,@ParamVariable(name="name") String name)
	{
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		Notice notice = new Notice();
		String extension = name.substring(name.lastIndexOf(".")+1);
//		String result1 = name.substring(0, name.indexOf("."));
//		System.out.println(extension);
//		System.out.println(result1);
		//System.out.println(result1); 파일업로드 도출
		//System.out.println(result); txt가 도출
		String infilePath = "C:\\Users\\User\\Desktop\\SNU\\src\\main\\webapp\\resources\\nuploadFiles";
		//System.out.println(infilePath.concat("\\").concat(name));
		notice.setnFilePath(infilePath.concat("\\").concat(name));
		notice.setnExtension(extension);
		notice.setnFileName(name);
		notice.setNoticeWriter("관리자");
		notice.setNoticeTitle(title);
		notice.setNoticeContent(content);
		int iResult = nService.registerNoticeFromNexa(notice);
		if(iResult > 0)
		{
			nErrorCode = 0;
			strErrorMsg = "게시글이 등록됐습니다!";
		}else {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다!";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		result.addVariable("out_var", notice.getnFileName());
		return result;
		
	}
	@RequestMapping(value="/uploadFiles.snu")
	public NexacroResult uploadFiles(HttpServletRequest request, HttpServletResponse response) throws IOException {
		//MultipartHttpServletRequest체크
		if(!(request instanceof MultipartHttpServletRequest)) {
			if(logger.isDebugEnabled()) {
				logger.debug("Request is not a MultipartHttpServletRequest");
			}
			return new NexacroResult();
		}
		
		logger.debug("----------------------nexacro platform uploadFiles --------");
		
		//반환될 파일저장 정보 Dataset 생성
		DataSet resultDs = createDataSet4UploadResult();
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		
		//파라미터 처리
		uploadParameters(multipartRequest);
		//파일저장 및 파일정보 반환 Dataset셋팅 처리
		uploadMultipartFiles(multipartRequest, resultDs);
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(resultDs);
		nexacroResult.setErrorCode(0);
		nexacroResult.setErrorMsg("File Save Success!");
		
		return nexacroResult;
	}//uploadFiles

	//파라미터 셋팅
	
	private void uploadParameters(MultipartHttpServletRequest multipartRequest) {
		// parameter and multipart parameter
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();
		
		while(parameterNames.hasMoreElements()) {
			String parameterName = parameterNames.nextElement();
			if(parameterName == null || parameterName.length() == 0) {
				continue;
			}
			
			String value = multipartRequest.getParameter(parameterName);
			
			//화면 FileupTransfer의  setPostData로 셋팅한 저장될 파일경로 String을 셋팅한다. ("file")
			if("filepath".equals(parameterName)) {
				if(value != null && !value.equals("")) {
					sUserPath = SP + value;
				}
				continue;
			}
		}//while
	}//uploadParameters
	
	//실제파일 저장 및 저장파일 정보 셋팅
	
	private void uploadMultipartFiles(MultipartHttpServletRequest multipartRequest, DataSet resultDs) throws IOException {
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		String filePath = getFilePath();
		
		Set<String> keySet = fileMap.keySet();
		for(String name: keySet) {
			MultipartFile multipartFile = fileMap.get(name);
			String originalFilename = multipartFile.getOriginalFilename();
			
			if(originalFilename == null || originalFilename.length() == 0) {
				continue;
			}
			
			File destination = new File(filePath);
			
			if(destination.exists() == false) {
				boolean mkdirs = destination.mkdirs();
				destination.setWritable(true);
				
				logger.debug("------create directory ----{}", mkdirs);
			}
			
			File targetFile = new File(filePath+SP+originalFilename);
			
			InputStream inpustStream = multipartFile.getInputStream();
			FileCopyUtils.copy(inpustStream, new FileOutputStream(targetFile));
			
			int row = resultDs.newRow();
			resultDs.set(row, "fileid", originalFilename);
			resultDs.set(row, "filename", originalFilename);
			resultDs.set(row, "filesize", targetFile.length());
			
			logger.debug("uploaded file write success, file={}", originalFilename);
		}//for
	}//uploadMultipartFiles
	
	//반환용 파일정보 데이터셋 생성
	private DataSet createDataSet4UploadResult() {
		DataSet ds = new DataSet("ds_output");
		ds.addColumn("fileid", PlatformDataType.STRING);
		ds.addColumn("filename", PlatformDataType.STRING);
		ds.addColumn("filesize", PlatformDataType.INT);
		
		return ds;
	}//createDataset4UploadResult
	//파일을 저장할 절대경로 반환
	
	private String getFilePath() {
		String uploadPath = PATH + sUserPath;
		return uploadPath;
	}//getFilePath
	
}
