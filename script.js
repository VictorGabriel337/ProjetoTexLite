function createTicks(svgId, centerX, centerY, radius, steps, maxVal, color){
      const g = document.getElementById(svgId);
      for(let i=0;i<=steps;i++){
        const ratio=i/steps;
        const ang=-90+ratio*180;
        const rad=ang*Math.PI/180;
        const x1=centerX+Math.cos(rad)*(radius-18);
        const y1=centerY+Math.sin(rad)*(radius-18);
        const x2=centerX+Math.cos(rad)*radius;
        const y2=centerY+Math.sin(rad)*radius;
        const line=document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1',x1);
        line.setAttribute('y1',y1);
        line.setAttribute('x2',x2);
        line.setAttribute('y2',y2);
        line.setAttribute('stroke',i%5===0?color:'rgba(157,224,255,0.2)');
        line.setAttribute('stroke-width',i%5===0?2:1);
        g.appendChild(line);
      }
    }
    createTicks("speedTicks",210,170,190,40,200,"rgba(157,224,255,0.9)");
    createTicks("rpmTicks",140,170,100,20,8000,"rgba(157,224,255,0.9)");
    createTicks("fuelTicks",140,170,100,10,100,"rgba(157,224,255,0.9)");

    function animateNeedle(id,value,max){
      const needle=document.getElementById(id);
      const ang=-90+(value/max)*180;
      needle.style.transform=`rotate(${ang}deg)`;
    }

    function updateValues(){
      let speed=Math.random()*200;
      let rpm=Math.random()*8000;
      let fuel=Math.random()*100;
      animateNeedle("speedNeedle",speed,200);
      animateNeedle("rpmNeedle",rpm,8000);
      animateNeedle("fuelNeedle",fuel,100);
      document.getElementById("speedValue").textContent=Math.round(speed)+" km/h";
      document.getElementById("rpmValue").textContent=Math.round(rpm/1000)+"k RPM";
      document.getElementById("fuelValue").textContent="F: "+Math.round(fuel)+"%";
    }
    setInterval(updateValues,2000);
    updateValues();

    const speedLabels = document.getElementById("speed-labels");
for(let i=0;i<=10;i++){
    const angle = -90 + i*18; // -90° a 90° para semi-círculo
    const x = 210 + 180 * Math.cos(angle * Math.PI / 180);
    const y = 170 + 180 * Math.sin(angle * Math.PI / 180);
    const text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x",x);
    text.setAttribute("y",y);
    text.setAttribute("text-anchor","middle");
    text.setAttribute("alignment-baseline","middle");
    text.setAttribute("fill","#9de0ff");
    text.setAttribute("font-size","12");
    text.setAttribute("font-weight","700");
    text.textContent = i*20;
    speedLabels.appendChild(text);
}
