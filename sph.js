// Created by Yaroslav Pieskov



function generate2(numpnt,radius)
{   var begin = Date.now();
    var wrap = document.getElementById("sphere");
        wrap.classList.remove("rotate");
        wrap.style.width = 200+"px";
        wrap.style.height = 200+"px";
        wrap.innerHTML = '';
    var x,y,z,f,t,xo,yo;
    
    /* 
    * code by Yaroslav Pieskov
    * On PC - loop n-- time to generate 1362 elements: 59ms, 65ms, 52ms, 61ms
    *
    * On PC - loop n++ time to generate 1362 elements: 72ms, 71ms, 66ms, 60ms
    */
    //for(n=numpnt;n>=1;n--){
    for(n=1;n<=numpnt;n++){
        f = Math.acos(-1 + (2 * n - 1) / numpnt); 
        t = Math.sqrt(numpnt * Math.PI) * f;
        x = Math.round(radius * Math.sin(f) * Math.cos(t)); 
        y = Math.round(radius * Math.sin(f) * Math.sin(t));
        z = Math.round(radius * Math.cos(f));
        xo = Math.atan(y/z)*180/Math.PI;
        yo = Math.atan(x/z)*180/Math.PI;
        zo =Math.atan(y/x)*180/Math.PI;

        var el=document.createElement('div');
        el.id="s"+n;
        el.style.position = "absolute";
        el.style.left = "90px";
        el.style.top = "90px";
        el.style.width = "10px";
        el.style.height = "10px";
        el.style.backgroundColor="hsla("+ Math.ceil(360/numpnt*n) +",50%, 50%, .7)";
        
        var tz="translateX("+x+"px) translateY("+y+"px)  translateZ("+z+"px) rotateX("+xo+"deg) rotateY("+yo+"deg)  rotateZ("+zo+"deg)";// 
        el.style.webkitTransform = tz;
        el.style.MozTransform = tz;
        el.style.msTransform = tz;
        el.style.OTransform = tz;
        el.style.transform = tz;
        
        wrap.appendChild(el);
        
         
    }
    var end = Date.now();
    var time = document.getElementById("gtime")
        time.innerHTML=end - begin+"ms";
        wrap.classList.add("rotate");
}



function rotate(){
    document.getElementById("sphere").classList.toggle("rotate");
}

function run(){
var _0x380d=["\x73\x65\x74\x20\x6E\x75\x6D\x62\x65\x72\x20\x6F\x66\x20\x65\x6C\x65\x6D\x65\x6E\x74\x73","\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74\x50\x72\x6F\x70\x65\x72\x74\x79\x56\x61\x6C\x75\x65","\x6D\x61\x69\x6E","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x3A\x61\x66\x74\x65\x72","\x67\x65\x74\x43\x6F\x6D\x70\x75\x74\x65\x64\x53\x74\x79\x6C\x65","\x22\x62\x79\x20\x59\x61\x72\x6F\x73\x6C\x61\x76\x20\x50\x69\x65\x73\x6B\x6F\x76\x22","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x73\x74\x79\x6C\x65","\x72\x65\x64","\x63\x6F\x6C\x6F\x72","\x77\x68\x69\x74\x65","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x66\x69\x78\x65\x64","\x7A\x49\x6E\x64\x65\x78","\x74\x6F\x70","\x6C\x65\x66\x74","\x68\x65\x69\x67\x68\x74","\x31\x30\x30\x25","\x70\x61\x64\x64\x69\x6E\x67","\x35\x65\x6D\x20\x37\x65\x6D","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x49\x27\x76\x65\x20\x74\x6F\x6C\x64\x20\x79\x6F\x75\x20\x74\x6F\x20\x6E\x6F\x74\x20\x63\x68\x61\x6E\x67\x65\x20\x77\x61\x74\x65\x72\x6D\x61\x72\x6B\x20\x6F\x66\x20\x6D\x79\x20\x63\x6F\x64\x65\x2C\x20\x69\x74\x27\x73\x20\x6E\x6F\x74\x20\x79\x6F\x75\x72\x73\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x72\x65\x73\x70\x65\x63\x74\x20\x61\x75\x74\x68\x6F\x72\x73\x2E\x20\x6F\x72\x69\x67\x69\x6E\x6C\x20\x63\x6F\x64\x65\x20\x69\x73\x20\x68\x65\x72\x65\x3A\x0A","\x61","\x33\x44\x20\x73\x68\x70\x65\x72\x65\x20\x28\x6F\x72\x69\x67\x69\x6E\x61\x6C\x20\x63\x6F\x64\x65\x29","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6F\x64\x65\x2E\x73\x6F\x6C\x6F\x6C\x65\x61\x72\x6E\x2E\x63\x6F\x6D\x2F\x57\x50\x39\x6D\x43\x6A\x33\x45\x6A\x55\x69\x35","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];var polygon=prompt(_0x380d[0],362);var watermark=window[_0x380d[6]](document[_0x380d[4]](_0x380d[3]),_0x380d[5])[_0x380d[2]](_0x380d[1]);var check=_0x380d[7];if(watermark.toString()!== check){var warning=document[_0x380d[9]](_0x380d[8]);warning[_0x380d[11]][_0x380d[10]]= _0x380d[12];warning[_0x380d[11]][_0x380d[13]]= _0x380d[14];warning[_0x380d[11]][_0x380d[15]]= _0x380d[16];warning[_0x380d[11]][_0x380d[17]]= 9999999999;warning[_0x380d[11]][_0x380d[18]]= 0;warning[_0x380d[11]][_0x380d[19]]= 0;warning[_0x380d[11]][_0x380d[20]]= _0x380d[21];warning[_0x380d[11]][_0x380d[22]]= _0x380d[23];warning[_0x380d[24]]= _0x380d[25];var link=document[_0x380d[9]](_0x380d[26]);link[_0x380d[24]]= _0x380d[27];link[_0x380d[28]]= _0x380d[29];warning[_0x380d[30]](link);document[_0x380d[31]][_0x380d[30]](warning)}else {generate2(polygon,160)}

}
window.onload=function(){
    var btn = document.getElementById("rotate")
        btn.addEventListener("click", rotate);
        btn = document.getElementById("new")
        btn.addEventListener("click", run);
        run();
} 
