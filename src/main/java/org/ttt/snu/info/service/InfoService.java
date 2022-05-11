package org.ttt.snu.info.service;

import java.util.List;

import org.ttt.snu.info.domain.Info;

public interface InfoService {

	List<Info> printAll();
	int registerInfo(Info info);
	List<Info> printAllNInfo();
	int modifyInfo(Info info);
	int closeInfo(Info info);
	int openInfo(Info info);
	int removeInfo(Info info);

}
