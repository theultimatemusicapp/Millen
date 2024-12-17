// radio.js

// All stations are in Australia, so country will always be "Australia"
const radioStations = [
    // New South Wales (NSW)
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "FBi Radio (94.5 FM)",
        phone: "(02) 8332 2900",
        email: "mailto:[email protected]",
        website: "https://fbiradio.com/",
        submitMusic: "https://fbiradio.com/music/submit/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "2SER (107.3 FM)",
        phone: "(02) 9514 9514",
        email: "Use contact form",
        website: "https://2ser.com/",
        submitMusic: "https://2ser.com/music-submissions/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Hornsby/Ku-ring-gai",
        name: "Triple H 100.1 FM",
        phone: "(02) 9489 3934",
        email: "mailto:[email protected]",
        website: "https://www.triplehfm.com.au/",
        submitMusic: "https://www.triplehfm.com.au/contact/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Paddington (Sydney)",
        name: "Eastside Radio 89.7 FM",
        phone: "(02) 9331 3000",
        email: "mailto:[email protected]",
        website: "https://eastsidefm.org/",
        submitMusic: "https://eastsidefm.org/contact/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Byron Bay",
        name: "Bay FM 99.9",
        phone: "(02) 6680 7999",
        email: "mailto:[email protected]",
        website: "https://www.bayfm.org/",
        submitMusic: "https://www.bayfm.org/about-us/contact/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Bellingen",
        name: "2BBB 93.3 FM",
        phone: "(02) 6655 0718",
        email: "mailto:[email protected]",
        website: "https://2bbb.net.au/",
        submitMusic: "https://2bbb.net.au/contact-us/"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Campbelltown",
        name: "2MCR 100.3 FM",
        phone: "(02) 4625 2768",
        email: "mailto:[email protected]",
        website: "http://www.2mcr.org.au/",
        submitMusic: "http://www.2mcr.org.au/contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Kempsey",
        name: "TANK FM 103.1",
        phone: "(02) 6562 6899",
        email: "mailto:[email protected]",
        website: "https://www.tankfm.org.au/",
        submitMusic: "https://www.tankfm.org.au/contact-us.html"
    },

    // Victoria (VIC)
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Triple R (3RRR 102.7 FM)",
        phone: "(03) 9388 1027",
        email: "mailto:[email protected]",
        website: "https://www.rrr.org.au/",
        submitMusic: "https://www.rrr.org.au/about/submissions"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "PBS 106.7 FM",
        phone: "(03) 8415 1067",
        email: "mailto:[email protected]",
        website: "https://www.pbsfm.org.au/",
        submitMusic: "https://www.pbsfm.org.au/music/music-submissions/"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Emerald",
        name: "3MDR 97.1 FM",
        phone: "(03) 5968 2728",
        email: "mailto:[email protected]",
        website: "https://3mdr.com/",
        submitMusic: "https://3mdr.com/contact/"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "3CR 855 AM",
        phone: "(03) 9419 8377",
        email: "mailto:[email protected]",
        website: "https://www.3cr.org.au/",
        submitMusic: "https://www.3cr.org.au/contact"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "JOY 94.9",
        phone: "(03) 9267 6000",
        email: "mailto:[email protected]",
        website: "https://joy.org.au/",
        submitMusic: "https://joy.org.au/music-submissions/"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Brighton",
        name: "Southern FM 88.3",
        phone: "(03) 9592 9777",
        email: "mailto:[email protected]",
        website: "https://southernfm.com.au/",
        submitMusic: "https://southernfm.com.au/contact/"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Mildura",
        name: "Smart FM (Sunraysia Community Radio)",
        phone: "(03) 5023 3311",
        email: "mailto:[email protected]",
        website: "https://www.smartfm.org.au/",
        submitMusic: "https://www.smartfm.org.au/contact-us/"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Glenroy",
        name: "North West FM 98.9",
        phone: "(03) 9304 1244",
        email: "mailto:[email protected]",
        website: "https://northwestfm.org/",
        submitMusic: "https://northwestfm.org/contact/"
    },

    // Queensland (QLD)
    {
        country: "Australia",
        state: "Queensland",
        city: "Brisbane",
        name: "4ZZZ 102.1 FM",
        phone: "(07) 3252 1555",
        email: "mailto:[email protected]",
        website: "https://4zzz.org.au/",
        submitMusic: "https://4zzz.org.au/program/music-department-submissions"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Brisbane",
        name: "Radio 4EB 98.1 FM",
        phone: "(07) 3240 8600",
        email: "mailto:[email protected]",
        website: "https://4eb.org.au/",
        submitMusic: "https://4eb.org.au/contact-us/"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Wynnum-Manly (Brisbane)",
        name: "Bay FM 100.3",
        phone: "(07) 3249 7000",
        email: "mailto:[email protected]",
        website: "https://bayfm.org.au/",
        submitMusic: "https://bayfm.org.au/contact/"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Noosa",
        name: "Noosa FM 101.3",
        phone: "(07) 5447 2233",
        email: "mailto:[email protected]",
        website: "https://www.noosafm.org/",
        submitMusic: "https://www.noosafm.org/contact-us.html"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Esk",
        name: "Valley FM 95.9 (Esk)",
        phone: "(07) 5424 1789",
        email: "mailto:[email protected]",
        website: "http://www.valleyfm.com.au/",
        submitMusic: "http://www.valleyfm.com.au/contact-us/"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Hervey Bay",
        name: "Fraser Coast Community Radio 107.5 FM",
        phone: "(07) 4194 2426",
        email: "mailto:[email protected]",
        website: "http://www.frasercoastcommunityradio.org.au/",
        submitMusic: "http://www.frasercoastcommunityradio.org.au/contact-us/"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Brisbane",
        name: "Switch 1197 (SwitchOn Radio)",
        phone: "(07) 3252 0999",
        email: "mailto:[email protected]",
        website: "https://www.switch1197.com/",
        submitMusic: "https://www.switch1197.com/contact/"
    },
    {
        country: "Australia",
        state: "Queensland",
        city: "Cairns",
        name: "Cairns FM 89.1",
        phone: "(07) 4031 1071",
        email: "mailto:[email protected]",
        website: "https://cairnsfm891.org.au/",
        submitMusic: "https://cairnsfm891.org.au/contact/"
    },

    // Western Australia (WA)
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "RTRFM 92.1",
        phone: "(08) 9260 9200",
        email: "mailto:[email protected]",
        website: "https://rtrfm.com.au/",
        submitMusic: "https://rtrfm.com.au/contact/"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Joondalup (Perth)",
        name: "89.7FM (Twin Cities FM)",
        phone: "(08) 9301 8970",
        email: "mailto:[email protected]",
        website: "https://www.897fm.com.au/",
        submitMusic: "https://www.897fm.com.au/contact/"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Gosnells (Perth)",
        name: "Heritage FM 107.3",
        phone: "(08) 9490 9306",
        email: "mailto:[email protected]",
        website: "https://www.heritagefm.net/",
        submitMusic: "https://www.heritagefm.net/contact-us/"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Broome",
        name: "Goolarri Radio 99.7 FM",
        phone: "(08) 9194 9999",
        email: "mailto:[email protected]",
        website: "https://goolarri.com/radio/",
        submitMusic: "https://goolarri.com/radio/contact/"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northam",
        name: "Voice of the Avon 101.3 FM",
        phone: "(08) 9622 1402",
        email: "mailto:[email protected]",
        website: "http://www.voiceoftheavon.org.au/",
        submitMusic: "http://www.voiceoftheavon.org.au/contact.html"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fitzroy Crossing",
        name: "Wangki Radio 93.1 FM",
        phone: "(08) 9191 5120",
        email: "N/A",
        website: "https://www.wangki.org.au/",
        submitMusic: "https://www.wangki.org.au/contact-us"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "Radio Fremantle 107.9 FM",
        phone: "(08) 9494 2100",
        email: "mailto:[email protected]",
        website: "http://www.radiofremantle.com.au/",
        submitMusic: "http://www.radiofremantle.com.au/contact.php"
    },

    // South Australia (SA)
    {
        country: "Australia",
        state: "South Australia",
        city: "Adelaide",
        name: "Three D Radio 93.7 FM",
        phone: "(08) 8363 3937",
        email: "mailto:[email protected]",
        website: "https://www.threedradio.com/",
        submitMusic: "https://www.threedradio.com/music-submissions/"
    },
    {
        country: "Australia",
        state: "South Australia",
        city: "Adelaide",
        name: "Radio Adelaide 101.5 FM",
        phone: "(08) 7092 4666",
        email: "mailto:[email protected]",
        website: "https://radioadelaide.org.au/",
        submitMusic: "https://radioadelaide.org.au/contact/"
    },
    {
        country: "Australia",
        state: "South Australia",
        city: "Adelaide",
        name: "Fresh 92.7",
        phone: "(08) 8232 7927",
        email: "mailto:[email protected]",
        website: "https://fresh927.com.au/",
        submitMusic: "https://fresh927.com.au/submit-your-music/"
    },
    {
        country: "Australia",
        state: "South Australia",
        city: "Semaphore (Adelaide)",
        name: "WOW-FM 100.5",
        phone: "(08) 8242 4977",
        email: "mailto:[email protected]",
        website: "https://wowfm.org/",
        submitMusic: "https://wowfm.org/contact"
    },
    {
        country: "Australia",
        state: "South Australia",
        city: "Willunga",
        name: "Tribe FM 91.1",
        phone: "(08) 8556 2900",
        email: "mailto:[email protected]",
        website: "https://tribefm.org.au/",
        submitMusic: "https://tribefm.org.au/contact/"
    },

    // Tasmania (TAS)
    {
        country: "Australia",
        state: "Tasmania",
        city: "Hobart",
        name: "Edge Radio 99.3 FM",
        phone: "(03) 6226 7273",
        email: "mailto:[email protected]",
        website: "https://www.edgeradio.org.au/",
        submitMusic: "https://www.edgeradio.org.au/music-submissions/"
    },
    {
        country: "Australia",
        state: "Tasmania",
        city: "New Norfolk",
        name: "TYGA FM 98.9",
        phone: "(03) 6261 2888",
        email: "mailto:[email protected]",
        website: "https://tygafm.org.au/",
        submitMusic: "https://tygafm.org.au/contact-us/"
    },
    {
        country: "Australia",
        state: "Tasmania",
        city: "Launceston",
        name: "City Park Radio 103.7 FM",
        phone: "(03) 6334 3344",
        email: "mailto:[email protected]",
        website: "https://cityparkradio.com/",
        submitMusic: "https://cityparkradio.com/contact/"
    },

    // Australian Capital Territory (ACT)
    {
        country: "Australia",
        state: "Australian Capital Territory",
        city: "Canberra",
        name: "2XX FM 98.3",
        phone: "(02) 6230 0100",
        email: "mailto:[email protected]",
        website: "https://www.2xxfm.org.au/",
        submitMusic: "https://www.2xxfm.org.au/contact/"
    },

    // Northern Territory (NT)
    {
        country: "Australia",
        state: "Northern Territory",
        city: "Darwin",
        name: "Larrakia Radio 94.5 FM",
        phone: "(08) 8941 7433",
        email: "mailto:[email protected]",
        website: "https://www.larrakia.com/our-services/larrakia-radio/",
        submitMusic: "https://www.larrakia.com/contact/"
    },
    {
        country: "Australia",
        state: "Northern Territory",
        city: "Darwin",
        name: "Territory FM 104.1",
        phone: "(08) 8946 6666",
        email: "mailto:[email protected]",
        website: "https://www.territoryfm.com/",
        submitMusic: "https://www.territoryfm.com/contact"
    }
];


