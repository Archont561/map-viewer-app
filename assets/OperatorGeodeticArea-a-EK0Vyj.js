import{e as y,b as te,j as xe,P as Re,a as Ce,x as _e,g as Me,d as fe,k as De,L as Te,n as Y,B as Z,M as Ge,s as Ee,t as U,u as D,Q as le,Y as b,$ as Pe}from"./Transformation2D-B_tst7So.js";import{K as G,a2 as A,G as se,a3 as x,az as ze,aA as k,L as J,b as we,o as pe,k as ce,f as ue,n as N,p as Le,m as ie,a6 as ke,aB as re,aC as Fe,a0 as qe,aD as Se,aE as ge,aF as C,i as R,aG as ye,aH as K,w as Oe,a1 as be,U as Ne}from"./ProjectionTransformation-PNwa5zN2.js";import{w as Ue}from"./OperatorShapePreservingLength-TmeozzlW.js";import{gg as F,gh as ee}from"./index-8or3xOo5.js";import"./SimpleGeometryCursor-B92kdZ15.js";let Je=class{constructor(e,i,s,n,a=0,t=4){this.m_ptDistFrom=new y,this.m_segStartPt=new y,this.m_segEndPt=new y,this.m_geodeticLength=new G,this.m_az12=new G,this.m_minGeodeticDist=new G,this.m_segStartPt3d=new A,this.m_segEndPt3d=new A,this.m_sr=n,this.m_distCurveType=a,this.m_segCurveType=t,this.m_inputGCS=this.m_sr.getGCS(),this.m_rpu=this.m_inputGCS.getUnit().getUnitToBaseFactor(),this.m_bIsPannablePcs=this.m_sr.getCoordinateSystemType()===2&&this.m_sr.isPannable();const _=se();this.m_inputGCS.querySpheroidData(_),this.m_a=_.majorSemiAxis,this.m_eSquared=_.e2,this.setPointDistFrom(e),this.setSegmentEndPoints(i,s)}setSegmentEndPoints(e,i){this.m_segStartPt.assign(e),this.m_segEndPt.assign(i),this.m_bIsPannablePcs||(this.m_segStartPt.mulThis(this.m_rpu),this.m_segEndPt.mulThis(this.m_rpu)),this.m_segCurveType===2&&(this.m_segStartPt3d.assign(x(this.m_a,this.m_eSquared,this.m_segStartPt)),this.m_segEndPt3d.assign(x(this.m_a,this.m_eSquared,this.m_segEndPt))),this.calculateAndUpdateSegmentLength()}setPointDistFrom(e){this.m_ptDistFrom.assign(e),this.m_ptDistFrom.scale(this.m_rpu)}setSegmentCurveType(e){this.m_segCurveType=e}setDistanceCurveType(e){this.m_distCurveType=e}makeFunctor(){return e=>{let i;switch(this.m_segCurveType){case 0:case 1:case 3:{const s={stack:[],error:void 0,hasError:!1};try{const n=F(s,new G,!1),a=F(s,new G,!1);J.geodeticCoordinate(this.m_a,this.m_eSquared,this.m_segStartPt.x,this.m_segStartPt.y,this.m_geodeticLength.val*e,this.m_az12.val,n,a,this.m_segCurveType),i=new y(n.val,a.val);break}catch(n){s.error=n,s.hasError=!0}finally{ee(s)}}case 2:{const s=A.lerp(this.m_segStartPt3d,this.m_segEndPt3d,e);i=k(this.m_a,this.m_eSquared,s);break}case 4:i=y.lerp(this.m_segStartPt,this.m_segEndPt,e),this.m_bIsPannablePcs&&(ze(this.m_sr,0,[i],1),i.mulThis(this.m_rpu));break;default:te("Invalid curve type")}return J.geodeticDistance(this.m_a,this.m_eSquared,this.m_ptDistFrom.x,this.m_ptDistFrom.y,i.x,i.y,this.m_minGeodeticDist,null,null,this.m_distCurveType),this.m_minGeodeticDist.val}}calculateAndUpdateSegmentLength(){switch(this.m_segCurveType){case 0:case 2:case 1:case 3:J.geodeticDistance(this.m_a,this.m_eSquared,this.m_segStartPt.x,this.m_segStartPt.y,this.m_segEndPt.x,this.m_segEndPt.y,this.m_geodeticLength,this.m_az12,null,this.m_segCurveType);break;case 4:this.m_geodeticLength.val=y.distance(this.m_segStartPt,this.m_segEndPt);break;default:te("Invalid curve type")}}[Symbol.dispose](){this.m_geodeticLength[Symbol.dispose](),this.m_az12[Symbol.dispose](),this.m_minGeodeticDist[Symbol.dispose]()}};class Ye{constructor(e,i,s,n,a=100){this.m_startPt=e.clone(),this.m_endPt=i.clone(),this.m_cE2=n,this.m_cE=Math.sqrt(this.m_cE2),this.m_c1By2e=1/(2*this.m_cE),this.m_cRpu=s.getGCS().getUnit().getUnitToBaseFactor(),this.isPcs=s.getCoordinateSystemType()===2,this.PEProjcs=s.getPECoordSys(),this.m_points=Te(2*a,Number.NaN)}setSegmentEndPoints(e,i){this.m_startPt.assign(e),this.m_endPt.assign(i)}makeFunctor(){return e=>{const i=[0,0];i[0]=this.m_startPt.x*(1-e)+this.m_endPt.x*e,i[1]=this.m_startPt.y*(1-e)+this.m_endPt.y*e,this.isPcs&&qe.projToGeogCenter(this.PEProjcs,1,i,0);const s=Math.sin(i[1]*this.m_cRpu);return this.m_cE2===0?s:-Math.log((1-this.m_cE*s)/(1+this.m_cE*s))*this.m_c1By2e+s/(1-this.m_cE2*s*s)}}}function Xe(u,e,i){const s=new N;u.queryEnvelope(s);const n=Oe(e,s,!0).total(),a=e.getPannableExtent();a.xmin=s.xmin-10*n,a.xmax=s.xmax+10*n;const t=new be().execute(u,a,e,i).getImpl().querySegmentIterator();t.stripAttributes();const _=se();e.querySpheroidData(_);const m=_.e2,o=m===0?2:1,l=new y(0,0),r=new y(0,0),h=new Y(0),p=new Ye(l,r,e,m,100);for(;t.nextPath();)for(;t.hasNextSegment();){const d=t.nextSegment();l.assign(d.getStartXY()),r.assign(d.getEndXY()),p.setSegmentEndPoints(l,r);const g=K(6,0,1,1e-12,1e-15,p.makeFunctor());h.pe((r.x-l.x)*g)}const c=_.majorSemiAxis;return o*c*c*(1-m)*Math.PI*h.getResult()/e.getPannableExtent().width()}function Be(u,e,i,s,n){const a=je(u,e,n);let t=Ae(u,a.first,i,s,n),_=1,m=0,o=0;do{if(_++,a.first*=.5,a.first<50*e.getTolerance(0))return t;a.second*=2,o=Ae(u,a.first,i,s,n),m=Math.abs(o-t),t=o}while(Math.abs(t)>1&&m>1e-8*Math.abs(t)&&(a.second<65e3&&_<8||_<4));return o}function Ae(u,e,i,s,n){const a=new pe().execute(u,e,0,0,n);let t;t=s?new ie().execute(a,s,n):a;const _=i.getUnit().getUnitToBaseFactor()===1?Math.PI/180:1,m=new N;t.queryEnvelope(m);const o=new N,l=new N,r=new N;o.setCoords({xmin:m.xmin,ymin:75*_,xmax:m.xmax,ymax:90*_}),l.setCoords({xmin:m.xmin,ymin:-60*_,xmax:m.xmax,ymax:75*_}),r.setCoords({xmin:m.xmin,ymin:-90*_,xmax:m.xmax,ymax:-60*_}),o.inflateCoords(.01*o.width(),0),l.inflateCoords(.01*l.width(),0),r.inflateCoords(.01*r.width(),0);let h=0;return h+=he(t,o,i,n),h+=he(t,l,i,n),h+=he(t,r,i,n),h}function he(u,e,i,s){const n=new be().execute(u,e,i,s);if(n!==null&&!n.isEmpty()){const a=new N;n.queryEnvelope(a);const{first:t,second:_}=Qe(i,a,!1),m=ce(i,t,null),o=new ie().execute(n,m,s).calculateArea2D();return _&&t.destroy(),o}return 0}const W=[null,null,null,null,null,null,null];function He(u,e,i){const s=u.getUnit().getUnitToBaseFactor(),n=e.getCenter();n.scale(180*s/Math.PI);const a=new y;a.x=0,a.y=0;let t=0;if(t===0){n.y>45?(a.y=b,t=0):n.y<-45?(a.y=-b,t=1):n.x>=45&&n.x<135?(a.x=b,t=2):n.x>=135||n.x<-135?(a.x=b,t=3):n.x<-45&&n.x>=-135?(a.x=-b,t=4):(a.x=0,t=5);const S=s*Math.sqrt(Pe(e.xmin-e.xmax)+Pe(e.ymin-e.ymax)),E=a.clone(),P=e.getCenter();if(P.scale(s),t<2&&(E.x=P.x),y.distance(E,P)+.5*S>b)return null}const _=W[t];if(_!==null&&_.getGCS().equalHorizontal(u))return _;const m=u.getText(),o=a.x,l=a.y,r=0,h=0;let p=0,c=-1;t!==6?c=C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:(Me(i),p=0,c=C.PE_PRJ_CYLINDRICAL_EQAREA);const d=ge("EqualAreaPCS");let g;c===C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?g=`PROJCS["${d}",${m},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${r}],PARAMETER["False_Northing",${h}],PARAMETER["Central_Meridian",${o}],PARAMETER["Latitude_of_Origin",${l}],UNIT["Meter",1.0]]`:c===C.PE_PRJ_CYLINDRICAL_EQAREA?g=`PROJCS["${d}",${m},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${r}],PARAMETER["False_Northing",${h}],PARAMETER["Central_Meridian",${o}],PARAMETER["Standard_Parallel_1",${p}],PARAMETER["Latitude_of_Origin",${l}],UNIT["Meter",1.0]]`:te("getEqualAreaPcsFixed");const f=Ne(g);return W[t]&&W[t].destroy(),W[t]=f,f}function Qe(u,e,i){const s=He(u,e,i);if(s!==null)return le(s,!1);const n=u.getText(),a=u.getUnit().getUnitToBaseFactor(),t=(e.xmin+e.width()/2)*a,_=(e.ymin+e.height()/2)*a,m=0,o=0;let l=0,r=0,h=-1;e.ymin*a>=75*Math.PI/180||e.ymax*a<=-60*Math.PI/180?h=C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:e.ymin>0||e.ymax<0?(l=(e.ymin+1/3*e.height())*a,r=(e.ymin+2/3*e.height())*a,h=C.PE_PRJ_ALBERS):(l=(e.ymin+2/3*e.height())*a,h=C.PE_PRJ_CYLINDRICAL_EQAREA);const p=ge("EqualAreaPCS");let c;return h===C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?c=`PROJCS["${p}",${n},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${m}],PARAMETER["False_Northing",${o}],PARAMETER["Central_Meridian",${t}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:h===C.PE_PRJ_ALBERS?c=`PROJCS["${p}",${n},PROJECTION["Albers"],PARAMETER["False_Easting",${m}],PARAMETER["False_Northing",${o}],PARAMETER["Central_Meridian",${t}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Standard_Parallel_2",${r}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:h===C.PE_PRJ_CYLINDRICAL_EQAREA?c=`PROJCS["${p}",${n},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${m}],PARAMETER["False_Northing",${o}],PARAMETER["Central_Meridian",${t}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:te("getEqualAreaPCSInstance"),le(Ne(c),!0)}function je(u,e,i){const s=u.calculateLength2D(),n=new Ue().execute(u,e,i)/25e3,a=s/u.getSegmentCount()*2;let t=Math.min(a,s/n);return t===0&&(t=1),le(t,s/t)}class Ve{getOperatorType(){return 10314}supportsCurves(){return!0}accelerateGeometry(e,i,s){return!1}canAccelerateGeometry(e){return!1}execute(e,i,s){if(i.getCoordinateSystemType()===0&&Re(""),e.isEmpty()||e.getDimension()<2)return 0;if(xe(e),e.getGeometryType()===Ce.enumEnvelope){const o=new we;return o.addEnvelope(e,!1),this.execute(o,i,s)}let n=e;e.getDescription().getAttributeCount()>1&&(n=e.clone(),n.dropAllAttributes());const a=new pe().execute(n,0,i.getTolerance(0),0,s);let t=null;const _=i.getGCS();_!==i&&(t=ce(i,_));let m=new ue().execute(a,i,!1,s);return m.isEmpty()?0:(m===e&&(m=e.clone()),i.isPannable()?Xe(m,i,s):Be(m,i,_,t,s))}}function me(){return{m_p_PCS:new y,m_factor:Number.NaN,setValues:Ze,assign:We}}function Ze(u,e){this.m_factor=u,this.m_p_PCS.assign(e)}function We(u){this.m_factor=u.m_factor,this.m_p_PCS.assign(u.m_p_PCS)}class Ke{constructor(e,i,s,n){this.m_ptStart=new A,this.m_ptEnd=new A,this.m_ptStart.assign(i),this.m_ptEnd.assign(s),this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x,this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y,this.m_e=Math.sqrt(e),this.m_e2=e,this.m_c1MinusE2=1-e;const a=Math.sin(n);let t;t=this.m_e2===0?2*a:a*(U(this.m_e*a)+1/(1-this.m_e2*a*a)),this.m_baseA=t}setSegmentEndPoints(e,i){this.m_ptStart.assign(e),this.m_ptEnd.assign(i),this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x,this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y}makeFunctor(){return e=>{const i=1-e,s=i*this.m_ptStart.x+e*this.m_ptEnd.x,n=i*this.m_ptStart.y+e*this.m_ptEnd.y,a=i*this.m_ptStart.z+e*this.m_ptEnd.z,t=s*s+n*n,_=a/Math.sqrt(a*a+this.m_c1MinusE2*this.m_c1MinusE2*t);let m;return this.m_e2===0?m=2*_:m=_*(U(this.m_e*_)+1/(1-this.m_e2*_*_)),(this.m_deltaY*s-this.m_deltaX*n)/t*(m-this.m_baseA)}}}function et(){return{e:Number.NaN,one_p_e:Number.NaN,one_m_e:Number.NaN,one_m_e_2:Number.NaN,atanh_e_over_e:Number.NaN,half_qp:Number.NaN,f:Number.NaN,z:Number.NaN}}function oe(){return{sin_phi:Number.NaN,one_p_sin_phi:Number.NaN,one_m_sin_phi:Number.NaN,one_m_e_2_sin_2_phi:Number.NaN,sin_half_phi_pf:Number.NaN,sin_half_phi_pz:Number.NaN,sin_half_asin_e_sin_phi_pf:Number.NaN,sin_half_asin_e_sin_phi_pz:Number.NaN,atanh_sin_phi:Number.NaN,atanh_esin_phi:Number.NaN,make_negative:!1,initialize:tt,changeSign:st,assign:it,clone:nt}}function tt(u,e,i,s){const n=.5*u;this.sin_phi=Math.sin(u);const a=e*this.sin_phi,t=.5*Math.asin(a);this.one_p_sin_phi=1+this.sin_phi,this.one_m_sin_phi=1-this.sin_phi,this.one_m_e_2_sin_2_phi=(1+a)*(1-a),this.sin_half_phi_pf=Math.sin(n+i),this.sin_half_phi_pz=Math.sin(n+s),this.sin_half_asin_e_sin_phi_pf=Math.sin(t+i),this.sin_half_asin_e_sin_phi_pz=Math.sin(t+s),this.atanh_sin_phi=Math.log(this.sin_half_phi_pf/this.sin_half_phi_pz),this.atanh_esin_phi=Math.log(this.sin_half_asin_e_sin_phi_pf/this.sin_half_asin_e_sin_phi_pz)}function st(){this.sin_phi=-this.sin_phi;let u=this.one_p_sin_phi;this.one_p_sin_phi=this.one_m_sin_phi,this.one_m_sin_phi=u,u=this.sin_half_phi_pf,this.sin_half_phi_pf=this.sin_half_phi_pz,this.sin_half_phi_pz=u,u=this.sin_half_asin_e_sin_phi_pf,this.sin_half_asin_e_sin_phi_pf=this.sin_half_asin_e_sin_phi_pz,this.sin_half_asin_e_sin_phi_pz=u,this.atanh_sin_phi=-this.atanh_sin_phi,this.atanh_esin_phi=-this.atanh_esin_phi}function it(u){this.sin_phi=u.sin_phi,this.one_p_sin_phi=u.one_p_sin_phi,this.one_m_sin_phi=u.one_m_sin_phi,this.one_m_e_2_sin_2_phi=u.one_m_e_2_sin_2_phi,this.sin_half_phi_pf=u.sin_half_phi_pf,this.sin_half_phi_pz=u.sin_half_phi_pz,this.sin_half_asin_e_sin_phi_pf=u.sin_half_asin_e_sin_phi_pf,this.sin_half_asin_e_sin_phi_pz=u.sin_half_asin_e_sin_phi_pz,this.atanh_sin_phi=u.atanh_sin_phi,this.atanh_esin_phi=u.atanh_esin_phi,this.make_negative=u.make_negative}function nt(){return{...this}}class at{constructor(e,i,s){this.m_transformPCS2GCS=null,this.m_scaleToRadians=new _e,this.m_scaleToDegrees=new _e,this.m_progressTracker=s,Me(i!==4),this.m_curveType=i,this.m_inputSR=e,e&&e.getCoordinateSystemType()!==0||Re(""),this.m_inputGCS=e.getGCS(),this.m_a=0,this.m_eSquared=0,this.m_b=0,this.m_rpu=0}executePolygonGeodeticArea(e){let i,s=e.clone();if(s.dropAllAttributes(),e.hasNonLinearSegments()&&(s=new pe().execute(s,0,this.m_inputSR.getTolerance(0),0,this.m_progressTracker)),this.m_inputSR.isPannable()){const t=new N;s.queryEnvelope(t);const _=this.m_inputSR.getPannableExtent();if(!_.containsEnvelope(t)){const m=_.getCenterX()-t.getCenterX(),o=new _e;o.setShiftCoords(m,0),s.applyTransformation(o),t.move(m,0);const l=new fe;_.queryIntervalX(l);const r=new fe;t.queryIntervalX(r),s=l.contains(r)?Le(s,this.m_inputSR):new ie().foldInto360RangeGeodetic(s,this.m_inputSR,this.m_curveType)}}if(this.m_transformPCS2GCS?(s=new ue().execute(s,this.m_inputSR,!1,this.m_progressTracker),i=s.createInstance(),ke(this.m_transformPCS2GCS,s,i,this.m_progressTracker)||(i=new ie().execute(s,this.m_transformPCS2GCS,this.m_progressTracker))):i=new ue().execute(s,this.m_inputGCS,!1,this.m_progressTracker),i.isEmpty())return 0;if(this.m_curveType===1){const t=se();return this.m_inputGCS.querySpheroidData(t),this.m_a=t.majorSemiAxis,this.m_eSquared=t.e2,this.loxodromeArea(i)}const n=i.getImpl();this.m_rpu=this.m_inputGCS.getUnit().getUnitToBaseFactor(),this.m_scaleToRadians.setScale(this.m_rpu),n.applyTransformation(this.m_scaleToRadians),this.m_scaleToDegrees=this.m_scaleToRadians,this.m_scaleToDegrees.invertThis();const a=se();if(this.m_inputGCS.querySpheroidData(a),this.m_a=a.majorSemiAxis,this.m_b=a.minorSemiAxis,this.m_eSquared=a.e2,this.m_curveType===2)return this.executeClippedPolygonGreatEllipticArea(i);{const t={stack:[],error:void 0,hasError:!1};try{const _=re.unit(9101),m=this.m_inputGCS.getPECoordSys(),o=F(t,m.cloneAlterUnits(_),!1);let l,r,h=this.executeClippedPolygonGeodeticArea(i,o,0),p=0;do p++,l=this.executeClippedPolygonGeodeticArea(i,o,p),r=Math.abs(l-h),h=l;while(Math.abs(l)>1&&r>1e-8*Math.abs(l)&&p<7);return l}catch(_){t.error=_,t.hasError=!0}finally{ee(t)}}}executeClippedPolygonGeodeticArea(e,i,s){const n={stack:[],error:void 0,hasError:!1};try{const a=new N;e.queryEnvelope(a);const t=F(n,this.getEqualAreaPCSInstance(i,a),!1),_=e.clone();Fe(t,_);const m=50,o=_.getImpl().getAttributeStreamRef(0),l=e.getImpl().getAttributeStreamRef(0),r=F(n,new G,!1),h=F(n,new G,!1),p=40,c=[0,0],d=De(me,p),g=Te(p,-1),f=me(),S=me();let E,P;const v=t;let T=_.calculateArea2D();const w=new Y(0),z=.5*Math.PI,X=1e-10*Math.abs(T)+1e-6,ne=e.getPathCount();let L,O,I,q;const M=new y,$=new y,B=new y,H=new y,Q=new y,j=new y;let de,ae;for(O=e.getPathStart(0),L=0;L<ne;L++,O=I)for(I=e.getPathEnd(L),o.queryPoint2D(I-1<<1,B),l.queryPoint2D(I-1<<1,M),Math.abs(M.y)>z&&(M.y=Z(z,M.y)),q=O;q<I;q++,B.assign(H),M.assign($)){if(o.queryPoint2D(q<<1,H),l.queryPoint2D(q<<1,$),Math.abs($.y)>z&&($.y=Z(z,$.y)),de=y.distance(B,H),de<m||M.y===0&&$.y===0)continue;J.geodeticDistance(this.m_a,this.m_eSquared,M.x,M.y,$.x,$.y,r,h,null,this.m_curveType);const ve=r.val,Ie=h.val;for(f.setValues(0,B),S.setValues(1,H),P=s,d[0].assign(S),g[0]=s,E=0;E>=0;){ae=.5*(f.m_factor+S.m_factor),J.geodeticCoordinate(this.m_a,this.m_eSquared,M.x,M.y,ve*ae,Ie,r,h,this.m_curveType),Q.x=r.val,Q.y=h.val,c[0]=Q.x,c[1]=Q.y,qe.geogToProj(v,1,c),j.x=c[0],j.y=c[1];const $e=-j.offset(f.m_p_PCS,S.m_p_PCS),V=.5*$e*y.distance(f.m_p_PCS,S.m_p_PCS);if(w.pe(V),Math.abs(V)>X||Math.abs(V)>0&&P>0)S.setValues(ae,j),E++,d[E].assign(S),Math.abs(V)<=X?(P--,g[E-1]=P,g[E]=P):(P=g[E-1],g[E]=P);else{if(E<=0)break;f.assign(S),E--,S.assign(d[E]),P=g[E]}}}return T+=w.getResult(),Math.abs(T)}catch(a){n.error=a,n.hasError=!0}finally{ee(n)}}executeClippedPolygonGreatEllipticArea(e){const i=[],s=[],n=new y,a=new y,t=x(1,this.m_eSquared,new y(0,.5*Math.PI)),_=new Y(0),m=new Y(0),o=new Y(0),l=new A,r=new A,h=new N;e.queryLooseEnvelope(h);let p=0;h.containsCoords(h.xmin,0)||(p=Math.abs(h.ymin)<Math.abs(h.ymax)?h.ymin:h.ymax);const c=new Ke(this.m_eSquared,l,r,p),d=this.m_a*this.m_a,g=e.getImpl().querySegmentIterator();for(g.stripAttributes();g.nextPath();)for(;g.hasNextSegment();){const f=g.nextSegment();n.assign(f.getStartXY()),a.assign(f.getEndXY()),a.x-n.x>Math.PI?n.x+=2*Math.PI:a.x-n.x<-Math.PI&&(a.x+=2*Math.PI),this.splitSegmentCrossingItegralThreshold(f,i,s);for(let S of i)l.assign(x(this.m_a,this.m_eSquared,S.getStartXY())),r.assign(x(this.m_a,this.m_eSquared,S.getEndXY())),c.setSegmentEndPoints(l,r),this.adaptiveIntegrationWithRomberg(c,_);for(let S of s){let E=S.getStartXY(),P=S.getEndXY(),v=p;E.y<0&&(P=Ge(E,E=P),E.y=-E.y,P.y=-P.y,v=-v);const T=x(1,this.m_eSquared,E),w=x(1,this.m_eSquared,P),z=Math.min(E.y,P.y),X=Se(this.m_eSquared,E.x,P.x,v,z);m.pe(X);const ne=Math.abs(Se(this.m_eSquared,E.x,P.x,z,b)),L=new A;L.setSub(T,t);const O=new A;O.setSub(w,t);const I=new A;I.setCrossProductVector(L,O);let q=d*(ne-.5*I.length());q=Z(q,P.x-E.x),o.pe(q)}i.length=0,s.length=0}return o.getResult()+d*(.5*(1-this.m_eSquared)*_.getResult()+m.getResult())}getEqualAreaPCSInstance(e,i){const s=i.getCenterX(),n=0,a=0;let t,_;const m=i.height();let o,l;(o=i.ymin>45*Math.PI/180||i.ymax<45*-Math.PI/180)?t=Z(.5*Math.PI,i.getCenterY()):(t=i.getCenterY(),_=i.ymin+m*(2/3));const r=ge("EqualAreaPCS"),h=e.toString();return l=o?re.fromString(C.PE_TYPE_PROJCS,`PROJCS["${r}", ${h}, PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${n}],PARAMETER["False_Northing", ${a}],PARAMETER["Central_Meridian", ${s}], PARAMETER["Latitude_of_Origin", ${t}], UNIT["Meter",1.0]]`):re.fromString(C.PE_TYPE_PROJCS,`PROJCS["${r}", ${h}, PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting", ${n}],PARAMETER["False_Northing", ${a}],PARAMETER["Central_Meridian", ${s}],PARAMETER["Standard_Parallel_1", ${_}],PARAMETER["Latitude_of_Origin", ${t}],UNIT["Meter",1.0]]`),l}splitSegmentCrossingItegralThreshold(e,i,s){const _=x(this.m_a,this.m_eSquared,new y(0,b)),m=x(this.m_a,this.m_eSquared,new y(0,-b)),o=this.splitSegmentPassingThroughPole(e);for(let l of o){const r=l.getStartXY(),h=l.getEndXY(),p=x(this.m_a,this.m_eSquared,r),c=x(this.m_a,this.m_eSquared,h),d=new y,g=new A;let f=A.sqrDistance(_,p),S=A.sqrDistance(p,c);if(f<=100){if(!(S>400)){s.push(new R({start:r,end:h}));continue}g.assign(c.sub(p)),g.normalizeThis(),g.assign(p.add(g.mul(20))),d.assign(k(this.m_a,this.m_eSquared,g)),s.push(new R({start:r,end:d})),r.assign(d)}if(p.assign(x(this.m_a,this.m_eSquared,r)),f=A.sqrDistance(_,c),S=A.sqrDistance(p,c),f<=100){if(!(S>400)){s.push(new R({start:r,end:h}));continue}g.assign(c.sub(p)),g.normalizeThis(),g.assign(c.sub(g.mul(20))),d.assign(k(this.m_a,this.m_eSquared,g)),s.push(new R({start:d,end:h})),h.assign(d)}if(p.assign(x(this.m_a,this.m_eSquared,r)),c.assign(x(this.m_a,this.m_eSquared,h)),f=A.sqrDistance(m,p),S=A.sqrDistance(p,c),f<=100){if(!(S>400)){s.push(new R({start:r,end:h}));continue}g.assign(c.sub(p)),g.normalizeThis(),g.assign(p.add(g.mul(20))),d.assign(k(this.m_a,this.m_eSquared,g)),s.push(new R({start:r,end:d})),r.assign(d)}if(p.assign(x(this.m_a,this.m_eSquared,r)),c.assign(x(this.m_a,this.m_eSquared,h)),f=A.sqrDistance(m,c),S=A.sqrDistance(p,c),f<=100){if(!(S>400)){s.push(new R({start:r,end:h}));continue}g.assign(c.sub(p)),g.normalizeThis(),g.assign(c.sub(g.mul(20))),d.assign(k(this.m_a,this.m_eSquared,g)),s.push(new R({start:d,end:h})),h.assign(d)}i.push(new R({start:r,end:h}))}}splitSegmentPassingThroughPole(e){const i={stack:[],error:void 0,hasError:!1};try{const s=[],n=new A,a=new A,t=new A,_=new y,m=20,o=3.124139361,l=10,r=e.getStartXY(),h=e.getEndXY(),p=F(i,new G,!1);if(J.geodeticDistance(this.m_a,this.m_eSquared,r.x,r.y,h.x,h.y,p,null,null,2),Math.abs(h.x-r.x)>o&&p.val>m){const c=new Je(new y(0,90),r.divide(this.m_rpu),h.divide(this.m_rpu),this.m_inputGCS,2,2);let d=ye(c.makeFunctor(),0,1,1e-10);if(d.second<=l&&d.first>0&&d.first<1)return n.assign(x(this.m_a,this.m_eSquared,r)),a.assign(x(this.m_a,this.m_eSquared,h)),Ee(n,a,d.first,t),_.assign(k(this.m_a,this.m_eSquared,t)),s.push(new R({start:r,end:_})),s.push(new R({start:_,end:h})),s;if(c.setPointDistFrom(new y(0,-90)),d=ye(c.makeFunctor(),0,1,1e-10),d.second<=l&&d.first>0&&d.first<1)return n.assign(x(this.m_a,this.m_eSquared,r)),a.assign(x(this.m_a,this.m_eSquared,h)),Ee(n,a,d.first,t),_.assign(k(this.m_a,this.m_eSquared,t)),s.push(new R({start:r,end:_})),s.push(new R({start:_,end:h})),s}return s.push(new R({start:r,end:h})),s}catch(s){i.error=s,i.hasError=!0}finally{ee(i)}}adaptiveIntegrationWithRomberg(e,i){const s=e.makeFunctor();let n=0,a=1,t=s(n),_=s(a);const m=1e-17,o=1e-14;let l=(n+a)/2,r=s(l),h=Math.abs(r-t),p=Math.abs(_-r),c=0;for(;c++<32&&(h/p<.1||p/h<.1);)h<p?(i.pe(K(5,n,l,o,m,s)),n=l,t=r):(i.pe(K(5,l,a,o,m,s)),a=l,_=r),l=(n+a)/2,r=Math.abs(s(l)),h=Math.abs(r-t),p=Math.abs(_-r);i.pe(K(5,n,a,o,m,s))}loxodromeAreaHemi(e,i,s,n,a){const t=s.clone(),_=a.clone();let m,o,l,r,h,p,c,d,g,f,S,E,P,v,T,w;return t.make_negative&&t.changeSign(),_.make_negative&&_.changeSign(),S=n-i,Math.abs(t.sin_phi)===1||Math.abs(_.sin_phi)===1?e.half_qp*S:t.sin_phi===_.sin_phi?(f=.5*e.one_m_e_2*t.sin_phi*(1/t.one_m_e_2_sin_2_phi+U(e.e*t.sin_phi))*S,f):(T=Math.log(_.sin_half_phi_pf*t.sin_half_phi_pz/(_.sin_half_phi_pz*t.sin_half_phi_pf)),w=Math.log(_.sin_half_asin_e_sin_phi_pf*t.sin_half_asin_e_sin_phi_pz/(_.sin_half_asin_e_sin_phi_pz*t.sin_half_asin_e_sin_phi_pf)),this.m_eSquared===1?(h=0,m=.5*(T+_.sin_phi/_.one_m_e_2_sin_2_phi-t.sin_phi/t.one_m_e_2_sin_2_phi),o=0):(h=-2*e.atanh_e_over_e*(Math.log(_.one_p_sin_phi/t.one_p_sin_phi)-e.e*w),m=(T-e.e*w)/e.one_m_e_2,o=(Math.log(_.one_m_e_2_sin_2_phi/t.one_m_e_2_sin_2_phi)+h/e.atanh_e_over_e)/e.one_m_e_2),l=-w*(t.atanh_esin_phi+_.atanh_esin_phi),r=1/t.one_m_e_2_sin_2_phi-1/_.one_m_e_2_sin_2_phi,p=D(_.one_m_sin_phi/e.one_p_e,e.e)-D(t.one_m_sin_phi/e.one_p_e,e.e),c=D(_.one_p_sin_phi/e.one_p_e,e.e)-D(t.one_p_sin_phi/e.one_p_e,e.e),d=D(t.one_m_sin_phi/-e.one_m_e,e.e)-D(_.one_m_sin_phi/-e.one_m_e,e.e),g=D(t.one_p_sin_phi/-e.one_m_e,e.e)-D(_.one_p_sin_phi/-e.one_m_e,e.e),f=.25/m*(o+l+r+h+.5*(p+c+d+g)),f+=e.half_qp,E=.5*e.one_m_e_2*t.sin_phi*(1/t.one_m_e_2_sin_2_phi+U(e.e*t.sin_phi)),P=.5*e.one_m_e_2*_.sin_phi*(1/_.one_m_e_2_sin_2_phi+U(e.e*_.sin_phi)),P<E&&(v=E,E=P,P=v),f<E&&(f=E),f>P&&(f=P),f*=S,f)}loxodromeArea(e){const i=Math.PI/180;let s=0;const n=et(),a=oe(),t=oe();n.e=Math.sqrt(this.m_eSquared),n.one_p_e=1+n.e,n.one_m_e=1-n.e,n.one_m_e_2=1-this.m_eSquared,n.atanh_e_over_e=U(n.e),this.m_eSquared>=1?n.half_qp=1:n.half_qp=.5*(1+n.atanh_e_over_e*n.one_m_e_2),n.f=.25*Math.PI,n.z=.75*Math.PI,t.initialize(0,n.e,n.f,n.z);const _=e.getPathCount(),m=new y,o=new y,l=e.getImpl().getAttributeStreamRef(0);for(let r=0;r<_;r++){const h=e.getPathStart(r),p=e.getPathEnd(r);if(!(p-h<=1)){l.queryPoint2D(2*(p-1),m);for(let c=h;c<p;c++){l.queryPoint2D(2*c,o);const d=m.y*i,g=o.y*i;if(c===h?(a.initialize(d,n.e,n.f,n.z),a.make_negative=!1):a.assign(t),t.initialize(g,n.e,n.f,n.z),t.make_negative=!1,m.y*o.y<0){if(m.y>=90&&o.y<=-90||o.y>=90&&m.y<=-90)return Number.NaN;const f=oe();f.initialize(0,n.e,n.f,n.z),f.make_negative=!1;const S=a.atanh_sin_phi-n.e*a.atanh_esin_phi,E=t.atanh_sin_phi-n.e*t.atanh_esin_phi,P=(E*m.x-S*o.x)/(E-S);d<0?(a.make_negative=!0,s-=this.loxodromeAreaHemi(n,m.x*i,a,P*i,f),a.make_negative=!1,s+=this.loxodromeAreaHemi(n,P*i,f,o.x*i,t)):(s+=this.loxodromeAreaHemi(n,m.x*i,a,P*i,f),t.make_negative=!0,s-=this.loxodromeAreaHemi(n,P*i,f,o.x*i,t),t.make_negative=!1)}else m.y>=0?s+=this.loxodromeAreaHemi(n,m.x*i,a,o.x*i,t):(a.make_negative=!0,t.make_negative=!0,s-=this.loxodromeAreaHemi(n,m.x*i,a,o.x*i,t),a.make_negative=!1,t.make_negative=!1);m.assign(o)}}}return this.m_a*s*this.m_a}calculate(e){if(e.isEmpty()||e.getDimension()<2)return 0;if(e.getGeometryType()===Ce.enumEnvelope){const i=new we;return i.addEnvelope(e,!1),this.calculate(i)}return this.m_inputSR!==this.m_inputGCS&&this.m_transformPCS2GCS===null&&(this.m_transformPCS2GCS=ce(this.m_inputSR,this.m_inputGCS,null)),this.executePolygonGeodeticArea(e)}}class ut{getOperatorType(){return 10311}supportsCurves(){return!0}accelerateGeometry(e,i,s){return!1}canAccelerateGeometry(e){return!1}execute(e,i,s,n){return xe(e),s===4?new Ve().execute(e,i,n):new at(i,s,n).calculate(e)}}export{ut as OperatorGeodeticArea};
