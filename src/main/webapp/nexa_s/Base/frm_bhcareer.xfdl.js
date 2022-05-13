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
            obj._setContents("<ColumnInfo><Column id=\"origin\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"origin\">20221</Col><Col id=\"text\">2022년 1학기</Col></Row><Row><Col id=\"origin\">20222</Col><Col id=\"text\">2022년 2학기</Col></Row><Row><Col id=\"origin\">20231</Col><Col id=\"text\">2023년 1학기</Col></Row><Row><Col id=\"origin\">20232</Col><Col id=\"text\">2023년 2학기</Col></Row><Row><Col id=\"origin\">20241</Col><Col id=\"text\">2024년 1학기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","16","11","1045","526",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rehab");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"131\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"복학학기\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"취소\"/></Band><Band id=\"body\"><Cell text=\"bind:rRequestDate\" textAlign=\"center\"/><Cell col=\"1\" suppressalign=\"middle\" text=\"expr:rYear.toString()+rSemester.toString()\" textAlign=\"center\" combodataset=\"ds_rPeriod\" combocodecol=\"origin\" combodatacol=\"text\" displaytype=\"combotext\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"ds_rstatus\" combocodecol=\"rStatus\" combodatacol=\"rText\" text=\"bind:rStatus\" textAlign=\"center\"/><Cell col=\"3\" font=\"bold 14px/normal &quot;Gulim&quot;\" text=\"취소\" textAlign=\"center\" color=\"#f10b03\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
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
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        		var row =  this.ds_rehab.rowposition;
        		if(e.cell==2){
        		var msg = this.ds_rehab.getColumn(row, "rMsg");
        		if (this.ds_rehab.getColumn(row, "rStatus") == 'N')
        		{
        			var x=400;
        			var y=150;
        			this.PopupDiv00.trackPopupByComponent(obj, x, y);
        			this.PopupDiv00.form.Static01.set_text(msg);
        		}
        	}
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var row =  this.ds_rehab.rowposition;
        	if(e.cell==3){
        			if (this.ds_rehab.getColumn(row, "rStatus") == 'Y')
        				{
        					var cancelRehab = this.confirm("복학 취소하시겠습니까?", "복학 취소");
        					if(cancelRehab == true){
        						this.ds_rehab.deleteRow(row);
        						this.transaction(
        							"tr_delete"// 1.ID
        							,"tttUrl::rehab/request.snu"// 2.URL
        							,"in_rehab=ds_rehab:U" // 3.InDs : F->S jsp(I,U,D)
        							,"" // 4.OutDs : S->F jsp(SELECT)
        							,"inVar1="+sCode // 5.InVar : F->S(var)
        							,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        							)
        						}
        					}
        				}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_bhcareer_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("frm_bhcareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
