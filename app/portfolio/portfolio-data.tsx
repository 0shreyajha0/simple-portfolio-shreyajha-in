export interface SingleEntity {
    title: string;
    dateAndTime: string;
    description: string;
    imageUrl: string;
    url: string;
}

export interface Portfolio {
    caseStudies: SingleEntity[];
    prd: SingleEntity[];
}

export const portfolio: Portfolio = {
        caseStudies: [
            {
                title: "Introducing Plan Structure in Batch Purchase",
                dateAndTime: "Jun 5, 2025",
                imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*ccZsWHXeKToxbM_z",
                description: "As a product manager, understanding A/B testing is essential, not only does it empower you to make data-driven decisions, but it also...",
                url: "https://www.notion.so/Introducing-Plan-Structure-in-Batch-Purchase-298d6689d3028092bd49d55187ad86d9",
            },
            {
                title: "Renew",
                dateAndTime: "Jun 15, 2025",
                imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*J6GIryI_VdvSEQ2o.png',
                description: "Open source AI education resources",
                url: "https://www.notion.so/Renew-298d6689d302802a896bd541c18d6734",
            },
            {
                title: "Part Payment",
                dateAndTime: "Jun 25, 2025",
                imageUrl: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*poVv-ii2PtIJ4Xt-MAv0Zg.jpeg',
                description: "Open source AI education resources",
                url: "https://www.notion.so/Part-Payment-298d6689d302807aa172cb0feda62dc3",
            },
        ],
        prd: [
            {
                title: "Annual Sales Playbook",
                dateAndTime: "Jul 15, 2025",
                imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*9r_GPIweYWqv6M5i',
                description: "Open science AI resarch lab",
                url: "https://www.notion.so/Annual-Sales-Playbook-298d6689d30280329279f316058f668f",
            }
        ]
    }
;
