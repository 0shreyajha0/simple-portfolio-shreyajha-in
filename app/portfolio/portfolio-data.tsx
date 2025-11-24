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
                imageUrl: "https://businessdoctors.co.uk/wp-content/uploads/2019/10/Website-page-header-1.png",
                description: "Introduced a structured plan system within batch purchases to uplift Average Revenue Per User (ARPU)",
                url: "https://www.notion.so/Introducing-Plan-Structure-in-Batch-Purchase-2acd6689d30280278068d523e2d8b6b9?source=copy_link",
            },
            {
                title: "Renew Feature",
                dateAndTime: "Jun 15, 2025",
                imageUrl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-24652,resizemode-75,msid-15079190/mf/analysis/et-wealth-how-to-renew-sips-of-mutual-funds.jpg',
                description: "Renew Mechanism for expired/expiring batches to improve retention",
                url: "https://www.notion.so/Renew-298d6689d302802a896bd541c18d6734",
            },
            {
                title: "Part Payment",
                dateAndTime: "Jun 25, 2025",
                imageUrl: 'https://fs.hubspotusercontent00.net/hubfs/7233458/03%20BLOG/blog-image-partial-payments.jpg',
                description: "Introduced a Part Payment / Split Payment system",
                url: "https://www.notion.so/Part-Payment-298d6689d302807aa172cb0feda62dc3",
            },
            {
                title: "Annual Sales Playbook",
                dateAndTime: "Jul 15, 2025",
                imageUrl: 'https://www.behindtheshutter.com/wp-content/uploads/2019/05/sm_blogpost_Pooles.jpg',
                description: "Annual Sales Playbook",
                url: "https://www.notion.so/Annual-Sales-Playbook-298d6689d30280329279f316058f668f",
            }
        ],
        prd: [

        ]
    }
;
