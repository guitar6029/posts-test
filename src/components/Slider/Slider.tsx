import {useRef, useState} from 'react'

export default function Slider(){
    
    const [divPosition, setDivPosition] = useState<number>(0)

    const sliderContainerRef = useRef<HTMLDivElement | null>(null)

    type Slide = {
        id: number,
        name: string
    }

    const slides : Slide[] = [
        {
            id: 1,
            name: 'Card 1'
        },
        {
            id: 2,
            name: 'Card 2'
        },
        {
            id: 3,
            name: 'Card 3'
        },
        {
            id: 4,
            name: 'Card 4'
        },
        {
            id: 5,
            name: 'Card 5'
        },
        {
            id: 6,
            name: 'Card 6'
        },
        {
            id: 7,
            name: 'Card 8'
        },
        {
            id: 8,
            name: 'Card 8'
        },
        {
            id: 9,
            name: 'Card 9'
        },
        {
            id: 10,
            name: 'Card 10'
        }
    
    ]

    const handleSlide = () => {
        // if (divPosition <= (slides.length * 500)){
        //     setDivPosition((prev) => prev = prev - 500)
        // }
        // else if (divPosition >= -(slides.length * 500)){
        //     //do nothing or set it to zero again
        //     setDivPosition((prev) => prev = 0)
        // }
        if (divPosition <= (slides.length * 500) * -1) {
            setDivPosition((prev) => prev = 0)    
        } else {
            setDivPosition((prev) => prev = prev - 500)

        }
                     
    }

    return (
        <div ref={sliderContainerRef} onClick={handleSlide} className="slider-container" style={{ transform: `translateX(${divPosition}px)` }}
        >
            {slides.map((slide: Slide) => {
                return (
                    <div key={slide.id} className="slide-card">
                        <span>{slide.name}</span>
                        <span>{divPosition}</span>
                    </div>
                )
            })}
        </div>
    ) 
}