export function TopDivider() {
  return (
    <div className="w-full space-y-[2px] pt-2 pb-0">
      <div className="w-full h-[3px] bg-red" />
      <div className="w-full h-[3px] bg-orange" />
      <div className="w-full h-[3px] bg-yellow-light" />
    </div>
  )
}

export function BottomDivider() {
  return (
    <div className="w-full space-y-[2px] pt-6 pb-8">
      <div className="w-full h-[3px] bg-aqua-light" />
      <div className="w-full h-[3px] bg-blue" />
      <div className="w-full h-[3px] bg-purple" />
    </div>
  )
}