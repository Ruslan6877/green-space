import Button from "./Button"
import Planet from "/src/assets/planet.svg"

function Welcome() {
  return (
    <div className="container  mx-auto flex items-center bg-welcome px-10">
        <div>
            <h3 className="text-[14px] leading-4 font-medium">Welcome to GreenShop</h3>
            <h1 className="w-[530px] font-black text-[70px] leading-[70px]">Let’s Make a
                Better <span className="text-green">Planet</span></h1>
                <p className="my-4">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <Button  title={'SHOP NOW'}/>
        </div>
        <img src={Planet} alt="" />
    </div>
  )
}

export default Welcome