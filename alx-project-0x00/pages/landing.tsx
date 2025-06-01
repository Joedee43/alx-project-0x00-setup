import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <h1><Card /></h1>
      <h1><Card /></h1>
      <h1><Card /></h1>
      <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

      {/* Sizes */}
      <div className="flex flex-col gap-2">
        <Button title="Small Button" className="text-sm py-1 px-2" />
        <Button title="Medium Button" className="text-base py-2 px-4" />
        <Button title="Large Button" className="text-lg py-3 px-6" />
      </div>

      {/* Shapes */}
      <div className="flex flex-col gap-2 mt-6">
        <Button title="Rounded Small" className="rounded-sm" />
        <Button title="Rounded Medium" className="rounded-md" />
        <Button title="Rounded Full" className="rounded-full" />
      </div>
    </div>
    </div>
  )
}
export default Landing