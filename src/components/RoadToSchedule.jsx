export const RoadToSchedule = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <a href="/image/roadto/j19.png" target="_blank" rel="noreferrer">
            <img src="/image/roadto/j19.png" className="w-full" />
          </a>
        </div> 
        <div id="item2" className="carousel-item w-full">
          <a href="/image/roadto/j20.png" target="_blank" rel="noreferrer">
            <img src="/image/roadto/j20.png" className="w-full" />
          </a>
        </div> 
        <div id="item3" className="carousel-item w-full">
          <a href="/image/roadto/j21.png" target="_blank" rel="noreferrer">
            <img src="/image/roadto/j21.png" className="w-full" />
          </a>
        </div> 
        <div id="item4" className="carousel-item w-full">
          <a href="/image/roadto/j22.png" target="_blank" rel="noreferrer">
            <img src="/image/roadto/j22.png" className="w-full" />
          </a>
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">19</a> 
        <a href="#item2" className="btn btn-xs">20</a> 
        <a href="#item3" className="btn btn-xs">21</a> 
        <a href="#item4" className="btn btn-xs">22</a>
      </div>
    </>
  )
}
