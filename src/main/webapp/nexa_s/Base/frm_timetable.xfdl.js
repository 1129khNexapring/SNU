(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_timetable");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimetable", this);
            obj._setContents("<ColumnInfo><Column id=\"semester\" type=\"INT\" size=\"256\"/><Column id=\"year\" type=\"INT\" size=\"256\"/><Column id=\"lsDay\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay1\" type=\"STRING\" size=\"256\"/><Column id=\"lsRoom\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("timetable", this);
            obj._setContents("<ColumnInfo><Column id=\"교시\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"교시\">1</Col></Row><Row><Col id=\"교시\">2</Col></Row><Row><Col id=\"교시\">3</Col></Row><Row><Col id=\"교시\">4</Col></Row><Row><Col id=\"교시\">5</Col></Row><Row><Col id=\"교시\">6</Col></Row><Row><Col id=\"교시\">7</Col></Row><Row><Col id=\"교시\">8</Col></Row><Row><Col id=\"교시\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","53","310","497","162",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsTimetable");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"semester\"/><Cell col=\"1\" text=\"year\"/><Cell col=\"2\" text=\"lsDay\"/><Cell col=\"3\" text=\"lsDay1\"/><Cell col=\"4\" text=\"lsRoom\"/><Cell col=\"5\" text=\"lName\"/><Cell col=\"6\" text=\"sCode\"/></Band><Band id=\"body\"><Cell text=\"bind:semester\"/><Cell col=\"1\" text=\"bind:year\"/><Cell col=\"2\" text=\"bind:lsDay\"/><Cell col=\"3\" text=\"bind:lsDay1\"/><Cell col=\"4\" text=\"bind:lsRoom\"/><Cell col=\"5\" text=\"bind:lName\"/><Cell col=\"6\" text=\"bind:sCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","129","43","411","257",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("timetable");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/></Band><Band id=\"body\"><Cell text=\"bind:교시\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:월요일\"/><Cell col=\"2\" text=\"bind:화요일\"/><Cell col=\"3\" text=\"bind:수요일\"/><Cell col=\"4\" text=\"bind:목요일\"/><Cell col=\"5\" text=\"bind:금요일\"/></Band></Format></Formats>");
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
        this.registerScript("frm_timetable.xfdl", function() {
        this.Monday = this.timetable.getColID(1);
        this.Tuesday = this.timetable.getColID(2);
        this.Wednesday = this.timetable.getColID(3);
        this.Thursday = this.timetable.getColID(4);
        this.Friday = this.timetable.getColID(5);

        this.frm_timetable_onload = function(obj,e)
        {
        	var	name = nexacro.getEnvironmentVariable("ev_Val");
        	this.transaction(
        	"tr_timetable"
        	,"SnuURL::timetable/list.snu"
        	,""
        	,"dsTimetable=outTimetable"
        	,"in_Var1="+name+""
        	,"fn_callback_tt"
        	)
        };

        this.fn_callback_tt = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_timetable")
        	{
        		if(nErrorCode < 0)
        		{
        			return;
        		}
        		//데이터가 있는 경우
        		//먼저 2022년 1학기부터 구분
        		var dRow = this.dsTimetable.getRowCount(); //dRow = 3
        		for(var i = 0; i<dRow; i++)// 3줄을 탐방
        		{
        			//첫번째 열을 볼텐데..
        			var lsDay = this.dsTimetable.getColumn(i,"lsDay");
        			//var lsDay1 = this.dsTimetable.getColumn(i,"lsDay1");
        			var lName = this.dsTimetable.getColumn(i,"lName");
        			var Days = lsDay.split(",");
        			var Day = Days[0]; //월
        			var time00 = Days[1]; //1
        			var time01 = Days[2];
        			//월요일,1
        			//수요일1,2
        			//월요일,3
        			if(this.Monday == Day)
        			{

        				this.timetable.setColumn(time00-1,1,lName);
        				//월1, 월3 등록완료
        				//만약에 월1,2면 어떻게 처리할 것인가? 이때는 time01이 2값이 될 것
        				if(time01 > 0)
        				{
        					this.timetable.setColumn(time01-1,1,lName);
        				}
        				var tRow = this.dsTimetable.findRowExpr(this.Monday==Day);
        				this.alert(tRow);


        			}
        			if(this.Tuesday == Day)
        			{
        				this.timetable.setColumn(time00-1,2,lName);
        				if(time01 > 0)
        				{
        					this.timetable.setColumn(time01-1,2,lName);
        				}
        			}

        			if(this.Wednesday == Day)
        			{
        				this.timetable.setColumn(time00-1,3,lName);
        				if(time01 > 0)
        				{
        					this.timetable.setColumn(time01-1,3,lName);
        				}
        			}
        			if(this.Thursday == Day)
        			{
        				this.timetable.setColumn(time00-1,4,lName);
        				if(time01>0)
        				{
        					this.timetable.setColumn(time01-1,4,lName);
        				}
        			}
        			if(this.Friday == Day)
        			{
        				this.timetable.setColumn(time00-1,5,lName);
        				if(time01>0)
        				{
        					this.timetable.setColumn(time01-1,5,lName);
        				}
        			}


        		}










        	}
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_timetable_onload,this);
        };
        this.loadIncludeScript("frm_timetable.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
