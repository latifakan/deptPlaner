import './Card.css'
export default function Card({headline, text}) {
    return (
        <div class="bg-white text-black mx-auto max-w-md md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img
                        class="h-48 w-full object-cover md:w-48" 
                        src="/img/img-placeholder.jpg" 
                        alt="" />
                </div>
                <div class="p-6">
                    <div class="text-sm tracking-wide">
                        <h2 class="text-2xl">{headline}</h2>
                        <p class="mt-2">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}