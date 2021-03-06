(function(window){
const document  = window.document,
  navigator = window.navigator,
  location  = window.location
//objeto con metodos provados
let private = {
//estilos que serán llamados desde ciclo()
  stls:{
    alignContent:function(el, val){el.style.alignContent=val},
    alignItems:function(el, val){el.style.alignItems=val},
    alignSelf:function(el, val){el.style.alignSelf=val},
    animation:function(el, val){el.style.animation=val},
    animationDelay:function(el, val){el.style.animationDelay=val},
    animationDirection:function(el, val){el.style.animationDirection=val},
    animationDuration:function(el, val){el.style.animationDuration=val},
    animationFillMode:function(el, val){el.style.animationFillMode=val},
    animationIterationCount:function(el, val){el.style.animationIterationCount=val},
    animationName:function(el, val){el.style.animationName=val},
    animationTimingFunction:function(el, val){el.style.animationTimingFunction=val},
    animationPlayState:function(el, val){el.style.animationPlayState=val},
    background:function(el, val){el.style.background=val},
    backgroundAttachment:function(el, val){el.style.backgroundAttachment=val},
    backgroundColor:function(el, val){el.style.backgroundColor=val},
    backgroundImage:function(el, val){el.style.backgroundImage=val},
    backgroundPosition:function(el, val){el.style.backgroundPosition=val},
    backgroundRepeat:function(el, val){el.style.backgroundRepeat=val},
    backgroundClip:function(el, val){el.style.backgroundClip=val},
    backgroundOrigin:function(el, val){el.style.backgroundOrigin=val},
    backgroundSize:function(el, val){el.style.backgroundSize=val},
    backgroundVisibility:function(el, val){el.style.backgroundVisibility=val},
    border:function(el, val){el.style.border=val},
    borderBottom:function(el, val){el.style.borderBottom=val},
    borderBottomColor:function(el, val){el.style.borderBottomColor=val},
    borderBottomLeftRadius:function(el, val){el.style.borderBottomLeftRadius=val},
    borderBottomRightRadius:function(el, val){el.style.borderBottomRightRadius=val},
    borderBottomStyle:function(el, val){el.style.borderBottomStyle=val},
    borderBottomWith:function(el, val){el.style.borderBottomWith=val},
    borderCollapse:function(el, val){el.style.borderCollapse=val},
    borderColor:function(el, val){el.style.borderColor=val},
    borderImage:function(el, val){el.style.borderImage=val},
    borderImageOutset:function(el, val){el.style.borderImageOutset=val},
    borderImageRepeat:function(el, val){el.style.borderImageRepeat=val},
    borderImageSlice:function(el, val){el.style.borderImageSlice=val},
    borderImageSource:function(el, val){el.style.borderImageSource=val},
    borderImageWidth:function(el, val){el.style.borderImageWidth=val},
    borderLeft:function(el, val){el.style.borderLeft=val},
    borderLeftColor:function(el, val){el.style.borderLeftColor=val},
    borderLeftStyle:function(el, val){el.style.borderLeftStyle=val},
    borderLeftWidth:function(el, val){el.style.borderLeftWidth=val},
    borderRadius:function(el, val){el.style.borderRadius=val},
    borderRight:function(el, val){el.style.borderRight=val},
    borderRightColor:function(el, val){el.style.borderRightColor=val},
    borderRightStyle:function(el, val){el.style.borderRightStyle=val},
    borderRightWidth:function(el, val){el.style.borderRightWidth=val},
    borderSpacing:function(el, val){el.style.borderSpacing=val},
    borderStyle:function(el, val){el.style.borderStyle=val},
    borderTop:function(el, val){el.style.borderTop=val},
    borderTopColor:function(el, val){el.style.borderTopColor=val},
    borderTopLeftRadius:function(el, val){el.style.borderTopLeftRadius=val},
    borderTopRightRadius:function(el, val){el.style.borderTopRightRadius=val},
    borderTopStyle:function(el, val){el.style.borderTopStyle=val},
    borderTopWidth:function(el, val){el.style.borderTopWidth=val},
    borderWith:function(el, val){el.style.borderWith=val},
    bottom:function(el, val){el.style.bottom=val},
    boxDecorationBreak:function(el, val){el.style.boxDecorationBreak=val},
    boxShadow:function(el, val){el.style.boxShadow=val},
    boxSizing:function(el, val){el.style.boxSizing=val},
    captionSide:function(el, val){el.style.captionSide=val},
    clear:function(el, val){el.style.clear=val},
    clip:function(el, val){el.style.clip=val},
    color:function(el, val){el.style.color=val},
    columnCount:function(el, val){el.style.columnCount=val},
    columnFill:function(el, val){el.style.columnFill=val},
    columnGap:function(el, val){el.style.columnGap=val},
    columnRule:function(el, val){el.style.columnRule=val},
    columnRuleColor:function(el, val){el.style.columnRulecolor=val},
    columnStyle:function(el, val){el.style.columnStyle=val},
    columnWidth:function(el, val){el.style.columnWidth=val},
    content:function(el, val){el.style.content=val},
    counterIncrement:function(el, val){el.style.counterIncrement=val},
    counterRest:function(el, val){el.style.counterRest=val},
    cursor:function(el, val){el.style.cursor=val},
    direction:function(el, val){el.style.direction=val},
    display:function(el, val){el.style.display=val},
    emptyCells:function(el, val){el.style.emptyCells=val},
    filter:function(el, val){el.style.filter=val},
    flex:function(el, val){el.style.flex=val},
    flexBasis:function(el, val){el.style.flexBasis=val},
    flexDirection:function(el, val){el.style.flexDirection=val},
    flexFlow:function(el, val){el.style.flexFlow=val},
    flexGrow:function(el, val){el.style.flexGrow=val},
    flexShrink:function(el, val){el.style.flexShrink=val},
    flexWrap:function(el, val){el.style.flexWrap=val},
    cssFloat:function(el, val){el.style.cssFloat=val},
    font:function(el, val){el.style.font=val},
    fontFamily:function(el, val){el.style.fontFamily=val},
    fontSize:function(el, val){el.style.fontSize=val},
    fontStyle:function(el, val){el.style.fontStyle=val},
    fontVariant:function(el, val){el.style.fontVariant=val},
    fontWeight:function(el, val){el.style.fontWeight=val},
    fontSizeAdjust:function(el, val){el.style.fontSizeAdjust=val},
    fontStrech:function(el, val){el.style.fontStrech=val},
    hangingPunctuation:function(el, val){el.style.hangingPunctuation=val},
    height:function(el, val){el.style.height=val},
    hypens:function(el, val){el.style.hypens=val},
    icon:function(el, val){el.style.icon=val},
    imageOrientation:function(el, val){el.style.imageOrientation=val},
    isolation:function(el, val){el.style.isolation=val},
    justifyContent:function(el, val){el.style.justifyContent=val},
    left:function(el, val){el.style.left=val},
    letterSpacing:function(el, val){el.style.letterSpacing=val},
    lineHeight:function(el, val){el.style.lineHeight=val},
    listStyle:function(el, val){el.style.listStyle=val},
    listStyleImage:function(el, val){el.style.listStyle=val},
    listStylePosition:function(el, val){el.style.listStylePosition=val},
    listStyleType:function(el, val){el.style.listStyleType=val},
    margin:function(el, val){el.style.margin=val},
    marginBottom:function(el, val){el.style.marginBottom=val},
    marginLeft:function(el, val){el.style.marginLeft=val},
    marginRigth:function(el, val){el.style.marginRigth=val},
    marginTop:function(el, val){el.style.marginTop=val},
    maxHeight:function(el, val){el.style.maxHeight=val},
    maxWidth:function(el, val){el.style.maxWidth=val},
    minHeight:function(el, val){el.style.minHeight=val},
    minWidth:function(el, val){el.style.minWidth=val},
    navDown:function(el, val){el.style.navDown=val},
    navIndex:function(el, val){el.style.navIndex=val},
    navLeft:function(el, val){el.style.navLeft=val},
    navRight:function(el, val){el.style.navRight=val},
    navUp:function(el, val){el.style.navUp=val},
    objectFit:function(el, val){el.style.objectFit=val},
    objectPosition:function(el, val){el.style.objectPosition=val},
    opacity:function(el, val){el.style.opacity=val},
    order:function(el, val){el.style.order=val},
    orphans:function(el, val){el.style.orphans=val},
    outline:function(el, val){el.style.outline=val},
    outlineColor:function(el, val){el.style.outlineColor=val},
    outlineOffset:function(el, val){el.style.outlineOffset=val},
    outlineStyle:function(el, val){el.style.outlineStyle=val},
    outlineWidth:function(el, val){el.style.outlineWidth=val},
    overflow:function(el, val){el.style.overflow=val},
    overflowX:function(el, val){el.style.overflowX=val},
    overflowy:function(el, val){el.style.overflowy=val},
    padding:function(el, val){el.style.padding=val},
    paddingBottom:function(el, val){el.style.paddingBottom=val},
    paddingLeft:function(el, val){el.style.paddingLeft=val},
    paddingRight:function(el, val){el.style.paddingRight=val},
    paddingTop:function(el, val){el.style.paddingTop=val},
    pageBreakAfter:function(el, val){el.style.pageBreakAfter=val},
    pageBreakBefore:function(el, val){el.style.pageBreakBefore=val},
    pageBreakInside:function(el, val){el.style.pageBreakInside=val},
    perspective:function(el, val){el.style.perspective=val},
    perspectiveOrigin:function(el, val){el.style.perspectiveOrigin=val},
    position:function(el, val){el.style.position=val},
    quotes:function(el, val){el.style.quotes=val},
    resize:function(el, val){el.style.resize=val},
    right:function(el, val){el.style.right=val},
    tableLayout:function(el, val){el.style.tableLayout=val},
    tabSize:function(el, val){el.style.tabSize=val},
    textAlign:function(el, val){el.style.textAlign=val},
    textAlignLast:function(el, val){el.style.textAlignLast=val},
    textDecoration:function(el, val){el.style.textDecoration=val},
    textDecorationColor:function(el, val){el.style.textDecorationColor=val},
    textDecorationLine:function(el, val){el.style.textDecorationLine=val},
    textDecorationStyle:function(el, val){el.style.textDecorationStyle=val},
    textIdent:function(el, val){el.style.textIdent=val},
    textJustify:function(el, val){el.style.textJustify=val},
    textOverflow:function(el, val){el.style.textOverflow=val},
    textShadow:function(el, val){el.style.textShadow=val},
    textTransform:function(el, val){el.style.textTransform=val},
    top:function(el, val){el.style.top=val},
    transform:function(el, val){el.style.transform=val},
    transformOrigin:function(el, val){el.style.transformOrigin=val},
    transformStyle:function(el, val){el.style.transformStyle=val},
    transition:function(el, val){el.style.transition=val},
    transitionProperty:function(el, val){el.style.transitionProperty=val},
    transitionDuration:function(el, val){el.style.transitionDuration=val},
    transitionTimingFunction:function(el, val){el.style.transitionTimingFunction=val},
    transitionDelay:function(el, val){el.style.transitionDelay=val},
    unicodeBidi:function(el, val){el.style.unicodeBidi=val},
    userSelect:function(el, val){el.style.userSelect=val},
    verticalAlign:function(el, val){el.style.verticalAlign=val},
    visibility:function(el, val){el.style.visibility=val},
    whiteSpace:function(el, val){el.style.whiteSpace=val},
    width:function(el, val){el.style.width=val},
    wordBreak:function(el, val){el.style.wordBreak=val},
    wordSpacing:function(el, val){el.style.wordSpacing=val},
    wordWrap:function(el, val){el.style.wordWrap=val},
    windows:function(el, val){el.style.windows=val},
    zIndex:function(el, val){el.style.zIndex=val},
  },
  //obtener el tipo de dato
  toType : function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  },
  //validar el tipo de dato
  validar:function(elemento,dato){
    return private.toType(elemento) == dato
  },
  //iteracion del elemento y llamada a la funcion
  ciclo : function(el, stl, val){
    const cant = el.length
    for(var i=0;i<cant;i++){
      private.stls[stl](el[i],val)
    }
  }
}
//Declaracion de la funcion principal
let SUI = function(el){
//validación del tipo de dato
  if (!private.validar(el,"string")) {
    console.error("El parametro de SUI() debe ser un string")
  }else{
    let elements=document.querySelectorAll(el)
    function SuperUI(){
      elements.forEach((element,index)=>{
        this[index]=element
      })
    }
    SuperUI.prototype ={
      stl:function(stl,val){
        if(private.validar(stl,"string") && val){
          private.ciclo(elements,stl, val)
        }else if(private.validar(stl,"object") && !val){
          for(estilo in stl){
            private.ciclo(elements,estilo, stl[estilo])
          }
        }else{
          console.error("Los parametros de stl() solo pueden ser dos strings o un objeto")
        }    
      }
    }
    let superInst = new SuperUI()
    return superInst
  }
}
window.SUI = SUI
})(window)
