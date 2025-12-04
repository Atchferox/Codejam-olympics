import CanvasDiv from "./_components/canvas-div"
import Div from "./_components/div"
import Section from "./_components/section"

export default function CenterDiv() {
  return (
    <main className="max-w-4xl mx-auto space-y-4 pb-32">
      <h1 className="text-2xl font-bold">Center Div</h1>
      <div className="flex flex-wrap gap-16">
        <Section className="flex justify-center items-center">
          <Div>Flexbox</Div>
        </Section>
        <Section className="grid place-items-center">
          <Div>Grid</Div>
        </Section>
        <Section className="relative">
          <Div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            Absolute + transform
          </Div>
        </Section>
        <Section className="">
          <Div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            Relative + transform
          </Div>
        </Section>
        <Section className="table">
          <div className="table-cell align-middle text-center">
            <Div className="inline-block text-left">Table</Div>
          </div>
        </Section>
        <Section className="relative">
          <Div className="absolute inset-0 m-auto">Margin</Div>
        </Section>
        <Section>
          <svg className="w-full h-full overflow-visible">
            <foreignObject
              x="50%"
              y="50%"
              width="128"
              height="128"
              style={{ transform: "translate(-64px, -64px)" }}
            >
              <Div>SVG</Div>
            </foreignObject>
          </svg>
        </Section>
        <Section>
          <CanvasDiv />
        </Section>
        <Section className="col-start-1 col-span-3 h-224 w-4xl"></Section>
      </div>
    </main>
  )
}
