(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_notice");
            this.set_titletext("New Form");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_client", this);
            obj._setContents("<ColumnInfo><Column id=\"noticeNo\" type=\"INT\" size=\"256\"/><Column id=\"noticeTitle\" type=\"STRING\" size=\"256\"/><Column id=\"noticeContent\" type=\"STRING\" size=\"256\"/><Column id=\"noticeDate\" type=\"STRING\" size=\"256\"/><Column id=\"noticeCount\" type=\"INT\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"noticeWriter\" type=\"STRING\" size=\"256\"/><Column id=\"nFileName\" type=\"STRING\" size=\"256\"/><Column id=\"nFileReName\" type=\"STRING\" size=\"256\"/><Column id=\"nFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"nExtension\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"noticeNo\" type=\"INT\" size=\"256\"/><Column id=\"noticeTitle\" type=\"STRING\" size=\"256\"/><Column id=\"noticeContent\" type=\"STRING\" size=\"256\"/><Column id=\"noticeDate\" type=\"STRING\" size=\"256\"/><Column id=\"noticeCount\" type=\"INT\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"noticeWriter\" type=\"STRING\" size=\"256\"/><Column id=\"nFileName\" type=\"STRING\" size=\"256\"/><Column id=\"nFileReName\" type=\"STRING\" size=\"256\"/><Column id=\"nFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"nExtension\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_page","262","344","600","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Grid("Grid00","301","47","550","267",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_notice");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"noticeNo\"/><Cell col=\"1\" text=\"noticeTitle\"/><Cell col=\"2\" text=\"noticeDate\"/><Cell col=\"3\" text=\"noticeWriter\"/></Band><Band id=\"body\"><Cell text=\"bind:noticeNo\"/><Cell col=\"1\" text=\"bind:noticeTitle\"/><Cell col=\"2\" text=\"bind:noticeDate\"/><Cell col=\"3\" text=\"bind:noticeWriter\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","777","314","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("글쓰기");
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
        this.registerScript("frm_notice.xfdl", function() {
        this.gv_iStartPageNo = 0; // 현재페이지 숫자
        this.gv_iUnitSelRowNo = 100; // 서버에서 호출할 때 까져올 로우의 수
        this.gv_iStartSelRowNo = 1; // 서버를 호출 할 때 시작할 로우 번호
        this.gv_iMaxPageNum = 10; // 화면에 최대 페이지 갯수
        this.gv_iServerRowCount = 0; // 서버로부터 조회된 로우의 갯수

        //callback function
        this.fn_callback_notice = function(Id, nErrorCode, sErrorMsg)
        {
        	if(Id == "tr_noticeList")
        	{
        		if(nErrorCode  < 0)
        		{
        			this.alert("Fail");
        		}
        		else
        		{// 조회 성공시

        		var iLastRow = this.gv_iStartPageNo * this.gv_iUnitSelRowNo; // 0*40 = 0 iLastRow = 0이다?
        		this.ds_notice.filter("noticeNo >="+(iLastRow + this.gv_iStartSelRowNo)+" && noticeNo <="+(iLastRow + this.gv_iUnitSelRowNo)); //noticeNo >= 0 && noticeNo <= 100

        		if(this.ds_notice.getRowCount() == 0) // 서버에서 가져온 로우 갯수가 0개이면?
        		{
        			alert("No more Data");			// 띄워주고
        			this.ds_notice.filter("");			// 필터링한다?
        			return;
        		}
        		else
        		{
        			// 로우 갯수가 0개아니면
        			this.gv_iServerRowCount = this.ds_notice.getRowCount();	// 로드된 36개가 서버에서 조회된 갯수가 된다.
        			this.fn_SetStyle();	//스타일 주고
        			this.fn_SetPageNo();	//페이지 번호 주고

        			this.div_page.form.stt_0.set_color("red");	//1번에 빨간색 css준다
        		}
        	  }



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

        	this.ds_notice.filter("");
        	this.ds_notice.filter("noticeNo >= " + iFirstNum+" && noticeNo < " + iLastNum);
        }

        /*
        click event function for prev
        */
        this.div_page_stt_prev_onclick = function(obj,  e)
        {

        	this.gv_iStartPageNo = this.gv_iStartPageNo - 1;

        	/* transaction function call */

        	this.fn_callback("tr_noticeList", 0, "success");
        }

        /*
        click event function for next
        */
        this.div_page_stt_next_onclick = function(obj,  e)
        {

        	this.gv_iStartPageNo = this.gv_iStartPageNo + 1;

        	/* transaction function call */

        	this.fn_callback("tr_noticeList", 0, "success");
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
        this.frm_notice_onload = function(obj,e)
        {
        	this.div_page.set_visible(true);

        	this.transaction(
        	"tr_noticeList"
        	,"SnuURL::notice/nList.snu"
        	,""
        	,"ds_notice=out_notice"
        	,""
        	,"fn_callback_notice"
        	)
        };
        //버튼 클릭시 글을 입력할 팝업 페이지 로드
        this.Button00_onclick = function(obj,e)
        {
        	//clientToScreenX: 컴포넌트의 클라이언트 기준의 x좌표값을 스크린 기준의 X좌표값으로 변환하는 메소드
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop  = system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("popWriteNotice", nLeft, nTop, 600, 500);
        	objChild.set_formurl("Popup::writeNotice.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_popwriteCallback");
        };

        this.fn_popwriteCallback = function(sId, strReturn)
        {
        	if(sId == "popWriteNotice")
        	{

        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_notice_onload,this);
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
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
