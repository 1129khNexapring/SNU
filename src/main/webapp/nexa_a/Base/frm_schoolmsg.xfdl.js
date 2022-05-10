(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_schoolmsg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_info", this);
            obj._setContents("<ColumnInfo><Column id=\"infoNo\" type=\"INT\" size=\"256\"/><Column id=\"infoContent\" type=\"STRING\" size=\"256\"/><Column id=\"infoStatus\" type=\"STRING\" size=\"256\"/><Column id=\"infoEnrollDate\" type=\"STRING\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","169","60","541","209",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_info");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"80\"/><Column size=\"127\"/><Column size=\"138\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"infoNo\"/><Cell col=\"1\" text=\"infoContent\"/><Cell col=\"2\" text=\"infoEnrollDate\"/><Cell col=\"3\" text=\"infoStatus\"/></Band><Band id=\"body\"><Cell text=\"bind:infoNo\"/><Cell col=\"1\" text=\"bind:infoContent\"/><Cell col=\"2\" text=\"bind:infoEnrollDate\"/><Cell col=\"3\" text=\"bind:infoStatus\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","135","293","600","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stt_prev","119","7","40","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("Prev");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_0","175","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_1","199","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("2");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_2","223","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("3");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_3","247","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("4");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_4","271","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("5");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_5","295","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("6");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_6","319","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("7");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_7","343","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("8");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_8","367","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_9","391","7","20","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("stt_next","427","7","40","32",null,null,null,null,null,null,this.div_page.form);
            obj.set_taborder("0");
            obj.set_text("Next");
            obj.set_visible("true");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("btn_writeInfo","652","268","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("글쓰기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_openInfo","594","268","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("게시");
            this.addChild(obj.name, obj);

            obj = new Button("btn_removeInfo","536","268","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_schoolmsg.xfdl", function() {
        this.gv_iStartPageNo = 0; // 현재페이지 숫자
        this.gv_iUnitSelRowNo = 100; // 서버에서 호출할 때 까져올 로우의 수
        this.gv_iStartSelRowNo = 1; // 서버를 호출 할 때 시작할 로우 번호
        this.gv_iMaxPageNum = 10; // 화면에 최대 페이지 갯수
        this.gv_iServerRowCount = 0; // 서버로부터 조회된 로우의 갯수

        //화면이 로드되면 조회할 수 있도록
        this.frm_schoolmsg_onload = function(obj,e)
        {
        	this.div_page.set_visible(true);
        	this.transaction(
        	"tr_infoList"
        	,"SnuURL::info/list.snu"
        	,""
        	,"ds_info=out_info"
        	,"fn_callback_info"
        	)
        };

        this.fn_callback_info = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_infoList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		else
        		{
        			var iLastRow = this.gv_iStartPageNo * this.gv_iUnitSelRowNo;
        			this.ds_info.filter("infoNo >="+(iLastRow + this.gv_iStartSelRowNo)+" && infoNo <="+(iLastRow + this.gv_iUnitSelRowNo));
        				if(this.ds_info.getRowCount() == 0)
        				{
        					alert("No more data");
        					this.ds_info.filter("");
        					return;
        				}
        				else
        				{
        					this.gv_iServerRowCount = this.ds_info.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.form.stt_0.set_color("red");
        				}
        		}
        	}
        	if(sId == "tr_closeInfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        	if(sId == "tr_openInfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        	if(sId == "tr_removeInfo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        }

        //click event function for page number

        this.div_page_stt_onclick = function(obj, e)
        {
        	var iNo = new Number(obj.text);	//iNo는 그 눌린 스태틱의 텍스트값 1-> iNo =1, 2-> iNo =2
        	var iFirstNum = (iNo-1)*this.gv_iMaxPageNum+1;	//iFirstNum = 1->0 2->10 3-> 20
        	var iLastNum = iFirstNum + this.gv_iMaxPageNum;	// iLastNum = 1->10 2->20 3-> 30

        	this.fn_SetStyle();					//스타일주고
        	obj.set_color("red");				// 빨간색 주고

        	this.ds_info.filter("");
        	this.ds_info.filter("infoNo >= " + iFirstNum+" && infoNo < " + iLastNum);
        }

        /*
        click event function for prev
        */
        this.div_page_stt_prev_onclick = function(obj,  e)
        {

        	this.gv_iStartPageNo = this.gv_iStartPageNo - 1;

        	/* transaction function call */

        	this.fn_callback_info("tr_infoList", 0, "success");
        }

        /*
        click event function for next
        */
        this.div_page_stt_next_onclick = function(obj,  e)
        {

        	this.gv_iStartPageNo = this.gv_iStartPageNo + 1;

        	/* transaction function call */

        	this.fn_callback_info("tr_infoList", 0, "success");
        }

        /*
        page number setting
        */
        this.fn_SetPageNo = function()
        {
        	var sPage = this.gv_iStartPageNo * this.gv_iMaxPageNum;	//istartPageNo = 0 gv_iMaxPageNum 10;

        	/* prev button setting */
        	if (this.gv_iStartPageNo < 1)
        	{
        		this.div_page.form.stt_prev.set_visible(false);
        	}
        	else
        	{
        		this.div_page.form.stt_prev.set_visible(true);
        	}

        	/* next button setting */
        	if (this.gv_iServerRowCount < this.gv_iUnitSelRowNo)
        	{
        		this.div_page.form.stt_next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.form.stt_next.set_visible(true);
        	}

        	/* page button setting */
        	for (var i = 0; i < this.gv_iMaxPageNum; i++)
        	{
        		this.div_page.form.components["stt_"+i].set_visible(true);

        		this.div_page.form.components["stt_"+i].set_text(sPage+i+1);

        		if (this.gv_iServerRowCount < (i * this.gv_iMaxPageNum))
        		{
        			this.div_page.form.components["stt_"+i].set_visible(false);
        		}
        		else
        		{
        			this.div_page.form.components["stt_"+i].set_visible(true);
        		}
        	}
        }

        /*
        style settings
        */
        this.fn_SetStyle = function()
        {
        	for (var i = 0; i < this.gv_iMaxPageNum; i++)
        	{
        		this.div_page.form.components["stt_"+i].set_color("blue");
        	}
        }

        // 학교알림이 등록페이지
        this.btn_writeInfo_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop  = system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("popWriteInfo", nLeft, nTop, 600, 500);
        	objChild.set_formurl("Popup::writeInfo.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_popwriteInfoCallback");
        };

        this.fn_popwriteInfoCallback = function(sPopId, sReturn)
        {
        	if(sPopId == "popWriteInfo")
        	{

        	}
        	if(sPopId == "popModifyInfo")
        	{

        	}
        }
        // 학교알림이 수정페이지
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_info.rowposition;
        	var objParam = {infoNo : this.ds_info.getColumn(nRow, "infoNo"), infoContent : this.ds_info.getColumn(nRow, "infoContent")};
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop  = system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("popModifyInfo", nLeft, nTop, 600, 500);
        	objChild.set_formurl("Popup::modifyInfo.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popwriteInfoCallback");
        };
        // 게시글 상태가 Y이면 N으로 N이면 Y로 변경하는 이벤트
        this.btn_openInfo_onclick = function(obj,e)
        {
        	var nRow = this.ds_info.rowposition;
        	var status = this.ds_info.getColumn(nRow, "infoStatus");
        	var infoNo = this.ds_info.getColumn(nRow, "infoNo");
        	if(status == "Y")
        	{
        		var rtn1 = this.confirm("게시글을 내리시겠습니까?", "게시 창");
        		if(rtn1 == true)
        		{
        			this.transaction(
        			"tr_closeInfo"
        			,"SnuURL::info/close.snu"
        			,""
        			,""
        			,"in_Var1="+infoNo+""
        			,"fn_callback_info"
        			)
        		}
        	}
        	if(status == "N")
        	{
        		var rtn2 = this.confirm("게시글을 게시하겠습니까?", "게시 창");
        		if(rtn2 == true)
        		{
        			this.transaction(
        			"tr_openInfo"
        			,"SnuURL::info/open.snu"
        			,""
        			,""
        			,"in_Var1="+infoNo+""
        			,"fn_callback_info"
        			)
        		}
        	}
        };
        //학교알림이 삭제
        this.btn_removeInfo_onclick = function(obj,e)
        {
        	var dRow = this.ds_info.rowposition;
        	var infoNo = this.ds_info.getColumn(dRow, "infoNo");
        	var rtn = this.confirm("게시글을 삭제하시겠습니까?", "삭제 창");
        	if(rtn == true)
        	{
        		this.transaction(
        		"tr_removeInfo"
        		,"SnuURL::info/delete.snu"
        		,""
        		,""
        		,"in_Var1="+infoNo+""
        		,"fn_callback_info"
        		)
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_schoolmsg_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.div_page.form.stt_prev.addEventHandler("onclick",this.div_page_stt_prev_onclick,this);
            this.div_page.form.stt_0.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_1.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_2.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_3.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_4.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_5.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_6.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_7.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_8.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_9.addEventHandler("onclick",this.div_page_stt_onclick,this);
            this.div_page.form.stt_next.addEventHandler("onclick",this.div_page_stt_next_onclick,this);
            this.btn_writeInfo.addEventHandler("onclick",this.btn_writeInfo_onclick,this);
            this.btn_openInfo.addEventHandler("onclick",this.btn_openInfo_onclick,this);
            this.btn_removeInfo.addEventHandler("onclick",this.btn_removeInfo_onclick,this);
        };
        this.loadIncludeScript("frm_schoolmsg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
