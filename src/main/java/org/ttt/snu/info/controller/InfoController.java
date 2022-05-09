package org.ttt.snu.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.ttt.snu.common.NoticePagenation;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.service.InfoService;
import org.ttt.snu.notice.domain.Notice;
import org.ttt.snu.notice.domain.PageInfo;
import org.ttt.snu.notice.service.NoticeService;
@Controller
public class InfoController {

	@Autowired
	private InfoService iService;
	
	
	public String NoticeListView(Model model ) {
		List<Info> iList = iService.printAll();
		if (!iList.isEmpty()) {
			model.addAttribute("iList", iList);
			
			return "/info/popup";
		} else {
			model.addAttribute("msg", "조회실패");
			return "common/errorpage";
		}

	}

}
