import svgPaths from "./svg-la34qn6lxk";
import imgMasthead from "./7e50743c804ee3c01b7423cd7410540d607630a7.png";
import imgBanner from "./b61ddef3ff52b0309c8a2fd4af3e966c857e676b.png";
import imgBanner1 from "./60f9fb18e1bc05163f491f43719fa005a1442a9a.png";
import imgAboutUsVideo5Avif from "./9a9ce726295619ea19449274a555a92c19f8e160.png";
import imgAboutUsVideo1Avif from "./b442b27272759095e81bdaa59026d65ff58848a8.png";
import imgAboutUsVideo2Avif from "./f811db402561ac4618774082487a9277278520d6.png";
import imgBanner2 from "./cfbed30553dbb23a0182b6a00b208d04652310d4.png";
import imgBanner3 from "./e9b9e548482695ff32113414dd2e219d14cff1ed.png";
import imgDanielBrooks from "./bc882ab6f8aa96e6721bee6dbda92cd82beecc73.png";
import imgSophiaMartinez from "./d4ed52df554aaced1523f317520330df1e775aa8.png";
import imgMichaelThompson from "./6227151ae0dc0b8d85b6852296e53b55c10cc0cc.png";
import imgEmilyWatson from "./0c78238cb3d8b555fb11234a74c9597e6c5f0635.png";
import imgJamesCarter from "./1f2185a24a00c6e534df15a6b22d08b6e3fe6394.png";
import imgOliviaReynolds from "./57f952276db0c39e2de2bf5b9c0745afb90acfad.png";
import imgAboutStore1Avif from "./68c0c899032b91340d1216b2f5c3ab08d01af124.png";
import imgAboutStore2Avif from "./6fa362f70c65e079f6369557f3bbdca2f603fc59.png";
import imgAboutStore3Avif from "./282aa82fa0ab4cb97e712380c198d87e2ff950d4.png";
import { products } from "../../app/data/shopData";
import imgImageContact1Png from "./c2000d94d8e5d7dd1fac8c081b9ad2c8a35297d1.png";
import imgFigure from "./f6a7586ab049f7e8f087fb60cf77c048db40a1e4.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";
import imgLogo from "./89309c4327d643be9d6885f84d12f69b214a62e7.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[30px] text-center uppercase whitespace-nowrap">
        <p className="leading-[45px]">ABOUT US</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-34.72px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">Home</span>
          <span className="font-['Jost:Regular',sans-serif] font-normal leading-[16px]">{` `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 absolute h-[6.997px] left-[calc(50%-6.09px)] top-[5.85px] w-[3.5px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 6.99684">
          <path d={svgPaths.p2389b80} fill="var(--fill-0, #222222)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+28.63px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">About Us</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start max-w-[inherit] px-[15px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[160px] pt-[160.8px] px-[100.4px] right-0 top-[169px]" data-name="masthead">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[99.8%] left-0 max-w-none top-0 w-[151.12%]" src={imgMasthead} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Learn More About Our Design!</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.6px_0_20px_0] items-start" data-name="Container">
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[40px] text-center whitespace-nowrap">
        <p className="leading-[55px] mb-0">Our Mission? We Bring Harmony And</p>
        <p className="leading-[55px]">Practicality Into Great Designs For Everyone</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <Margin />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[164px] items-start justify-center max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container2 />
    </div>
  );
}

function Banner() {
  return (
    <div className="h-[473.25px] max-w-[916.9400024414062px] relative shrink-0 w-[916.94px]" data-name="banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBanner} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Banner />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[916.94px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="min-h-px relative self-stretch shrink-0 w-[936.94px]" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] py-[10px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Banner1() {
  return (
    <div className="h-[473.23px] max-w-[443.6499938964844px] relative shrink-0 w-[443.65px]" data-name="banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBanner1} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Banner1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[443.65px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="min-h-px relative self-stretch shrink-0 w-[463.65px]" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[10.02px] pt-[10px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[493.25px] items-start max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container13 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[50px] px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[25px] mb-0">We build footwear experiences around comfort, clarity, and everyday movement.</p>
        <p className="leading-[25px] mb-0">Every product story is arranged so customers can compare materials, fit, and style without visual clutter.</p>
        <p className="leading-[25px]">The result is a practical shopping flow that still feels premium and energetic.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start justify-center pb-[15px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[24px] mb-0">Our team keeps the layout focused: clear hero messaging, balanced product cards, and a detail page that lets the shoe imagery lead.</p>
        <p className="leading-[24px] mb-0">Filters, carts, and product options are built to respond instantly while preserving the clean MateShoes visual rhythm.</p>
        <p className="leading-[24px]">This makes the store feel closer to a real commerce site instead of a static design export.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[9px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[125px] items-start justify-center pb-[15px] relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[24px] mb-0">Spacing, typography, and media are tuned together so each section reads naturally.</p>
        <p className="leading-[24px]">The page keeps the Figma mood while behaving like a finished store.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <Margin1 />
          <Margin2 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[238px] items-start justify-center max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container18 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[40px] text-center whitespace-nowrap">
        <p className="leading-[60px]">Videos From Our Clients</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] items-center pb-[1.4px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Real Customer Experience</p>
      </div>
    </div>
  );
}

function AboutUsVideo5Avif() {
  return (
    <div className="aspect-[840/532] relative shrink-0 w-full" data-name="about-us-video5.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 bg-[#f6f6f6]" src={products[0].image} style={{ height: "100%", objectFit: "contain", padding: 42, width: "100%" }} />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="h-[28px] relative shrink-0 w-[14.15px]" data-name="Container" />;
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[60px] shrink-0 size-[60px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Container38 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[44.36%_46.43%] items-start" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[840px] overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <AboutUsVideo5Avif />
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[15px] py-[10px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[870px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function AboutUsVideo1Avif() {
  return (
    <div className="aspect-[840/532] relative shrink-0 w-full" data-name="about-us-video1.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 bg-[#f6f6f6]" src={products[2].image} style={{ height: "100%", objectFit: "contain", padding: 42, width: "100%" }} />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[9.298px] relative shrink-0 w-[8.105px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.10547 9.29796">
        <g id="Container">
          <path d={svgPaths.p3e03aa40} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[60px] shrink-0 size-[60px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[44.36%_46.43%] items-start" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[840px] overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <AboutUsVideo1Avif />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[15px] py-[10px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[870px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function AboutUsVideo2Avif() {
  return (
    <div className="aspect-[840/532] relative shrink-0 w-full" data-name="about-us-video2.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 bg-[#f6f6f6]" src={products[3].image} style={{ height: "100%", objectFit: "contain", padding: 42, width: "100%" }} />
      </div>
    </div>
  );
}

function Container50() {
  return <div className="h-[28px] relative shrink-0 w-[14.15px]" data-name="Container" />;
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[60px] shrink-0 size-[60px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Container50 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[44.36%_46.43%] items-start" data-name="Container">
      <Link4 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[840px] overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <AboutUsVideo2Avif />
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[15px] py-[10px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[870px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[552px] items-start pl-[870px] pr-[21520px] relative shrink-0 w-[25000px]" data-name="Container">
      <Container33 />
      <Container39 />
      <Container45 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-1414px] right-[-15px] top-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[552px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[708px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[65px] pt-[115px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container26 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.6px] right-0 top-[-0.6px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[14px]">How We Work</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[40px] text-center whitespace-nowrap">
        <p className="leading-[60px] mb-0">We Give You The Power To Create Spaces</p>
        <p className="leading-[60px]">That Are Just Right For You</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <Container55 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[154px] items-start justify-center max-w-[700px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Section5() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[42px] px-[345px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function AboutIcon1Svg() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="about-icon1.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="about-icon1.svg">
          <path d={svgPaths.p4655900} fill="var(--fill-0, #1C1C1C)" id="Vector" />
          <path d={svgPaths.p2dc6ec80} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
          <path d={svgPaths.p2844c0} fill="var(--fill-0, #1C1C1C)" id="Vector_3" />
          <path d={svgPaths.p1e117800} fill="var(--fill-0, #1C1C1C)" id="Vector_4" />
          <path d={svgPaths.p2d6ccd80} fill="var(--fill-0, #1C1C1C)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function FigureAboutIcon1Svg() {
  return (
    <div className="aspect-[48/48] content-stretch flex flex-col items-center justify-center max-w-[433.3299865722656px] overflow-clip relative rounded-[5px] shrink-0" data-name="Figure → about-icon1.svg">
      <AboutIcon1Svg />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[36px]">Choose A Theme</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Select a store look that matches your footwear brand.</p>
        <p className="leading-[24px]">Keep layouts clean, premium, and easy to scan.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container63 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[28.2px] items-center relative shrink-0 w-full" data-name="Container">
      <FigureAboutIcon1Svg />
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[433.33px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] py-[15px] relative size-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function AboutIcon2Svg() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="about-icon2.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="about-icon2.svg">
          <path d={svgPaths.pb1b7b30} fill="var(--fill-0, #1C1C1C)" id="Vector" />
          <path d={svgPaths.p1667e400} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FigureAboutIcon2Svg() {
  return (
    <div className="aspect-[48/48] content-stretch flex flex-col items-center justify-center max-w-[433.3299865722656px] overflow-clip relative rounded-[5px] shrink-0" data-name="Figure → about-icon2.svg">
      <AboutIcon2Svg />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="capitalize flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[36px]">Add Products</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Upload shoe photos, prices, colors, sizes, and stock.</p>
        <p className="leading-[24px]">Everything stays organized for a real shop flow.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container68 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[28.2px] items-center relative shrink-0 w-full" data-name="Container">
      <FigureAboutIcon2Svg />
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[433.33px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] py-[15px] relative size-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function AboutIcon3Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="about-icon3.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Clip path group">
          <mask height="48" id="mask0_1_5489" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="48" x="0" y="0">
            <path d="M0 0H48V48H0V0V0" fill="var(--fill-0, white)" id="Vector" />
          </mask>
          <g mask="url(#mask0_1_5489)">
            <g id="Group">
              <path d={svgPaths.p1457af00} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
              <path d={svgPaths.p1e560980} fill="var(--fill-0, #1C1C1C)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function FigureAboutIcon3Svg() {
  return (
    <div className="aspect-[48/48] content-stretch flex flex-col items-center justify-center max-w-[433.3299865722656px] overflow-clip relative rounded-[5px] shrink-0" data-name="Figure → about-icon3.svg">
      <AboutIcon3Svg />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="capitalize flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[36px]">Start Selling</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Launch product pages with cart, checkout, and account.</p>
        <p className="leading-[24px]">Customers can browse, filter, and buy with less friction.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container73 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[28.2px] items-center relative shrink-0 w-full" data-name="Container">
      <FigureAboutIcon3Svg />
      <Container72 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[433.33px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] py-[15px] relative size-full">
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[215.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container64 />
      <Container69 />
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col h-[215.2px] items-start relative shrink-0 w-full" data-name="Section">
      <Container58 />
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <Section5 />
          <Section6 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[431.2px] items-start justify-center max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container51 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[22px] w-full">
        <p className="leading-[22px]">Why Choose Us ?</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27px] relative shrink-0 w-full" data-name="Margin">
      <Heading7 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[24px] mb-0">Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum</p>
        <p className="leading-[24px] mb-0">justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac</p>
        <p className="leading-[24px] mb-0">sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem</p>
        <p className="leading-[24px]">elementum varius tristique.</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container76() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[15px] pr-[30px] py-[30px] relative size-full">
          <Margin3 />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container76 />
    </div>
  );
}

function Banner2() {
  return (
    <div className="h-[535.65px] max-w-[660px] relative shrink-0 w-[660px]" data-name="banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBanner2} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Banner2 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Container">
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pl-[30px] pr-[15px] py-[30px] relative size-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[595.65px] items-start max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container79 />
    </div>
  );
}

function Section7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[85px] px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container74 />
    </div>
  );
}

function Banner3() {
  return (
    <div className="h-[535.65px] max-w-[660px] relative shrink-0 w-[660px]" data-name="banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBanner3} />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Banner3 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container88 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container87 />
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pl-[15px] pr-[30px] py-[30px] relative size-full">
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[22px] w-full">
        <p className="leading-[22px]">Trusted Online Shopping</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27px] relative shrink-0 w-full" data-name="Margin">
      <Heading8 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[24px] mb-0">Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum</p>
        <p className="leading-[24px] mb-0">justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac</p>
        <p className="leading-[24px] mb-0">sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem</p>
        <p className="leading-[24px]">elementum varius tristique.</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[30px] pr-[15px] py-[30px] relative size-full">
          <Margin4 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container91 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[595.65px] items-start max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container90 />
    </div>
  );
}

function Section8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container84 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[40px] text-center whitespace-nowrap">
        <p className="leading-[60px] mb-0">The Passionate Team Bringing Our</p>
        <p className="leading-[60px]">Designs To Life</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] items-center max-w-[600px] pb-[1.4px] relative shrink-0 w-[600px]" data-name="Container">
      <Heading9 />
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Our Teams</p>
      </div>
    </div>
  );
}

function DanielBrooks() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="Daniel Brooks">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDanielBrooks} />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Daniel Brooks</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <DanielBrooks />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container103 />
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container102 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container101 />
    </div>
  );
}

function SophiaMartinez() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="Sophia Martinez">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSophiaMartinez} />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Sophia Martinez</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <SophiaMartinez />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container109 />
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container108 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container107 />
    </div>
  );
}

function MichaelThompson() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="Michael Thompson">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMichaelThompson} />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Michael Thompson</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <MichaelThompson />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container115 />
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container114 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container113 />
    </div>
  );
}

function EmilyWatson() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="Emily Watson">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEmilyWatson} />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Emily Watson</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <EmilyWatson />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container121 />
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container120 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container119 />
    </div>
  );
}

function JamesCarter() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="James Carter">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJamesCarter} />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">James Carter</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <JamesCarter />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container127 />
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container126 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container125 />
    </div>
  );
}

function OliviaReynolds() {
  return (
    <div className="h-[362.24px] max-w-[308px] relative shrink-0 w-[278px]" data-name="Olivia Reynolds">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOliviaReynolds} />
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Olivia Reynolds</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">From Envato</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[41.72%_0] items-start opacity-0" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Container">
      <OliviaReynolds />
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 opacity-0" data-name="Overlay" />
      <Container133 />
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[7.2px] px-[15px] relative size-full">
        <Container132 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[308px]" data-name="Container">
      <Container131 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex h-[369.44px] items-start left-[-1996px] pl-[1848px] pr-[1540px] top-0 w-[5236px]" data-name="Container">
      <Container100 />
      <Container106 />
      <Container112 />
      <Container118 />
      <Container124 />
      <Container130 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[369.44px] overflow-clip relative shrink-0 w-[1551px]" data-name="Container">
      <Container99 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container96 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[571.44px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container95 />
    </div>
  );
}

function Section9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[105px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container94 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.6px] right-0 top-[-0.6px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Our Locations</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <Container139 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[40px] text-center whitespace-nowrap">
        <p className="leading-[60px]">Stores System</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
    </div>
  );
}

function AboutStore1Avif() {
  return (
    <div className="h-[293.33px] max-w-[439.989990234375px] relative rounded-[10px] shrink-0 w-[439.99px]" data-name="about-store1.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAboutStore1Avif} />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <AboutStore1Avif />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container145 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[303.33px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container144 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="capitalize flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Los Angeles</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Heading11 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container146 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">3123 Canis Heights Drive, Marina, CA 90071</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container148 />
    </div>
  );
}

function Container143() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin5 />
          <Margin6 />
          <Container147 />
        </div>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container143 />
    </div>
  );
}

function AboutStore2Avif() {
  return (
    <div className="h-[293.33px] max-w-[439.989990234375px] relative rounded-[10px] shrink-0 w-[439.99px]" data-name="about-store2.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAboutStore2Avif} />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <AboutStore2Avif />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container152 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[303.33px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container151 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[24px]">New York</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Heading12 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container153 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">1904 James Street, Rochester, NY 14604</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container150() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin7 />
          <Margin8 />
          <Container154 />
        </div>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container150 />
    </div>
  );
}

function AboutStore3Avif() {
  return (
    <div className="h-[293.33px] max-w-[439.989990234375px] relative rounded-[10px] shrink-0 w-[439.99px]" data-name="about-store3.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAboutStore3Avif} />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <AboutStore3Avif />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container159 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[303.33px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container158 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[24px]">California</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Heading13 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center pb-[10px] relative shrink-0 w-full" data-name="Margin">
      <Container160 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">3605 Martha Street, Phoenix, AZ 86040</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container162 />
    </div>
  );
}

function Container157() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin9 />
          <Margin10 />
          <Container161 />
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container157 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex h-[411.33px] items-start relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Container149 />
      <Container156 />
    </div>
  );
}

function Section11() {
  return (
    <div className="content-stretch flex flex-col h-[431.33px] items-start pt-[20px] relative shrink-0 w-full" data-name="Section">
      <Container141 />
    </div>
  );
}

function Container137() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[10px] relative size-full">
          <Container138 />
          <Container140 />
          <Section11 />
        </div>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex h-[525.33px] items-start justify-center max-w-[1410px] relative shrink-0 w-full" data-name="Container">
      <Container137 />
    </div>
  );
}

function Section10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] px-[55.5px] relative shrink-0 w-[1521px]" data-name="Section">
      <Container136 />
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1405.4px]" data-name="Article">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[110px] pt-[125px] right-0 top-[564.8px]" data-name="Main">
      <Article />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">CONTACT US</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container167 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389.99px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0">Morbi ullamcorper ligula sit amet efficitur pellentesque.</p>
        <p className="leading-[24px]">Aliquam ornare quam tellus ultricies molestie tortor.</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container169 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container168 />
    </div>
  );
}

function ImageContact1Png() {
  return (
    <div className="max-w-[28px] relative shrink-0 size-[28px]" data-name="image-contact-1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageContact1Png} />
      </div>
    </div>
  );
}

function Figure() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[28px]" data-name="Figure">
      <ImageContact1Png />
    </div>
  );
}

function FigureMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <Figure />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] font-['Jost:Bold',sans-serif] font-bold h-[39px] leading-[0] min-w-px relative text-white uppercase whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[13px] top-[15.35px]">
        <p className="leading-[19.5px]">HOTLINE:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[64.17px] text-[18px] top-[13.5px]">
        <p className="leading-[27px]">+0123 456 789</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <FigureMargin />
      <Paragraph1 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container171 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col h-[59px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container170 />
    </div>
  );
}

function FigureImageContact2Png() {
  return <div className="h-[24px] max-w-[28px] relative shrink-0 w-[28px]" data-name="Figure → image-contact-2.png" />;
}

function FigureMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <FigureImageContact2Png />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full whitespace-nowrap">
        <p className="leading-[24px]">info@example.com</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin1 />
      <Container174 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container173 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container172 />
    </div>
  );
}

function ImageContact3Png() {
  return (
    <div className="max-w-[28px] relative shrink-0 size-[28px]" data-name="image-contact-3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageContact3Png} />
      </div>
    </div>
  );
}

function Figure1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0 w-[28px]" data-name="Figure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigure} />
      </div>
      <ImageContact3Png />
    </div>
  );
}

function FigureMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <Figure1 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full whitespace-nowrap">
        <p className="leading-[24px]">Monday till Friday 10 to 6 EST</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin2 />
      <Container177 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container176 />
    </div>
  );
}

function Container166() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[17.51px] pt-[15px] px-[15px] relative size-full">
          <Margin11 />
          <Margin12 />
          <Margin13 />
          <Margin14 />
          <Container175 />
        </div>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container166 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">HELP</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container180 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Help Center</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Shipping Info</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Returns</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Order</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Track</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Size Guide</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link12 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Container179() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin15 />
          <Container181 />
        </div>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container179 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">COMPANY</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading16 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container184 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">About Us</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Our Blog</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Careers</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Store Locations</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Testimonial</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Sitemap</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link18 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Container183() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin16 />
          <Container185 />
        </div>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container183 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">NEWSLETTER</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading17 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container188 />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px] mb-0">Get 15% off your first purchaxse! Plus, be the first to know about</p>
        <p className="leading-[21px]">sales new product launches and exclusive offers!</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container190 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col h-[74px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container189 />
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#959595] text-[13px] w-full">
        <p className="leading-[normal]">Your Email Address</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[54px] relative rounded-[54px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[20px] pr-[58px] py-[17.8px] relative size-full">
          <Container192 />
        </div>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute left-[357.97px] size-[50px] top-[2px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p9d41f40} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function FormContactForm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full" data-name="Form - Contact form">
      <Input />
      <Container193 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <FormContactForm />
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container191 />
    </div>
  );
}

function Container196() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Container">
          <path d={svgPaths.p2fb51880} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.62px] pr-[2.63px] relative shrink-0 size-[14px]" data-name="Container">
      <Container196 />
    </div>
  );
}

function ListitemLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container195 />
    </div>
  );
}

function Container198() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px]" data-name="Container">
      <div className="absolute inset-[0_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2773 14">
          <g id="Container">
            <path d={svgPaths.p26fc3400} fill="var(--fill-0, white)" id="Symbol" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.87px] pr-[0.88px] relative shrink-0 size-[14px]" data-name="Container">
      <Container198 />
    </div>
  );
}

function ListitemLink1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container197 />
    </div>
  );
}

function Container200() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 14">
        <g id="Container">
          <path d={svgPaths.p373030} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container200 />
    </div>
  );
}

function ListitemLink2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container199 />
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 14">
        <g id="Container">
          <path d={svgPaths.p100feb40} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container202 />
    </div>
  );
}

function ListitemLink3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container201 />
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p174b8b00} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Container">
      <Container204 />
    </div>
  );
}

function ListitemLink4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container203 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="List">
      <ListitemLink />
      <ListitemLink1 />
      <ListitemLink2 />
      <ListitemLink3 />
      <ListitemLink4 />
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <List2 />
    </div>
  );
}

function Container187() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[20px] pt-[15px] px-[15px] relative size-full">
          <Margin17 />
          <Margin18 />
          <Margin19 />
          <Container194 />
        </div>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container187 />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex h-[291px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container178 />
      <Container182 />
      <Container186 />
    </div>
  );
}

function Section13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[100.4px] relative size-full">
        <Container164 />
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex h-[291px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Section13 />
    </div>
  );
}

function Section12() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[98px] pt-[80px] relative shrink-0 w-full" data-name="Section">
      <Container163 />
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p>
          <span className="leading-[21px]">{`Copyright © 2026 `}</span>
          <span className="font-['Jost:Regular',sans-serif] font-normal leading-[21px]">RisingBamboo.</span>
          <span className="leading-[21px]">{` All Rights Reserved.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container210 />
    </div>
  );
}

function Container208() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <Container209 />
        </div>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container208 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g clipPath="url(#clip0_1_5455)" id="SVG">
          <path d={svgPaths.p21bd9700} fill="var(--fill-0, #21246E)" id="Vector" />
          <path d={svgPaths.p6584980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5455">
            <rect fill="white" height="36" width="36" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container215 />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container214 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p16fcace0} fill="var(--fill-0, #1C1C1C)" id="Vector" />
          <path d={svgPaths.p4cecc00} fill="var(--fill-0, #931B1D)" id="Vector_2" />
          <path d={svgPaths.p2af2100} fill="var(--fill-0, #F16622)" id="Vector_3" />
          <path d={svgPaths.p9755c80} fill="var(--fill-0, #F7981D)" id="Vector_4" />
          <path d={svgPaths.p33745000} fill="var(--fill-0, #CB2026)" id="Vector_5" />
          <path d={svgPaths.p3073e300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3c363400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p20219200} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3e55a880} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p257959c0} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3c6e1960} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p9437c40} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p23e0f600} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p16a85b00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p78df980} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container218 />
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container217 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p2fb10c80} fill="var(--fill-0, #306FC5)" id="Vector" />
          <path d={svgPaths.p16bd8e80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p32dcdbe0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2dca2980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p39b45880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2471bd80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p18f81180} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3a0a9300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p35dd1f00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p16ffa180} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container221 />
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container220 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p11507b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27479800} fill="var(--fill-0, #2196F3)" id="Vector_2" />
          <path d={svgPaths.p223cea60} fill="var(--fill-0, #1976D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container224 />
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container223 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p11507b80} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1c8c3800} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_2" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.pea1f180} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_3" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p2ef07e9c} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_4" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.pe26a700} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_5" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p3b852b80} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_6" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p306a3380} fill="var(--fill-0, #1AAF5D)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2562c1c0} fill="var(--fill-0, #F59D00)" fillRule="evenodd" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container227 />
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] relative shrink-0" data-name="Container">
      <Container226 />
    </div>
  );
}

function Container212() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[15px] relative size-full">
          <Container213 />
          <Container216 />
          <Container219 />
          <Container222 />
          <Container225 />
        </div>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container212 />
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex h-[73.2px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container207 />
      <Container211 />
    </div>
  );
}

function Section15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start py-[15px] relative size-full">
        <Container206 />
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="h-[103.2px] max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center max-w-[inherit] relative size-full">
        <Section15 />
      </div>
    </div>
  );
}

function Section14() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[0.8px] px-[100.4px] relative size-full">
        <Container205 />
      </div>
    </div>
  );
}

function Container231() {
  return <div className="flex-[1_0_0] h-[44px] min-w-px relative" data-name="Container" />;
}

function Logo() {
  return (
    <div className="h-[24.19px] relative shrink-0 w-[124px]" data-name="logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Logo />
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link19 />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container233 />
    </div>
  );
}

function Container237() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path d={svgPaths.p1b02a800} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center p-[13px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container237 />
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background />
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container236 />
    </div>
  );
}

function Container239() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16.81px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.81 18">
        <g id="Container">
          <path d={svgPaths.p3a9eb600} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center pl-[16.59px] pr-[16.6px] py-[16px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container239 />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container238 />
    </div>
  );
}

function Container243() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7e4ac80} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[50px] p-[15px] relative shrink-0" data-name="Container">
      <Container243 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center right-[-6px] rounded-[9999px] size-[18px] top-[-6px]" data-name="Background">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#60ff00] text-[10px] text-center uppercase whitespace-nowrap">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container242 />
      <Background3 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center min-h-[50px] min-w-[50px] relative rounded-[50px] shrink-0" data-name="Background">
      <Button />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container241 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Margin20 />
      <Margin21 />
      <Container240 />
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container235 />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container231 />
      <Container232 />
      <Container234 />
    </div>
  );
}

function Container229() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[33px] px-[30px] relative size-full">
        <Container230 />
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container229 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">HOME</p>
      </div>
      <div className="absolute h-[2.997px] left-[40.86px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link20 />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">SHOP</p>
      </div>
      <div className="absolute h-[2.997px] left-[39.94px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link21 />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">PRODUCT</p>
      </div>
      <div className="absolute h-[2.997px] left-[63.04px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link22 />
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">BLOG</p>
      </div>
      <div className="absolute h-[2.997px] left-[38.61px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link23 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav">
      <List3 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Nav />
    </div>
  );
}

function Container245() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[346.45px]" data-name="Container">
      <Container246 />
    </div>
  );
}

function Container244() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[32px] px-[30px] relative size-full">
          <Container245 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[6244.31px] relative shrink-0 w-full" data-name="Container">
      <Masthead />
      <Main />
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[5684.31px]" data-name="Footer">
        <Section12 />
        <Section14 />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Header">
        <Container228 />
        <Container244 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_1_5412)" id="SVG">
          <path d={svgPaths.p375dda80} id="Vector" stroke="var(--stroke-0, #0DB22A)" strokeDasharray="138.87 138.87" strokeWidth="1.80392" />
        </g>
        <defs>
          <clipPath id="clip0_1_5412">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container247() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <div className="absolute inset-[-2.62%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.3924">
          <g id="Container">
            <path d={svgPaths.p2f3c8f80} fill="var(--fill-0, black)" id="Symbol" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] pointer-events-auto rounded-[9999px] size-[46px] sticky top-0" data-name="Background">
      <div className="absolute bottom-0 pointer-events-none right-0 rounded-[9999px] size-[46px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(34,34,34,0.2)]" />
      </div>
      <Svg5 />
      <Container247 />
    </div>
  );
}

export default function TrangThongTin() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Trang thông tin">
      <Container />
      <div className="absolute bottom-0 h-[6244.31005859375px] pointer-events-none right-[20px]">
        <Background4 />
      </div>
    </div>
  );
}
