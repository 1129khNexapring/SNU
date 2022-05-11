(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_bhcareer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rehab", this);
            obj._setContents("<ColumnInfo><Column id=\"rNum\" type=\"INT\" size=\"256\"/><Column id=\"rReason\" type=\"STRING\" size=\"256\"/><Column id=\"rSemester\" type=\"INT\" size=\"256\"/><Column id=\"rYear\" type=\"INT\" size=\"256\"/><Column id=\"rStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"rMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rstatus", this);
            obj._setContents("<ColumnInfo><Column id=\"rStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rStatus\">Y</Col><Col id=\"rText\">승인</Col></Row><Row><Col id=\"rStatus\">N</Col><Col id=\"rText\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"rYear\" type=\"STRING\" size=\"256\"/><Column id=\"rSemester\" type=\"STRING\" size=\"256\"/><Column id=\"rYearText\" type=\"STRING\" size=\"256\"/><Column id=\"rSemesterText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rYear\">2022</Col><Col id=\"rSemester\">1</Col><Col id=\"rSemesterText\">1학기</Col><Col id=\"rYearText\">2022년</Col></Row><Row><Col id=\"rYear\">2023</Col><Col id=\"rSemester\">2</Col><Col id=\"rSemesterText\">2학기</Col><Col id=\"rYearText\">2023년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","16","11","1045","526",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rehab");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"131\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"복학학기\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"취소\"/></Band><Band id=\"body\"><Cell text=\"bind:rRequestDate\" textAlign=\"center\"/><Cell col=\"1\" suppressalign=\"middle\" text=\"bind:rYear\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"ds_rstatus\" combocodecol=\"rStatus\" combodatacol=\"rText\" text=\"bind:rStatus\" textAlign=\"center\"/><Cell col=\"3\" font=\"bold 14px/normal &quot;Gulim&quot;\" text=\"취소\" textAlign=\"center\" color=\"#f10b03\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","375","137","360","319",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#fcfef0");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","9","149","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("반려사유");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01","26","79","293","209",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("Static01");
            obj.set_border("1px solid");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","464","158","312","146",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv01");
            obj.set_visible("false");
            obj.set_background("#aebff3");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","10","260","58",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("<복학신청> 취소하시겠습니까?");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("Button00","18","83","133","52",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("Button00_00","157","83","133","52",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.PopupDiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_bhcareer.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_bhcareer_onload = function(obj,e)
        {
        	this.transaction(
                		"tr_select"// 1.ID
                		,"tttUrl::bb/list.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_rehab=out_rehab" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)

        	if(this.ds_rehab.getColumn(0, "rStatus") == 'Y')
        		{
        			this.ds_rehab.setColumn(0, "rMsg", "취소");
        		}
        };


        this.Grid00_oncelldblclick = function(obj,e)
        {
        		if (this.ds_rehab.getColumn(0, "rStatus") == 'Y')
        		{
        			var x= 400;
        			var y= 150;
        			this.PopupDiv01.trackPopupByComponent(obj, x, y);
        		}

        	var msg = this.ds_rehab.getColumn(0, "rMsg");
        		if (this.ds_rehab.getColumn(0, "rStatus") == 'N')
        		{
        			var x=400;
        			var y=150;
        			this.PopupDiv00.trackPopupByComponent(obj, x, y);
        			this.PopupDiv00.form.Static01.set_text(msg);
        		}
        };

        this.PopupDiv01_Button00_onclick = function(obj,e)
        {
        	this.ds_rehab.deleteRow(0);
        	this.transaction(
                		"tr_delete"// 1.ID
                		,"tttUrl::rehab/request.snu"// 2.URL
                		,"in_rehab=ds_rehab:U" // 3.InDs : F->S jsp(I,U,D)
                		,"" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        	this.PopupDiv01.closePopup();
        };

        this.PopupDiv01_Button00_00_onclick = function(obj,e)
        {
        	this.PopupDiv01.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_bhcareer_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.PopupDiv01.form.Static00.addEventHandler("onclick",this.PopupDiv01_Static00_onclick,this);
            this.PopupDiv01.form.Button00.addEventHandler("onclick",this.PopupDiv01_Button00_onclick,this);
            this.PopupDiv01.form.Button00_00.addEventHandler("onclick",this.PopupDiv01_Button00_00_onclick,this);
        };
        this.loadIncludeScript("frm_bhcareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
