"use strict";(self.webpackChunkassiment=self.webpackChunkassiment||[]).push([[222],{2222:(A,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>x});var d=r(9808),l=r(2382),u=r(8588),h=r(4466),t=r(1223);let g=(()=>{class n{constructor(){this.close=new t.vpe}onClose(){this.close.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onClose()}),t.qZA(),t.TgZ(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return o.onClose()}),t._uU(6,"close"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(o.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:rgb(230,230,238);box-shadow:0 2px 8px rbga(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),n})(),m=(()=>{class n{constructor(e){this.viweContainerRef=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","appPlaceholeder",""]]}),n})();var f=r(5599);let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["App-Loding-Spinner"]],decls:5,vars:0,consts:[[1,"lds-ellipsis"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div")(2,"div")(3,"div")(4,"div"),t.qZA())},styles:[".lds-ellipsis[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:rgb(67,197,240);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}"]}),n})();function b(n,s){1&n&&(t.TgZ(0,"div",5),t._UZ(1,"App-Loding-Spinner"),t.qZA())}function C(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",6,7),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(1);return t.oxw().onSubmit(i)}),t.TgZ(2,"div",8)(3,"label",9),t._uU(4,"E-Mail"),t.qZA(),t._UZ(5,"input",10),t.qZA(),t.TgZ(6,"div",8)(7,"label",11),t._uU(8,"PassWord"),t.qZA(),t._UZ(9,"input",12),t.qZA(),t.TgZ(10,"div")(11,"button",13),t._uU(12),t.qZA(),t._uU(13," | "),t.TgZ(14,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSwichMode()}),t._uU(15),t.qZA()()()}if(2&n){const e=t.MAs(1),o=t.oxw();t.xp6(11),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",o.isLoginMode?"LogIn":"Sign Up"," "),t.xp6(3),t.hij(" Swich To ",o.isLoginMode?"Sign Up":"Log In "," ")}}let _=(()=>{class n{constructor(e,o,i){this.authServic=e,this.router=o,this.ComponentFactoryResolver=i,this.isLoginMode=!0,this.isLoding=!1,this.error=null}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}onSwichMode(){this.isLoginMode=!this.isLoginMode}onSubmit(e){if(!e.valid)return;const o=e.value.email,i=e.value.password;let c;this.isLoding=!0,c=this.isLoginMode?this.authServic.login(o,i):this.authServic.signup(o,i),c.subscribe(a=>{console.log(a),this.isLoding=!1,this.router.navigate(["/recipes"])},a=>{console.log(a),this.error=a,this.showErrorAlert(a),this.isLoding=!1}),e.reset()}onHandleErr(){this.error=null}showErrorAlert(e){const o=this.ComponentFactoryResolver.resolveComponentFactory(g),i=this.alertHost.viweContainerRef;i.clear();const c=i.createComponent(o);c.instance.message=e,this.closeSub=c.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),i.clear()})}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.e),t.Y36(u.F0),t.Y36(t._Vd))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],viewQuery:function(e,o){if(1&e&&t.Gf(m,5),2&e){let i;t.iGM(i=t.CRH())&&(o.alertHost=i.first)}},decls:5,vars:2,consts:[["appPlaceholeder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align:center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","Email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"ng-tamplete",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,b,2,0,"div",3),t.YNc(4,C,16,3,"form",4),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.isLoding),t.xp6(1),t.Q6J("ngIf",!o.isLoding))},directives:[m,d.O5,v,l._Y,l.JL,l.F,l.Fj,l.JJ,l.On,l.Q7,l.on,l.wO],styles:[""]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,l.u5,u.Bz.forChild([{path:"",component:_}]),h.p]]}),n})()}}]);