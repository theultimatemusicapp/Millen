const venues = [
    // MELBOURNE VENUES (Australia, Victoria, Melbourne)
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Tote Hotel",
        address: "67-71 Johnston St, Collingwood VIC 3066",
        website: "https://www.totehotel.com/",
        phone: "(03) 9419 5320"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Old Bar",
        address: "74-76 Johnston St, Fitzroy VIC 3065",
        website: "https://www.theoldbar.com.au/",
        phone: "(03) 9417 9218"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Evelyn Hotel",
        address: "351 Brunswick St, Fitzroy VIC 3065",
        website: "https://www.evelynhotel.com.au/",
        phone: "(03) 9419 5500"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Workers Club",
        address: "51 Brunswick St, Fitzroy VIC 3065",
        website: "https://www.theworkersclub.com.au/",
        phone: "(03) 9415 6558"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The John Curtin Hotel (The Curtin)",
        address: "29 Lygon St, Carlton VIC 3053",
        website: "https://www.johncurtinhotel.com/",
        phone: "(03) 9663 6350"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Cherry Bar",
        address: "68 Little Collins St, Melbourne VIC 3000",
        website: "https://www.cherrybar.com.au/",
        phone: "(03) 9639 8122"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Gasometer Hotel",
        address: "484 Smith St, Collingwood VIC 3066",
        website: "https://www.thegasometerhotel.com.au/",
        phone: "(03) 9416 3335"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Northcote Social Club",
        address: "301 High St, Northcote VIC 3070",
        website: "https://www.northcotesocialclub.com/",
        phone: "(03) 9489 3917"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Brunswick Ballroom",
        address: "314 Sydney Rd, Brunswick VIC 3056",
        website: "https://www.brunswickballroom.com.au/",
        phone: "(03) 8440 0440"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "303 Bar (Bar 303)",
        address: "303 High St, Northcote VIC 3070",
        website: "https://www.facebook.com/Bar303/",
        phone: "(03) 9482 4577"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Howler",
        address: "7-11 Dawson St, Brunswick VIC 3056",
        website: "https://www.howler.melbourne/",
        phone: "(03) 9077 5572"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Colour Club",
        address: "229 Queensberry St, Carlton VIC 3053",
        website: "https://www.clubcolour.com/",
        phone: "Via website contact form"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Penny’s Bandroom (at the Penny Black)",
        address: "420 Sydney Rd, Brunswick VIC 3056",
        website: "https://thepennyblack.com.au/",
        phone: "(03) 9380 8667"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Last Chance Rock & Roll Bar",
        address: "238 Victoria St, North Melbourne VIC 3051",
        website: "https://www.lastchancerockandrollbar.com.au/",
        phone: "0409 171 623"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Bergy Seltzer",
        address: "68 Sydney Rd, Brunswick VIC 3056",
        website: "https://www.thebergyseltzer.com/",
        phone: "Check website"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Leadbeater Hotel",
        address: "1 Church St, Richmond VIC 3121",
        website: "https://www.facebook.com/TheLeadbeater/",
        phone: "Via Facebook contact"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Stay Gold",
        address: "133 Sydney Rd, Brunswick VIC 3056",
        website: "https://www.staygoldmelbourne.com.au/",
        phone: "(03) 9388 1500"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "Max Watt’s House of Music",
        address: "125 Swanston St, Melbourne VIC 3000",
        website: "https://maxwatts.com.au/",
        phone: "(03) 9654 0999"
    },
    {
        country: "Australia",
        state: "Victoria",
        city: "Melbourne",
        name: "The Retreat Hotel",
        address: "280 Sydney Rd, Brunswick VIC 3056",
        website: "https://www.retreathotelbrunswick.com.au/",
        phone: "(03) 9380 4090"
    },

    // SYDNEY VENUES (Australia, New South Wales, Sydney)
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Oxford Art Factory",
        address: "38-46 Oxford St, Darlinghurst NSW 2010",
        website: "https://www.oxfordartfactory.com/",
        phone: "(02) 9332 3711"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "The Lansdowne Hotel",
        address: "2-6 City Rd, Chippendale NSW 2008",
        website: "https://www.lansdownehotel.com/",
        phone: "(02) 8214 9920"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "The Vanguard",
        address: "42 King St, Newtown NSW 2042",
        website: "https://www.thevanguard.com.au/",
        phone: "(02) 9557 9409"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Factory Theatre",
        address: "105 Victoria Rd, Marrickville NSW 2204",
        website: "https://factorytheatre.com.au/",
        phone: "(02) 9550 3666"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "The Marlborough Hotel (Marly Bar)",
        address: "145 King St, Newtown NSW 2042",
        website: "https://www.marlboroughhotel.com.au/",
        phone: "(02) 9519 1222"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "The Chippo Hotel",
        address: "87-91 Abercrombie St, Chippendale NSW 2008",
        website: "https://www.chippohotel.com.au/",
        phone: "(02) 9310 0839"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "The Hideaway Bar",
        address: "156 Enmore Rd, Enmore NSW 2042",
        website: "https://www.facebook.com/HideawayBarEnmore/",
        phone: "Via Facebook"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Town Hall Hotel, Newtown",
        address: "326 King St, Newtown NSW 2042",
        website: "https://www.facebook.com/TownHallHotelNewtown/",
        phone: "(02) 9557 1206"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Enmore Theatre",
        address: "118-132 Enmore Rd, Newtown NSW 2042",
        website: "https://www.enmoretheatre.com.au/",
        phone: "(02) 9550 3666"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Marrickville Bowling & Recreation Club",
        address: "91 Sydenham Rd, Marrickville NSW 2204",
        website: "https://mbrc.com.au/",
        phone: "(02) 9557 1185"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        name: "Petersham Bowling Club",
        address: "77 Brighton St, Petersham NSW 2049",
        website: "https://www.thepbc.org.au/",
        phone: "(02) 9569 4639"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Cronulla",
        name: "The Brass Monkey (Cronulla)",
        address: "115A Cronulla St, Cronulla NSW 2230",
        website: "https://brassmonkey.com.au/",
        phone: "(02) 9544 3844"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "Lazybones Lounge",
        address: "294 Marrickville Rd, Marrickville NSW 2204",
        website: "https://lazyboneslounge.com.au/",
        phone: "(02) 8065 6060"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "The Red Rattler Theatre",
        address: "6 Faversham St, Marrickville NSW 2204",
        website: "https://www.redrattler.org/",
        phone: "Via website contact form"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Surry Hills",
        name: "The Gaelic Club",
        address: "64 Devonshire St, Surry Hills NSW 2010",
        website: "https://gaelicclub.com/",
        phone: "(02) 9212 1587"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Petersham",
        name: "The Oxford Tavern",
        address: "1 New Canterbury Rd, Petersham NSW 2049",
        website: "https://www.theoxfordtavern.com.au/",
        phone: "(02) 9560 4782"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "Waywards (at The Bank Hotel)",
        address: "324 King St, Newtown NSW 2042",
        website: "https://waywards.com.au/",
        phone: "(02) 9565 1611"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Enmore",
        name: "The Duke of Enmore",
        address: "148 Enmore Rd, Enmore NSW 2042",
        website: "https://dukeofenmore.com.au/",
        phone: "(02) 9519 1935"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Erskineville",
        name: "MoshPit Bar",
        address: "642 King St, Erskineville NSW 2043",
        website: "https://moshpitbar.com.au/",
        phone: "Via website contact form"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Chippendale",
        name: "The Lord Gladstone",
        address: "115 Regent St, Chippendale NSW 2008",
        website: "https://thelordgladstone.com.au/",
        phone: "(02) 9699 3041"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Camperdown",
        name: "The Lady Hampshire",
        address: "91 Parramatta Rd, Camperdown NSW 2050",
        website: "https://theladyhampshire.com.au/",
        phone: "(02) 9660 2045"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Camperdown",
        name: "The Newsagency",
        address: "74-76 Pyrmont Bridge Rd, Camperdown NSW 2050",
        website: "https://thenewsagencyvenue.com/",
        phone: "Via website contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Surry Hills",
        name: "Low 302",
        address: "302 Crown St, Surry Hills NSW 2010",
        website: "https://www.low302.com.au/",
        phone: "(02) 9331 3131"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Circular Quay",
        name: "Mary’s Underground (formerly The Basement)",
        address: "7 Macquarie Pl, Circular Quay NSW 2000",
        website: "https://marysunderground.com/",
        phone: "Via website contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "Camelot Lounge",
        address: "19 Marrickville Rd, Marrickville NSW 2204",
        website: "https://camelotlounge.com/",
        phone: "(02) 9550 3777"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "The Union Hotel, Newtown",
        address: "576 King St, Newtown NSW 2042",
        website: "https://www.unionnewtown.com.au/",
        phone: "(02) 9557 2986"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "The Great Club",
        address: "160-164 Livingstone Rd, Marrickville NSW 2204",
        website: "https://www.thegreatclub.com.au/",
        phone: "Via website contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Redfern",
        name: "Hustle & Flow Bar",
        address: "105 Regent St, Redfern NSW 2016",
        website: "https://hustleandflowbar.com/",
        phone: "Via website contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Redfern",
        name: "The Dock",
        address: "182 Redfern St, Redfern NSW 2016",
        website: "https://www.facebook.com/TheDockBar/",
        phone: "Via Facebook contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "The Midnight Special",
        address: "44 Enmore Rd, Newtown NSW 2042",
        website: "https://www.facebook.com/TheMidnightSpecialNewtown/",
        phone: "Via Facebook contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "Django Bar (at Camelot Lounge)",
        address: "19 Marrickville Rd, Marrickville NSW 2204",
        website: "https://camelotlounge.com/",
        phone: "(02) 9550 3777"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Rozelle",
        name: "The Bridge Hotel (Rozelle)",
        address: "119 Victoria Rd, Rozelle NSW 2039",
        website: "https://bridgehotel.com.au/",
        phone: "(02) 9810 1260"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Redfern",
        name: "The Bearded Tit",
        address: "183 Regent St, Redfern NSW 2016",
        website: "https://thebeardedtit.com/",
        phone: "(02) 9698 8942"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Surry Hills",
        name: "The Cricketers Arms Hotel",
        address: "106 Fitzroy St, Surry Hills NSW 2010",
        website: "https://www.cricketersarmshotel.com/",
        phone: "(02) 8339 2666"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Chippendale",
        name: "Knox Street Bar",
        address: "21 Shepherd St, Chippendale NSW 2008",
        website: "https://www.facebook.com/knoxstreetbar/",
        phone: "Via Facebook contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Marrickville",
        name: "Gasoline Pony",
        address: "115 Marrickville Rd, Marrickville NSW 2204",
        website: "https://www.facebook.com/thegasolinepony/",
        phone: "Via Facebook contact"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "Boogie Mountain (Above The Marlborough Hotel)",
        address: "145 King St, Newtown NSW 2042",
        website: "https://www.marlboroughhotel.com.au/boogie-mountain/",
        phone: "(02) 9519 1222"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Leichhardt",
        name: "Crowbar Sydney (formerly Bald Faced Stag)",
        address: "345 Parramatta Rd, Leichhardt NSW 2040",
        website: "https://crowbarsyd.com/",
        phone: "Via website contact form"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "The Botany View Hotel",
        address: "597 King St, Newtown NSW 2042",
        website: "https://botanyviewhotel.com/",
        phone: "(02) 9557 8888"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Alexandria",
        name: "The Lord Raglan Hotel",
        address: "12 Henderson Rd, Alexandria NSW 2015",
        website: "https://www.lordraglan.com.au/",
        phone: "(02) 8399 0303"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Darlinghurst",
        name: "The Burdekin Hotel",
        address: "2 Oxford St, Darlinghurst NSW 2010",
        website: "https://burdekinhotel.com/",
        phone: "(02) 9331 3066"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Manly",
        name: "The Old Manly Boatshed",
        address: "35-37 The Corso, Manly NSW 2095",
        website: "https://www.oldmanlyboatshed.com.au/",
        phone: "(02) 9977 4443"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Chippendale",
        name: "The Rose Hotel",
        address: "52-54 Cleveland St, Chippendale NSW 2008",
        website: "https://therosehotel.com.au/",
        phone: "(02) 9318 1133"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Newtown",
        name: "Kelly’s on King",
        address: "285 King St, Newtown NSW 2042",
        website: "https://www.kellysonking.com/",
        phone: "(02) 9519 0940"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Redfern",
        name: "The Redfern",
        address: "135 Redfern St, Redfern NSW 2016",
        website: "https://theredfern.com.au/",
        phone: "(02) 9699 4231"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Alexandria",
        name: "Yulli’s Brews",
        address: "75A Burrows Rd, Alexandria NSW 2015",
        website: "https://www.yullisbrews.com.au/",
        phone: "(02) 9519 0152"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Balmain",
        name: "Union Hotel (Balmain)",
        address: "90 Beattie St, Balmain NSW 2041",
        website: "https://unionbalmain.com.au/",
        phone: "(02) 9810 1323"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Petersham",
        name: "Public House Petersham (PHP)",
        address: "292 Stanmore Rd, Petersham NSW 2049",
        website: "https://www.publichousepetersham.com.au/",
        phone: "(02) 9568 3703"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Stanmore",
        name: "Stanmore Hotel",
        address: "97-99 Parramatta Rd, Stanmore NSW 2048",
        website: "https://www.thestanmorehotel.com.au/",
        phone: "(02) 9565 1215"
    },
    {
        country: "Australia",
        state: "New South Wales",
        city: "Paddington",
        name: "The Captain Cook Hotel (Paddington)",
        address: "162 Flinders St, Paddington NSW 2021",
        website: "https://www.captaincookhotel.com.au/",
        phone: "(02) 9331 4949"
    },

    // PERTH VENUES (Australia, Western Australia)
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northbridge",
        name: "The Bird",
        address: "181 William St, Northbridge WA 6003",
        website: "https://www.williamstreetbird.com/",
        phone: "(08) 6102 7323, info@williamstreetbird.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "North Fremantle",
        name: "Mojos Bar",
        address: "237 Queen Victoria St, North Fremantle WA 6159",
        website: "https://mojosbar.com.au/",
        phone: "info@mojosbar.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "North Perth",
        name: "Rosemount Hotel",
        address: "459 Fitzgerald St, North Perth WA 6006",
        website: "https://www.rosemounthotel.com.au/",
        phone: "(08) 9328 7062, info@rosemounthotel.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "The Ellington Jazz Club",
        address: "191 Beaufort St, Perth WA 6000",
        website: "https://www.ellingtonjazz.com.au/",
        phone: "(08) 9228 1088, info@ellingtonjazz.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "The Aardvark",
        address: "Basement of The Norfolk Hotel, 47 South Terrace, Fremantle WA 6160",
        website: "https://www.theaardvarkbar.com/",
        phone: "hello@theaardvarkbar.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "Amplifier Capitol",
        address: "383 Murray St, Perth WA 6000",
        website: "https://www.amplifiercapitol.com.au/",
        phone: "(08) 9226 0500, info@amplifiercapitol.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northbridge",
        name: "Jack Rabbit Slim’s",
        address: "133 Aberdeen St, Northbridge WA 6003",
        website: "https://www.jackrabbitslims.net/",
        phone: "info@jackrabbitslims.net"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "The Sewing Room",
        address: "Basement, Wolf Lane, 317 Murray St, Perth WA 6000",
        website: "https://thesewingroom.com.au/",
        phone: "info@thesewingroom.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "North Perth",
        name: "The Charles Hotel (Perth Blues Club)",
        address: "509 Charles St, North Perth WA 6006",
        website: "https://www.charleshotel.com.au/",
        phone: "(08) 9444 1051, info@charleshotel.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Maylands",
        name: "Lyric’s Underground",
        address: "22 Lyric Ln, Maylands WA 6051",
        website: "https://www.lyricsunderground.com.au/",
        phone: "info@lyricsunderground.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northbridge",
        name: "The Rechabite",
        address: "224 William St, Northbridge WA 6003",
        website: "https://www.therechabite.com.au/",
        phone: "hello@therechabite.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "Clancy’s Fish Pub Fremantle",
        address: "51 Cantonment St, Fremantle WA 6160",
        website: "https://clancysfishpub.com.au/venue/fremantle/",
        phone: "(08) 9335 1351, freo@clancysfishpub.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Applecross",
        name: "Clancy’s Fish Pub Canning Bridge",
        address: "903 Canning Hwy, Applecross WA 6153",
        website: "https://clancysfishpub.com.au/venue/canning-bridge/",
        phone: "(08) 9364 7322, cb@clancysfishpub.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "Freo.Social",
        address: "Parry St & William St, Fremantle WA 6160",
        website: "https://freo.social/",
        phone: "info@freo.social"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "Badlands Bar",
        address: "1/3 Aberdeen St, Perth WA 6000",
        website: "https://badlands.bar/",
        phone: "info@badlands.bar"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "The Newport Hotel",
        address: "2 South Terrace, Fremantle WA 6160",
        website: "https://www.thenewport.com/",
        phone: "(08) 9335 2428, info@thenewport.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Scarborough",
        name: "The Indi Bar (at Indian Ocean Hotel)",
        address: "335 Scarborough Beach Rd, Scarborough WA 6019",
        website: "https://www.facebook.com/TheIndiBar/",
        phone: "(08) 9245 3733"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Highgate",
        name: "Si Paradiso",
        address: "1/446 Beaufort St, Highgate WA 6003",
        website: "https://www.siparadiso.com/",
        phone: "hello@siparadiso.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Scarborough",
        name: "El Grotto",
        address: "5/148 The Esplanade, Scarborough WA 6019",
        website: "https://www.elgrotto.com.au/",
        phone: "hello@elgrotto.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Inglewood",
        name: "Milk Bar (at The Civic Hotel)",
        address: "981 Beaufort St, Inglewood WA 6052",
        website: "https://milkbarperth.com/",
        phone: "bookings@milkbarperth.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Mosman Park",
        name: "Rodney’s Bait n Tackle",
        address: "211 Johnston St, Mosman Park WA 6012",
        website: "https://www.rodneysbar.com.au/",
        phone: "(08) 9284 2507, rodneysbar@gmail.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northbridge",
        name: "Convenients",
        address: "35 Lake St, Northbridge WA 6003",
        website: "https://www.instagram.com/convenients_/",
        phone: "convenientsbar@gmail.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Perth",
        name: "Lucy’s Love Shack",
        address: "Basement, 104 Murray St, Perth WA 6000",
        website: "https://www.lucysloveshack.com/",
        phone: "bookings@lucysloveshack.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Northbridge",
        name: "Lynott’s Lounge",
        address: "290 William St, Northbridge WA 6003",
        website: "https://www.lynottslounge.com/",
        phone: "hello@lynottslounge.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Scarborough",
        name: "Indian Ocean Hotel",
        address: "23 Hastings St, Scarborough WA 6019",
        website: "https://www.indianoceanhotel.com.au/",
        phone: "(08) 9245 1200, stay@indianoceanhotel.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Mount Lawley",
        name: "Astor Theatre",
        address: "659 Beaufort St, Mount Lawley WA 6050",
        website: "https://www.astortheatreperth.com/",
        phone: "(08) 9370 1777, info@astortheatreperth.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Fremantle",
        name: "Bar Orient",
        address: "39 High St, Fremantle WA 6160",
        website: "https://www.barorient.com.au/",
        phone: "(08) 9335 6333, info@barorient.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Mount Hawthorn",
        name: "Paddington Ale House (The Paddo)",
        address: "141 Scarborough Beach Rd, Mount Hawthorn WA 6016",
        website: "https://www.paddingtonalehouse.com.au/",
        phone: "(08) 9444 0399, admin@paddingtonalehouse.com.au"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "Subiaco",
        name: "The Corner Gallery",
        address: "263 Hay St, Subiaco WA 6008",
        website: "https://thecornergallery.com/",
        phone: "hello@thecornergallery.com"
    },
    {
        country: "Australia",
        state: "Western Australia",
        city: "East Fremantle",
        name: "Duke of George",
        address: "135 George St, East Fremantle WA 6158",
        website: "https://www.dukeofgeorge.com.au/",
        phone: "(08) 9339 7950, info@dukeofgeorge.com.au"
    }
     // BERLIN VENUES (Germany, Berlin)
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "SO36",
        address: "Oranienstraße 190, 10999 Berlin",
        website: "https://www.so36.de/",
        phone: "030 61101313"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Berghain Kantine",
        address: "Am Wriezener Bahnhof, 10243 Berlin",
        website: "https://berghain.berlin/de/kantine",
        phone: "Not publicly listed"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Lido",
        address: "Cuvrystraße 7, 10997 Berlin",
        website: "https://www.lido-berlin.de/",
        phone: "030 69566840"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Sage Club",
        address: "Köpenicker Str. 76, 10179 Berlin",
        website: "https://www.sage-club.de/",
        phone: "030 278909955"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Astra Kulturhaus",
        address: "Revaler Str. 99, 10245 Berlin",
        website: "https://www.astra-berlin.de/",
        phone: "030 609166630"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Kesselhaus & Maschinenhaus",
        address: "Schönhauser Allee 36, 10435 Berlin",
        website: "https://www.kesselhaus-berlin.de/",
        phone: "030 44315151"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Monarch",
        address: "Skalitzer Str. 134, 10999 Berlin",
        website: "https://www.monarch.berlin/",
        phone: "Not publicly listed"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Prachtwerk",
        address: "Ganghoferstraße 2, 12043 Berlin",
        website: "https://prachtwerkberlin.com/",
        phone: "Not publicly listed"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Cassiopeia",
        address: "Revaler Str. 99, 10245 Berlin",
        website: "https://cassiopeia-berlin.de/",
        phone: "Not publicly listed"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Frannz Club",
        address: "Schönhauser Allee 36, 10435 Berlin",
        website: "https://frannz.de/",
        phone: "030 780089790"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Yaam",
        address: "An der Schillingbrücke, 10243 Berlin",
        website: "https://www.yaam.de/",
        phone: "030 6151351"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Badehaus Szimpla Musiksalon",
        address: "Revaler Str. 99, 10245 Berlin",
        website: "https://badehaus-berlin.com/",
        phone: "Not publicly listed"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Gretchen Club",
        address: "Obentrautstraße 19-21, 10963 Berlin",
        website: "https://www.gretchen-club.de/",
        phone: "030 25922702"
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
        name: "Hangar 49",
        address: "Holzmarktstraße 15-18, 10179 Berlin",
        website: "https://www.hangar49.de/",
        phone: "030 59069928"
    },
];

// SELECTORS
const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");
const venueList = document.getElementById("venueList");

// FUNCTION TO POPULATE DROPDOWNS
function populateSelect(selectElement, items, defaultText) {
    selectElement.innerHTML = `<option value="">${defaultText}</option>`;
    items.forEach(item => {
        selectElement.innerHTML += `<option value="${item}">${item}</option>`;
    });
}

// FUNCTION TO GET UNIQUE VALUES FOR DROPDOWNS
function getUniqueValues(data, key, filters = {}) {
    let filteredData = data;

    // Apply filters (country, state)
    if (filters.country) {
        filteredData = filteredData.filter(v => v.country === filters.country);
    }
    if (filters.state) {
        filteredData = filteredData.filter(v => v.state === filters.state);
    }

    // Extract and return unique sorted values for the given key
    return [...new Set(filteredData.map(v => v[key]))].sort();
}

// FUNCTION TO DISPLAY VENUES
function displayVenues(country, state, city) {
    const filteredVenues = venues.filter(v => 
        v.country === country && v.state === state && v.city === city
    );

    if (filteredVenues.length === 0) {
        venueList.innerHTML = '<p>No venues found for this location.</p>';
        return;
    }

    venueList.innerHTML = filteredVenues.map(venue => `
        <div class="venue-card">
            <h3>${venue.name}</h3>
            <p><strong>Address:</strong> ${venue.address}</p>
            <p><strong>Website:</strong> <a href="${venue.website}" target="_blank">${venue.website}</a></p>
            <p><strong>Phone:</strong> ${venue.phone}</p>
        </div>
    `).join("");
}

// INITIALIZE DROPDOWNS ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    const countries = getUniqueValues(venues, "country");
    populateSelect(countrySelect, countries, "Select Country");
    stateSelect.disabled = true;
    citySelect.disabled = true;
});

// COUNTRY SELECT EVENT LISTENER
countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;

    if (selectedCountry) {
        const states = getUniqueValues(venues, "state", { country: selectedCountry });
        populateSelect(stateSelect, states, "Select State/Province");
        stateSelect.disabled = false;
        citySelect.disabled = true;
        citySelect.innerHTML = '<option value="">Select City</option>';
        venueList.innerHTML = '<p>Select a state and city to view venues.</p>';
    } else {
        stateSelect.innerHTML = '<option value="">Select State/Province</option>';
        citySelect.innerHTML = '<option value="">Select City</option>';
        stateSelect.disabled = true;
        citySelect.disabled = true;
        venueList.innerHTML = '<p>Select a country, state, and city to view venues.</p>';
    }
});

// STATE SELECT EVENT LISTENER
stateSelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;

    if (selectedState) {
        const cities = getUniqueValues(venues, "city", { country: selectedCountry, state: selectedState });
        populateSelect(citySelect, cities, "Select City");
        citySelect.disabled = false;
        venueList.innerHTML = '<p>Select a city to view venues.</p>';
    } else {
        citySelect.innerHTML = '<option value="">Select City</option>';
        citySelect.disabled = true;
        venueList.innerHTML = '<p>Select a state and city to view venues.</p>';
    }
});

// CITY SELECT EVENT LISTENER
citySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    const selectedCity = citySelect.value;

    if (selectedCity) {
        displayVenues(selectedCountry, selectedState, selectedCity);
    } else {
        venueList.innerHTML = '<p>Select a city to view venues.</p>';
    }
});
