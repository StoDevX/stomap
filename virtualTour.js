package {
	public dynamic class SchmidtHouse extends Building {}
}//package
﻿package {
	public dynamic class BoeHouse extends Building {}
}//package
﻿package {
	public dynamic class SpeechTheater extends Building {}
}//package
﻿package {
	public dynamic class RoseHouse extends Building {}
}//package
﻿package {
    import flash.events.*;
    import flash.display.*;

    public class Building extends MovieClip {

        public function Building(){
            buttonMode = true;
            mouseChildren = false;
            VirtualTour.document.addEventListener("highlight", doHighlight, false, 0, true);
            addEventListener(MouseEvent.CLICK, doClick, false, 0, true);
            addEventListener(MouseEvent.MOUSE_OVER, doOver, false, 0, true);
            addEventListener(MouseEvent.MOUSE_OUT, doOut, false, 0, true);
            addEventListener(MouseEvent.MOUSE_MOVE, doMove, false, 0, true);
        }
        private function doClick(_arg1:MouseEvent):void{
            dispatchEvent(new Event("building", true));
        }
        private function doMove(_arg1:MouseEvent):void{
            VirtualTour.document.tooltip.x = stage.mouseX;
            VirtualTour.document.tooltip.y = (stage.mouseY - 5);
            _arg1.updateAfterEvent();
        }
        private function doOver(_arg1:MouseEvent):void{
            highlightBuilding(true);
            VirtualTour.document.tooltip.visible = true;
        }
        private function doOut(_arg1:MouseEvent):void{
            highlightBuilding(false);
            VirtualTour.document.tooltip.visible = false;
        }
        private function doHighlight(_arg1:Event):void{
            highlightBuilding((VirtualTour.document.currentBuilding == this.name));
        }
        public function highlightBuilding(_arg1:Boolean):void{
            var value:* = _arg1;
            var cOffset:* = (value) ? -50 : 0;
            var aOffset:* = (value) ? -0.3 : 0;
            var trans:* = transform.colorTransform;
            trans.redOffset = cOffset;
            trans.blueOffset = cOffset;
            trans.greenOffset = cOffset;
            trans.alphaOffset = aOffset;
            transform.colorTransform = trans;
            if (value){
                VirtualTour.document.tooltip.text = String(VirtualTour.document.buildingData.building.(@name == this.name)[0].title);
            };
        }

    }
}//package
﻿package {
	public dynamic class ManitouField extends Building {}
}//package
﻿package {
	public dynamic class AlumniHall extends Building {}
}//package
﻿package {
	public dynamic class LarsonHall extends Building {}
}//package
﻿package {
	public dynamic class LincolnInn extends Building {}
}//package
﻿package {
	public dynamic class TomPorterHall extends Building {}
}//package
﻿package {
	public dynamic class MohnHall extends Building {}
}//package
﻿package {
	public dynamic class BoeMemorial extends Building {}
}//package
﻿package {
	public dynamic class SovikHouse extends Building {}
}//package
﻿package {
	public dynamic class HolstadHouse extends Building {}
}//package
﻿package {
	public dynamic class OldMain extends Building {}
}//package
﻿package {
	public dynamic class CarlsonTennis extends Building {}
}//package
﻿package {
	public dynamic class ModularVilliage extends Building {}
}//package
﻿package {
	public dynamic class TomsonHall extends Building {}
}//package
﻿package {
	public dynamic class MellbyHall extends Building {}
}//package
﻿package {
	public dynamic class EllingsonHall extends Building {}
}//package
﻿package {
	public dynamic class AdeChristensonComplex extends Building {}
}//package
﻿package virtualTour_72610_fla {
    import flash.events.*;
    import flash.display.*;
    import flash.text.*;
    import flash.ui.*;
    import flash.net.*;
    import flash.geom.*;
    import flash.utils.*;
    import adobe.utils.*;
    import flash.accessibility.*;
    import flash.errors.*;
    import flash.external.*;
    import flash.filters.*;
    import flash.media.*;
    import flash.printing.*;
    import flash.profiler.*;
    import flash.sampler.*;
    import flash.system.*;
    import flash.xml.*;

    public dynamic class ScrollBar_74 extends MovieClip {

        public var down_btn:SimpleButton;
        public var up_btn:SimpleButton;
        public var flashmo_scrollable_area:MovieClip;
        public var flashmo_scroller:MovieClip;
        public var sd:Number;
        public var sr:Number;
        public var cd:Number;
        public var cr:Number;
        public var new_y:Number;
        public var drag_area:Rectangle;
        public var map_percent:Number;
        public var flashmo_content:MovieClip;
        public var flashmo_content_area:MovieClip;
        public var scrolling_speed:Number;

        public function ScrollBar_74(){
            addFrameScript(0, frame1);
        }
        public function scrolling2(_arg1:String, _arg2:String, _arg3:Number):void{
            scrolling_speed = _arg3;
            if ((((scrolling_speed < 0)) || ((scrolling_speed > 1)))){
                scrolling_speed = 0.5;
            };
            flashmo_content = parent[_arg1];
            flashmo_content_area = parent[_arg2];
            flashmo_content.mask = flashmo_content_area;
            flashmo_scroller.x = flashmo_scrollable_area.x;
            sd = (flashmo_scrollable_area.height - flashmo_scroller.height);
            cd = (flashmo_content.height - flashmo_content_area.height);
            cr = ((cd / sd) * 1.01);
            drag_area = new Rectangle(0, 0, 0, (flashmo_scrollable_area.height - flashmo_scroller.height));
            if (flashmo_content.height <= flashmo_content_area.height){
                flashmo_scroller.visible = (flashmo_scrollable_area.visible = false);
            };
            flashmo_scroller.addEventListener(MouseEvent.MOUSE_DOWN, scroller_drag);
            flashmo_scroller.addEventListener(MouseEvent.MOUSE_UP, scroller_drop);
            this.addEventListener(Event.ENTER_FRAME, on_scroll);
        }
        public function scroller_drag(_arg1:MouseEvent):void{
            _arg1.target.startDrag(false, drag_area);
            stage.addEventListener(MouseEvent.MOUSE_UP, up);
        }
        public function scroller_drop(_arg1:MouseEvent):void{
            _arg1.target.stopDrag();
            stage.removeEventListener(MouseEvent.MOUSE_UP, up);
        }
        public function up(_arg1:MouseEvent):void{
            flashmo_scroller.stopDrag();
        }
        public function on_scroll(_arg1:Event):void{
            new_y = (((flashmo_content_area.y + flashmo_scrollable_area.y) - ((flashmo_scroller.y * 2) * map_percent)) / 45);
            var _local2:Number = ((new_y - flashmo_content.scaleX) * scrolling_speed);
            if ((((_local2 < 0.0001)) && ((_local2 > 0)))){
                _local2 = 0;
            } else {
                if ((((_local2 > -0.0001)) && ((_local2 < 0)))){
                    _local2 = 0;
                };
            };
            if (_local2 != 0){
                flashmo_content.scaleX = (flashmo_content.scaleX + _local2);
                flashmo_content.scaleY = (flashmo_content.scaleY + _local2);
            };
        }
        public function jumpTo2(_arg1:MouseEvent):void{
            flashmo_scroller.y = (mouseY - 30);
            if (flashmo_scroller.y >= 120){
                flashmo_scroller.y = 120;
                removeEventListener(MouseEvent.CLICK, jumpTo2);
            };
            if (flashmo_scroller.y <= 0){
                flashmo_scroller.y = 0;
                removeEventListener(MouseEvent.CLICK, jumpTo2);
            };
        }
        public function moveLeft(_arg1:MouseEvent):void{
            flashmo_scroller.y = (flashmo_scroller.y - 20);
            if (flashmo_scroller.y <= 0){
                flashmo_scroller.y = 0;
            };
        }
        public function moveRight(_arg1:MouseEvent):void{
            flashmo_scroller.y = (flashmo_scroller.y + 20);
            if (flashmo_scroller.y >= 130){
                flashmo_scroller.y = 130;
            };
        }
        function frame1(){
            map_percent = (940 / 4800);
            flashmo_scrollable_area.addEventListener(MouseEvent.CLICK, jumpTo2);
            up_btn.addEventListener(MouseEvent.CLICK, moveLeft);
            down_btn.addEventListener(MouseEvent.CLICK, moveRight);
        }

    }
}//package virtualTour_72610_fla
﻿package virtualTour_72610_fla {
    import flash.events.*;
    import flash.display.*;
    import flash.text.*;
    import flash.ui.*;
    import flash.net.*;
    import flash.geom.*;
    import flash.utils.*;
    import adobe.utils.*;
    import flash.accessibility.*;
    import flash.errors.*;
    import flash.external.*;
    import flash.filters.*;
    import flash.media.*;
    import flash.printing.*;
    import flash.profiler.*;
    import flash.sampler.*;
    import flash.system.*;
    import flash.xml.*;

    public dynamic class ScrollBarcopy_80 extends MovieClip {

        public var flashmo_scroller2:MovieClip;
        public var flashmo_scrollable_area2:MovieClip;
        public var sd:Number;
        public var sr:Number;
        public var cd:Number;
        public var cr:Number;
        public var new_y:Number;
        public var drag_area:Rectangle;
        public var flashmo_content:MovieClip;
        public var flashmo_content_area2:MovieClip;
        public var scrolling_speed:Number;

        public function ScrollBarcopy_80(){
            addFrameScript(0, frame1);
        }
        public function scrolling3(_arg1:String, _arg2:String, _arg3:Number):void{
            scrolling_speed = _arg3;
            if ((((scrolling_speed < 0)) || ((scrolling_speed > 1)))){
                scrolling_speed = 0.5;
            };
            flashmo_content = parent[_arg1];
            flashmo_content_area2 = parent[_arg2];
            flashmo_content.mask = flashmo_content_area2;
            flashmo_content.x = flashmo_content_area2.x;
            flashmo_scroller2.x = flashmo_scrollable_area2.x;
            sd = (flashmo_scrollable_area2.height - flashmo_scroller2.height);
            cd = (flashmo_content.height - flashmo_content_area2.height);
            cr = ((cd / sd) * 1);
            drag_area = new Rectangle(0, 0, 0, (flashmo_scrollable_area2.height - flashmo_scroller2.height));
            if (flashmo_content.height <= flashmo_content_area2.height){
                flashmo_scroller2.visible = (flashmo_scrollable_area2.visible = false);
            };
            flashmo_scroller2.addEventListener(MouseEvent.MOUSE_DOWN, scroller_drag);
            flashmo_scroller2.addEventListener(MouseEvent.MOUSE_UP, scroller_drop);
            this.addEventListener(Event.ENTER_FRAME, on_scroll);
        }
        public function scroller_drag(_arg1:MouseEvent):void{
            _arg1.target.startDrag(false, drag_area);
            stage.addEventListener(MouseEvent.MOUSE_UP, up);
        }
        public function scroller_drop(_arg1:MouseEvent):void{
            _arg1.target.stopDrag();
            stage.removeEventListener(MouseEvent.MOUSE_UP, up);
        }
        public function up(_arg1:MouseEvent):void{
            flashmo_scroller2.stopDrag();
        }
        public function on_scroll(_arg1:Event):void{
            new_y = ((flashmo_content_area2.y + (flashmo_scrollable_area2.y * cr)) - (flashmo_scroller2.y * cr));
            flashmo_content.y = (flashmo_content.y + ((new_y - flashmo_content.y) * scrolling_speed));
        }
        public function jumpTo2(_arg1:MouseEvent):void{
            flashmo_scroller2.y = (mouseY - 30);
            if (flashmo_scroller2.y >= 240){
                flashmo_scroller2.y = 240;
                removeEventListener(MouseEvent.CLICK, jumpTo2);
            };
            if (flashmo_scroller2.y <= 0){
                flashmo_scroller2.y = 0;
                removeEventListener(MouseEvent.CLICK, jumpTo2);
            };
        }
        function frame1(){
            flashmo_scrollable_area2.addEventListener(MouseEvent.CLICK, jumpTo2);
        }

    }
}//package virtualTour_72610_fla
﻿package {
	public dynamic class RandHall extends Building {}
}//package
﻿package {
	public dynamic class SkifterHall extends Building {}
}//package
﻿package {
	public dynamic class KittlesbyHall extends Building {}
}//package
﻿package {
	public dynamic class FlatenHouse extends Building {}
}//package
﻿package {
	public dynamic class ThomsonHouse extends Building {}
}//package
﻿package {
	public dynamic class HallOfMusic extends Building {}
}//package
﻿package {
	public dynamic class WindTurbine extends Building {}
}//package
﻿package {
	public dynamic class MarkAlmli extends Building {}
}//package
﻿package {
	public dynamic class YtterboeHouse extends Building {}
}//package
﻿package {
	public dynamic class HilleboeHall extends Building {}
}//package
﻿package {
	public dynamic class MohnHouse extends Building {}
}//package
﻿package {
	public dynamic class MemorialTower extends Building {}
}//package
﻿package {
	public dynamic class ThorsonHall extends Building {}
}//package
﻿package {
	public dynamic class MadsonFacilitiesBuilding extends Building {}
}//package
﻿package {
	public dynamic class MabelShirleyField extends Building {}
}//package
﻿package {
    import flash.events.*;
    import caurina.transitions.*;
    import flash.display.*;
    import flash.text.*;
    import flash.ui.*;
    import flash.net.*;

    public class VirtualTour extends MovieClip {

        public static var document:MovieClip;

        public var loadBar_mc:MovieClip;
        public var flashmo_content2:MovieClip;
        public var content_area:MovieClip;
        public var flashmo_sb2:MovieClip;
        public var content_area2:MovieClip;
        public var sto_btn:SimpleButton;
        public var buildings_btn:SimpleButton;
        public var tooltip_mc:ToolTip;
        public var flashmo_sb:MovieClip;
        public var flashmo_content:MovieClip;
        public var emptyMenu:ContextMenu;
        public var ddShowing:Boolean;
        public var currentBuilding:String;
        public var targetURL:String;
        public var myCSS:StyleSheet;
        public var loader:URLLoader;
        public var loader2:URLLoader;
        public var xml:XML;
        public var buildingData:XML;
        public var tooltip:ToolTip;

        public function VirtualTour(){
            addFrameScript(0, frame1, 1, frame2);
            document = this;
        }
        public function doEnterFrame(_arg1:Event):void{
            var _local2:Number = (loaderInfo.bytesLoaded / loaderInfo.bytesTotal);
            loadBar_mc.scaleX = _local2;
            if (_local2 == 1){
                removeEventListener(Event.ENTER_FRAME, doEnterFrame);
                gotoAndStop(2);
            };
        }
        public function startDragMap(_arg1:Event):void{
            flashmo_content.map.startDrag();
            targetURL = "";
            toggleDropDown(false);
            setCurrentBuilding("");
        }
        public function stopDragMap(_arg1:Event):void{
            flashmo_content.map.stopDrag();
        }
        public function setCurrentBuilding(_arg1:String):void{
            currentBuilding = _arg1;
            dispatchEvent(new Event("highlight"));
        }
        public function ddClick(_arg1:MouseEvent):void{
            toggleDropDown(!(ddShowing));
        }
        public function toggleDropDown(_arg1:Boolean):void{
            ddShowing = _arg1;
            flashmo_content2.visible = ddShowing;
            flashmo_sb2.visible = ddShowing;
        }
        public function buildingClick(_arg1:Event):void{
            var e:* = _arg1;
            if (targetURL != ""){
                navigateToURL(new URLRequest(targetURL), "_self");
            } else {
                if ((e.target is Building)){
                    targetURL = String(buildingData.building.(@name == e.target.name)[0].url);
                    navigateToURL(new URLRequest(targetURL), "_self");
                };
            };
        }
        public function onLoaded(_arg1:Event):void{
            xml = new XML(_arg1.target.data);
            flashmo_content2.htmlBox.htmlText = xml.toString();
        }
        public function onLoaded2(_arg1:Event):void{
            buildingData = new XML(loader2.data);
        }
        public function linkHandler(_arg1:TextEvent):void{
            toggleDropDown(false);
            showBuilding(_arg1.text);
        }
        public function showBuilding(_arg1:String):void{
            var bXML:* = null;
            var bX:* = NaN;
            var bY:* = NaN;
            var bZoom:* = NaN;
            var bURL:* = null;
            var id:* = _arg1;
            setCurrentBuilding(id);
            bXML = buildingData.building.(@name == id)[0];
            if (bXML){
                bX = Number(bXML.x);
                bY = Number(bXML.y);
                bZoom = Number(bXML.zoom);
                bURL = String(bXML.url);
                Tweener.addTween(flashmo_sb.flashmo_scroller, {
                    y:30,
                    time:0.5,
                    transition:"linear"
                });
                Tweener.addTween(flashmo_content.map, {
                    x:bX,
                    y:bY,
                    time:0.75,
                    transition:"linear"
                });
                targetURL = bURL;
            };
        }
        function frame1(){
            stop();
            emptyMenu = new ContextMenu();
            emptyMenu.hideBuiltInItems();
            this.contextMenu = emptyMenu;
            addEventListener(Event.ENTER_FRAME, doEnterFrame);
            loadBar_mc.scaleX = 0;
        }
        function frame2(){
            stop();
            stage.scaleMode = StageScaleMode.NO_SCALE;
            flashmo_sb.scrolling2("flashmo_content", "content_area", 0.2);
            flashmo_sb2.scrolling3("flashmo_content2", "content_area2", 0.2);
            tooltip = tooltip_mc;
            flashmo_content.map.addEventListener(MouseEvent.MOUSE_DOWN, startDragMap);
            flashmo_content.map.addEventListener(MouseEvent.MOUSE_UP, stopDragMap);
            ddShowing = false;
            currentBuilding = "";
            buildings_btn.addEventListener(MouseEvent.CLICK, ddClick);
            toggleDropDown(ddShowing);
            targetURL = "";
            addEventListener("building", buildingClick);
            myCSS = new StyleSheet();
            myCSS.setStyle(".header", {
                fontSize:"16px",
                color:"#333333"
            });
            myCSS.setStyle("a:link", {
                fontSize:"14px",
                color:"#333333",
                textDecoration:"none"
            });
            myCSS.setStyle("a:hover", {
                fontSize:"14px",
                color:"#CC9933",
                textDecoration:"none"
            });
            flashmo_content2.htmlBox.styleSheet = myCSS;
            flashmo_content2.htmlBox.embedFonts = true;
            flashmo_content2.htmlBox.border = false;
            loader = new URLLoader(new URLRequest("building_list.xml"));
            loader2 = new URLLoader(new URLRequest("building_data.xml"));
            loader2.addEventListener(Event.COMPLETE, onLoaded2);
            try {
                loader.addEventListener(Event.COMPLETE, onLoaded);
            } catch(error:ArgumentError) {
                flashmo_content2.htmlBox.trace("An ArgumentError has occurred.");
            } catch(error:SecurityError) {
                flashmo_content2.htmlBox.trace("A SecurityError has occurred.");
            };
            flashmo_content2.htmlBox.addEventListener(TextEvent.LINK, linkHandler);
        }

    }
}//package
﻿package {
	public dynamic class JohnsonHouse extends Building {}
}//package
﻿package {
	public dynamic class YtterboeHall extends Building {}
}//package
﻿package {
	public dynamic class SkoglundAthletic extends Building {}
}//package
﻿package {
	public dynamic class HoymeHall extends Building {}
}//package
﻿package {
	public dynamic class SwansonHouse extends Building {}
}//package
﻿package {
	public dynamic class FellandHouse extends Building {}
}//package
﻿package {
	public dynamic class BuntrockCommons extends Building {}
}//package
﻿package {
	public dynamic class HollandHall extends Building {}
}//package
﻿package {
	public dynamic class AakerHouse extends Building {}
}//package
﻿package {
	public dynamic class TostrudCenter extends Building {}
}//package
﻿package {
	public dynamic class FinholtHouse extends Building {}
}//package
﻿package {
    import flash.display.*;
    import flash.text.*;

    public class ToolTip extends MovieClip {

        public var building_txt:TextField;
        public var bg_mc:MovieClip;
        private var _text:String = "";
        private var bg:MovieClip;
        private var building:TextField;

        public function ToolTip(){
            mouseEnabled = false;
            mouseChildren = false;
            visible = false;
            bg = bg_mc;
            building = building_txt;
            building.autoSize = TextFieldAutoSize.CENTER;
        }
        public function set text(_arg1:String):void{
            _text = _arg1;
            building.text = _arg1;
            bg.width = (building.width + 10);
        }
        public function get text():String{
            return (_text);
        }

    }
}//package
﻿package {
	public dynamic class Steensland extends Building {}
}//package
﻿package {
	public dynamic class DittmannCenter extends Building {}
}//package
﻿package {
	public dynamic class PresidentsHouse extends Building {}
}//package
﻿package {
	public dynamic class LeeHouse extends Building {}
}//package
﻿package {
	public dynamic class KildahlHall extends Building {}
}//package
﻿package {
	public dynamic class HuggenHouse extends Building {}
}//package
﻿package caurina.transitions {
	public class TweenListObj {

        public var scope:Object;
        public var properties:Object;
        public var timeStart:Number;
        public var timeComplete:Number;
        public var useFrames:Boolean;
        public var transition:Function;
        public var transitionParams:Object;
        public var onStart:Function;
        public var onUpdate:Function;
        public var onComplete:Function;
        public var onOverwrite:Function;
        public var onError:Function;
        public var onStartParams:Array;
        public var onUpdateParams:Array;
        public var onCompleteParams:Array;
        public var onOverwriteParams:Array;
        public var onStartScope:Object;
        public var onUpdateScope:Object;
        public var onCompleteScope:Object;
        public var onOverwriteScope:Object;
        public var onErrorScope:Object;
        public var rounded:Boolean;
        public var isPaused:Boolean;
        public var timePaused:Number;
        public var isCaller:Boolean;
        public var count:Number;
        public var timesCalled:Number;
        public var waitFrames:Boolean;
        public var skipUpdates:Number;
        public var updatesSkipped:Number;
        public var hasStarted:Boolean;

        public function TweenListObj(_arg1:Object, _arg2:Number, _arg3:Number, _arg4:Boolean, _arg5:Function, _arg6:Object){
            scope = _arg1;
            timeStart = _arg2;
            timeComplete = _arg3;
            useFrames = _arg4;
            transition = _arg5;
            transitionParams = _arg6;
            properties = new Object();
            isPaused = false;
            timePaused = undefined;
            isCaller = false;
            updatesSkipped = 0;
            timesCalled = 0;
            skipUpdates = 0;
            hasStarted = false;
        }
        public static function makePropertiesChain(_arg1:Object):Object{
            var _local3:Object;
            var _local4:Object;
            var _local5:Object;
            var _local6:Number;
            var _local7:Number;
            var _local8:Number;
            var _local2:Object = _arg1.base;
            if (_local2){
                _local3 = {};
                if ((_local2 is Array)){
                    _local4 = [];
                    _local8 = 0;
                    while (_local8 < _local2.length) {
                        _local4.push(_local2[_local8]);
                        _local8++;
                    };
                } else {
                    _local4 = [_local2];
                };
                _local4.push(_arg1);
                _local6 = _local4.length;
                _local7 = 0;
                while (_local7 < _local6) {
                    if (_local4[_local7]["base"]){
                        _local5 = AuxFunctions.concatObjects(makePropertiesChain(_local4[_local7]["base"]), _local4[_local7]);
                    } else {
                        _local5 = _local4[_local7];
                    };
                    _local3 = AuxFunctions.concatObjects(_local3, _local5);
                    _local7++;
                };
                if (_local3["base"]){
                    delete _local3["base"];
                };
                return (_local3);
            };
            return (_arg1);
        }

        public function clone(_arg1:Boolean):TweenListObj{
            var _local3:String;
            var _local2:TweenListObj = new TweenListObj(scope, timeStart, timeComplete, useFrames, transition, transitionParams);
            _local2.properties = new Array();
            for (_local3 in properties) {
                _local2.properties[_local3] = properties[_local3].clone();
            };
            _local2.skipUpdates = skipUpdates;
            _local2.updatesSkipped = updatesSkipped;
            if (!_arg1){
                _local2.onStart = onStart;
                _local2.onUpdate = onUpdate;
                _local2.onComplete = onComplete;
                _local2.onOverwrite = onOverwrite;
                _local2.onError = onError;
                _local2.onStartParams = onStartParams;
                _local2.onUpdateParams = onUpdateParams;
                _local2.onCompleteParams = onCompleteParams;
                _local2.onOverwriteParams = onOverwriteParams;
                _local2.onStartScope = onStartScope;
                _local2.onUpdateScope = onUpdateScope;
                _local2.onCompleteScope = onCompleteScope;
                _local2.onOverwriteScope = onOverwriteScope;
                _local2.onErrorScope = onErrorScope;
            };
            _local2.rounded = rounded;
            _local2.isPaused = isPaused;
            _local2.timePaused = timePaused;
            _local2.isCaller = isCaller;
            _local2.count = count;
            _local2.timesCalled = timesCalled;
            _local2.waitFrames = waitFrames;
            _local2.hasStarted = hasStarted;
            return (_local2);
        }
        public function toString():String{
            var _local3:String;
            var _local1 = "\n[TweenListObj ";
            _local1 = (_local1 + ("scope:" + String(scope)));
            _local1 = (_local1 + ", properties:");
            var _local2:Boolean;
            for (_local3 in properties) {
                if (!_local2){
                    _local1 = (_local1 + ",");
                };
                _local1 = (_local1 + ("[name:" + properties[_local3].name));
                _local1 = (_local1 + (",valueStart:" + properties[_local3].valueStart));
                _local1 = (_local1 + (",valueComplete:" + properties[_local3].valueComplete));
                _local1 = (_local1 + "]");
                _local2 = false;
            };
            _local1 = (_local1 + (", timeStart:" + String(timeStart)));
            _local1 = (_local1 + (", timeComplete:" + String(timeComplete)));
            _local1 = (_local1 + (", useFrames:" + String(useFrames)));
            _local1 = (_local1 + (", transition:" + String(transition)));
            _local1 = (_local1 + (", transitionParams:" + String(transitionParams)));
            if (skipUpdates){
                _local1 = (_local1 + (", skipUpdates:" + String(skipUpdates)));
            };
            if (updatesSkipped){
                _local1 = (_local1 + (", updatesSkipped:" + String(updatesSkipped)));
            };
            if (Boolean(onStart)){
                _local1 = (_local1 + (", onStart:" + String(onStart)));
            };
            if (Boolean(onUpdate)){
                _local1 = (_local1 + (", onUpdate:" + String(onUpdate)));
            };
            if (Boolean(onComplete)){
                _local1 = (_local1 + (", onComplete:" + String(onComplete)));
            };
            if (Boolean(onOverwrite)){
                _local1 = (_local1 + (", onOverwrite:" + String(onOverwrite)));
            };
            if (Boolean(onError)){
                _local1 = (_local1 + (", onError:" + String(onError)));
            };
            if (onStartParams){
                _local1 = (_local1 + (", onStartParams:" + String(onStartParams)));
            };
            if (onUpdateParams){
                _local1 = (_local1 + (", onUpdateParams:" + String(onUpdateParams)));
            };
            if (onCompleteParams){
                _local1 = (_local1 + (", onCompleteParams:" + String(onCompleteParams)));
            };
            if (onOverwriteParams){
                _local1 = (_local1 + (", onOverwriteParams:" + String(onOverwriteParams)));
            };
            if (onStartScope){
                _local1 = (_local1 + (", onStartScope:" + String(onStartScope)));
            };
            if (onUpdateScope){
                _local1 = (_local1 + (", onUpdateScope:" + String(onUpdateScope)));
            };
            if (onCompleteScope){
                _local1 = (_local1 + (", onCompleteScope:" + String(onCompleteScope)));
            };
            if (onOverwriteScope){
                _local1 = (_local1 + (", onOverwriteScope:" + String(onOverwriteScope)));
            };
            if (onErrorScope){
                _local1 = (_local1 + (", onErrorScope:" + String(onErrorScope)));
            };
            if (rounded){
                _local1 = (_local1 + (", rounded:" + String(rounded)));
            };
            if (isPaused){
                _local1 = (_local1 + (", isPaused:" + String(isPaused)));
            };
            if (timePaused){
                _local1 = (_local1 + (", timePaused:" + String(timePaused)));
            };
            if (isCaller){
                _local1 = (_local1 + (", isCaller:" + String(isCaller)));
            };
            if (count){
                _local1 = (_local1 + (", count:" + String(count)));
            };
            if (timesCalled){
                _local1 = (_local1 + (", timesCalled:" + String(timesCalled)));
            };
            if (waitFrames){
                _local1 = (_local1 + (", waitFrames:" + String(waitFrames)));
            };
            if (hasStarted){
                _local1 = (_local1 + (", hasStarted:" + String(hasStarted)));
            };
            _local1 = (_local1 + "]\n");
            return (_local1);
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class SpecialProperty {

        public var getValue:Function;
        public var setValue:Function;
        public var parameters:Array;
        public var preProcess:Function;

        public function SpecialProperty(_arg1:Function, _arg2:Function, _arg3:Array=null, _arg4:Function=null){
            getValue = _arg1;
            setValue = _arg2;
            parameters = _arg3;
            preProcess = _arg4;
        }
        public function toString():String{
            var _local1 = "";
            _local1 = (_local1 + "[SpecialProperty ");
            _local1 = (_local1 + ("getValue:" + String(getValue)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("setValue:" + String(setValue)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("parameters:" + String(parameters)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("preProcess:" + String(preProcess)));
            _local1 = (_local1 + "]");
            return (_local1);
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class SpecialPropertyModifier {

        public var modifyValues:Function;
        public var getValue:Function;

        public function SpecialPropertyModifier(_arg1:Function, _arg2:Function){
            modifyValues = _arg1;
            getValue = _arg2;
        }
        public function toString():String{
            var _local1 = "";
            _local1 = (_local1 + "[SpecialPropertyModifier ");
            _local1 = (_local1 + ("modifyValues:" + String(modifyValues)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("getValue:" + String(getValue)));
            _local1 = (_local1 + "]");
            return (_local1);
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
    import flash.events.*;
    import flash.display.*;
    import flash.utils.*;

    public class Tweener {

        private static var __tweener_controller__:MovieClip;
        private static var _engineExists:Boolean = false;
        private static var _inited:Boolean = false;
        private static var _currentTime:Number;
        private static var _currentTimeFrame:Number;
        private static var _tweenList:Array;
        private static var _timeScale:Number = 1;
        private static var _transitionList:Object;
        private static var _specialPropertyList:Object;
        private static var _specialPropertyModifierList:Object;
        private static var _specialPropertySplitterList:Object;
        public static var autoOverwrite:Boolean = true;

        public function Tweener(){
            trace("Tweener is a static class and should not be instantiated.");
        }
        public static function addTween(_arg1:Object=null, _arg2:Object=null):Boolean{
            var _local3:Number;
            var _local4:Number;
            var _local5:String;
            var _local6:Array;
            var _local13:Function;
            var _local14:Object;
            var _local15:TweenListObj;
            var _local16:Number;
            var _local17:Array;
            var _local18:Array;
            var _local19:Array;
            var _local20:String;
            if (!Boolean(_arg1)){
                return (false);
            };
            if ((_arg1 is Array)){
                _local6 = _arg1.concat();
            } else {
                _local6 = [_arg1];
            };
            var _local7:Object = TweenListObj.makePropertiesChain(_arg2);
            if (!_inited){
                init();
            };
            if (((!(_engineExists)) || (!(Boolean(__tweener_controller__))))){
                startEngine();
            };
            var _local8:Number = (isNaN(_local7.time)) ? 0 : _local7.time;
            var _local9:Number = (isNaN(_local7.delay)) ? 0 : _local7.delay;
            var _local10:Array = new Array();
            var _local11:Object = {
                overwrite:true,
                time:true,
                delay:true,
                useFrames:true,
                skipUpdates:true,
                transition:true,
                transitionParams:true,
                onStart:true,
                onUpdate:true,
                onComplete:true,
                onOverwrite:true,
                onError:true,
                rounded:true,
                onStartParams:true,
                onUpdateParams:true,
                onCompleteParams:true,
                onOverwriteParams:true,
                onStartScope:true,
                onUpdateScope:true,
                onCompleteScope:true,
                onOverwriteScope:true,
                onErrorScope:true
            };
            var _local12:Object = new Object();
            for (_local5 in _local7) {
                if (!_local11[_local5]){
                    if (_specialPropertySplitterList[_local5]){
                        _local17 = _specialPropertySplitterList[_local5].splitValues(_local7[_local5], _specialPropertySplitterList[_local5].parameters);
                        _local3 = 0;
                        while (_local3 < _local17.length) {
                            if (_specialPropertySplitterList[_local17[_local3].name]){
                                _local18 = _specialPropertySplitterList[_local17[_local3].name].splitValues(_local17[_local3].value, _specialPropertySplitterList[_local17[_local3].name].parameters);
                                _local4 = 0;
                                while (_local4 < _local18.length) {
                                    _local10[_local18[_local4].name] = {
                                        valueStart:undefined,
                                        valueComplete:_local18[_local4].value,
                                        arrayIndex:_local18[_local4].arrayIndex,
                                        isSpecialProperty:false
                                    };
                                    _local4++;
                                };
                            } else {
                                _local10[_local17[_local3].name] = {
                                    valueStart:undefined,
                                    valueComplete:_local17[_local3].value,
                                    arrayIndex:_local17[_local3].arrayIndex,
                                    isSpecialProperty:false
                                };
                            };
                            _local3++;
                        };
                    } else {
                        if (_specialPropertyModifierList[_local5] != undefined){
                            _local19 = _specialPropertyModifierList[_local5].modifyValues(_local7[_local5]);
                            _local3 = 0;
                            while (_local3 < _local19.length) {
                                _local12[_local19[_local3].name] = {
                                    modifierParameters:_local19[_local3].parameters,
                                    modifierFunction:_specialPropertyModifierList[_local5].getValue
                                };
                                _local3++;
                            };
                        } else {
                            _local10[_local5] = {
                                valueStart:undefined,
                                valueComplete:_local7[_local5]
                            };
                        };
                    };
                };
            };
            for (_local5 in _local10) {
                if (_specialPropertyList[_local5] != undefined){
                    _local10[_local5].isSpecialProperty = true;
                } else {
                    if (_local6[0][_local5] == undefined){
                        printError((((("The property '" + _local5) + "' doesn't seem to be a normal object property of ") + String(_local6[0])) + " or a registered special property."));
                    };
                };
            };
            for (_local5 in _local12) {
                if (_local10[_local5] != undefined){
                    _local10[_local5].modifierParameters = _local12[_local5].modifierParameters;
                    _local10[_local5].modifierFunction = _local12[_local5].modifierFunction;
                };
            };
            if (typeof(_local7.transition) == "string"){
                _local20 = _local7.transition.toLowerCase();
                _local13 = _transitionList[_local20];
            } else {
                _local13 = _local7.transition;
            };
            if (!Boolean(_local13)){
                _local13 = _transitionList["easeoutexpo"];
            };
            _local3 = 0;
            while (_local3 < _local6.length) {
                _local14 = new Object();
                for (_local5 in _local10) {
                    _local14[_local5] = new PropertyInfoObj(_local10[_local5].valueStart, _local10[_local5].valueComplete, _local10[_local5].valueComplete, _local10[_local5].arrayIndex, {}, _local10[_local5].isSpecialProperty, _local10[_local5].modifierFunction, _local10[_local5].modifierParameters);
                };
                if (_local7.useFrames == true){
                    _local15 = new TweenListObj(_local6[_local3], (_currentTimeFrame + (_local9 / _timeScale)), (_currentTimeFrame + ((_local9 + _local8) / _timeScale)), true, _local13, _local7.transitionParams);
                } else {
                    _local15 = new TweenListObj(_local6[_local3], (_currentTime + ((_local9 * 1000) / _timeScale)), (_currentTime + (((_local9 * 1000) + (_local8 * 1000)) / _timeScale)), false, _local13, _local7.transitionParams);
                };
                _local15.properties = _local14;
                _local15.onStart = _local7.onStart;
                _local15.onUpdate = _local7.onUpdate;
                _local15.onComplete = _local7.onComplete;
                _local15.onOverwrite = _local7.onOverwrite;
                _local15.onError = _local7.onError;
                _local15.onStartParams = _local7.onStartParams;
                _local15.onUpdateParams = _local7.onUpdateParams;
                _local15.onCompleteParams = _local7.onCompleteParams;
                _local15.onOverwriteParams = _local7.onOverwriteParams;
                _local15.onStartScope = _local7.onStartScope;
                _local15.onUpdateScope = _local7.onUpdateScope;
                _local15.onCompleteScope = _local7.onCompleteScope;
                _local15.onOverwriteScope = _local7.onOverwriteScope;
                _local15.onErrorScope = _local7.onErrorScope;
                _local15.rounded = _local7.rounded;
                _local15.skipUpdates = _local7.skipUpdates;
                if (((_local7.overwrite == undefined)) ? autoOverwrite : _local7.overwrite){
                    removeTweensByTime(_local15.scope, _local15.properties, _local15.timeStart, _local15.timeComplete);
                };
                _tweenList.push(_local15);
                if ((((_local8 == 0)) && ((_local9 == 0)))){
                    _local16 = (_tweenList.length - 1);
                    updateTweenByIndex(_local16);
                    removeTweenByIndex(_local16);
                };
                _local3++;
            };
            return (true);
        }
        public static function addCaller(_arg1:Object=null, _arg2:Object=null):Boolean{
            var _local3:Number;
            var _local4:Array;
            var _local8:Function;
            var _local9:TweenListObj;
            var _local10:Number;
            var _local11:String;
            if (!Boolean(_arg1)){
                return (false);
            };
            if ((_arg1 is Array)){
                _local4 = _arg1.concat();
            } else {
                _local4 = [_arg1];
            };
            var _local5:Object = _arg2;
            if (!_inited){
                init();
            };
            if (((!(_engineExists)) || (!(Boolean(__tweener_controller__))))){
                startEngine();
            };
            var _local6:Number = (isNaN(_local5.time)) ? 0 : _local5.time;
            var _local7:Number = (isNaN(_local5.delay)) ? 0 : _local5.delay;
            if (typeof(_local5.transition) == "string"){
                _local11 = _local5.transition.toLowerCase();
                _local8 = _transitionList[_local11];
            } else {
                _local8 = _local5.transition;
            };
            if (!Boolean(_local8)){
                _local8 = _transitionList["easeoutexpo"];
            };
            _local3 = 0;
            while (_local3 < _local4.length) {
                if (_local5.useFrames == true){
                    _local9 = new TweenListObj(_local4[_local3], (_currentTimeFrame + (_local7 / _timeScale)), (_currentTimeFrame + ((_local7 + _local6) / _timeScale)), true, _local8, _local5.transitionParams);
                } else {
                    _local9 = new TweenListObj(_local4[_local3], (_currentTime + ((_local7 * 1000) / _timeScale)), (_currentTime + (((_local7 * 1000) + (_local6 * 1000)) / _timeScale)), false, _local8, _local5.transitionParams);
                };
                _local9.properties = null;
                _local9.onStart = _local5.onStart;
                _local9.onUpdate = _local5.onUpdate;
                _local9.onComplete = _local5.onComplete;
                _local9.onOverwrite = _local5.onOverwrite;
                _local9.onStartParams = _local5.onStartParams;
                _local9.onUpdateParams = _local5.onUpdateParams;
                _local9.onCompleteParams = _local5.onCompleteParams;
                _local9.onOverwriteParams = _local5.onOverwriteParams;
                _local9.onStartScope = _local5.onStartScope;
                _local9.onUpdateScope = _local5.onUpdateScope;
                _local9.onCompleteScope = _local5.onCompleteScope;
                _local9.onOverwriteScope = _local5.onOverwriteScope;
                _local9.onErrorScope = _local5.onErrorScope;
                _local9.isCaller = true;
                _local9.count = _local5.count;
                _local9.waitFrames = _local5.waitFrames;
                _tweenList.push(_local9);
                if ((((_local6 == 0)) && ((_local7 == 0)))){
                    _local10 = (_tweenList.length - 1);
                    updateTweenByIndex(_local10);
                    removeTweenByIndex(_local10);
                };
                _local3++;
            };
            return (true);
        }
        public static function removeTweensByTime(_arg1:Object, _arg2:Object, _arg3:Number, _arg4:Number):Boolean{
            var removedLocally:* = false;
            var i:* = 0;
            var pName:* = null;
            var eventScope:* = null;
            var p_scope:* = _arg1;
            var p_properties:* = _arg2;
            var p_timeStart:* = _arg3;
            var p_timeComplete:* = _arg4;
            var removed:* = false;
            var tl:* = _tweenList.length;
            i = 0;
            while (i < tl) {
                if (((Boolean(_tweenList[i])) && ((p_scope == _tweenList[i].scope)))){
                    if ((((p_timeComplete > _tweenList[i].timeStart)) && ((p_timeStart < _tweenList[i].timeComplete)))){
                        removedLocally = false;
                        for (pName in _tweenList[i].properties) {
                            if (Boolean(p_properties[pName])){
                                if (Boolean(_tweenList[i].onOverwrite)){
                                    eventScope = (Boolean(_tweenList[i].onOverwriteScope)) ? _tweenList[i].onOverwriteScope : _tweenList[i].scope;
                                    try {
                                        _tweenList[i].onOverwrite.apply(eventScope, _tweenList[i].onOverwriteParams);
                                    } catch(e:Error) {
                                        handleError(_tweenList[i], e, "onOverwrite");
                                    };
                                };
                                _tweenList[i].properties[pName] = undefined;
                                delete _tweenList[i].properties[pName];
                                removedLocally = true;
                                removed = true;
                            };
                        };
                        if (removedLocally){
                            if (AuxFunctions.getObjectLength(_tweenList[i].properties) == 0){
                                removeTweenByIndex(i);
                            };
                        };
                    };
                };
                i = (i + 1);
            };
            return (removed);
        }
        public static function removeTweens(_arg1:Object, ... _args):Boolean{
            var _local4:uint;
            var _local5:SpecialPropertySplitter;
            var _local6:Array;
            var _local7:uint;
            var _local3:Array = new Array();
            _local4 = 0;
            while (_local4 < _args.length) {
                if ((((typeof(_args[_local4]) == "string")) && ((_local3.indexOf(_args[_local4]) == -1)))){
                    if (_specialPropertySplitterList[_args[_local4]]){
                        _local5 = _specialPropertySplitterList[_args[_local4]];
                        _local6 = _local5.splitValues(_arg1, null);
                        _local7 = 0;
                        while (_local7 < _local6.length) {
                            _local3.push(_local6[_local7].name);
                            _local7++;
                        };
                    } else {
                        _local3.push(_args[_local4]);
                    };
                };
                _local4++;
            };
            return (affectTweens(removeTweenByIndex, _arg1, _local3));
        }
        public static function removeAllTweens():Boolean{
            var _local2:uint;
            if (!Boolean(_tweenList)){
                return (false);
            };
            var _local1:Boolean;
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                removeTweenByIndex(_local2);
                _local1 = true;
                _local2++;
            };
            return (_local1);
        }
        public static function pauseTweens(_arg1:Object, ... _args):Boolean{
            var _local4:uint;
            var _local3:Array = new Array();
            _local4 = 0;
            while (_local4 < _args.length) {
                if ((((typeof(_args[_local4]) == "string")) && ((_local3.indexOf(_args[_local4]) == -1)))){
                    _local3.push(_args[_local4]);
                };
                _local4++;
            };
            return (affectTweens(pauseTweenByIndex, _arg1, _local3));
        }
        public static function pauseAllTweens():Boolean{
            var _local2:uint;
            if (!Boolean(_tweenList)){
                return (false);
            };
            var _local1:Boolean;
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                pauseTweenByIndex(_local2);
                _local1 = true;
                _local2++;
            };
            return (_local1);
        }
        public static function resumeTweens(_arg1:Object, ... _args):Boolean{
            var _local4:uint;
            var _local3:Array = new Array();
            _local4 = 0;
            while (_local4 < _args.length) {
                if ((((typeof(_args[_local4]) == "string")) && ((_local3.indexOf(_args[_local4]) == -1)))){
                    _local3.push(_args[_local4]);
                };
                _local4++;
            };
            return (affectTweens(resumeTweenByIndex, _arg1, _local3));
        }
        public static function resumeAllTweens():Boolean{
            var _local2:uint;
            if (!Boolean(_tweenList)){
                return (false);
            };
            var _local1:Boolean;
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                resumeTweenByIndex(_local2);
                _local1 = true;
                _local2++;
            };
            return (_local1);
        }
        private static function affectTweens(_arg1:Function, _arg2:Object, _arg3:Array):Boolean{
            var _local5:uint;
            var _local6:Array;
            var _local7:uint;
            var _local8:uint;
            var _local9:uint;
            var _local4:Boolean;
            if (!Boolean(_tweenList)){
                return (false);
            };
            _local5 = 0;
            while (_local5 < _tweenList.length) {
                if (((_tweenList[_local5]) && ((_tweenList[_local5].scope == _arg2)))){
                    if (_arg3.length == 0){
                        _arg1(_local5);
                        _local4 = true;
                    } else {
                        _local6 = new Array();
                        _local7 = 0;
                        while (_local7 < _arg3.length) {
                            if (Boolean(_tweenList[_local5].properties[_arg3[_local7]])){
                                _local6.push(_arg3[_local7]);
                            };
                            _local7++;
                        };
                        if (_local6.length > 0){
                            _local8 = AuxFunctions.getObjectLength(_tweenList[_local5].properties);
                            if (_local8 == _local6.length){
                                _arg1(_local5);
                                _local4 = true;
                            } else {
                                _local9 = splitTweens(_local5, _local6);
                                _arg1(_local9);
                                _local4 = true;
                            };
                        };
                    };
                };
                _local5++;
            };
            return (_local4);
        }
        public static function splitTweens(_arg1:Number, _arg2:Array):uint{
            var _local5:uint;
            var _local6:String;
            var _local7:Boolean;
            var _local3:TweenListObj = _tweenList[_arg1];
            var _local4:TweenListObj = _local3.clone(false);
            _local5 = 0;
            while (_local5 < _arg2.length) {
                _local6 = _arg2[_local5];
                if (Boolean(_local3.properties[_local6])){
                    _local3.properties[_local6] = undefined;
                    delete _local3.properties[_local6];
                };
                _local5++;
            };
            for (_local6 in _local4.properties) {
                _local7 = false;
                _local5 = 0;
                while (_local5 < _arg2.length) {
                    if (_arg2[_local5] == _local6){
                        _local7 = true;
                        break;
                    };
                    _local5++;
                };
                if (!_local7){
                    _local4.properties[_local6] = undefined;
                    delete _local4.properties[_local6];
                };
            };
            _tweenList.push(_local4);
            return ((_tweenList.length - 1));
        }
        private static function updateTweens():Boolean{
            var _local1:int;
            if (_tweenList.length == 0){
                return (false);
            };
            _local1 = 0;
            while (_local1 < _tweenList.length) {
                if ((((_tweenList[_local1] == undefined)) || (!(_tweenList[_local1].isPaused)))){
                    if (!updateTweenByIndex(_local1)){
                        removeTweenByIndex(_local1);
                    };
                    if (_tweenList[_local1] == null){
                        removeTweenByIndex(_local1, true);
                        _local1--;
                    };
                };
                _local1++;
            };
            return (true);
        }
        public static function removeTweenByIndex(_arg1:Number, _arg2:Boolean=false):Boolean{
            _tweenList[_arg1] = null;
            if (_arg2){
                _tweenList.splice(_arg1, 1);
            };
            return (true);
        }
        public static function pauseTweenByIndex(_arg1:Number):Boolean{
            var _local2:TweenListObj = _tweenList[_arg1];
            if ((((_local2 == null)) || (_local2.isPaused))){
                return (false);
            };
            _local2.timePaused = getCurrentTweeningTime(_local2);
            _local2.isPaused = true;
            return (true);
        }
        public static function resumeTweenByIndex(_arg1:Number):Boolean{
            var _local2:TweenListObj = _tweenList[_arg1];
            if ((((_local2 == null)) || (!(_local2.isPaused)))){
                return (false);
            };
            var _local3:Number = getCurrentTweeningTime(_local2);
            _local2.timeStart = (_local2.timeStart + (_local3 - _local2.timePaused));
            _local2.timeComplete = (_local2.timeComplete + (_local3 - _local2.timePaused));
            _local2.timePaused = undefined;
            _local2.isPaused = false;
            return (true);
        }
        private static function updateTweenByIndex(_arg1:Number):Boolean{
            var tTweening:* = null;
            var mustUpdate:* = false;
            var nv:* = NaN;
            var t:* = NaN;
            var b:* = NaN;
            var c:* = NaN;
            var d:* = NaN;
            var pName:* = null;
            var eventScope:* = null;
            var tScope:* = null;
            var tProperty:* = null;
            var pv:* = NaN;
            var i:* = _arg1;
            tTweening = _tweenList[i];
            if ((((tTweening == null)) || (!(Boolean(tTweening.scope))))){
                return (false);
            };
            var isOver:* = false;
            var cTime:* = getCurrentTweeningTime(tTweening);
            if (cTime >= tTweening.timeStart){
                tScope = tTweening.scope;
                if (tTweening.isCaller){
                    do  {
                        t = (((tTweening.timeComplete - tTweening.timeStart) / tTweening.count) * (tTweening.timesCalled + 1));
                        b = tTweening.timeStart;
                        c = (tTweening.timeComplete - tTweening.timeStart);
                        d = (tTweening.timeComplete - tTweening.timeStart);
                        nv = tTweening.transition(t, b, c, d);
                    } while (!(cTime >= nv));
                } else {
                    mustUpdate = (((((tTweening.skipUpdates < 1)) || (!(tTweening.skipUpdates)))) || ((tTweening.updatesSkipped >= tTweening.skipUpdates)));
                    if (cTime >= tTweening.timeComplete){
                        isOver = true;
                        mustUpdate = true;
                    };
                    if (!tTweening.hasStarted){
                        if (Boolean(tTweening.onStart)){
                            eventScope = (Boolean(tTweening.onStartScope)) ? tTweening.onStartScope : tScope;
                            try {
                                tTweening.onStart.apply(eventScope, tTweening.onStartParams);
                            } catch(e2:Error) {
                                handleError(tTweening, e2, "onStart");
                            };
                        };
                        for (pName in tTweening.properties) {
                            if (tTweening.properties[pName].isSpecialProperty){
                                if (Boolean(_specialPropertyList[pName].preProcess)){
                                    tTweening.properties[pName].valueComplete = _specialPropertyList[pName].preProcess(tScope, _specialPropertyList[pName].parameters, tTweening.properties[pName].originalValueComplete, tTweening.properties[pName].extra);
                                };
                                pv = _specialPropertyList[pName].getValue(tScope, _specialPropertyList[pName].parameters, tTweening.properties[pName].extra);
                            } else {
                                pv = tScope[pName];
                            };
                            tTweening.properties[pName].valueStart = (isNaN(pv)) ? tTweening.properties[pName].valueComplete : pv;
                        };
                        mustUpdate = true;
                        tTweening.hasStarted = true;
                    };
                    if (mustUpdate){
                        for (pName in tTweening.properties) {
                            tProperty = tTweening.properties[pName];
                            if (isOver){
                                nv = tProperty.valueComplete;
                            } else {
                                if (tProperty.hasModifier){
                                    t = (cTime - tTweening.timeStart);
                                    d = (tTweening.timeComplete - tTweening.timeStart);
                                    nv = tTweening.transition(t, 0, 1, d, tTweening.transitionParams);
                                    nv = tProperty.modifierFunction(tProperty.valueStart, tProperty.valueComplete, nv, tProperty.modifierParameters);
                                } else {
                                    t = (cTime - tTweening.timeStart);
                                    b = tProperty.valueStart;
                                    c = (tProperty.valueComplete - tProperty.valueStart);
                                    d = (tTweening.timeComplete - tTweening.timeStart);
                                    nv = tTweening.transition(t, b, c, d, tTweening.transitionParams);
                                };
                            };
                            if (tTweening.rounded){
                                nv = Math.round(nv);
                            };
                            if (tProperty.isSpecialProperty){
                                _specialPropertyList[pName].setValue(tScope, nv, _specialPropertyList[pName].parameters, tTweening.properties[pName].extra);
                            } else {
                                tScope[pName] = nv;
                            };
                        };
                        tTweening.updatesSkipped = 0;
                        if (Boolean(tTweening.onUpdate)){
                            eventScope = (Boolean(tTweening.onUpdateScope)) ? tTweening.onUpdateScope : tScope;
                            try {
                                tTweening.onUpdate.apply(eventScope, tTweening.onUpdateParams);
                            } catch(e3:Error) {
                                handleError(tTweening, e3, "onUpdate");
                            };
                        };
                    } else {
                        tTweening.updatesSkipped++;
                    };
                };
                if (((isOver) && (Boolean(tTweening.onComplete)))){
                    eventScope = (Boolean(tTweening.onCompleteScope)) ? tTweening.onCompleteScope : tScope;
                    try {
                        tTweening.onComplete.apply(eventScope, tTweening.onCompleteParams);
                    } catch(e4:Error) {
                        handleError(tTweening, e4, "onComplete");
                    };
                };
                return (!(isOver));
            };
            return (true);
        }
        public static function init(... _args):void{
            _inited = true;
            _transitionList = new Object();
            Equations.init();
            _specialPropertyList = new Object();
            _specialPropertyModifierList = new Object();
            _specialPropertySplitterList = new Object();
        }
        public static function registerTransition(_arg1:String, _arg2:Function):void{
            if (!_inited){
                init();
            };
            _transitionList[_arg1] = _arg2;
        }
        public static function registerSpecialProperty(_arg1:String, _arg2:Function, _arg3:Function, _arg4:Array=null, _arg5:Function=null):void{
            if (!_inited){
                init();
            };
            var _local6:SpecialProperty = new SpecialProperty(_arg2, _arg3, _arg4, _arg5);
            _specialPropertyList[_arg1] = _local6;
        }
        public static function registerSpecialPropertyModifier(_arg1:String, _arg2:Function, _arg3:Function):void{
            if (!_inited){
                init();
            };
            var _local4:SpecialPropertyModifier = new SpecialPropertyModifier(_arg2, _arg3);
            _specialPropertyModifierList[_arg1] = _local4;
        }
        public static function registerSpecialPropertySplitter(_arg1:String, _arg2:Function, _arg3:Array=null):void{
            if (!_inited){
                init();
            };
            var _local4:SpecialPropertySplitter = new SpecialPropertySplitter(_arg2, _arg3);
            _specialPropertySplitterList[_arg1] = _local4;
        }
        private static function startEngine():void{
            _engineExists = true;
            _tweenList = new Array();
            __tweener_controller__ = new MovieClip();
            __tweener_controller__.addEventListener(Event.ENTER_FRAME, Tweener.onEnterFrame);
            _currentTimeFrame = 0;
            updateTime();
        }
        private static function stopEngine():void{
            _engineExists = false;
            _tweenList = null;
            _currentTime = 0;
            _currentTimeFrame = 0;
            __tweener_controller__.removeEventListener(Event.ENTER_FRAME, Tweener.onEnterFrame);
            __tweener_controller__ = null;
        }
        public static function updateTime():void{
            _currentTime = getTimer();
        }
        public static function updateFrame():void{
            _currentTimeFrame++;
        }
        public static function onEnterFrame(_arg1:Event):void{
            updateTime();
            updateFrame();
            var _local2:Boolean;
            _local2 = updateTweens();
            if (!_local2){
                stopEngine();
            };
        }
        public static function setTimeScale(_arg1:Number):void{
            var _local2:Number;
            var _local3:Number;
            if (isNaN(_arg1)){
                _arg1 = 1;
            };
            if (_arg1 < 1E-5){
                _arg1 = 1E-5;
            };
            if (_arg1 != _timeScale){
                if (_tweenList != null){
                    _local2 = 0;
                    while (_local2 < _tweenList.length) {
                        _local3 = getCurrentTweeningTime(_tweenList[_local2]);
                        _tweenList[_local2].timeStart = (_local3 - (((_local3 - _tweenList[_local2].timeStart) * _timeScale) / _arg1));
                        _tweenList[_local2].timeComplete = (_local3 - (((_local3 - _tweenList[_local2].timeComplete) * _timeScale) / _arg1));
                        if (_tweenList[_local2].timePaused != undefined){
                            _tweenList[_local2].timePaused = (_local3 - (((_local3 - _tweenList[_local2].timePaused) * _timeScale) / _arg1));
                        };
                        _local2++;
                    };
                };
                _timeScale = _arg1;
            };
        }
        public static function isTweening(_arg1:Object):Boolean{
            var _local2:uint;
            if (!Boolean(_tweenList)){
                return (false);
            };
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                if (((Boolean(_tweenList[_local2])) && ((_tweenList[_local2].scope == _arg1)))){
                    return (true);
                };
                _local2++;
            };
            return (false);
        }
        public static function getTweens(_arg1:Object):Array{
            var _local2:uint;
            var _local3:String;
            if (!Boolean(_tweenList)){
                return ([]);
            };
            var _local4:Array = new Array();
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                if (((Boolean(_tweenList[_local2])) && ((_tweenList[_local2].scope == _arg1)))){
                    for (_local3 in _tweenList[_local2].properties) {
                        _local4.push(_local3);
                    };
                };
                _local2++;
            };
            return (_local4);
        }
        public static function getTweenCount(_arg1:Object):Number{
            var _local2:uint;
            if (!Boolean(_tweenList)){
                return (0);
            };
            var _local3:Number = 0;
            _local2 = 0;
            while (_local2 < _tweenList.length) {
                if (((Boolean(_tweenList[_local2])) && ((_tweenList[_local2].scope == _arg1)))){
                    _local3 = (_local3 + AuxFunctions.getObjectLength(_tweenList[_local2].properties));
                };
                _local2++;
            };
            return (_local3);
        }
        private static function handleError(_arg1:TweenListObj, _arg2:Error, _arg3:String):void{
            var eventScope:* = null;
            var pTweening:* = _arg1;
            var pError:* = _arg2;
            var pCallBackName:* = _arg3;
            if (((Boolean(pTweening.onError)) && ((pTweening.onError is Function)))){
                eventScope = (Boolean(pTweening.onErrorScope)) ? pTweening.onErrorScope : pTweening.scope;
                try {
                    pTweening.onError.apply(eventScope, [pTweening.scope, pError]);
                } catch(metaError:Error) {
                    printError(((((String(pTweening.scope) + " raised an error while executing the 'onError' handler. Original error:\n ") + pError.getStackTrace()) + "\nonError error: ") + metaError.getStackTrace()));
                };
            } else {
                if (!Boolean(pTweening.onError)){
                    printError(((((String(pTweening.scope) + " raised an error while executing the '") + pCallBackName) + "'handler. \n") + pError.getStackTrace()));
                };
            };
        }
        public static function getCurrentTweeningTime(_arg1:Object):Number{
            return ((_arg1.useFrames) ? _currentTimeFrame : _currentTime);
        }
        public static function getVersion():String{
            return ("AS3 1.33.74");
        }
        public static function printError(_arg1:String):void{
            trace(("## [Tweener] Error: " + _arg1));
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class SpecialPropertySplitter {

        public var parameters:Array;
        public var splitValues:Function;

        public function SpecialPropertySplitter(_arg1:Function, _arg2:Array){
            splitValues = _arg1;
            parameters = _arg2;
        }
        public function toString():String{
            var _local1 = "";
            _local1 = (_local1 + "[SpecialPropertySplitter ");
            _local1 = (_local1 + ("splitValues:" + String(splitValues)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("parameters:" + String(parameters)));
            _local1 = (_local1 + "]");
            return (_local1);
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class Equations {

        public function Equations(){
            trace("Equations is a static class and should not be instantiated.");
        }
        public static function init():void{
            Tweener.registerTransition("easenone", easeNone);
            Tweener.registerTransition("linear", easeNone);
            Tweener.registerTransition("easeinquad", easeInQuad);
            Tweener.registerTransition("easeoutquad", easeOutQuad);
            Tweener.registerTransition("easeinoutquad", easeInOutQuad);
            Tweener.registerTransition("easeoutinquad", easeOutInQuad);
            Tweener.registerTransition("easeincubic", easeInCubic);
            Tweener.registerTransition("easeoutcubic", easeOutCubic);
            Tweener.registerTransition("easeinoutcubic", easeInOutCubic);
            Tweener.registerTransition("easeoutincubic", easeOutInCubic);
            Tweener.registerTransition("easeinquart", easeInQuart);
            Tweener.registerTransition("easeoutquart", easeOutQuart);
            Tweener.registerTransition("easeinoutquart", easeInOutQuart);
            Tweener.registerTransition("easeoutinquart", easeOutInQuart);
            Tweener.registerTransition("easeinquint", easeInQuint);
            Tweener.registerTransition("easeoutquint", easeOutQuint);
            Tweener.registerTransition("easeinoutquint", easeInOutQuint);
            Tweener.registerTransition("easeoutinquint", easeOutInQuint);
            Tweener.registerTransition("easeinsine", easeInSine);
            Tweener.registerTransition("easeoutsine", easeOutSine);
            Tweener.registerTransition("easeinoutsine", easeInOutSine);
            Tweener.registerTransition("easeoutinsine", easeOutInSine);
            Tweener.registerTransition("easeincirc", easeInCirc);
            Tweener.registerTransition("easeoutcirc", easeOutCirc);
            Tweener.registerTransition("easeinoutcirc", easeInOutCirc);
            Tweener.registerTransition("easeoutincirc", easeOutInCirc);
            Tweener.registerTransition("easeinexpo", easeInExpo);
            Tweener.registerTransition("easeoutexpo", easeOutExpo);
            Tweener.registerTransition("easeinoutexpo", easeInOutExpo);
            Tweener.registerTransition("easeoutinexpo", easeOutInExpo);
            Tweener.registerTransition("easeinelastic", easeInElastic);
            Tweener.registerTransition("easeoutelastic", easeOutElastic);
            Tweener.registerTransition("easeinoutelastic", easeInOutElastic);
            Tweener.registerTransition("easeoutinelastic", easeOutInElastic);
            Tweener.registerTransition("easeinback", easeInBack);
            Tweener.registerTransition("easeoutback", easeOutBack);
            Tweener.registerTransition("easeinoutback", easeInOutBack);
            Tweener.registerTransition("easeoutinback", easeOutInBack);
            Tweener.registerTransition("easeinbounce", easeInBounce);
            Tweener.registerTransition("easeoutbounce", easeOutBounce);
            Tweener.registerTransition("easeinoutbounce", easeInOutBounce);
            Tweener.registerTransition("easeoutinbounce", easeOutInBounce);
        }
        public static function easeNone(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return ((((_arg3 * _arg1) / _arg4) + _arg2));
        }
        public static function easeInQuad(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return ((((_arg3 * _arg1) * _arg1) + _arg2));
        }
        public static function easeOutQuad(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return ((((-(_arg3) * _arg1) * (_arg1 - 2)) + _arg2));
        }
        public static function easeInOutQuad(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return (((((_arg3 / 2) * _arg1) * _arg1) + _arg2));
            };
            --_arg1;
            return ((((-(_arg3) / 2) * ((_arg1 * (_arg1 - 2)) - 1)) + _arg2));
        }
        public static function easeOutInQuad(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutQuad((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInQuad(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInCubic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return (((((_arg3 * _arg1) * _arg1) * _arg1) + _arg2));
        }
        public static function easeOutCubic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = ((_arg1 / _arg4) - 1);
            return (((_arg3 * (((_arg1 * _arg1) * _arg1) + 1)) + _arg2));
        }
        public static function easeInOutCubic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return ((((((_arg3 / 2) * _arg1) * _arg1) * _arg1) + _arg2));
            };
            _arg1 = (_arg1 - 2);
            return ((((_arg3 / 2) * (((_arg1 * _arg1) * _arg1) + 2)) + _arg2));
        }
        public static function easeOutInCubic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutCubic((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInCubic(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInQuart(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return ((((((_arg3 * _arg1) * _arg1) * _arg1) * _arg1) + _arg2));
        }
        public static function easeOutQuart(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = ((_arg1 / _arg4) - 1);
            return (((-(_arg3) * ((((_arg1 * _arg1) * _arg1) * _arg1) - 1)) + _arg2));
        }
        public static function easeInOutQuart(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return (((((((_arg3 / 2) * _arg1) * _arg1) * _arg1) * _arg1) + _arg2));
            };
            _arg1 = (_arg1 - 2);
            return ((((-(_arg3) / 2) * ((((_arg1 * _arg1) * _arg1) * _arg1) - 2)) + _arg2));
        }
        public static function easeOutInQuart(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutQuart((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInQuart(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInQuint(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return (((((((_arg3 * _arg1) * _arg1) * _arg1) * _arg1) * _arg1) + _arg2));
        }
        public static function easeOutQuint(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = ((_arg1 / _arg4) - 1);
            return (((_arg3 * (((((_arg1 * _arg1) * _arg1) * _arg1) * _arg1) + 1)) + _arg2));
        }
        public static function easeInOutQuint(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return ((((((((_arg3 / 2) * _arg1) * _arg1) * _arg1) * _arg1) * _arg1) + _arg2));
            };
            _arg1 = (_arg1 - 2);
            return ((((_arg3 / 2) * (((((_arg1 * _arg1) * _arg1) * _arg1) * _arg1) + 2)) + _arg2));
        }
        public static function easeOutInQuint(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutQuint((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInQuint(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInSine(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return ((((-(_arg3) * Math.cos(((_arg1 / _arg4) * (Math.PI / 2)))) + _arg3) + _arg2));
        }
        public static function easeOutSine(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return (((_arg3 * Math.sin(((_arg1 / _arg4) * (Math.PI / 2)))) + _arg2));
        }
        public static function easeInOutSine(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return ((((-(_arg3) / 2) * (Math.cos(((Math.PI * _arg1) / _arg4)) - 1)) + _arg2));
        }
        public static function easeOutInSine(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutSine((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInSine(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInExpo(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return (((_arg1)==0) ? _arg2 : (((_arg3 * Math.pow(2, (10 * ((_arg1 / _arg4) - 1)))) + _arg2) - (_arg3 * 0.001)));
        }
        public static function easeOutExpo(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return (((_arg1)==_arg4) ? (_arg2 + _arg3) : (((_arg3 * 1.001) * (-(Math.pow(2, ((-10 * _arg1) / _arg4))) + 1)) + _arg2));
        }
        public static function easeInOutExpo(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 == 0){
                return (_arg2);
            };
            if (_arg1 == _arg4){
                return ((_arg2 + _arg3));
            };
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return (((((_arg3 / 2) * Math.pow(2, (10 * (_arg1 - 1)))) + _arg2) - (_arg3 * 0.0005)));
            };
            --_arg1;
            return (((((_arg3 / 2) * 1.0005) * (-(Math.pow(2, (-10 * _arg1))) + 2)) + _arg2));
        }
        public static function easeOutInExpo(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutExpo((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInExpo(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInCirc(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            return (((-(_arg3) * (Math.sqrt((1 - (_arg1 * _arg1))) - 1)) + _arg2));
        }
        public static function easeOutCirc(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = ((_arg1 / _arg4) - 1);
            return (((_arg3 * Math.sqrt((1 - (_arg1 * _arg1)))) + _arg2));
        }
        public static function easeInOutCirc(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                return ((((-(_arg3) / 2) * (Math.sqrt((1 - (_arg1 * _arg1))) - 1)) + _arg2));
            };
            _arg1 = (_arg1 - 2);
            return ((((_arg3 / 2) * (Math.sqrt((1 - (_arg1 * _arg1))) + 1)) + _arg2));
        }
        public static function easeOutInCirc(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutCirc((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInCirc(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInElastic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local7:Number;
            if (_arg1 == 0){
                return (_arg2);
            };
            _arg1 = (_arg1 / _arg4);
            if (_arg1 == 1){
                return ((_arg2 + _arg3));
            };
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.period)))) ? (_arg4 * 0.3) : _arg5.period;
            var _local8:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.amplitude)))) ? 0 : _arg5.amplitude;
            if (((!(Boolean(_local8))) || ((_local8 < Math.abs(_arg3))))){
                _local8 = _arg3;
                _local7 = (_local6 / 4);
            } else {
                _local7 = ((_local6 / (2 * Math.PI)) * Math.asin((_arg3 / _local8)));
            };
            --_arg1;
            return ((-(((_local8 * Math.pow(2, (10 * _arg1))) * Math.sin(((((_arg1 * _arg4) - _local7) * (2 * Math.PI)) / _local6)))) + _arg2));
        }
        public static function easeOutElastic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local7:Number;
            if (_arg1 == 0){
                return (_arg2);
            };
            _arg1 = (_arg1 / _arg4);
            if (_arg1 == 1){
                return ((_arg2 + _arg3));
            };
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.period)))) ? (_arg4 * 0.3) : _arg5.period;
            var _local8:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.amplitude)))) ? 0 : _arg5.amplitude;
            if (((!(Boolean(_local8))) || ((_local8 < Math.abs(_arg3))))){
                _local8 = _arg3;
                _local7 = (_local6 / 4);
            } else {
                _local7 = ((_local6 / (2 * Math.PI)) * Math.asin((_arg3 / _local8)));
            };
            return (((((_local8 * Math.pow(2, (-10 * _arg1))) * Math.sin(((((_arg1 * _arg4) - _local7) * (2 * Math.PI)) / _local6))) + _arg3) + _arg2));
        }
        public static function easeInOutElastic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local7:Number;
            if (_arg1 == 0){
                return (_arg2);
            };
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 == 2){
                return ((_arg2 + _arg3));
            };
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.period)))) ? (_arg4 * (0.3 * 1.5)) : _arg5.period;
            var _local8:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.amplitude)))) ? 0 : _arg5.amplitude;
            if (((!(Boolean(_local8))) || ((_local8 < Math.abs(_arg3))))){
                _local8 = _arg3;
                _local7 = (_local6 / 4);
            } else {
                _local7 = ((_local6 / (2 * Math.PI)) * Math.asin((_arg3 / _local8)));
            };
            if (_arg1 < 1){
                --_arg1;
                return (((-0.5 * ((_local8 * Math.pow(2, (10 * _arg1))) * Math.sin(((((_arg1 * _arg4) - _local7) * (2 * Math.PI)) / _local6)))) + _arg2));
            };
            --_arg1;
            return ((((((_local8 * Math.pow(2, (-10 * _arg1))) * Math.sin(((((_arg1 * _arg4) - _local7) * (2 * Math.PI)) / _local6))) * 0.5) + _arg3) + _arg2));
        }
        public static function easeOutInElastic(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutElastic((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInElastic(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInBack(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.overshoot)))) ? 1.70158 : _arg5.overshoot;
            _arg1 = (_arg1 / _arg4);
            return (((((_arg3 * _arg1) * _arg1) * (((_local6 + 1) * _arg1) - _local6)) + _arg2));
        }
        public static function easeOutBack(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.overshoot)))) ? 1.70158 : _arg5.overshoot;
            _arg1 = ((_arg1 / _arg4) - 1);
            return (((_arg3 * (((_arg1 * _arg1) * (((_local6 + 1) * _arg1) + _local6)) + 1)) + _arg2));
        }
        public static function easeInOutBack(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            var _local6:Number = (((!(Boolean(_arg5))) || (isNaN(_arg5.overshoot)))) ? 1.70158 : _arg5.overshoot;
            _arg1 = (_arg1 / (_arg4 / 2));
            if (_arg1 < 1){
                _local6 = (_local6 * 1.525);
                return ((((_arg3 / 2) * ((_arg1 * _arg1) * (((_local6 + 1) * _arg1) - _local6))) + _arg2));
            };
            _arg1 = (_arg1 - 2);
            _local6 = (_local6 * 1.525);
            return ((((_arg3 / 2) * (((_arg1 * _arg1) * (((_local6 + 1) * _arg1) + _local6)) + 2)) + _arg2));
        }
        public static function easeOutInBack(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutBack((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInBack(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }
        public static function easeInBounce(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            return (((_arg3 - easeOutBounce((_arg4 - _arg1), 0, _arg3, _arg4)) + _arg2));
        }
        public static function easeOutBounce(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            _arg1 = (_arg1 / _arg4);
            if (_arg1 < (1 / 2.75)){
                return (((_arg3 * ((7.5625 * _arg1) * _arg1)) + _arg2));
            };
            if (_arg1 < (2 / 2.75)){
                _arg1 = (_arg1 - (1.5 / 2.75));
                return (((_arg3 * (((7.5625 * _arg1) * _arg1) + 0.75)) + _arg2));
            };
            if (_arg1 < (2.5 / 2.75)){
                _arg1 = (_arg1 - (2.25 / 2.75));
                return (((_arg3 * (((7.5625 * _arg1) * _arg1) + 0.9375)) + _arg2));
            };
            _arg1 = (_arg1 - (2.625 / 2.75));
            return (((_arg3 * (((7.5625 * _arg1) * _arg1) + 0.984375)) + _arg2));
        }
        public static function easeInOutBounce(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (((easeInBounce((_arg1 * 2), 0, _arg3, _arg4) * 0.5) + _arg2));
            };
            return ((((easeOutBounce(((_arg1 * 2) - _arg4), 0, _arg3, _arg4) * 0.5) + (_arg3 * 0.5)) + _arg2));
        }
        public static function easeOutInBounce(_arg1:Number, _arg2:Number, _arg3:Number, _arg4:Number, _arg5:Object=null):Number{
            if (_arg1 < (_arg4 / 2)){
                return (easeOutBounce((_arg1 * 2), _arg2, (_arg3 / 2), _arg4, _arg5));
            };
            return (easeInBounce(((_arg1 * 2) - _arg4), (_arg2 + (_arg3 / 2)), (_arg3 / 2), _arg4, _arg5));
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class PropertyInfoObj {

        public var valueStart:Number;
        public var valueComplete:Number;
        public var originalValueComplete:Object;
        public var arrayIndex:Number;
        public var extra:Object;
        public var isSpecialProperty:Boolean;
        public var hasModifier:Boolean;
        public var modifierFunction:Function;
        public var modifierParameters:Array;

        public function PropertyInfoObj(_arg1:Number, _arg2:Number, _arg3:Object, _arg4:Number, _arg5:Object, _arg6:Boolean, _arg7:Function, _arg8:Array){
            valueStart = _arg1;
            valueComplete = _arg2;
            originalValueComplete = _arg3;
            arrayIndex = _arg4;
            extra = _arg5;
            isSpecialProperty = _arg6;
            hasModifier = Boolean(_arg7);
            modifierFunction = _arg7;
            modifierParameters = _arg8;
        }
        public function clone():PropertyInfoObj{
            var _local1:PropertyInfoObj = new PropertyInfoObj(valueStart, valueComplete, originalValueComplete, arrayIndex, extra, isSpecialProperty, modifierFunction, modifierParameters);
            return (_local1);
        }
        public function toString():String{
            var _local1 = "\n[PropertyInfoObj ";
            _local1 = (_local1 + ("valueStart:" + String(valueStart)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("valueComplete:" + String(valueComplete)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("originalValueComplete:" + String(originalValueComplete)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("arrayIndex:" + String(arrayIndex)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("extra:" + String(extra)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("isSpecialProperty:" + String(isSpecialProperty)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("hasModifier:" + String(hasModifier)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("modifierFunction:" + String(modifierFunction)));
            _local1 = (_local1 + ", ");
            _local1 = (_local1 + ("modifierParameters:" + String(modifierParameters)));
            _local1 = (_local1 + "]\n");
            return (_local1);
        }

    }
}//package caurina.transitions
﻿package caurina.transitions {
	public class AuxFunctions {

        public static function numberToR(_arg1:Number):Number{
            return (((_arg1 & 0xFF0000) >> 16));
        }
        public static function numberToG(_arg1:Number):Number{
            return (((_arg1 & 0xFF00) >> 8));
        }
        public static function numberToB(_arg1:Number):Number{
            return ((_arg1 & 0xFF));
        }
        public static function getObjectLength(_arg1:Object):uint{
            var _local3:String;
            var _local2:uint;
            for (_local3 in _arg1) {
                _local2++;
            };
            return (_local2);
        }
        public static function concatObjects(... _args):Object{
            var _local3:Object;
            var _local5:String;
            var _local2:Object = {};
            var _local4:int;
            while (_local4 < _args.length) {
                _local3 = _args[_local4];
                for (_local5 in _local3) {
                    if (_local3[_local5] == null){
                        delete _local2[_local5];
                    } else {
                        _local2[_local5] = _local3[_local5];
                    };
                };
                _local4++;
            };
            return (_local2);
        }

    }
}//package caurina.transitions
﻿package {
	public dynamic class HaldorsonHouse extends Building {}
}//package
﻿package {
	public dynamic class HollandHouse extends Building {}
}//package
﻿package {
	public dynamic class ChristiansenHallMusic extends Building {}
}//package
﻿package {
	public dynamic class LincolnManor extends Building {}
}//package
﻿package {
	public dynamic class RolvaagMemorialLibrary extends Building {}
}//package
﻿package {
    public dynamic class LarsonHouse extends Building {}
}//package
﻿package {
    public dynamic class RegentsHall extends Building {}
}//package
﻿package {
    public dynamic class StJohnsHouse extends Building {}
}//package
﻿package {
    public dynamic class SoccerField extends Building {}
}//package
﻿package {
    public dynamic class ForestInn extends Building {}
}//package
