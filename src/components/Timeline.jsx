import { useLayoutEffect, useEffect, useState } from "preact/hooks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import ElementPC from "./ElementPC";
import ElementTablet from './ElementTablet'
import ElementMobile from "./ElementMobile";
import Car from "./Car";
import BTNToTheTop from "./BTNToTheTop";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const Timeline = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  let varMaringin = width >= 1280 ? Math.min((((width-1280)/148)*55)+170, 225): width >= 768 ? Math.min(((width-768)/62)*20+120,165) : width > 0 ? Math.min(((width-360)/30)*35+90,125) : 0
  let varPadding = width >= 1280 ? Math.min((((width-1280)/148)*3)+11, 14): width >= 768 ? Math.min(((width-768)/62)*2+23, 25) : width > 0 ? Math.min(((width-360)/30)*2+10,12) : 0
  useLayoutEffect(() => {
    document.body.addEventListener("mousemove", e =>{
      var posx;
      var posy;
      if (!e) var e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      }
      else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.getElementById("canvas").scrollLeft;
        posy = e.clientY + document.body.scrollTop  + document.getElementById("canvas").scrollTop;
      }

      gsap.set("#shape", {
        x: posx-30,
        y: posy-50,
      })
    })

    let buttons = document.querySelectorAll("#button")
    buttons.forEach((button)=>{
      // console.log(button)
      const hover = gsap.set("#shape", {
        duration: .5,
        display: "block",
        paused: true
      })
      const btnHover = gsap.to(button, {
        duration: .5,
        background: "#C12121",
        color: "#cccccc",
        paused: true
      })
      button.addEventListener("mouseleave", ()=>{
        hover.reverse(!hover.reverse())
        btnHover.reverse(!btnHover.reverse())
      })
      button.addEventListener("mouseenter", ()=>{
        hover.play()
        btnHover.play()
      })
    })
    
    
    let idleLamp = gsap.timeline({
      repeatDelay: 5,
      repeat: -1,
      yoyo: true,
    }).to('#lampLight', {
      duration: .5,
      fill: "#dddddd"
    }).to('#lampShadow', {
      duration: .5,
      delay: -.5,
      fill: "#cccccc"
    })

    // element reveal animation
    let flags = gsap.utils.toArray('#flag')
    flags.forEach((flag)=>{
      let flagIdle = gsap.timeline({
        paused: true,
        reversed: true,
        repeat: -1,
      }).to(flag, {
        duration: 2,
        rotation: 5,
        transformOrigin: "bottom right",
      }).to(flag, {
        duration: 2,
        rotation: -5,
        transformOrigin: "bottom right",
      }).to(flag, {
        duration: 2,
        rotation: 5,
        transformOrigin: "bottom right",
      })
      gsap.from(flag, {
        scrollTrigger: {
          trigger: flag,
          start: 'top 50%',
          // markers: true,
        },
        onComplete(){flagIdle.play()},
        duration: 1,
        // delay: 1,
        opacity: 0,
        rotation: 90,
        transformOrigin: "bottom right",
        ease: "bounce"
      })
    })
    let robots = gsap.utils.toArray('#robot')
    robots.forEach((robot)=>{
      gsap.timeline({
        scrollTrigger: {
          trigger: robot,
          start: 'top 60%',
          // markers: true,
        },
      }).fromTo(robot, {
        duration: 1,
        opacity: 0,
        x: 40,
        y: -50,
      }, {
        opacity: 1,
        x: -10,
        y: 0
      })
    })
    let questions = gsap.utils.toArray('#question')
    questions.forEach((question)=>{
      let quesntionIdle = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
        reverse: true
      }).from(question, {
        duration: 1,
        rotation: 5,
        scale: 0.8,
      })
      gsap.from(question, {
        onComplete(){
          quesntionIdle.play()
        },
        scrollTrigger: {
          trigger: question,
          start: 'top 50%',
          // markers: true
        },
        duration: 1,
        rotation: '+=720',
        opacity: 0,
        transformOrigin: 'center'
      })
    })
    let laptops  = gsap.utils.toArray("#laptop")
    laptops.forEach((laptop)=>{
      gsap.from(laptop, {
        scrollTrigger: {
          trigger: laptop,
          start: '-100% 70%',
          // markers: true,
        },
        duration: 1,
        x: 50,
        opacity: 0,
      })
    })

    gsap.to("#Polygon", {
      y: 10,
      scale: 1.1,
      transformOrigin: "center",
      stagger: .1,
      yoyo: true,
      repeat: -1,
      ease: "p"
    })
    let sections = gsap.utils.toArray("#section");
    sections.forEach((section)=>{
      let header = section.querySelector("#header")
      let divider = section.querySelector("#divider")
      let detail = section.querySelector("#detail")
      let button = section.querySelector("#button")
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "50% 60%",
          // markers: true
        }
      }).from(header, {
        duration: 0.4,
        ease: 'power4.out',
        skewY: 10,
        stagger: {
          amount: .1
        },
        y: 150,
      }).from(divider, {
        duration: 0.3,
        scaleX: 0,
        transformOrigin: "left"
      }).from(detail, {
        duration: 0.7,
        xPercent: -100,
        opacity: 0,
  
      }).from(button, {
        duration: 0.2,
        opacity: 0,
      })
    })
    ScrollTrigger.matchMedia({
      "(min-width: 1280px)": function(){
        gsap.from("#car", {
          scrollTrigger: {
            trigger: "#motionPathPC",
            start: "top top",
          },
          duration: 1,
          opacity: 0,
        })
        gsap.to("#car", {
          scrollTrigger: {
            trigger: "#motionPathPC",
            start: "top 15%",
            end: 'bottom 80%',
            scrub: true,
            // marker: true,
          },
          motionPath: {
            path: "#motionPathPC",
            align: "#motionPathPC",
            alignOrigin: [0.5, 0.5],
            autoRotate: 90 
          },
          duration: 20,
          immediateRender: true,
          ease: CustomEase.create("custom", "M0,0,C0.072,0.092,0.08,0.163,0.158,0.17,0.328,0.184,0.244,0.414,0.396,0.414,0.464,0.414,0.45,0.609,0.608,0.609,0.667,0.609,0.694,0.84,0.822,0.84,0.952,0.84,0.868,0.94,1,1")
        })
      },
      "(min-width: 768px)": function(){
        gsap.from("#car", {
          scrollTrigger: {
            trigger: "#motionPathTablet",
            start: "top top",
          },
          duration: 1,
          opacity: 0,
        })

        gsap.to("#car", {
          scrollTrigger: {
            trigger: "#motionPathTablet",
            start: "top 10%",
            scrub: 1,
            // marker: true,
          },
          motionPath: {
            path: "#motionPathTablet",
            align: "#motionPathTablet",
            alignOrigin: [0.5, 0.5],
            autoRotate: 90 
          },
          duration: 20,
          immediateRender: true,
          ease:CustomEase.create("custom", "M0,0,C0.08,0.158,0.392,0.69,0.666,0.738,0.869,0.773,0.888,0.973,1,1")
        })
      },
      "(max-width: 768px)": function(){
        gsap.from("#car", {
          scrollTrigger: {
            trigger: "#motionPathMobile",
            start: "top top",
          },
          duration: 1,
          opacity: 0,
        })
        gsap.to("#car", {
          scrollTrigger: {
            trigger: "#motionPathMobile",
            start: "top 20%",
            scrub: 1,
            // marker: true,
          },
          motionPath: {
            path: "#motionPathMobile",
            align: "#motionPathMobile",
            alignOrigin: [0.5, 0.5],
            autoRotate: 90 
          },
          duration: 20,
          immediateRender: true,
          ease:CustomEase.create("custom", "M0,0,C0.08,0.158,0.392,0.69,0.666,0.738,0.869,0.773,0.888,0.973,1,1")
        })
      }
    })

    return () => {
    };
  }, [])


  return (
    <>
      <BTNToTheTop/>
      <div id="shape" className="rounded-full absolute w-20 h-20 bg-red-900 z-[1000] mix-blend-screen hidden pointer-events-none"></div>
      <div className="w-full h-full bg-contain bg-full bg-no-repeat md:bg-cover xl:bg-cover bg-road-bg-mobile md:bg-road-bg-ipad xl:bg-road-bg-pc">
        <div className="flex justify-center align-middle px-2 lg:px-10">
            <div className="object-center object-contain">
              <Car/>
              <ElementPC/>
              <ElementTablet/>
              <ElementMobile/>
            </div>
            <div className="absolute translate-x-10 md:translate-x-28 xl:translate-x-[-40%] xl:left-1/2" style={`padding: ${varPadding}rem 0`}>
              <section id="section" className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin}px`}>
                <div id="wrapper" className="overflow-hidden relative">
                  <h2 id="header" className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">Open House</h2>
                </div>
                <hr id="divider" className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-20 md:w-40 xl:w-80"/>
                <p id="detail" className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[292px] md:max-w-md xl:max-w-xl">กิจกรรมที่เปิดให้นักเรียน คุณครู และผู้ปกครอง สัมผัสบรรยากาศ รับรู้ถึงสิ่งอำนวยความสะดวก ของคณะฯ และทำกิจกรรมร่วมกันกับนักศึกษาใน ภาควิชาต่าง ๆ</p>
                <button id="button" className="translate-x-16 md:translate-x-32 xl:translate-x-0 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[5.5px] md:border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-4 md:px-8 xl:px-16 text-[28px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white" onClick={()=>{navigate('')}}>Open House</button>
              </section>
              <section id="section" className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin+40}px`}>

                <div id="wrapper" className="overflow-hidden relative">
                  <h2 id="header" className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">การแข่งขันนวัตกรรม</h2>
                </div>
                <hr id="divider" className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-20 md:w-40 xl:w-80"/>
                <p id="detail" className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[292px] md:max-w-md xl:max-w-xl">การแข่งขันเพื่อสนับสนุนการสร้างสรรค์และ ส่งเสริมการพัฒนาสิ่งประดิษฐ์ หรือผลงานวิจัย เชิงประยุกต์ทางด้านวิทยาศาสตร์ และเทคโนโลยี ที่ตอบสนองการใช้งานได้จริง !</p>
                <button id="button" className="translate-x-16 md:translate-x-32 xl:translate-x-80 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[5.5px] md:border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-4 md:px-8 xl:px-16 text-[28px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white" onClick={()=>{window.location.href = 'https://www.facebook.com/profile.php?id=100087709743668'}}>Learn More</button>

              </section>
              <section id="section" className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin}px`}>
                <div id="wrapper" className="overflow-hidden relative">
                  <h2 id="header" className="text-bloodred-200 text-[38px] md:text-7xl xl:text-8xl font-bold whitespace-nowrap">การแข่งขันตอบปัญหาวิชาการ</h2>
                </div>
                <hr id="divider" className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-20 md:w-40 xl:w-80"/>
                <p id="detail" className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[292px] md:max-w-md xl:max-w-xl">การแข่งขันที่ทดสอบความรู้ความสามารถทางด้านวิศวกรรมศาสตร์ วิทยาศาสตร์ และเทคโนโลยี ให้เกิดทักษะและตระหนักถึงองค์ความรู้ที่สามารถ นำไปใช้ให้เกิดประโยชน์ต่อไปได้ !</p>
                <button id="button" className="translate-x-16 md:translate-x-32 xl:translate-x-0 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[5.5px] md:border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-4 md:px-8 xl:px-16 text-[28px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white" onClick={()=>{window.location.href = 'https://www.facebook.com/profile.php?id=100087709743668'}}>Learn More</button>

              </section>
              <section id="section" className="flex-1 font-DB-Heavent">
                <div id="wrapper" className="overflow-hidden relative">
                  <h2 id="header" className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">Bangmod Hackathon</h2>
                </div>
                <hr id="divider" className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-20 md:w-40 xl:w-80"/>
                <p id="detail" className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[292px] md:max-w-md xl:max-w-xl">การแข่งขันเพื่อสนับสนุนการแก้ไขปัญหาด้วยการ เขียนโปรแกรมทางคอมพิวเตอร์ผ่านภาษาซี และ ส่งเสริมให้ได้มีโอกาสพัฒนาศักยภาพ การคิด วิเคราะห์ และการลงมือทำจริง !</p>
                <button id="button" className="translate-x-16 md:translate-x-32 xl:translate-x-80 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[5.5px] md:border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-4 md:px-8 xl:px-16 text-[28px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white" onClick={()=>{window.location.href = 'https://www.facebook.com/BangmodHackathon'}}>Hackathon</button>
              </section>
            </div>
        </div>
        
      </div>
    </>
  );
}
