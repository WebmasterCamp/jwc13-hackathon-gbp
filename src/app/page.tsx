import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      <div className="relative m-12 flex flex-col items-center z-10">
        <div className="flex flex-row space-x-12 items-center w-60 h-60">
          <img src="img.png" alt="" />
          <div className="">
            <h1 className="font-extrabol text-4xl">CashyBuddy</h1>
            <p className="mt-2">“คู่หูรู้ใจไฟแนนซ์วัยทีน”</p>
          </div>
        </div>
        <div className="mt-10 bg-slate-50 p-4 m-2 text-xl">
          <h1>เกี่ยวกับเรา</h1>
        </div>
        <div className="flex flex-row mt-4 space-x-6">
          <div className="items-center">
            <h1 className="font-extrabol text-4xl">CashyBuddy</h1>
            <p className="mt-2">“คู่หูรู้ใจไฟแนนซ์วัยทีน”</p>
          </div>
          <div>
            <p>
              CashyBuddy
              ช่วยให้เพื่อนนักเรียนสามารถบริหารจัดการเงินของตัวเองได้ผ่านมาสคอตผู้ช่วย
              “Cashy” ถ้าเพื่อน ๆ กำลังเจอปัญหาเงินไม่พอใช้
              วางแผนทางการเงินไม่เป็น และไม่มีพื้นฐานด้านการเงินเลย Cashy
              สามารถช่วยเพื่อน ๆ ได้นะ{" "}
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-4">
          <h1>FAQ</h1>
        </div>
        <div className="flex flex-col space-y-8 mt-4 ">
          <div className="bg-green-300">
            <Accordion type="single" collapsible className="p-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>CashyBuddy คืออะไร ?</AccordionTrigger>
                <AccordionContent>
                CashyBuddy ไม่เรียกเก็บค่าบริการใด ๆ เพื่อน ๆ สามารถใช้ฟีเจอร์ทุกอย่างในเว็บไซต์ได้ตามใจต้องการ ~
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-green-300">
            <Accordion type="single" collapsible className="p-2">
              <AccordionItem value="item-2">
                <AccordionTrigger>CashyBuddy ใช้งานอย่างไร ?</AccordionTrigger>
                <AccordionContent>
                เหมาะกับเพื่อน ๆ วัยมัธยมศึกษาที่มีปัญหาการบริหารจัดการเงินรายรับที่ได้จากผู้ปกครองที่ได้รับมาในแต่ละเดือน เช่น วางแผนสัดส่วนค่าใช้จ่ายไม่เป็น ไม่สามารถใช้จ่ายเงินตามที่ได้รับในแต่ละเดือนได้ 
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-green-300">
            <Accordion type="single" collapsible className="p-2">
              <AccordionItem value="item-3">
                <AccordionTrigger>มีค่าใช้จ่ายในการบริการมั้ย ?</AccordionTrigger>
                <AccordionContent>
                เหมาะกับเพื่อน ๆ วัยมัธยมศึกษาที่มีปัญหาการบริหารจัดการเงินรายรับที่ได้จากผู้ปกครองที่ได้รับมาในแต่ละเดือน เช่น วางแผนสัดส่วนค่าใช้จ่ายไม่เป็น ไม่สามารถใช้จ่ายเงินตามที่ได้รับในแต่ละเดือนได้ 
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
