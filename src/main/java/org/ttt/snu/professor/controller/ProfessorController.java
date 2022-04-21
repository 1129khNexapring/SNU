package org.ttt.snu.professor.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@Controller
public class ProfessorController {
	
	@Autowired
	private ProfessorService pService;
	
	@ResponseBody
	@RequestMapping(value="/login/professorcheck.snu", method=RequestMethod.POST)
	public String professorLoginCheck(
			Model model
			, HttpServletRequest request
			, @RequestParam("professor_id") String id
			, @RequestParam("professor_pwd") String pwd) {
		Professor p = pService.printProfessorById(id);
		if(p.getpPassword().equals(pwd)) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(p);
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return null;
		}
	}

}
