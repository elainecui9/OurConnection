"use client"
import Image from 'next/image'
import Header from "../header"
import Footer from "../footer"
import Link from "next/link";
import WINDLogo from "../Assets/WINDLogo.webp"


function Stories() {
    return (
        <section id="contact">
            <Header></Header>
            <div className="relative h-fit w-full bg-beige text-brown flex justify-center items-center flex-col ">
                <Image src={WINDLogo} width={400} className='pt-8'></Image>
                <div className='items-left'>
                    <h1 className='text-xl font-bold pt-12 pb-4 text-center'>About OurConnection</h1>
                    <h1 className='px-32'>OurConnection aims to create a platform where incarcerated women will be able to share their stories. 
                        Partnered with Women Initiating New Directions or WIND, we ask the question - How might we help system-impacted 
                        women share their stories so that the general public can recognize their struggles and gain awareness?
                        When women impacted by the justice system gain strategies and tools to lead productive lives, they can make 
                        better choices because they will have more choices. Every year, thousands of women return to incarceration because 
                        they don't have a way to address the root causes that sent them there in the first place: trauma and low self-esteem 
                        that led to substance abuse or the lack of education that prevents them from earning a living wage. The reasons are complicated.
                        Therefore, we hope to continuously inspire women with a history of incarceration or at risk of incarceration a
                        platform to allow for success and awareness of the issue. 
                    </h1>
                    <h1 className='text-xl font-bold pt-16 pb-4 text-center'>About the Developer Journey</h1>
                    <h1 className='px-32'>Hi, my name is Elaine Cui, and I am a current student at Northwestern University studying Computer Science.
                        In DSGN 208 - Design Thinking & Doing, I was given the opportunity to work with WIND in order to create a design surrounding incarcerated
                        women. With 3 other teammates, we asked how we could help share the writings and experiences of these women in an accessible format.
                        During the process, we interviewed founder Kelley Costello and Executive Director Nicole O'Connel for understanding the adminstrative
                        perspective. However, we valued the insights of the women in WIND. As a reuslt, we also interviewed Sirena and Latrice. Through these
                        interviews, we formulated 3 insights:
                    </h1>
                    <h1 className='px-32 pt-4'>
                        - Incarcerated women want to share their stories through mediums of storytelling, poems, and other written pieces of work because it gives them 
                        a voice and helps inspire other women alike but there are not enough resources and avenues for this to occur.  
                    </h1>
                    <h1 className='px-32 pt-4'>
                        - Incarcerated women need a community to engage and share with because community is a vital part of the healing process, allowing previously 
                        incarcerated women to find people they can trust and eventually open up to but not everyone has access to these communities.
                    </h1>
                    <h1 className='px-32 pt-4'>
                        - Members of WIND want to grow the program and share their stories because this will bring more awareness to the issue of women's incarceration 
                        and will help them heal and WIND must continue to expand nationally to reach more women and promote even more awareness, but this kind of expansion of ideas and program can be extremely difficult to execute. 
                    </h1>
                    <h1 className='px-32 pt-4'>
                        With these insights in mind, we developed 3 different prototypes: a website, in-person event, and pen pal program. We then spoke with a student, Evanston
                        community member, and 2 WIND incarcerated women to test our prototpyes. One specific quote that I would like to share from Sirena, a past incarcerated women, is this: 
                    </h1>
                    <h1 className='px-32 pt-4'>
                    “I want to create a space where people can be free and feel free to open up and be able to trust for their opening up. I would also like to create a space where, 
                    when women get out of prison, and I'm so serious when I say this, they have somebody that they can talk to. The reason why I say that is because, you know, I've done 
                    23 years and three months in prison. And I'm still healing. You know, you never stop healing. You know the pain, but you don't have to live it. I don't want to live the pain...
                    I would like to create that kind of space, you know? Because then they matter. You matter.” 
                    - Sirena Smith 
                    </h1>
                    <h1 className='px-32 pt-4'>
                    We knew that whatever medium we create, our main focus has to be creating a safe space where these women know that they matter. 
                    </h1>
                    <h1 className='px-32 pt-4'>
                    In the end, we decided to combine both of our prototpyes - a website and pen pal program. As a result, OurConnection was created, with focus on a few key features: pen pal program, ability to share stories, ability to comment and engage with content, and provide a newletter option.
                        For the future, we hope to continue to educate and engage the general community on the realities of life as a sytem-impacted woman and to give system-impaced women the resources to feel comfortable to share their stories, whether to the general public or to other system-impacted women.
                    </h1>
                    <h1 className='px-32 pt-4 pb-32'>
                    I hope you enjoy the prototype of OurConnection!
                    - Elaine Cui
                    </h1>
                </div>
                
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Stories;
