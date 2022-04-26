//XJS=pagging.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  techtip pagging sample
        *  @MenuPath   techtip > pagging
        *  @FileName	pagging.xjs
        *  @Desction	grid pagging sample script library
        *******************************************************************************
        *  2019.03.20		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define a user variable
        * @param objDiv	: pagging div
        *		 objConfig : {nPageCount, nPageRowCount, bPageViewActive, objPageSearchFunction, objSearchButton}
        * @return
        */
        this.fnInitPageSet = function (objDiv, objConfig)
        {
        	objConfig.objSearchButton.status = "init";
        	objConfig.objSearchButton.addEventHandler("onclick",this.btnSearch_onclick, this);

        	objDiv.config = objConfig;

        	//pagging processing variable
        	objDiv.config.nEndPageNo	= objConfig.nPageCount;		//end pagging number
        	objDiv.config.nMaxPageNo	= objConfig.nPageCount;		//max pagging number (not change)
        	objDiv.config.nSelRowCount	= objConfig.nPageRowCount;	//grid row count (not change)
        	objDiv.config.nStartPageNo	= 1;						//start pagging number
        	objDiv.config.nNowPageNo	= 1;						//now pagging number
        	objDiv.config.nPageBlock	= 0;						//block count
        	objDiv.config.nTotalCount	= 0;						//total row count

        	/* component name List
        	-----------------------------------------------------
        	divComm  --> pagging number and move button div
        	.btnFirst	--> first		"<<"
        	.btnPrev	--> previous	"<"
        	.btnNext	--> next		">"
        	.btnLast	--> last		">>"
        	divTotal --> total pagging div
        	.edtNow		--> current page or input number to move
        	.staTotal	--> total page number
        	.btnGo		--> page move button */
        	objDiv.config.arrDivNames  = new Array("divComm","divTotal");						//div names
        	objDiv.config.arrBtnNames  = new Array("btnFirst","btnPrev","btnNext","btnLast");	//move button names
        	objDiv.config.arrCompNames = new Array("edtNow","staTotal","btnGo");				//div total component names

        	//component size in pagging div
        	//objConfig.nMoveBtnTop		= 0;	//button top (common)
        	objDiv.config.nMoveBtnHeight	= 20;	//button height (common)
        	objDiv.config.nMoveBtnWidth		= 35;	//comm move button & edit width
        	objDiv.config.nMoveCountBtnWidth= 20;	//comm number button width
        	objDiv.config.nMoveCountBtnGap	= 3;	//comm button size gap (common)
        	objDiv.config.ntotControlWidth  = 35;	//total button & edit width
        	objDiv.config.ntotStaWidth		= 40;	//total static width

        	//css class id
        	objDiv.config.divCommClass	 = "";
        	objDiv.config.divTotalClass	 = "";
        	objDiv.config.btnMoveClass	 = "";	//first, prev, next, last class (move button) - 각 클래스 별도로 적용 시 text 삭제 필요
        	objDiv.config.btnNumClass	 = "";	//comm.page number class
        	objDiv.config.edtNowClass	 = "";	//total.edtNow class
        	objDiv.config.staTotalClass	 = "";	//total.staTotal class
        	objDiv.config.btnGoClass	 = "";	//total.btnGo class

        	//go button text
        	objDiv.config.btnGoText = "move";

        	this.fnInitDivFormat(objDiv);
        }

        /**
        * @description create div component in pagging Div
        * @param objDiv	: pagging div
        * @return
        */
        this.fnInitDivFormat = function(objDiv)
        {
        	var objConfig = objDiv.config;

        	//add pagging div onsize event
        	objDiv.addEventHandler("onsize",this.divpaggingComm_onsize,this);

        	var sThisWidth 	= objDiv.getOffsetWidth();
        	var sThisHeight	= objDiv.getOffsetHeight();

        	objConfig.nMoveBtnTop = Math.floor((sThisHeight - objConfig.nMoveBtnHeight)/2);

        	objDiv.objDivTotal = null;

        	if(objConfig.bPageViewActive)
        	{
        		objDiv.objDivTotal = this.fnCreateDivTotal(objDiv);
        	}

        	objDiv.objDivComm = this.fnCreateDivComm(objDiv);
        }

        /**
        * @description create divComm component
        * @param objDiv	: pagging div
        * @return objCreateDiv : divComm
        */
        this.fnCreateDivComm = function(objDiv)
        {
        	var objConfig = objDiv.config;
        	var nObjWidth = objDiv.getOffsetWidth();
        	var bCommVisible = objConfig.bPageViewActive;

        	if(bCommVisible)
        	{
        		nObjWidth -= objDiv.objDivTotal.getOffsetWidth();
        	}

        	//create divComm
        	var objCreateDiv = new Div();
        	var objCreateDivId = objConfig.arrDivNames[0];
        	objCreateDiv.init(objCreateDivId,0,0,nObjWidth,null,null,0);
        	objCreateDiv.set_cssclass(objConfig.divCommClass);
        	objDiv.addChild(objCreateDivId,objCreateDiv);
        	objCreateDiv.show();

        	var sDivpaggingWidth = (objConfig.nMoveBtnWidth*4+objConfig.nMoveCountBtnGap*4)+(objConfig.nPageCount*objConfig.nMoveCountBtnWidth)+((objConfig.nPageCount-1)*objConfig.nMoveCountBtnGap);

        	//move to center
        	objCreateDiv.setOffsetWidth(sDivpaggingWidth);
        	objCreateDiv.setOffsetLeft(parseInt((nObjWidth-sDivpaggingWidth)/2));

        	//button size
        	var btnLeft	  = objConfig.nMoveBtnWidth+(objConfig.nMoveCountBtnGap*2)+objConfig.nMoveBtnWidth;
        	var btnTop	  = objConfig.nMoveBtnTop;
        	var btnWidth  = objConfig.nMoveCountBtnWidth;
        	var btnHeight = objConfig.nMoveBtnHeight;

        	var objButton;
        	var objBtnId = "";

        	//create page move button in divComm
        	for(var i=0; i<objConfig.nPageCount; i++)
        	{
        		objButton	= new Button();
        		objBtnId	= "btn"+i;
        		objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,null,null);
        		objButton.set_text(i+1);
        		objButton.set_cssclass(objConfig.btnNumClass);
        		objButton.set_enable(false);
        		objButton.addEventHandler("onclick",this.divPaggingNumber_onclick, this);

        		objCreateDiv.addChild(objBtnId,objButton);
        		objButton.show();

        		btnLeft += (btnWidth + objConfig.nMoveCountBtnGap);
        	}

        	btnLeft = 0;
        	btnWidth = objConfig.nMoveBtnWidth;

        	var btnRight = null;
        	var objBtnText = "";

        	//create page number button in divComm
        	for(var i=0; i<4; i++)
        	{
        		objButton	= new Button();
        		objBtnId	= objConfig.arrBtnNames[i];

        		switch(i)
        		{
        			case 0:
        				btnLeft = 0;
        				btnRight = null;
        				objBtnText = "<<";	//first
        				break;
        			case 1:
        				btnLeft = btnWidth+objConfig.nMoveCountBtnGap;
        				btnRight = null;
        				objBtnText = "<";	//prev
        				break;
        			case 2:
        				btnLeft = null;
        				btnRight = btnWidth+objConfig.nMoveCountBtnGap;
        				objBtnText = ">";	//next
        				break;
        			case 3:
        				btnLeft = null;
        				btnRight = 0;
        				objBtnText = ">>";	//last
        				break;
        			default:
        		}

        		objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,btnRight,null);
        		objButton.set_text(objBtnText);
        		objButton.set_cssclass(objConfig.btnMoveClass);
        		objButton.set_enable(false);
        		objButton.addEventHandler("onclick",this.divpaggingButton_onclick, this);

        		objCreateDiv.addChild(objBtnId,objButton);
        		objButton.show();
        	}

        	return objCreateDiv;
        }

        /**
        * @description create divTotal component
        * @param objDiv	: pagging div
        * @return objCreateDiv : divTotal
        */
        this.fnCreateDivTotal = function(objDiv)
        {
        	var objConfig = objDiv.config;
        	var divWidth = (objConfig.ntotControlWidth*2) + objConfig.ntotStaWidth + objConfig.nMoveCountBtnGap;

        	//create divTotal
        	var objDivCreate = new Div();
        	var objDivCreateId = objConfig.arrDivNames[1];
        	objDivCreate.init(objDivCreateId,null,0,divWidth,null,0,0);
        	objDivCreate.set_cssclass(objConfig.divTotalClass);
        	objDiv.addChild(objDivCreateId,objDivCreate);
        	objDivCreate.show();

        	var nRight = 0;

        	//create go button in divTotal
        	var objBtn = new Button();
        	var objBtnId = objConfig.arrCompNames[2];
        	objBtn.init(objBtnId,null,objConfig.nMoveBtnTop,objConfig.ntotControlWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objBtn.set_cssclass(objConfig.btnGoClass);
        	objBtn.set_text(objConfig.btnGoText);
        	objBtn.addEventHandler("onclick",this.btnGo_onclick,this);
        	objDivCreate.addChild(objBtnId,objBtn);
        	objBtn.show();

        	nRight = nRight + objConfig.ntotControlWidth;

        	//create total static in divTotal
        	var objSta = new Static();
        	var objStaId = objConfig.arrCompNames[1];
        	objSta.init(objStaId,null,objConfig.nMoveBtnTop,objConfig.ntotStaWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objSta.set_cssclass(objConfig.staTotalClass);
        	objSta.set_text("/");
        	objDivCreate.addChild(objStaId,objSta);
        	objSta.show();

        	nRight = nRight + objConfig.ntotStaWidth + objConfig.nMoveCountBtnGap;

        	//create now Number edit in divTotal
        	var objEdt = new Edit();
        	var objEdtId = objConfig.arrCompNames[0];
        	objEdt.init(objEdtId,null,objConfig.nMoveBtnTop,objConfig.ntotControlWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objEdt.set_cssclass(objConfig.edtNowClass);
        	objDivCreate.addChild(objEdtId,objEdt);
        	objEdt.show();

        	return objDivCreate;
        }

        /**
        * @description pagging total div
        * @param objDiv	: pagging div
        * @return
        */
        this.fnCallAfter = function (objDiv)
        {
        	var objConfig = objDiv.config;

        	//pagging block & totalCount
        	objConfig.nPageBlock	= Math.ceil(objDiv.nTotalRowCount/objConfig.nSelRowCount);	//ceil : last blobk + 1
        	objConfig.nTotalCount	= objDiv.nTotalRowCount;

        	if(objConfig.bPageViewActive)
        	{
        		var objTemp = objDiv.objDivTotal.form.components[objConfig.arrCompNames[0]];
        		objTemp.set_value(objConfig.nNowPageNo);

        		var objTemp = objDiv.objDivTotal.form.components[objConfig.arrCompNames[1]];
        		objTemp.set_text("/ " + objConfig.nPageBlock);
        	}

        	this.fnSetPageNo(objDiv);
        };

        /**
        * @description set start & end pagging number
        * @param objDiv	: pagging div
        * @return
        */
        this.fnSetPageIndex = function (objDiv)
        {
        	var objConfig = objDiv.config;
        	var btnText = objConfig.nCurBtnName;
        	var objNum = objConfig.nNowPageNo;
        	if(btnText==objConfig.arrBtnNames[0])
        	{	// btnFirst "<<"
        		objConfig.nStartPageNo = 1;
        		objConfig.nEndPageNo   = 1 + (objConfig.nMaxPageNo-1);

        		objNum = objConfig.nStartPageNo;
        	}
        	else if(btnText==objConfig.arrBtnNames[1])
        	{	// btnPrev "<"
        		objConfig.nStartPageNo = objConfig.nStartPageNo - objConfig.nMaxPageNo;
        		objConfig.nEndPageNo   = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);

        		objNum = objConfig.nStartPageNo;
        	}else if(btnText==objConfig.arrBtnNames[3]){
        		// btnLast ">>"
        		objConfig.nEndPageNo   = objConfig.nPageBlock;
        		objConfig.nStartPageNo = parseInt(objConfig.nPageBlock/objConfig.nMaxPageNo)*objConfig.nMaxPageNo+ 1;
        		objNum = objConfig.nEndPageNo;
        	}
        	else if(btnText==objConfig.arrBtnNames[2])
        	{	// btnNext ">"
        		objConfig.nStartPageNo = objConfig.nStartPageNo + objConfig.nMaxPageNo;
        		objConfig.nEndPageNo   = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);

        		if(objConfig.nEndPageNo > objConfig.nPageBlock)
        		{
        			objConfig.nEndPageNo = objConfig.nPageBlock;
        		}

        		objNum = objConfig.nStartPageNo;
        	}
        	else
        	{	//pagging number button
        		objNum = Number(btnText);

        		if(objNum > objConfig.nPageBlock)
        		{
        			objNum = objConfig.nPageBlock;
        		}

        		if (objNum%objConfig.nMaxPageNo == 0)
        		{
        			objConfig.nEndPageNo   = objNum;
        			objConfig.nStartPageNo = objConfig.nEndPageNo - (objConfig.nMaxPageNo-1);
        		}
        		else
        		{
        			objConfig.nStartPageNo = Math.floor(objNum/objConfig.nMaxPageNo)*objConfig.nMaxPageNo+1;
        			objConfig.nEndPageNo  = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);
        		}

        		if (objConfig.nEndPageNo > objConfig.nPageBlock)
        		{
        			objConfig.nEndPageNo = objConfig.nPageBlock;
        		}
        	}

        	objConfig.nNowPageNo = objNum;

        	//transaction call
         	objConfig.objPageSearchFunction.call(this, objNum);
        };

        /**
        * @description set pagging number
        * @param objDiv	: pagging div
        * @return
        */
        this.fnSetPageNo = function(objDiv)
        {
        	var objConfig = objDiv.config;

        	var nVStartPageNo = objConfig.nStartPageNo;
        	var sPage   = nVStartPageNo;
        	nVStartPageNo--;

        	// first & previous button enable
        	if (nVStartPageNo < 1)
        	{
        		objDiv.objDivComm.form.btnPrev.set_enable(false);
        		objDiv.objDivComm.form.btnFirst.set_enable(false);
        	} else {
        		objDiv.objDivComm.form.btnPrev.set_enable(true);
        		objDiv.objDivComm.form.btnFirst.set_enable(true);
        	}

        	// last & next button enable
        	if (objConfig.nTotalCount <= ((sPage + objConfig.nMaxPageNo) * objConfig.nSelRowCount))
        	{
        		objDiv.objDivComm.form.btnNext.set_enable(false);
        		objDiv.objDivComm.form.btnLast.set_enable(false);
        	}
        	else
        	{
        		objDiv.objDivComm.form.btnNext.set_enable(true);
        		objDiv.objDivComm.form.btnLast.set_enable(true);
        	}

        	var nPageNo = objConfig.nStartPageNo;
        	var nPageCurNo = objConfig.nNowPageNo;

        	// pagging number button index enable & visible
        	for (var i = 0; i < objConfig.nMaxPageNo; i++)
        	{
        		if(nPageCurNo==nPageNo)
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_enable(false);
        		}else
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_enable(true);
        		}

        		objDiv.objDivComm.form.components["btn" + i].set_text(nPageNo);

        		if (objConfig.nTotalCount > ((nPageNo - 1) * objConfig.nSelRowCount))
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_visible(true);
        			nCnt = i;
        		}
        		else
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_visible(false);
        		}

        		nPageNo++;
        	}
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
         /**
         * @description pagging select
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	if(obj.status == "init")
        	{
        		obj.status = "list"
        		this.fnSearchPagging(1);
        	}
        	else
        	{
        		var objParent = obj.parent;
        		objParent.divPagging.config.nCurBtnName = 1;
        		objParent.fnSetPageIndex(objParent.divPagging);
        	}
        };

        /**
         * @description pagging Div onsize event --> pagging control size change (pagging control = divComm + divTotal)
        */
        this.divpaggingComm_onsize = function(obj,e)
        {
        	var nWidth  = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var nDivControlWidth = obj.objDivComm.getOffsetWidth();
        	var nDivControlLeft  = obj.objDivComm.getOffsetLeft();

        	var bCommVisible = obj.config.bPageViewActive;

        	if(bCommVisible)
        	{
        		nDivControlWidth = obj.objDivComm.getOffsetWidth() + obj.objDivTotal.getOffsetWidth();

        		if(nWidth < nDivControlWidth)
        		{
        			obj.objDivTotal.set_visible(false);
        			nDivControlWidth = obj.objDivComm.getOffsetWidth();
        		}
        		else
        		{
        			obj.objDivTotal.set_visible(true);
        		}
        	}

        	nDivControlLeft  = Math.ceil((nWidth - nDivControlWidth)/2);
        	obj.objDivComm.setOffsetLeft(nDivControlLeft);
        };

        /**
         * @description pagging move button click event
        */
        this.divpaggingButton_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;

        	objDiv.config.nCurBtnName = obj.name;
        	this.fnSetPageIndex(objDiv);
        };

        /**
         * @description pagging number button click event
        */
        this.divPaggingNumber_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;
        	objDiv.config.nCurBtnName = obj.text;
        	this.fnSetPageIndex(objDiv);
        };

        /**
         * @description move button click event --> move to inputted edit number
        */
        this.btnGo_onclick = function(obj,e)
        {
        	var objDiv  = obj.parent.parent.parent.parent;
        	var objTemp = objDiv.objDivTotal.form.components[objDiv.config.arrCompNames[0]];
        	objDiv.config.nCurBtnName = objTemp.value;
        	this.fnSetPageIndex(objDiv);
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
