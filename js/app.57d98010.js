(function(){"use strict";var t={6980:function(t,e,s){var n=s(6848),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("h1",[t._v("你好啊，朋友")]),e("ul",{staticClass:"topnav"},[e("router-link",{attrs:{"active-class":"active",to:"/",exact:""}},[t._v("心理健康相关网站")]),e("router-link",{attrs:{"active-class":"active",to:"/PsyHome"}},[t._v("心理健康知识普及")]),e("router-link",{attrs:{"active-class":"active",to:"/Prevent"}},[t._v("预防措施")]),e("router-link",{attrs:{"active-class":"active",to:"/Interfere"}},[t._v("干预措施")])],1)]),e("router-view")],1)},i=[],r={name:"App"},o=r,l=s(1656),c=(0,l.A)(o,a,i,!1,null,null,null),u=c.exports,d=s(6178),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ipage"},[e("div",{staticClass:"interfere-page",class:{"dark-theme":t.isDarkTheme}},[e("div",{staticClass:"mindfulness-section"},[e("h2",[t._v("正念练习")]),e("div",{staticClass:"audio-control"},t._l(t.audioGuides,(function(s){return e("div",{key:s.id,staticClass:"audio-item"},[e("button",{class:{playing:t.selectedAudio===s.id},on:{click:function(e){return t.toggleAudio(s.id)}}},[t._v(" "+t._s(s.name)+" ")]),e("audio",{attrs:{id:s.id,src:s.src}})])})),0)]),e("div",{staticClass:"journal-section"},[e("h2",[t._v("今日日记")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.journalEntry,expression:"journalEntry"}],attrs:{placeholder:"记录你的想法和感受...",rows:"10"},domProps:{value:t.journalEntry},on:{input:function(e){e.target.composing||(t.journalEntry=e.target.value)}}}),e("div",{staticClass:"mood-selector"},[e("span",[t._v("今日心情：")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMood,expression:"selectedMood"}],staticStyle:{"background-color":"#ffffff4a"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMood=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:""}},[t._v("选择心情")]),t._l(t.moods,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v(" "+t._s(s)+" ")])}))],2)]),e("button",{attrs:{disabled:!t.canSaveEntry},on:{click:t.saveJournalEntry}},[t._v(" 保存日记 ")])]),t.journalEntries.length>0?e("div",{staticClass:"journal-history"},[e("h2",[t._v("历史日记")]),e("ul",t._l(t.journalEntries,(function(s,n){return e("li",{key:s.date},[t.editingIndex!==n?e("div",[e("strong",[t._v(t._s(t.formatDate(s.date)))]),t._v(" - 心情: "+t._s(s.mood)+" "),e("p",[t._v(t._s(t.truncateText(s.content)))]),e("div",{staticClass:"entry-actions"},[e("button",{staticClass:"edit-btn",on:{click:function(e){return t.startEditing(n)}}},[t._v("编辑")]),e("button",{staticClass:"delete-btn",on:{click:function(e){return t.deleteEntry(n)}}},[t._v("删除")])])]):e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editingEntry.content,expression:"editingEntry.content"}],attrs:{rows:"3"},domProps:{value:t.editingEntry.content},on:{input:function(e){e.target.composing||t.$set(t.editingEntry,"content",e.target.value)}}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.editingEntry.mood,expression:"editingEntry.mood"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editingEntry,"mood",e.target.multiple?s:s[0])}}},t._l(t.moods,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"entry-actions"},[e("button",{staticClass:"save-btn",on:{click:function(e){return t.saveEdit(n)}}},[t._v("保存")]),e("button",{staticClass:"cancel-btn",on:{click:t.cancelEdit}},[t._v("取消")])])])])})),0)]):t._e()])])},m=[],h={name:"InterferePage",data(){return{selectedAudio:"",isAudioPlaying:!1,audio:null,audioGuides:[{id:"breathing",name:"呼吸练习",src:"../audio/breathing.m4a"},{id:"bodyscan",name:"身体扫描",src:"../audio/bodyscan.m4a"},{id:"loving-kindness",name:"慈心冥想",src:"../audio/loving-kindness.m4a"}],journalEntry:"",selectedMood:"",moods:["开心","平静","焦虑","沮丧","兴奋"],journalEntries:[],editingIndex:-1,editingEntry:{content:"",mood:""}}},computed:{canSaveEntry(){return""!==this.journalEntry.trim()&&""!==this.selectedMood}},methods:{toggleTimer(){this.isTimerRunning?this.pauseTimer():this.startTimer()},startTimer(){this.isTimerRunning=!0,this.timerInterval=setInterval((()=>{this.remainingTime>0?this.remainingTime--:this.pauseTimer()}),1e3)},pauseTimer(){this.isTimerRunning=!1,clearInterval(this.timerInterval)},resetTimer(){this.pauseTimer(),this.remainingTime=this.initialTime},formatTime(t){const e=Math.floor(t/60),s=t%60;return`${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`},toggleAudio(t){const e=document.getElementById(t);this.selectedAudio!==t||e.paused?(this.stopAudio(),this.selectedAudio=t,this.playAudio(e)):this.stopAudio()},playAudio(t){t.play(),this.isAudioPlaying=!0},stopAudio(){if(this.selectedAudio){const t=document.getElementById(this.selectedAudio);t.pause(),t.currentTime=0}this.isAudioPlaying=!1,this.selectedAudio=""},saveJournalEntry(){const t={date:(new Date).toISOString(),content:this.journalEntry,mood:this.selectedMood};this.journalEntries.unshift(t),this.saveToLocalStorage(),this.journalEntry="",this.selectedMood=""},formatDate(t){return new Date(t).toLocaleDateString()},truncateText(t,e=50){return t.length>e?t.slice(0,e)+"...":t},startEditing(t){this.editingIndex=t,this.editingEntry={...this.journalEntries[t]}},saveEdit(t){this.journalEntries[t]={...this.editingEntry},this.cancelEdit(),this.saveToLocalStorage()},cancelEdit(){this.editingIndex=-1,this.editingEntry={content:"",mood:""}},deleteEntry(t){confirm("确定要删除这条日记吗？")&&(this.journalEntries.splice(t,1),this.saveToLocalStorage())},saveToLocalStorage(){localStorage.setItem("journalEntries",JSON.stringify(this.journalEntries))},loadFromLocalStorage(){const t=localStorage.getItem("journalEntries");t&&(this.journalEntries=JSON.parse(t))}},beforeDestroy(){this.pauseTimer(),this.stopAudio()}},p=h,g=(0,l.A)(p,v,m,!1,null,"5ee39ea1",null),f=g.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c"},[e("div",{staticClass:"prevent-page"},[e("h1",[t._v("每日心理健康检查")]),t.assessmentCompleted?e("div",{staticClass:"mood-tracker"},[e("h2",[t._v("测评结果")]),e("p",[t._v("你的心理健康评分: "+t._s(t.assessmentScore)+" / 20")]),e("p",[t._v(t._s(t.assessmentFeedback))]),e("hr"),e("h2",[t._v("今日心情")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.dailyMood,expression:"dailyMood"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.dailyMood=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:""}},[t._v("请选择你的心情")]),e("option",{attrs:{value:"很开心"}},[t._v("很开心 😄")]),e("option",{attrs:{value:"还不错"}},[t._v("还不错 🙂")]),e("option",{attrs:{value:"一般"}},[t._v("一般 😐")]),e("option",{attrs:{value:"有点低落"}},[t._v("有点低落 😔")]),e("option",{attrs:{value:"非常沮丧"}},[t._v("非常沮丧 😢")])]),e("button",{attrs:{disabled:!t.dailyMood},on:{click:t.saveDailyMood}},[t._v("保存今日心情")]),t.moodHistory.length>0?e("div",[e("h3",[t._v("最近的心情记录")]),e("ul",t._l(t.moodHistory.slice(0,5),(function(s,n){return e("li",{key:n},[t._v(" "+t._s(s.date)+": "+t._s(s.mood)+" ")])})),0)]):t._e()]):e("div",{staticClass:"assessment"},[e("h2",[t._v("简单心理测评")]),e("p",[t._v("请回答以下问题,选择最符合你当前状态的选项:")]),t._l(t.questions,(function(s,n){return e("div",{key:n,staticClass:"question"},[e("p",[t._v(t._s(s.text))]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[n],expression:"answers[index]"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.answers,n,e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:""}},[t._v("请选择")]),e("option",{attrs:{value:"1"}},[t._v("很少")]),e("option",{attrs:{value:"2"}},[t._v("有时")]),e("option",{attrs:{value:"3"}},[t._v("经常")]),e("option",{attrs:{value:"4"}},[t._v("总是")])])])})),e("button",{attrs:{disabled:!t.allQuestionsAnswered},on:{click:t.submitAssessment}},[t._v(" 提交测评 ")])],2)])])},y=[],w={name:"PreventPage",data(){return{questions:[{text:"1. 你感到压力很大吗?"},{text:"2. 你容易感到焦虑或紧张吗?"},{text:"3. 你经常感到沮丧或心情低落吗?"},{text:"4. 你对日常活动失去兴趣了吗?"},{text:"5. 你睡眠质量不好?"}],answers:[],assessmentCompleted:!1,assessmentScore:0,dailyMood:"",moodHistory:[]}},computed:{allQuestionsAnswered(){return this.answers.length===this.questions.length&&this.answers.every((t=>""!==t))},assessmentFeedback(){return this.assessmentScore<=5?"你的心理健康状况看起来不错!继续保持积极的生活方式。":this.assessmentScore<=10?"你可能正经历一些压力。试着多休息,和朋友聊聊天。":this.assessmentScore<=15?"你似乎正面临一些挑战。考虑寻求专业帮助或与信任的人交流。":"你可能正处于较大的心理压力中。强烈建议你寻求专业的心理健康支持。"}},methods:{submitAssessment(){this.assessmentScore=this.answers.reduce(((t,e)=>t+parseInt(e)),0),this.assessmentCompleted=!0,this.saveAssessmentResult()},saveDailyMood(){const t=(new Date).toLocaleDateString();this.moodHistory.unshift({date:t,mood:this.dailyMood}),this.saveMoodHistory(),this.dailyMood=""},saveAssessmentResult(){localStorage.setItem("assessmentResult",JSON.stringify({score:this.assessmentScore,date:(new Date).toLocaleDateString()}))},saveMoodHistory(){localStorage.setItem("moodHistory",JSON.stringify(this.moodHistory))},loadSavedData(){const t=localStorage.getItem("assessmentResult");if(t){const{score:e,date:s}=JSON.parse(t);s===(new Date).toLocaleDateString()&&(this.assessmentScore=e,this.assessmentCompleted=!0)}const e=localStorage.getItem("moodHistory");e&&(this.moodHistory=JSON.parse(e))}},mounted(){this.loadSavedData()}},b=w,k=(0,l.A)(b,_,y,!1,null,"5dab1072",null),x=k.exports,E=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"psyhome"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("h2",[e("a",{attrs:{href:"https://www.thepaper.cn/newsDetail_forward_29016011",target:"_blank"}},[t._v("世界精神卫生日心理科普 | 如何应对压力，保持心理健康？")])]),e("h5",[t._v("2024-10-12 10:57 山西 来源：澎湃新闻·澎湃号·政务")]),e("p",[t._v(" 随着生活节奏的加快、工作压力的增大以及信息时代的冲击，当前，心理健康问题已成为全球性的重大公共卫生挑战。抑郁、焦虑、睡眠障碍等心理健康问题日益普遍。国家也比较重视心理健康工作，《“健康中国2030”规划纲要》，《关于实施健康中国行动的意见》《“十四五”国民健康规划》等，将心理健康和精神卫生工作作为重要内容，并部署定期开展“世界精神卫生日”等宣传活动，营造全社会支持精神卫生工作的良好氛围。 ")]),e("img",{staticClass:"fakeimg",staticStyle:{height:"200px"},attrs:{src:s(8369),alt:""}})])]),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("h2",[e("a",{attrs:{href:"https://www.thepaper.cn/newsDetail_forward_16537723",target:"_blank"}},[t._v("心理推文 | 阳光雨露，洒满心田；心理健康,你我同行")])]),e("h5",[t._v("2022-01-30 10:28 山西 来源：澎湃新闻·澎湃号·政务")]),e("p",[t._v(" 阳光雨露，洒满心田； 心理健康，你我同行 不知从何时开始，我们的生活节奏变得越来越快。很多人还来不及消化今天的压力，就要被迫面对明天。飞速发展的社会推着每个人向前奔跑，但脚步却日渐沉重。而这不仅引起身体的疾病，也会造成心理的问题，而心理问题常常容易被忽视因而难以及时发现和治疗。但其实在很早以前联合国世界卫生组织就强调过心理健康的重要性。 ")]),e("img",{staticClass:"fakeimg",staticStyle:{height:"200px"},attrs:{src:s(8679),alt:""}})])])]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("h2",[e("a",{attrs:{href:"https://www.xinli001.com/info/100497293",target:"_blank"}},[t._v("“温暖聚落”行动清单 | 周末心灵疗愈之旅")])]),e("h5",[t._v("壹心理")]),e("p",[t._v(" 欢迎小鲸鱼们参加“周末心灵疗愈之旅” 第七周的行动打卡开启了，本周我们的周末行动主题是——感受社交中的温暖与支持 ")]),e("img",{staticClass:"fakeimg",staticStyle:{height:"200px"},attrs:{src:s(366),alt:""}})])]),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("h2",[e("a",{attrs:{href:"https://www.xinli001.com/info/100497210",target:"_blank"}},[t._v("如何有效区分情绪｜直达核心情绪痛苦")])]),e("h5",[t._v("2024-10-09 #王翼科普时间")]),e("p",[t._v(" 九月，在primary care和儿童青少年的心理治疗工作就要告一段落，最近在开展的情绪聚焦的团体治疗中，某些组员反应，需要更好的澄清如何更进一步的区分情绪，下文主要基于我的临床工作经验，展开说明，如何理解情绪，以及更有效的识别核心情绪痛苦，为进一步的情绪转化做铺垫‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍。 ")]),e("img",{staticClass:"fakeimg",staticStyle:{height:"200px"},attrs:{src:s(6153),alt:""}})])])])])}],C={name:"PsyHome"},A=C,j=(0,l.A)(A,E,S,!1,null,"1a244772",null),T=j.exports,I=function(){var t=this;t._self._c;return t._m(0)},M=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"web"},[e("p",[t._v("国内心理网站:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnnmh.cn/",target:"_blank"}},[t._v("国家心理健康网")])]),e("li",[e("a",{attrs:{href:"https://www.tang-xinli.com/",target:"_blank"}},[t._v("糖心理")])]),e("li",[e("a",{attrs:{href:"https://www.xinli001.com/",target:"_blank"}},[t._v("壹心理")])]),e("li",[e("a",{attrs:{href:"https://xinli.univs.cn/",target:"_blank"}},[t._v("全国高校大学生心理健康综合服务平台")])]),e("li",[e("a",{attrs:{href:"https://www.ydl.com/",target:"_blank"}},[t._v("壹点灵")])]),e("li",[e("a",{attrs:{href:"https://www.jiandanxinli.com/",target:"_blank"}},[t._v("简单心理")])]),e("li",[e("a",{attrs:{href:"http://www.quweijie.com/",target:"_blank"}},[t._v("曲伟杰心理")])]),e("li",[e("a",{attrs:{href:"https://kanjianxinli.com/",target:"_blank"}},[t._v("看见心理")])])]),e("p",[t._v("放松心情:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://wuenet.github.io ",target:"_blank"}},[t._v("自制网站")])])])])}],D={name:"PsyWeb"},O=D,P=(0,l.A)(O,I,M,!1,null,"2a872228",null),H=P.exports;const N=new d.A({routes:[{path:"/",component:H},{path:"/PsyHome",component:T},{path:"/Prevent",component:x},{path:"/Interfere",component:f}]});var L=N;n.Ay.config.productionTip=!1,n.Ay.use(d.A),new n.Ay({router:L,render:t=>t(u)}).$mount("#app")},8369:function(t,e,s){t.exports=s.p+"img/image.904d4098.png"},8679:function(t,e,s){t.exports=s.p+"img/image2.c78eb43c.png"},366:function(t,e,s){t.exports=s.p+"img/image3.90fd2eff.png"},6153:function(t,e,s){t.exports=s.p+"img/image4.39542177.jpg"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p=""}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],o=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(e&&e(n);c<r.length;c++)i=r[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunkmy_web"]=self["webpackChunkmy_web"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(6980)}));n=s.O(n)})();
//# sourceMappingURL=app.57d98010.js.map