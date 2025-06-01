import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <h1><Card /></h1>
      <h1><Card /></h1>
      <h1><Card /></h1>
      <div className="flex flex-col items-center gap-4 mt-10">
      <Button title="Small Rounded" styles="text-sm px-3 py-1 rounded-sm" />
      <Button title="Medium Rounded" styles="text-base px-4 py-2 rounded-md" />
      <Button title="Large Rounded" styles="text-lg px-6 py-3 rounded-full" />
      <Button title="LG Rounded" styles="text-base px-4 py-2 rounded-lg" /> {/* 👈 This is the one you want */}
    </div>

    </div>
  )
}
export default Landing