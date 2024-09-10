import React from 'react'
import {ContainerLayout, InnerContainer} from '@/components/atoms'
import Image from 'next/image'
import {Subtitle} from '@/components/atoms'

export const Partners = () => {
    return (
        <div className="relative h-[340px] w-full overflow-hidden mb-[120px] md:mb-[60px]">
            <ContainerLayout>
                <InnerContainer>
                    <div className="flex justify-center items-center h-300  md:whitespace-nowrap my-6">
                        <Subtitle
                            text="We are Trusted by over 900+ companies and millions of learners around the world"/>
                    </div>
                    <div className='grid md:grid-cols-5 grid-cols-2 gap-8 my-12'>
                        <Image
                            className="object-contain w-[98px] h-[40px]"
                            src='/images/nhs.png'
                            alt="imperial-id-1"
                            width={200}
                            height={100}
                        />
                        <Image
                            className="object-contain w-[132px] h-[39px]"
                            src='/images/hsbc.png'
                            alt="imperial-id-2"
                            width={200}
                            height={100}
                        />
                        <Image
                            className="object-contain w-[166px] h-[40px]"
                            src='/images/ind.png'
                            alt="imperial-id-3"
                            width={200}
                            height={100}
                        />
                        <Image
                            className="object-contain w-[75px] h-[40px]"
                            src='/images/jaguar.png'
                            alt="imperial-id-4"
                            width={200}
                            height={100}
                        />
                        <Image
                            className="object-contain w-[249px] h-[40px]"
                            src='/images/ring.png'
                            alt="imperial-id-5"
                            width={200}
                            height={50}
                        />
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    )
}
