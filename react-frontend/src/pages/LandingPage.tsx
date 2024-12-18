import {DefaultLayout} from "../components/layouts/DefaultLayout.tsx";
import {useEffect, useState} from "react";
import {getStrapiURL, strapiQuery} from "../lib/strapiApi.ts";
import {capitalizeFirstLetter, capitalizeWords} from "../lib/stringUtils.ts";
import {Carousel} from "../components/ui/components/Carrousel.tsx";
import {StrapiImage} from "../types/StrapiTypes.ts";
import {MultiParagraphBlock} from "../components/ui/blocks/MultiParagraphBlock.tsx";
import {PageSection} from "../components/ui/blocks/PageSection.tsx";

type HomeData = {
    data: {
        title: string;
        subtitle: string;
        heroImage: StrapiImage,
        Carrousel: StrapiImage[],
        activateCarrousel: boolean,
        activateCompanyInfo: boolean,
        CompanyInformation: InformationItem[],
    }
}

type InformationNode = {
    type: string;
    text?: string;
    url?: string;
    children?: InformationNode[];
};

type InformationItem = {
    type: string;
    level?: number;
    children: InformationNode[];
};

export function LandingPage() {
    const [homeData, setHomeData] = useState<HomeData | null>(null);

    useEffect(() => {
        const getHomeData = async () => {
            try {
                const data = await strapiQuery("home-page?populate=Carrousel&populate=heroImage");
                setHomeData(data);
                console.log(data)
            } catch (err) {
                err instanceof Error ? console.log(err.message) : console.log('Unknown error');
            }
        }
        getHomeData();
    }, [])

    return (
        <DefaultLayout>
            <div className="relative h-hero flex flex-col justify-center items-center text-white mb-14">
                <div className="absolute inset-0 z-0">
                    <img
                        className="h-full w-full object-cover"
                        src={homeData?.data?.heroImage && getStrapiURL() + homeData.data.heroImage.formats.large.url}
                        alt={homeData?.data?.heroImage?.alternativeText || undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>

                <div className="relative z-10 text-center justify-items-center px-4">
                    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-wide">
                        {homeData?.data?.title && capitalizeWords(homeData.data.title)}
                    </h1>
                    <h3 className="text-xl md:text-2xl font-light mb-8 text-center text-font-dark opacity-90 w-[90%]">
                        {homeData?.data?.subtitle && capitalizeFirstLetter(homeData.data.subtitle)}
                    </h3>
                </div>
            </div>

            {homeData?.data?.activateCompanyInfo && (
                <PageSection className={"mb-16"} title={"About Us"}>
                    <MultiParagraphBlock>
                        {homeData?.data?.CompanyInformation?.map((node: InformationItem, index) => {
                            if (node.type === "paragraph") {
                                return (
                                    <p key={index}>{node.children.map((item) => {
                                        if (item.type === "text" && item.text !== "") {
                                            return item.text;
                                        }
                                        if (item.type === "link") {
                                            return <a href={item.url}>
                                                {item.children?.map(texts => {
                                                    return (texts.text !== "") ? texts.text : "Link";
                                                })}
                                            </a>
                                        }
                                    })}</p>
                                )
                            }
                            if (node.type === "heading") {
                                return node.children.map((item, index) => {
                                    if (item.text !== "" && node.level === 3) {
                                        return <h3 key={index}>{item.text}</h3>
                                    }
                                    if (item.text !== "" && node.level === 2) {
                                        return <h2 key={index}>{item.text}</h2>
                                    }
                                    if (item.text !== "" && node.level === 1) {
                                        return <h1 key={index}>{item.text}</h1>
                                    }
                                })
                            }
                        })}
                    </MultiParagraphBlock>
                </PageSection>
            )}

            {homeData?.data?.activateCarrousel && (
                <PageSection className={"mb-16"} title={"Our Products"}>
                    <div className="max-h-[480px] h-full my-2">
                        <Carousel images={homeData.data.Carrousel.map((img: StrapiImage) => {
                            return getStrapiURL() + img.formats.large.url;
                        })}/>
                    </div>
                </PageSection>
            )}

        </DefaultLayout>
    )
}