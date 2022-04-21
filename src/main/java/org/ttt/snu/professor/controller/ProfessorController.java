package org.ttt.snu.professor.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
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
	@RequestMapping(value="/login/professorCheck.snu", method=RequestMethod.POST, produces="application/json;charset=utf-8")
	public String professorCheckLogin(
				HttpServletRequest request
				, @ModelAttribute Professor professor
				, @RequestParam("professor_id") String pCode
				, @RequestParam("professor_pwd") String pPassword) {
		professor.setpCode(pCode);
		professor.setpPassword(pPassword);
		Professor pUser = pService.checkLogin(professor);
		if(pUser != null) {
			Gson gson = new GsonBuilder().create();
			return gson.toJson(pUser);
		}else {
			return "fail";
		}
	}
}
