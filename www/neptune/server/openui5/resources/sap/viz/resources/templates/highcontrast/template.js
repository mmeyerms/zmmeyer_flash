(function(){var a="#AAAAAA";var b="#333333";var d="#D8D8D8";var r={sliderStyle:{borderColor:"#4e4e4e",highlightBorderColor:"#ffffff"},tooltipStyle:{fontColor:"#ffffff",borderColor:"#4e4e4e",highlightBorderColor:"#009de0",backgroundColor:"#333333"},thumbStyle:{indicatorStartColor:"#555555",indicatorEndColor:"#0c0c0c",indicatorPressStartColor:"#555555",indicatorPressEndColor:"#0c0c0c",indicatorBorderStartColor:"#ffffff",indicatorBorderEndColor:"#ffffff",indicatorPressBorderStartColor:"#8b8b8b",indicatorPressBorderEndColor:"#8b8b8b",indicatorInternalLineColor:"#ffffff",subRectBorderColor:"#ffffff",subRectColor:"#ffffff",rectOpacity:0.3,rectColor:'#009de0',rectPressOpacity:0.3,rectPressColor:"#ffffff",},};var t={background:{color:"#000000",borderColor:"#ffffff"},drawingEffect:"normal",footerLabel:{color:"#ffffff"},separationLine:{borderBottomColor:"ffffff"},bodyDimensionLabel:{color:"#c0c0c0"},bodyDimensionValue:{color:"#c0c0c0"},bodyMeasureLabel:{color:"#c0c0c0"},bodyMeasureValue:{color:"#ffffff"},closeButton:{backgroundColor:"#000000",borderColor:"#ffffff"}};var c={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},};var e={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false}},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true},axisline:{visible:false},gridline:{type:"line",color:b},color:a},yAxis:{title:{visible:true},gridline:{color:b},color:a},xAxis2:{title:{visible:true},axisline:{visible:false},gridline:{color:b},color:a},plotArea:{drawingEffect:"normal"},zAxis:{title:{visible:true},color:a}};var f={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},},plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},};var v={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var g={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false}},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},zAxis:{title:{visible:true,},color:a}};var h={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},},};var s={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var j={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var k={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var l={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var m={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var n={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var o={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var p={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var q={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var u={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var w={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var x={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",dataLabel:{style:{color:d}}},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var y={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},plotArea:{drawingEffect:"normal",referenceLine:{defaultStyle:{color:"#ffffff",label:{color:"#ffffff",}}},dataLabel:{style:{color:d}}},tooltip:t,yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},};var z={legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},plotArea:{drawingEffect:"normal"},tooltip:t};var A={legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"}};var B={background:{visible:false,},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal",valueAxis:{title:{visible:true,},gridline:{color:b,}},dataline:{fill:{transparency:0,},},polarGrid:{color:b},},};var C={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,},color:a,},xAxis:{title:{visible:true,},axisline:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:true},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal",},};var D={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},axisline:{visible:true,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal",},};sap.viz.extapi.env.Template.register({id:"highcontrast",name:"HighContrast",version:"4.0.0",properties:{'viz/bar':c,'viz/3d_bar':e,'viz/image_bar':c,'viz/multi_bar':c,'viz/dual_bar':f,'viz/multi_dual_bar':f,'viz/column':v,'viz/3d_column':g,'viz/multi_column':v,'viz/dual_column':h,'viz/multi_dual_column':h,'viz/stacked_bar':s,'viz/multi_stacked_bar':s,'viz/dual_stacked_bar':j,'viz/multi_dual_stacked_bar':j,'viz/100_stacked_bar':s,'viz/multi_100_stacked_bar':s,'viz/100_dual_stacked_bar':j,'viz/multi_100_dual_stacked_bar':j,'viz/stacked_column':k,'viz/multi_stacked_column':k,'viz/dual_stacked_column':l,'viz/multi_dual_stacked_column':l,'viz/100_stacked_column':k,'viz/multi_100_stacked_column':k,'viz/100_dual_stacked_column':l,'viz/multi_100_dual_stacked_column':l,'riv/cbar':{background:{drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,plotArea:{drawingEffect:"normal"},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},},'viz/combination':q,'viz/horizontal_combination':w,'viz/dual_combination':u,'viz/dual_horizontal_combination':x,'viz/boxplot':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal"}},'viz/horizontal_boxplot':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal"}},'viz/waterfall':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},color:a,},plotArea:{drawingEffect:"normal"}},'viz/horizontal_waterfall':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},color:a,},plotArea:{drawingEffect:"normal"}},'viz/stacked_waterfall':k,'viz/horizontal_stacked_waterfall':s,'viz/line':m,'viz/multi_line':m,'viz/dual_line':n,'viz/multi_dual_line':n,'viz/horizontal_line':o,'viz/multi_horizontal_line':o,'viz/dual_horizontal_line':p,'viz/multi_dual_horizontal_line':p,'viz/area':m,'viz/multi_area':m,'viz/100_area':m,'viz/multi_100_area':m,'viz/horizontal_area':o,'viz/multi_horizontal_area':o,'viz/100_horizontal_area':o,'viz/multi_100_horizontal_area':o,'viz/pie':z,'viz/multi_pie':z,'viz/donut':z,'viz/multi_donut':z,'viz/pie_with_depth':A,'viz/donut_with_depth':A,'viz/multi_pie_with_depth':A,'viz/multi_donut_with_depth':A,'viz/bubble':y,'viz/multi_bubble':y,'viz/scatter':y,'viz/multi_scatter':y,'viz/scatter_matrix':y,'viz/radar':B,'viz/multi_radar':B,'viz/tagcloud':{legend:{title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t},'viz/heatmap':{legend:{title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t,xAxis:{title:{visible:true,},color:a,},yAxis:{title:{visible:true,},color:a,},},'viz/treemap':{legend:{title:{visible:true},scrollBarStyle:{fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}}},tooltip:t},'viz/mekko':C,'viz/100_mekko':C,'viz/horizontal_mekko':D,'viz/100_horizontal_mekko':D,'viz/number':{tooltip:t,plotArea:{valuePoint:{label:{fontColor:'#D8D8D8'}}}},'info/line':F(m),'info/dual_line':G(n),'info/horizontal_line':F(o),'info/dual_horizontal_line':G(p),'info/bar':F(c),'info/dual_bar':G(f),'info/column':F(v),'info/dual_column':G(h),'info/stacked_bar':F(s),'info/dual_stacked_bar':G(j),'info/100_stacked_bar':F(s),'info/100_dual_stacked_bar':G(j),'info/stacked_column':F(k),'info/dual_stacked_column':G(l),'info/100_stacked_column':F(k),'info/100_dual_stacked_column':G(l),'info/bubble':H(y),'info/scatter':H(y),'info/time_bubble':H(y),'info/pie':F(z),'info/donut':F(z),'info/combination':F(q),'info/bullet':E()},css:"\
  .v-m-title .v-title{fill:#D8D8D8;}\
  .v-subtitle{fill:#D8D8D8;}\
  .v-longtick{stroke:#5e5e5e;}\
  .v-title{fill:#D8D8D8;}\
  .v-hidden-title{fill:#737373;}\
  .v-label{fill:#D8D8D8;}\
  .v-background-body{fill:#1B1B1B;}\
  .v-pie .v-donut-title{fill:#D8D8D8;}\
  .v-polar-axis-label{fill:#D8D8D8;}\
  .v-datalabel{fill:#D8D8D8;}\
  .v-hoverline{stroke:#606060;}\
  .v-hovershadow{fill:#606060;}\
  .v-hovershadow-mousedown{fill:#cccccc;}\
  .v-m-tooltip .v-background{background-color:#000000; border-color:#ffffff; fill:#1B1B1B;stroke:#FFFFFF;}\
  .v-m-tooltip .v-footer-label{color:#ffffff; fill:#D8D8D8;}\
  .v-m-tooltip .v-body-dimension-label{color:#c0c0c0;}\
  .v-m-tooltip .v-body-dimension-value{color:#c0c0c0;}\
  .v-m-tooltip .v-body-measure-label{color:#c0c0c0;}\
  .v-m-tooltip .v-body-measure-value{color:#ffffff;}\
  .v-m-tooltip .v-separationline{border-bottom-color:#ffffff;}\
  .v-m-tooltip .v-closeButton{background-color:#000000;border-color:#ffffff;}\
  .v-datapoint-default{stroke:#000000}\
  .v-datapoint-hover{stroke:#999999}\
  .v-datapoint-selected{stroke:#999999}\
  .v-datapoint .v-boxplotmidline{stroke:#ffffff}\
  .v-scrollbarThumb{fill:#c0c0c0}\
  ",});function E(){var i={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},tooltip:t,legend:{drawingEffect:"normal",title:{visible:true},},plotArea:{drawingEffect:"normal",targetValueColor:"#333333",targetShadowColor:"#ffffff",gridline:{visible:true}},categoryAxis2:{label:{style:{color:"#FFFFFF"}}}};i.valueAxis={title:{visible:false},axisLine:{visible:false},color:a};i.categoryAxis={title:{visible:false},color:a,hoverShadow:{color:"#606060"},hoverShadowMouseDown:{color:"#cccccc"}};i.plotArea.scrollBarStyle={fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}};I(i);return i}function F(J){var K={};for(var i in J){if(J.hasOwnProperty(i)){K[i]=J[i]}}K.valueAxis={title:{visible:true},axisLine:{visible:false},gridline:{type:"line",color:b,showLastLine:true},color:a};K.categoryAxis={title:{visible:true},gridline:{color:b},color:a,hoverShadow:{color:"#606060"},hoverShadowMouseDown:{color:"#cccccc"}};K.plotArea.scrollBarStyle={fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}};I(K);return K}function G(J){var K={};for(var i in J){if(J.hasOwnProperty(i)){K[i]=J[i]}}K.valueAxis={title:{visible:true,applyAxislineColor:true,},axisLine:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,}};K.categoryAxis={title:{visible:true,},gridline:{color:b,},color:a,hoverShadow:{color:"#606060"},hoverShadowMouseDown:{color:"#cccccc"}};K.valueAxis2={title:{visible:true,applyAxislineColor:true,},axisLine:{visible:false,},gridline:{color:b,},};K.plotArea.scrollBarStyle={fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}};I(K);return K}function H(J){var K={};for(var i in J){if(J.hasOwnProperty(i)){K[i]=J[i]}}K.valueAxis={title:{visible:true},axisLine:{visible:true},gridline:{type:"line",color:b,showLastLine:true},color:a};K.valueAxis2={title:{visible:true},axisLine:{visible:false},gridline:{color:b},color:a};K.plotArea.scrollBarStyle={fill:"#a6a6a6",hoverFill:"#888888",scrollingArea:{fill:'#333333',opacity:1,}};I(K);return K}function I(i){i.plotArea.background=i.background;delete i.background;delete i.xAxis;delete i.xAxis2;delete i.yAxis;delete i.yAxis2;var J=i.general=i.general||{};J.background={color:"#1B1B1B"};if(!i.plotArea.gridline){i.plotArea.gridline={}}i.plotArea.gridline.color=b;i.legend=i.legend||{};i.legend.hoverShadow={color:"#606060"};i.legend.hoverShadowMouseDown={color:"#cccccc"};i.legend.scrollBarStyle=i.plotArea.scrollBarStyle}})();
