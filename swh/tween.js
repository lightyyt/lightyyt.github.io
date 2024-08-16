tween.prototype = new Tween();
tween.prototype.constructor = Tween;
OpacityTween.superclass = Tween.prototype;

function OpacityTween(obj,func,fromOpacity,toOpacity,duration){
	this.targetObject = obj;
	this.init(new Object(),'x',func,fromOpacity,toOpacity,duration);
}
var o = OpacityTween.prototype;
o.targetObject = {};
o.onMotionChanged = function(evt){
	var v = evt.target._pos;
	var t = this.targetObject;
	t.style['opacity'] = v / 100;
	t.style['-moz-opacity'] = v / 100;
	if(t.filters) t.filters.alpha['opacity'] = v;
}