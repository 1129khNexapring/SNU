(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lecture");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_field", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dCode\">D0</Col><Col id=\"dField\">문과대학</Col></Row><Row><Col id=\"dCode\">D1</Col><Col id=\"dField\">경영대학</Col></Row><Row><Col id=\"dCode\">D2</Col><Col id=\"dField\">이과대학</Col></Row><Row><Col id=\"dCode\">D3</Col><Col id=\"dField\">공과대학</Col></Row><Row><Col id=\"dCode\">D9</Col><Col id=\"dField\">예술대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lType", this);
            obj._setContents("<ColumnInfo><Column id=\"lType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lType\">전공선택</Col></Row><Row><Col id=\"lType\">전공필수</Col></Row><Row><Col id=\"lType\">교양선택</Col></Row><Row><Col id=\"lType\">교양필수</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","38","85","801","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"227\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"정원\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:lCapacity\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lList","287","41","63","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Field","39","44","114","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_field");
            obj.set_codecolumn("dCode");
            obj.set_datacolumn("dField");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Type","165","44","114","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_lType");
            obj.set_datacolumn("lType");
            obj.set_codecolumn("lType");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);
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
        this.registerScript("frm_lecture.xfdl", function() {

        this.btn_lList_onclick = function(obj,e)
        {
        	//this.alert(this.com_Field.value);
        	//this.alert(this.com_Type.value);
        	var in_Field = this.com_Field.value;
        	var in_Type = this.com_Type.value;
        	this.transaction(
         	"tr_lList"
         	,"SnuURL::Ylecture/list.snu"
        	,""
         	,"ds_lecture=out_lecture"
         	,"in_Var1="+in_Field+" in_Var2="+in_Type+""
        	,"fn_callback_le"
        	)
        };

        this.fn_callback_le = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_lList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패");
        			return;
        		}
        		this.alert("조회 결과"+this.ds_lecture.getRowCount()+"건");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_lList.addEventHandler("onclick",this.btn_lList_onclick,this);
        };
        this.loadIncludeScript("frm_lecture.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
