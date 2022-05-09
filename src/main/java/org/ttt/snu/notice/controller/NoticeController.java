package org.ttt.snu.notice.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.ttt.snu.common.NoticePagenation;
import org.ttt.snu.common.Pagenation;
import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.service.NoticeService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class NoticeController {

	@Autowired
	private NoticeService nService;

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

	public void deleteFile(String filePath, HttpServletRequest request) {
		File deleteFile = new File(filePath);
		if (deleteFile.exists()) {
			deleteFile.delete();
		}
	}

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
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		result.addVariable("out_var", notice.getnFileName());
		return result;
		
	}

}
