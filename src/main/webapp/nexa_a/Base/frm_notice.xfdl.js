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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"noticeNo\" type=\"INT\" size=\"256\"/><Column id=\"noticeTitle\" type=\"STRING\" size=\"256\"/><Column id=\"noticeContent\" type=\"STRING\" size=\"256\"/><Column id=\"noticeDate\" type=\"STRING\" size=\"256\"/><Column id=\"noticeCount\" type=\"INT\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"noticeWriter\" type=\"STRING\" size=\"256\"/><Column id=\"nFileName\" type=\"STRING\" size=\"256\"/><Column id=\"nFileReName\" type=\"STRING\" size=\"256\"/><Column id=\"nFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"nExtension\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","193","105","795","310",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_notice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"noticeNo\"/><Cell col=\"1\" text=\"noticeTitle\"/><Cell col=\"2\" text=\"noticeWriter\"/><Cell col=\"3\" text=\"noticeDate\"/></Band><Band id=\"body\"><Cell text=\"bind:noticeNo\"/><Cell col=\"1\" text=\"bind:noticeTitle\"/><Cell col=\"2\" text=\"bind:noticeWriter\"/><Cell col=\"3\" text=\"bind:noticeDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","180","501","150","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_notice.xfdl", function() {
        //폼이 로드될 떄 게시글 리스트 불러옴
        this.frm_notice_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_noticeList"
        	,"SnuURL::notice/nList.snu"
        	,""
        	,"ds_notice=out_notice"
        	,""
        	,"fn_callback_notice"
        	)


        };
        this.rCount =""; // 총 게시글 갯수
        this.pageCount = 10; // 보여줄 페이지 갯수
        this.btnCount = 0;
        this.ButtonPrev_onclick = function(obj, e)
        {
        	this.alert("prev");
        }
        this.ButtonNext_onclick = function(obj, e)
        {
        	this.alert("Next");
        }
        this.Button0_onclick = function(obj, e)
        {
        	this.alert("첫번째");
        }

        this.fn_callback_notice = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_noticeList")
        	{
        		if(nErrorCode<0)
        		{

        		}
          		 rCount = this.ds_notice.getRowCount(); //36개
         		 btnCount = parseInt(rCount/10+1); // 필요 버튼 갯수
         		 var objButton1 = new Button("ButtonPrev", 550, 415, 30, 20);
         		 objButton1.set_text("<");
         		 this.addChild("ButtonPrev", objButton1);
         		 objButton1.show();
        		 this.ButtonPrev.addEventHandler("onclick", this.ButtonPrev_onclick, this);

         		 for(var i = 0; i< btnCount; i++)
          		 {
         			var objButton = new Button("Button"+i+"", 550+20*(i+1), 415, 30, 20);
          			objButton.set_text(""+(i+1)+"");
          			this.addChild("Button"+i+"", objButton);
          			objButton.show();
        			var btn = objButton.id;
        			this.btn.addEventHandler("onclick", this.btn_onclick, this);


          		 }

          		var objButton2 = new Button("ButtonNext", 650, 415, 30, 20);
          		 objButton2.set_text(">");
         		 this.addChild("ButtonNext", objButton2);
          		 objButton2.show();
        		 this.ButtonNext.addEventHandler("onclick", this.ButtonNext_onclick, this);




        	}
        }



        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_notice_onload,this);
        };
        this.loadIncludeScript("frm_notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
