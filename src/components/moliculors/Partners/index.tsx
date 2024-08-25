import React from 'react'
import { ContainerLayout, InnerContainer } from '@/components/atoms'
import Image from 'next/image'
import { Subtitle } from '@/components/atoms'

export const Partners = () => {
    return (
        <div className="relative h-[700p] w-full overflow-hidden">
            <ContainerLayout>
                <InnerContainer>
                    <div className="flex justify-center items-center h-300  md:whitespace-nowrap my-6">
                        <Subtitle text="We are Trusted by over 900+ companies and millions of learners around the world" />
                    </div>
                    <div className='grid md:grid-cols-5 grid-cols-2 my-6'>
                        <Image
                            className="object-contain"
                            src="/images/nhs.png"
                            alt="Campus Direct"
                            width={159}
                            height={30}
                        />
                        <Image
                            className="object-contain"
                            src="/images/hsbc.png"
                            alt="Campus Direct"
                            width={159}
                            height={30}
                        />
                        <Image
                            className="object-contain"
                            src="/images/ind.png"
                            alt="Campus Direct"
                            width={159}
                            height={30}
                        />
                        <Image
                            className="object-contain"
                            src="/images/jaguar.png"
                            alt="Campus Direct"
                            width={159}
                            height={30}
                        />
                        <Image
                            className="object-contain"
                            src="/images/ring.png"
                            alt="Campus Direct"
                            width={159}
                            height={30}
                        />
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    )
}
