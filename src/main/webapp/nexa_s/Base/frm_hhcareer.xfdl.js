(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_hhcareer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loa", this);
            obj._setContents("<ColumnInfo><Column id=\"lNum\" type=\"INT\" size=\"256\"/><Column id=\"lReason\" type=\"STRING\" size=\"256\"/><Column id=\"lRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lMsg\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lReturnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lstatus", this);
            obj._setContents("<ColumnInfo><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lStatus\">Y</Col><Col id=\"lText\">승인</Col></Row><Row><Col id=\"lStatus\">N</Col><Col id=\"lText\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","85","1035","390",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_loa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"124\"/><Column size=\"150\"/><Column size=\"128\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"휴학학기\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"취소\"/></Band><Band id=\"body\"><Cell text=\"bind:lRequestDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:lSemester\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:lStatus\" displaytype=\"combotext\" combodataset=\"ds_lstatus\" combocodecol=\"lStatus\" combodatacol=\"lText\"/><Cell col=\"3\" textAlign=\"center\" font=\"bold 14px/normal &quot;Gulim&quot;\" text=\"취소\" color=\"#fd221a\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","327","120","347","354",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#f8fde6");
            obj.set_border("2px solid");
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
            obj.set_text("<휴학신청> 취소하시겠습니까?");
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
        this.registerScript("frm_hhcareer.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("휴학신청내역 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("휴학 신청내역 조회 : " + this.ds_loa.getRowCount() + "건");
        	}
        	if(id=="tr_delete")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("휴학신청내역 삭제 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("휴학신청 취소되었습니다 : " + this.ds_loa.getRowCount() + "건");
        	}
        }


        this.frm_hhcareer_onload = function(obj,e)
        {
        		this.transaction(
                		"tr_select"// 1.ID
                		,"tttUrl::hh/list.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_loa=out_loa" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)

        		if(this.ds_loa.getColumn(0, "lStatus") == 'Y')
        		{
        			this.ds_loa.setColumn(0, "lMsg", "취소");
        		}
        };


        this.Grid00_oncelldblclick = function(obj,e)
        {
        	if (this.ds_loa.getColumn(0, "lStatus") == 'Y')
        		{
        			var x= 400;
        			var y= 150;
        			this.PopupDiv01.trackPopupByComponent(obj, x, y);
        		}

        	var msg = this.ds_loa.getColumn(0, "lReturnMsg");
        		if (this.ds_loa.getColumn(0, "lStatus") == 'N')
        		{
        			var x=400;
        			var y=150;
        			this.PopupDiv00.trackPopupByComponent(obj, x, y);
        			this.PopupDiv00.form.Static01.set_text(msg);
        		}
        };

        this.PopupDiv01_Button00_onclick = function(obj,e)
        {
        	this.ds_loa.deleteRow(0);
        	this.transaction(
                		"tr_delete"// 1.ID
                		,"tttUrl::loa/request.snu"// 2.URL
                		,"in_loa=ds_loa:U" // 3.InDs : F->S jsp(I,U,D)
                		,"" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_hhcareer_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.PopupDiv01.form.Button00.addEventHandler("onclick",this.PopupDiv01_Button00_onclick,this);
        };
        this.loadIncludeScript("frm_hhcareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
