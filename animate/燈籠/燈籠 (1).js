(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈籠 _1__atlas_1", frames: [[0,0,333,314],[419,0,82,229],[335,0,82,434]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈籠 _1__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈籠 _1__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈籠 _1__atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本人
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本人, new cjs.Rectangle(0,0,166.5,157), null);


(lib.鬚鬚 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 鬚鬚
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.鬚鬚, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,41,217), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(113.05,-228.05,1,1,0,0,0,41.1,0);

	this.ikNode_2 = new lib.燈本人();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(72,-9,1,1,0,0,0,85.4,4.2);

	this.ikNode_4 = new lib.鬚鬚();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(69.85,143.6,1,1,0,0,0,18.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72,y:-9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0,y:-228.05,x:113.05,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.2098,x:63.45,y:142.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:1.2267,x:68.95,y:-9.5,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0.8201,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4197,x:57.05,y:142.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:2.4548,x:65.7,y:-10.2,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:1.6412,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6295,x:50.65,y:141.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:3.6824,x:62.65,y:-10.75,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:2.4618,y:-228,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8393,x:44.3,y:140.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:4.9098,x:59.65,y:-11.6,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:3.2829,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0492,x:37.95,y:139,regX:18.4}},{t:this.ikNode_2,p:{rotation:6.1369,x:56.5,y:-12.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:4.1039,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.259,x:31.65,y:137.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:7.3641,x:53.45,y:-13.25,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:4.9247,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4689,x:25.45,y:136.3,regX:18.5}},{t:this.ikNode_2,p:{rotation:8.5922,x:50.35,y:-14.15,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:5.7449,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6788,x:19.2,y:134.85,regX:18.5}},{t:this.ikNode_2,p:{rotation:9.8189,x:47.35,y:-15.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:6.5661,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8888,x:12.9,y:133.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:11.0466,x:44.25,y:-16.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:7.387,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0978,x:6.7,y:131.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:12.2741,x:41.25,y:-17,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:8.2077,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.3078,x:0.5,y:129.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:13.5019,x:38.25,y:-17.95,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:9.0284,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.5178,x:-5.65,y:127.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:14.7288,x:35.25,y:-19.2,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:9.8491,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.7279,x:-11.75,y:125.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:15.9564,x:32.25,y:-20.25,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:10.67,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.938,x:-17.85,y:123.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:17.1841,x:29.3,y:-21.45,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:11.4913,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.1472,x:-23.95,y:121.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:18.4117,x:26.35,y:-22.7,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:12.3116,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.3574,x:-29.95,y:118.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:19.6391,x:23.45,y:-23.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:13.1327,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.5676,x:-35.9,y:116.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:20.8664,x:20.5,y:-25.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:13.9535,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.777,x:-41.8,y:113.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:22.0943,x:17.65,y:-26.6,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:14.774,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.9873,x:-47.65,y:111.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:23.3217,x:14.75,y:-28,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:15.5947,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.1967,x:-53.45,y:108.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:24.5491,x:11.9,y:-29.4,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:16.416,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.4063,x:-59.25,y:105.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:25.7768,x:9.05,y:-30.85,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:17.2364,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.6168,x:-64.85,y:102.5,regX:18.5}},{t:this.ikNode_2,p:{rotation:27.0037,x:6.3,y:-32.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:18.0576,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.8264,x:-70.5,y:99.35,regX:18.5}},{t:this.ikNode_2,p:{rotation:28.2309,x:3.45,y:-33.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:18.8787,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0362,x:-76.1,y:96.15,regX:18.5}},{t:this.ikNode_2,p:{rotation:29.4588,x:0.6,y:-35.55,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:19.6993,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.246,x:-81.8,y:92.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:30.6861,x:-2.05,y:-37.15,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:20.5197,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.4558,x:-87.3,y:89.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:31.9141,x:-4.7,y:-38.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:21.3405,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.6658,x:-92.7,y:85.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:33.1411,x:-7.45,y:-40.5,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:22.1613,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.8758,x:-98.05,y:82.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:34.369,x:-10.1,y:-42.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:22.9824,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.0859,x:-103.35,y:78.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:35.5963,x:-12.75,y:-44.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:23.8032,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.8828,x:-98.25,y:82.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:34.4093,x:-10.2,y:-42.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:23.0099,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.6798,x:-93.1,y:85.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:33.2233,x:-7.7,y:-40.7,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:22.2162,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.4769,x:-87.85,y:89.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:32.0366,x:-5.05,y:-39,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:21.423,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.2741,x:-82.5,y:92.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:30.85,x:-2.45,y:-37.4,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:20.629,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0713,x:-77,y:95.6,regX:18.5}},{t:this.ikNode_2,p:{rotation:29.6636,x:0.25,y:-35.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:19.836,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.8686,x:-71.6,y:98.7,regX:18.5}},{t:this.ikNode_2,p:{rotation:28.4766,x:2.8,y:-34.2,regX:85.3,regY:4.3}},{t:this.ikNode_1,p:{rotation:19.0424,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.6659,x:-66.15,y:101.75,regX:18.5}},{t:this.ikNode_2,p:{rotation:27.2903,x:5.6,y:-32.7,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:18.2489,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.4624,x:-60.75,y:104.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:26.1033,x:8.35,y:-31.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:17.4554,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.2599,x:-55.2,y:107.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:24.9168,x:11.05,y:-29.85,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:16.6622,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.0565,x:-49.6,y:110.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:23.7308,x:13.8,y:-28.45,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:15.869,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.8541,x:-43.95,y:112.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:22.5443,x:16.55,y:-27.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:15.0753,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.6508,x:-38.25,y:115.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:21.3574,x:19.35,y:-25.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:14.2818,y:-227.9,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.4484,x:-32.5,y:117.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:20.1709,x:22.1,y:-24.4,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:13.4883,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.2453,x:-26.75,y:120.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:18.984,x:24.9,y:-23.3,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:12.6949,y:-227.9,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.0422,x:-20.9,y:122.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:17.7974,x:27.8,y:-22.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:11.9011,y:-227.8,x:113,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.8399,x:-15,y:124.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:16.6113,x:30.7,y:-20.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:11.108,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.6369,x:-9.1,y:126.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:15.425,x:33.55,y:-19.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:10.3144,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.4338,x:-3.2,y:128.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:14.2385,x:36.45,y:-18.75,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:9.5208,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.2308,x:2.75,y:130.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:13.0519,x:39.35,y:-17.65,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:8.7274,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0279,x:8.75,y:132.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:11.8655,x:42.25,y:-16.7,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:7.934,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8258,x:14.75,y:133.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:10.6788,x:45.05,y:-15.7,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:7.1403,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6229,x:20.85,y:135.25,regX:18.5}},{t:this.ikNode_2,p:{rotation:9.4916,x:48.15,y:-14.75,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:6.347,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.42,x:26.95,y:136.65,regX:18.5}},{t:this.ikNode_2,p:{rotation:8.3058,x:51.1,y:-13.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:5.5533,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2171,x:32.9,y:138,regX:18.4}},{t:this.ikNode_2,p:{rotation:7.1192,x:54.1,y:-13.1,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:4.7607,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0142,x:39.05,y:139.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:5.9321,x:57.05,y:-12.25,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:3.9671,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8113,x:45.15,y:140.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:4.7457,x:60,y:-11.55,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:3.1735,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6085,x:51.3,y:141.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:3.5588,x:63.05,y:-10.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:2.3796,y:-227.95,x:113,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4057,x:57.45,y:142.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:2.3726,x:66.1,y:-10.15,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:1.5861,y:-227.95,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2028,x:63.65,y:142.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:1.1865,x:69.05,y:-9.55,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0.793,y:-228,x:113.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72.05,y:-8.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0,y:-228.05,x:113.05,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,-244.5,324.29999999999995,501.8);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(113.05,-228.05,1,1,0,0,0,41.1,0);

	this.ikNode_2 = new lib.燈本人();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(72,-9,1,1,0,0,0,85.4,4.2);

	this.ikNode_4 = new lib.鬚鬚();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(69.85,143.6,1,1,0,0,0,18.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72,y:-9,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:0,x:113.05,y:-228.05,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.4188,x:76.85,y:144.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.1121,x:76.2,y:-8.25,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-1.0754,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.8385,x:83.95,y:144.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:-2.2256,x:80.25,y:-7.55,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-2.1503,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.2582,x:91.05,y:145.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.3381,x:84.4,y:-6.9,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-3.226,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.678,x:98.15,y:145.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-4.4519,x:88.5,y:-6.45,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-4.3011,x:113,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.0978,x:105.4,y:145.85,regX:18.5}},{t:this.ikNode_2,p:{rotation:-5.5647,x:92.6,y:-6.1,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-5.3768,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.517,x:112.55,y:145.95,regX:18.5}},{t:this.ikNode_2,p:{rotation:-6.677,x:96.8,y:-5.8,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-6.4527,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.9371,x:119.65,y:145.9,regX:18.5}},{t:this.ikNode_2,p:{rotation:-7.7901,x:100.95,y:-5.6,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-7.5281,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.3565,x:126.65,y:145.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-8.9035,x:105,y:-5.4,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-8.6028,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7761,x:133.75,y:145.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-10.0158,x:109.35,y:-5.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-9.6786,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1959,x:140.85,y:144.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-11.1294,x:113.5,y:-5.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-10.7546,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.6159,x:147.95,y:144.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.2427,x:117.7,y:-5.35,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-11.8296,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.0353,x:155.05,y:143.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:-13.3554,x:121.9,y:-5.35,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-12.9047,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.4549,x:162.1,y:142.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-14.4686,x:126.05,y:-5.7,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-13.9807,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.8741,x:169.15,y:141.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-15.5812,x:130.2,y:-5.95,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-15.0554,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.2943,x:176.2,y:140.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-16.6943,x:134.35,y:-6.35,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-16.1311,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.714,x:183.15,y:139.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-17.8074,x:138.55,y:-6.75,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-17.2071,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.1333,x:190.15,y:137.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-18.9202,x:142.7,y:-7.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-18.2821,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.5528,x:197.1,y:136.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-20.0332,x:146.85,y:-7.85,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-19.3578,x:113,y:-227.9,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.9728,x:203.95,y:134.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-21.1465,x:150.9,y:-8.55,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-20.4328,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.3923,x:210.85,y:132.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-22.2594,x:155.05,y:-9.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-21.5085,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.8115,x:217.75,y:130.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.3722,x:159.15,y:-10.15,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-22.584,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.2311,x:224.55,y:128.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-24.4845,x:163.15,y:-11.05,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-23.6592,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.6512,x:231.45,y:126.55,regX:18.5}},{t:this.ikNode_2,p:{rotation:-25.5981,x:167.25,y:-12.05,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-24.7345,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.0709,x:238,y:124.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-26.7105,x:171.35,y:-13.1,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-25.8104,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.4903,x:244.7,y:121.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-27.8237,x:175.35,y:-14.25,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-26.8857,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.9094,x:251.3,y:119.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-28.9371,x:179.4,y:-15.4,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-27.9614,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.3291,x:257.9,y:116.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:-30.0497,x:183.35,y:-16.65,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-29.0369,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.7494,x:264.4,y:113.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-31.1629,x:187.4,y:-18,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-30.1124,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.1685,x:270.9,y:110.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-32.2763,x:191.2,y:-19.55,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-31.1876,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.7628,x:264.6,y:113.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-31.1998,x:187.45,y:-18.15,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-30.1481,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.3576,x:258.35,y:116.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-30.1245,x:183.55,y:-16.8,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-29.1089,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.9521,x:251.95,y:118.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:-29.0478,x:179.75,y:-15.6,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-28.0686,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.5464,x:245.6,y:121.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-27.9724,x:175.85,y:-14.4,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-27.0292,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.1402,x:239.15,y:123.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-26.8966,x:171.9,y:-13.25,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-25.9895,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.7345,x:232.7,y:126.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-25.8206,x:168.1,y:-12.2,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-24.9504,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.3294,x:226.15,y:128.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-24.7451,x:164.15,y:-11.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-23.9105,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.9239,x:219.55,y:130.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.6686,x:160.15,y:-10.35,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-22.8712,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.5178,x:212.95,y:132.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-22.5934,x:156.25,y:-9.5,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-21.8314,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.1122,x:206.25,y:133.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:-21.5171,x:152.3,y:-8.8,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-20.7914,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.7064,x:199.65,y:135.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-20.4411,x:148.35,y:-8,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-19.7522,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.3007,x:192.9,y:137.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-19.3653,x:144.2,y:-7.5,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-18.7125,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.8954,x:186.2,y:138.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-18.2892,x:140.3,y:-6.95,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-17.6727,x:112.9,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.4896,x:179.55,y:139.85,regX:18.5}},{t:this.ikNode_2,p:{rotation:-17.2134,x:136.3,y:-6.5,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-16.6332,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.0841,x:172.7,y:141.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-16.1374,x:132.35,y:-6.05,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-15.5939,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.6781,x:165.85,y:142.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-15.0617,x:128.25,y:-5.85,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-14.5536,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.2732,x:159,y:143,regX:18.4}},{t:this.ikNode_2,p:{rotation:-13.986,x:124.2,y:-5.55,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-13.5144,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.8668,x:152.2,y:143.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.91,x:120.2,y:-5.3,regY:4.3,regX:85.4}},{t:this.ikNode_1,p:{rotation:-12.4746,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.4615,x:145.35,y:144.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-11.8343,x:116.15,y:-5.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-11.4351,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.0557,x:138.5,y:145.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-10.758,x:112.15,y:-5.25,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-10.3952,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.6499,x:131.6,y:145.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-9.6822,x:108.1,y:-5.3,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-9.356,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2444,x:124.75,y:145.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-8.6064,x:104.05,y:-5.5,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-8.3164,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.839,x:118,y:145.9,regX:18.5}},{t:this.ikNode_2,p:{rotation:-7.5308,x:100,y:-5.65,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-7.2768,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4338,x:111.1,y:145.95,regX:18.5}},{t:this.ikNode_2,p:{rotation:-6.4553,x:95.95,y:-5.85,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-6.2371,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.0279,x:104.25,y:145.85,regX:18.5}},{t:this.ikNode_2,p:{rotation:-5.3785,x:91.9,y:-6.15,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-5.1977,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.622,x:97.2,y:145.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-4.3028,x:87.8,y:-6.55,regY:4.2,regX:85.3}},{t:this.ikNode_1,p:{rotation:-4.1582,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.2162,x:90.35,y:145.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.2269,x:84,y:-7.05,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-3.1183,x:113,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.8105,x:83.45,y:144.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-2.1512,x:80,y:-7.6,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-2.0786,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.4048,x:76.6,y:144.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.0754,x:76.05,y:-8.25,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:-1.0396,x:113,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72.05,y:-8.95,regY:4.2,regX:85.4}},{t:this.ikNode_1,p:{rotation:0,x:113.05,y:-228.05,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-228,354.79999999999995,488.4);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(113.05,-228.05,1,1,0,0,0,41.1,0);

	this.ikNode_2 = new lib.燈本人();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(72,-9,1,1,0,0,0,85.4,4.2);

	this.ikNode_4 = new lib.鬚鬚();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(69.85,143.6,1,1,0,0,0,18.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72,y:-9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0,x:113.05,y:-228.05,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.4651,x:81.95,y:144.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.8337,x:79.3,y:-7.75,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-1.8958,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9311,x:94.1,y:145.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.6666,x:86.35,y:-6.7,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:-3.7927,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.3972,x:106.3,y:146,regX:18.4}},{t:this.ikNode_2,p:{rotation:-5.5006,x:93.85,y:-5.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-5.6886,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.8625,x:118.7,y:146.05,regX:18.5}},{t:this.ikNode_2,p:{rotation:-7.3342,x:101.2,y:-5.6,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-7.5855,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.3288,x:130.9,y:145.7,regX:18.5}},{t:this.ikNode_2,p:{rotation:-9.1682,x:108.55,y:-5.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-9.4819,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.7944,x:143.1,y:144.9,regX:18.5}},{t:this.ikNode_2,p:{rotation:-11.002,x:115.95,y:-5.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-11.3782,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2602,x:155.1,y:143.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.8356,x:123.3,y:-5.45,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-13.2746,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7261,x:167.25,y:142.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-14.6692,x:130.65,y:-5.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-15.1714,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1924,x:179.3,y:140.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-16.5026,x:138.05,y:-6.6,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-17.068,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.658,x:191.3,y:137.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:-18.3362,x:145.3,y:-7.55,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-18.9647,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.1239,x:203.2,y:135.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-20.1701,x:152.6,y:-8.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-20.8609,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.5893,x:215.05,y:132.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-22.0037,x:159.85,y:-10.2,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-22.7572,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.0551,x:226.75,y:128.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.8377,x:166.9,y:-11.8,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:-24.6539,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.5213,x:238.45,y:124.65,regX:18.5}},{t:this.ikNode_2,p:{rotation:-25.6716,x:174.15,y:-13.7,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:-26.5502,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.987,x:249.75,y:120.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:-27.505,x:181.2,y:-15.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-28.4464,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.4532,x:261.1,y:115.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-29.339,x:188.2,y:-18.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-30.3432,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.9189,x:272.2,y:110.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-31.1723,x:195.05,y:-20.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-32.2401,x:112.9,y:-228.05,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.3844,x:283.2,y:105.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-33.006,x:201.9,y:-23.75,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-34.1362,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.8505,x:294,y:99.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-34.8397,x:208.65,y:-26.7,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:-36.0328,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.3161,x:304.65,y:93.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-36.6732,x:215.2,y:-30.1,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-37.9296,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.7824,x:315.15,y:87.15,regX:18.5}},{t:this.ikNode_2,p:{rotation:-38.5073,x:221.7,y:-33.5,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-39.8254,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2477,x:325.2,y:80.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-40.341,x:228.05,y:-37.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-41.7223,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.7136,x:335.2,y:73.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-42.1749,x:234.3,y:-41.2,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-43.6188,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.1793,x:344.9,y:65.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:-44.009,x:240.4,y:-45.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-45.515,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.6458,x:354.35,y:58.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-45.8426,x:246.4,y:-49.55,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-47.4117,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.1112,x:363.6,y:50.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-47.676,x:252.25,y:-54.1,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-49.3086,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.5775,x:372.55,y:41.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-49.5101,x:257.95,y:-58.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-51.2047,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.0428,x:381.3,y:33.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-51.3433,x:263.5,y:-63.7,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-53.1007,x:113.05,y:-227.85,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.5091,x:389.65,y:24.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-53.1775,x:268.8,y:-68.65,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-54.9975,x:113.05,y:-227.85,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.058,x:381.5,y:32.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:-51.4044,x:263.65,y:-63.85,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-53.1644,x:112.95,y:-227.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.608,x:373.1,y:41.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-49.6317,x:258.3,y:-59.15,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-51.3309,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.1577,x:364.5,y:49.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-47.8592,x:252.8,y:-54.6,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-49.4977,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.7074,x:355.6,y:57.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-46.0869,x:247.25,y:-50.2,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-47.6648,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.2568,x:346.5,y:64.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-44.3138,x:241.4,y:-45.95,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:-45.8315,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.807,x:337.1,y:71.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-42.5413,x:235.55,y:-42,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-43.9978,x:112.9,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.3569,x:327.55,y:78.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-40.7689,x:229.6,y:-38.1,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-42.165,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.9067,x:317.8,y:85.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:-38.9968,x:223.4,y:-34.55,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-40.3317,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.4561,x:307.8,y:91.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-37.2238,x:217.2,y:-31.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-38.498,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.0053,x:297.55,y:97.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-35.451,x:210.8,y:-27.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-36.6644,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.5551,x:287.2,y:103.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-33.6789,x:204.35,y:-24.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-34.8317,x:113,y:-227.85,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.1053,x:276.6,y:108.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-31.9059,x:197.8,y:-22.05,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-32.9985,x:112.9,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.6552,x:265.95,y:113.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-30.1335,x:191.15,y:-19.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-31.1653,x:112.95,y:-227.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.2046,x:255.05,y:118.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-28.3612,x:184.45,y:-17,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-29.3319,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.7545,x:244.05,y:122.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-26.5881,x:177.7,y:-14.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-27.4984,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.304,x:233.05,y:126.5,regX:18.5}},{t:this.ikNode_2,p:{rotation:-24.8155,x:170.8,y:-12.9,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-25.665,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.8538,x:221.7,y:130.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.0432,x:163.95,y:-11.15,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-23.8322,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.4032,x:210.3,y:133.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-21.2702,x:156.95,y:-9.65,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-21.999,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.9528,x:198.85,y:136.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-19.498,x:149.95,y:-8.35,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-20.1654,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.5028,x:187.3,y:138.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-17.7258,x:142.9,y:-7.25,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-18.3327,x:112.9,y:-228.15,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.0521,x:175.7,y:140.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-15.9526,x:135.7,y:-6.4,regX:85.3,regY:4.2}},{t:this.ikNode_1,p:{rotation:-16.499,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.6017,x:164,y:142.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-14.1798,x:128.75,y:-5.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-14.6656,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.1516,x:152.25,y:144.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.4073,x:121.6,y:-5.4,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-12.832,x:112.95,y:-228.15,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.7016,x:140.65,y:145.1,regX:18.5}},{t:this.ikNode_2,p:{rotation:-10.6352,x:114.5,y:-5.1,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:-10.9992,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.2509,x:128.85,y:145.75,regX:18.5}},{t:this.ikNode_2,p:{rotation:-8.8628,x:107.35,y:-5.3,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-9.1655,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.8004,x:117.05,y:146.05,regX:18.5}},{t:this.ikNode_2,p:{rotation:-7.0901,x:100.2,y:-5.65,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-7.3325,x:112.95,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.3509,x:105.1,y:145.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:-5.3171,x:93.15,y:-5.9,regX:85.4,regY:4.3}},{t:this.ikNode_1,p:{rotation:-5.4997,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9005,x:93.3,y:145.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.5448,x:86,y:-6.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-3.6657,x:112.95,y:-228.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.4503,x:81.5,y:144.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.7724,x:79.05,y:-7.8,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:-1.8328,x:113,y:-228,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:69.85,y:143.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:72.05,y:-8.95,regX:85.4,regY:4.2}},{t:this.ikNode_1,p:{rotation:0,x:113.05,y:-228.05,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-228,453.2,488.3);


// stage content:
(lib.燈籠1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(318.1,99.15,0.3881,0.3881,24.2111,0,0,70.1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(442.4,188.4,0.736,0.736,-22.9436,0,0,69.9,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大燈籠
	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(319,312.1,1,1,-6.245,0,0,69.9,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,287.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.5,280.4,287.20000000000005);
// library properties:
lib.properties = {
	id: 'A88A62140184434DA4F4C78CCB317EBF',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈籠 _1__atlas_1.png?1639281501628", id:"燈籠 _1__atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A88A62140184434DA4F4C78CCB317EBF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;