package org.ttt.snu;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.info.domain.Info;
import org.ttt.snu.info.service.InfoService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	@Autowired
	private InfoService iService;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/login.snu", method = RequestMethod.GET)
	public String home() {
			return "user/loginPage";
	}
	
	
	@RequestMapping(value = "/main.snu", method = RequestMethod.GET)
	public String popupList(Model model) {
		List<Info> iList = iService.printAll();
		if (!iList.isEmpty()) {
			model.addAttribute("iList", iList);
		}
		return "index";
	}
}
