package org.ttt.snu.lecture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;

@Controller
public class LectureController {
	
	@Autowired
	private LectureService lService;
	
	@RequestMapping(value="/lecture/list.snu", method=RequestMethod.GET)
	public String boardListView(
			Model model) {
		List<Lecture> lList = lService.printAllLectures();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return "common/errorPage";
		}
	}

}
