const venues = [
  {
    name: "2001 Goodwill Games",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "2009 Australian Grand Prix",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "20 Plus Club",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "21st Century",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "2XX Radio Concert",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "3XY Expo",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "3XY Yarra Bank Concert",
    city: "Flinders Park",
    state: "VIC"
  },
  {
    name: "Abbey Disco",
    city: "Gawler",
    state: "SA"
  },
  {
    name: "Abbey Road",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "ABC Studios",
    city: "Gore Hill",
    state: "NSW"
  },
  {
    name: "Aberdeen Hotel",
    city: "Fitzroy Nth",
    state: "VIC"
  },
  {
    name: "Abergavenny",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Acacia Ridge Hotel",
    city: "Acacia Ridge",
    state: "QLD"
  },
  {
    name: "Acer Arena",
    city: "Sydney Olympic Park",
    state: "NSW"
  },
  {
    name: "Adams Apple",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Adam's Apple Bistro",
    city: "Caringbah",
    state: "NSW"
  },
  {
    name: "Adelaide Entertainment Centre",
    city: "Hindmarsh",
    state: "SA"
  },
  {
    name: "Adelaide Festival Theatre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide High School",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide Opera Theatre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide Oval",
    city: "North Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide Tonight (TV Show)",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide Town Hall",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adelaide University",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Adrians Nightclub",
    city: "Perth",
    state: "WA"
  },
  {
    name: "After Dark Room",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Ainslie Football Club",
    city: "Ainslie",
    state: "ACT"
  },
  {
    name: "Ainslie Rex Hotel",
    city: "Ainslie",
    state: "ACT"
  },
  {
    name: "Airforce Club",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Airlie All Sports",
    city: "Airlie Beach",
    state: "QLD"
  },
  {
    name: "AIS Arena",
    city: "Bruce",
    state: "ACT"
  },
  {
    name: "Albany Leisure Centre",
    city: "Albany",
    state: "WA"
  },
  {
    name: "Albert Hall",
    city: "Launceston",
    state: "TAS"
  },
  {
    name: "Albion Hotel",
    city: "Claremont",
    state: "WA"
  },
  {
    name: "Albion Park Hotel",
    city: "Albion Park",
    state: "NSW"
  },
  {
    name: "Albion Park RSL",
    city: "Albion Park",
    state: "NSW"
  },
  {
    name: "Albury Cinema Centre",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Albury City Hall",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Albury Civic Centre",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Alexander Club",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "Alexandra Gardens",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Alexandra Headlands Hotel",
    city: "Alexandra Headlands",
    state: "QLD"
  },
  {
    name: "Alexandra High School",
    city: "Alexandra",
    state: "VIC"
  },
  {
    name: "Alexandra Hills Hotel",
    city: "Alexandra Hills",
    state: "QLD"
  },
  {
    name: "Alexandria Hotel",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Allawah Hotel",
    city: "Allawah",
    state: "NSW"
  },
  {
    name: "Alley Cat Wine Bar & Bistro",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "All Nations Club",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "All Saints Estate Wines",
    city: "Wahgunyah, Rutherglen",
    state: "VIC"
  },
  {
    name: "Ambarvale Tavern",
    city: "Ambarvale",
    state: "NSW"
  },
  {
    name: "Ambassador",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Ambassador Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Ambassador Nightclub",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "American Express Charity Golf Ball",
    city: "Sanctuary Cove",
    state: "QLD"
  },
  {
    name: "Amoco Centre",
    city: "Orange",
    state: "NSW"
  },
  {
    name: "Amplifier Bar",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Anglesea Hotel",
    city: "Anglesea",
    state: "VIC"
  },
  {
    name: "Annandale Hotel",
    city: "Annandale",
    state: "NSW"
  },
  {
    name: "Annie’s Lane Winery",
    city: "Watervale, Clare Valley",
    state: "SA"
  },
  {
    name: "Ante Room",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "ANU",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "ANU Refectory",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Apollo Bay Hotel",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Apollo Stadium",
    city: "Richmond",
    state: "SA"
  },
  {
    name: "Ararat Town Hall",
    city: "Ararat",
    state: "VIC"
  },
  {
    name: "Aratula Bike Show",
    city: "Aratula",
    state: "QLD"
  },
  {
    name: "Argent Hotel",
    city: "Broken Hill",
    state: "NSW"
  },
  {
    name: "Argyle Tavern",
    city: "The Rocks",
    state: "NSW"
  },
  {
    name: "Aristocrat Wedding & Function Centre",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Arkaba Hotel",
    city: "Fullarton",
    state: "SA"
  },
  {
    name: "Armadale Hotel",
    city: "Armadale",
    state: "VIC"
  },
  {
    name: "Armidale Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Armidale Teachers College",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "Armidale Town Hall",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "Armidale University",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "Armstrong's ‘It’s Live’ (Radio Show)",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Arncliffe Hotel",
    city: "Arncliffe",
    state: "NSW"
  },
  {
    name: "Arthurs Court  - Wine Bar",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Arts Factory",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "Arts Factory",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "Ashby Hall",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Ashfield Hotel",
    city: "Ashfield",
    state: "NSW"
  },
  {
    name: "Ashfield Town Hall",
    city: "Ashfield",
    state: "NSW"
  },
  {
    name: "Ashley Hotel",
    city: "Maidstone",
    state: "VIC"
  },
  {
    name: "Ashley's Disco",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "Aspley Football Club",
    city: "Carseldine",
    state: "QLD"
  },
  {
    name: "Asquith Boys High School",
    city: "Asquith",
    state: "NSW"
  },
  {
    name: "Asquith Leagues Club  - Magpies Waitara",
    city: "Waitara",
    state: "NSW"
  },
  {
    name: "Astoria Motel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Astra Hotel",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Astrodome",
    city: "Traralgon",
    state: "VIC"
  },
  {
    name: "Athenaeum Hall",
    city: "Lilydale",
    state: "VIC"
  },
  {
    name: "Auburn Baseball Club",
    city: "Auburn",
    state: "NSW"
  },
  {
    name: "Auburn Hotel",
    city: "Auburn",
    state: "NSW"
  },
  {
    name: "Auburn-Lidcombe Businessmen's Club",
    city: "North Lidcombe",
    state: "NSW"
  },
  {
    name: "Auburn RSL Club",
    city: "Auburn",
    state: "NSW"
  },
  {
    name: "Auburn Soccer Club",
    city: "Auburn",
    state: "NSW"
  },
  {
    name: "Austral Bowling Club",
    city: "Austral",
    state: "NSW"
  },
  {
    name: "Australian Heritage Hotel",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Australian Hotel",
    city: "Cooma",
    state: "NSW"
  },
  {
    name: "Australian Hotel Motel",
    city: "Yass",
    state: "NSW"
  },
  {
    name: "Australian Music Awards",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Australian National University",
    city: "Acton",
    state: "ACT"
  },
  {
    name: "Australian Open",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Australian Technology Park",
    city: "Eveleigh",
    state: "NSW"
  },
  {
    name: "Australia's Wonderland",
    city: "Eastern Creek",
    state: "NSW"
  },
  {
    name: "Avalon Beach RSL",
    city: "Avalon",
    state: "NSW"
  },
  {
    name: "Avoca Community Hall",
    city: "Avoca",
    state: "NSW"
  },
  {
    name: "Bacchus Marsh Public Hall",
    city: "Bacchus Marsh",
    state: "VIC"
  },
  {
    name: "Bacchus Wine Bar",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Balgownie Hotel",
    city: "Balgownie",
    state: "NSW"
  },
  {
    name: "Balina RSL Club",
    city: "Balina",
    state: "NSW"
  },
  {
    name: "Ballarat City Hall",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Ballarat Teachers College",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Ballina RSL Club",
    city: "Ballina",
    state: "NSW"
  },
  {
    name: "Balmain Convention Centre",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Balmain Leagues Club",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Balmain-Rozelle RSL",
    city: "Drummoyne",
    state: "NSW"
  },
  {
    name: "Balmain Sports Club",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Balmain Town Hall",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Bananas",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Bandstand (TV Show)",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Bangalow Bowling & Sports Club",
    city: "Bangalow",
    state: "NSW"
  },
  {
    name: "Banjos Club",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Banksia Hotel",
    city: "Banksia",
    state: "NSW"
  },
  {
    name: "Bankstown Paceway",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Bankstown RSL Club",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Bankstown Sports Club",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Bar Broadway",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Bargo Hotel",
    city: "Bargo",
    state: "NSW"
  },
  {
    name: "Bargo Sports Club",
    city: "Bargo",
    state: "NSW"
  },
  {
    name: "Barkly Hotel",
    city: "Mt Isa",
    state: "QLD"
  },
  {
    name: "Barn Palais",
    city: "Mount Gambier",
    state: "SA"
  },
  {
    name: "Bar On The Hill",
    city: "Callaghan",
    state: "NSW"
  },
  {
    name: "Barrenjoey High School",
    city: "Avalon",
    state: "NSW"
  },
  {
    name: "Basser College",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "Bateau Bay Hotel",
    city: "Bateau Bay",
    state: "NSW"
  },
  {
    name: "Batemans Bay Bowling & Recreation Club",
    city: "Batemans Bay",
    state: "NSW"
  },
  {
    name: "Batemans Bay Youth Hall",
    city: "Batemans Bay",
    state: "NSW"
  },
  {
    name: "Bathurst City Hall",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Civic Centre",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst College Of Advanced Education",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Convention & Function Centre",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Gaol",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Leagues Club",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Rugby League Club",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Bathurst Theatre",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Baulkham Hills High School",
    city: "Baulkham Hills",
    state: "NSW"
  },
  {
    name: "Bayswater Hotel",
    city: "Bayswater",
    state: "VIC"
  },
  {
    name: "Bayview Function Centre",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Bayview Hotel",
    city: "Woy Woy",
    state: "NSW"
  },
  {
    name: "Bayview Tavern",
    city: "Gladesville",
    state: "NSW"
  },
  {
    name: "Beattie St",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Beaumaris Civic Centre",
    city: "Beaumaris",
    state: "VIC"
  },
  {
    name: "Beaumaris Hotel",
    city: "Beaumaris",
    state: "VIC"
  },
  {
    name: "Be Bop & Loo Bar",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Beechworth Festival",
    city: "Beechworth",
    state: "VIC"
  },
  {
    name: "Beenleigh Tavern",
    city: "Eagleby",
    state: "QLD"
  },
  {
    name: "Beethovens Niteclub",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Beetle Bar",
    city: "Petrie Terrace",
    state: "QLD"
  },
  {
    name: "Bega RSL Club",
    city: "Bega",
    state: "NSW"
  },
  {
    name: "Bega Town Hall",
    city: "Bega",
    state: "NSW"
  },
  {
    name: "Beirut By Night",
    city: "Taylors Square, Sydney",
    state: "NSW"
  },
  {
    name: "Belair Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Bel-Air Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Belfield Hotel",
    city: "Belfield",
    state: "NSW"
  },
  {
    name: "Bellevue Hotel",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Bellevue Hotel",
    city: "Tuncurry",
    state: "NSW"
  },
  {
    name: "Belligen RSL Club",
    city: "Belligen",
    state: "NSW"
  },
  {
    name: "Bellview Hotel",
    city: "Tuncurry",
    state: "NSW"
  },
  {
    name: "Belmont 16ft Skiff Club",
    city: "Belmont",
    state: "NSW"
  },
  {
    name: "Belmont Hotel",
    city: "Belmont",
    state: "WA"
  },
  {
    name: "Belmont Hotel",
    city: "Belmont",
    state: "NSW"
  },
  {
    name: "Belmont North Community Hall",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Belmont Racecourse",
    city: "Burswood",
    state: "WA"
  },
  {
    name: "Belmont Sportsman's Club",
    city: "Belmont",
    state: "NSW"
  },
  {
    name: "Belmore Hotel",
    city: "Belmore",
    state: "NSW"
  },
  {
    name: "Belrose Hotel",
    city: "Belrose",
    state: "NSW"
  },
  {
    name: "Benalla Tech Hall",
    city: "Benalla",
    state: "VIC"
  },
  {
    name: "Bendigo Civic Centre",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Bendigo Institute Of Technology",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Bendigo Showgrounds",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Bendigo Surround",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Bendigo YMCA",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Bennelong Hotel",
    city: "Beverly Hills",
    state: "NSW"
  },
  {
    name: "Beresfield Bowling Club",
    city: "Beresfield",
    state: "NSW"
  },
  {
    name: "Beresford Hotel",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Berkeley Sports Club",
    city: "Berkeley",
    state: "NSW"
  },
  {
    name: "Berkshire Park",
    city: "Berkshire Park",
    state: "NSW"
  },
  {
    name: "Berry Bowling Club",
    city: "Berry",
    state: "NSW"
  },
  {
    name: "Berry Showground",
    city: "Berry",
    state: "NSW"
  },
  {
    name: "Berties",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Bertie's Discotheque",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Betsy Nightclub",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Beverly Crest Hotel",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Bevy's Place Wine Bar",
    city: "Mosman",
    state: "NSW"
  },
  {
    name: "Bexley Masonic Hall",
    city: "Bexley",
    state: "NSW"
  },
  {
    name: "Bexley North Hotel",
    city: "Bexley North",
    state: "NSW"
  },
  {
    name: "Bexley RSL",
    city: "Bexley",
    state: "NSW"
  },
  {
    name: "Bidwill Hotel",
    city: "Bidwill",
    state: "NSW"
  },
  {
    name: "Big Horn Country Club",
    city: "Homebush",
    state: "NSW"
  },
  {
    name: "Billabong Hotel",
    city: "Merrylands",
    state: "NSW"
  },
  {
    name: "Billboard",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Bimbadgen Estate",
    city: "Pokolbin",
    state: "NSW"
  },
  {
    name: "Birkenhead Point Tavern",
    city: "Drummoyne",
    state: "NSW"
  },
  {
    name: "Black Bull Winebar",
    city: "Haberfield",
    state: "NSW"
  },
  {
    name: "Blackheath Community Centre",
    city: "Blackheath",
    state: "NSW"
  },
  {
    name: "Blacksmiths Community Hall",
    city: "Blacksmiths",
    state: "NSW"
  },
  {
    name: "Blacktown Civic Centre",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Civic Theatre",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown High School",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Inn",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown RSL",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Showground",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Soccer Club",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Workers Club",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blacktown Workers Sports Club",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Blackwater Civic Centre",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Blades Cabaret",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Blasers Dance Club",
    city: "Werribee",
    state: "VIC"
  },
  {
    name: "Blaxland Tavern",
    city: "Blaxland",
    state: "NSW"
  },
  {
    name: "Blazes",
    city: "North Perth",
    state: "WA"
  },
  {
    name: "Blazes Disco",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Bligh Park Tavern",
    city: "South Widsor",
    state: "NSW"
  },
  {
    name: "Blind Date (TV Show)",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Blondies",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Blondies Restaurant",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "Blue Boar Inn",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Blue Cattle Dog Hotel",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "Blue Cockatoo Restaurant",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Bluegum Hotel",
    city: "Waitara",
    state: "NSW"
  },
  {
    name: "Blue Moon Room",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Blue Rumours Wine Bar",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Bluescope Illawarra Farm Aid Concert",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Bluescope Illawarra Farm Aid Concert",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Blush & Stutter",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Bogey's Bar & Bistro",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Bohem Lounge",
    city: "Haymarket",
    state: "NSW"
  },
  {
    name: "Bojangles Wine Bar",
    city: "Leichhardt",
    state: "NSW"
  },
  {
    name: "Bomaderry Hotel",
    city: "Bomaderry",
    state: "NSW"
  },
  {
    name: "Bomaderry RSL Club",
    city: "Bombaderry",
    state: "NSW"
  },
  {
    name: "Bombay Rock",
    city: "Surfers Paradise",
    state: "QLD"
  },
  {
    name: "Bombay Rock",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Bondi Beach",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Bondi Beach Pavilion",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Bondi Diggers Club",
    city: "North Bondi",
    state: "NSW"
  },
  {
    name: "Bondi Icebergs Club",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Bondi Lifesaver",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Bondi Regis",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Bondi Tram - Bondi Hotel",
    city: "Bondi Beach",
    state: "NSW"
  },
  {
    name: "Bonney Theatre",
    city: "Barmera",
    state: "SA"
  },
  {
    name: "Bonnie Doon Hotel",
    city: "Bonnie Doon",
    state: "VIC"
  },
  {
    name: "Boomerang Hotel",
    city: "Bentley",
    state: "WA"
  },
  {
    name: "Boomerang Hotel-Motel",
    city: "Lavington",
    state: "NSW"
  },
  {
    name: "Boronia High School",
    city: "Boronia",
    state: "VIC"
  },
  {
    name: "Boronia Restaurant",
    city: "Palm Beach",
    state: "NSW"
  },
  {
    name: "Borthwicks Meatworks",
    city: "Brooklyn",
    state: "VIC"
  },
  {
    name: "Bottom Line",
    city: "South Yarra",
    state: "VIC"
  },
  {
    name: "Boundary Hotel",
    city: "Bentleigh East",
    state: "VIC"
  },
  {
    name: "Bowral Country Club",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Bowral Hotel",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Bowral Memorial Hall",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Box Hill Centre",
    city: "Box Hill",
    state: "VIC"
  },
  {
    name: "Box Hill Town Hall",
    city: "Box Hill",
    state: "VIC"
  },
  {
    name: "Bradbury Inn",
    city: "Bradbury",
    state: "NSW"
  },
  {
    name: "Bradfield Park",
    city: "Milsons Point",
    state: "NSW"
  },
  {
    name: "Brass Monkey",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Braybrook Hotel",
    city: "Braybrook",
    state: "VIC"
  },
  {
    name: "Bridge Hotel",
    city: "Mordialloc",
    state: "VIC"
  },
  {
    name: "Bridge Hotel",
    city: "Mildura",
    state: "VIC"
  },
  {
    name: "Bridge Hotel",
    city: "Rozelle",
    state: "NSW"
  },
  {
    name: "Bridge Tavern",
    city: "Nowra",
    state: "NSW"
  },
  {
    name: "Bridge Theatre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Bridgeway Hotel",
    city: "Pooraka",
    state: "SA"
  },
  {
    name: "Brighton City Town Hall",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Brighton High School",
    city: "North Brighton",
    state: "SA"
  },
  {
    name: "Brighton Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Brighton Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Brighton Lakes Recreation & Golf Club",
    city: "Moorebank",
    state: "NSW"
  },
  {
    name: "Brighton RSL",
    city: "Brighton-Le-Sands",
    state: "NSW"
  },
  {
    name: "Brighton Town Hall",
    city: "Brighton",
    state: "VIC"
  },
  {
    name: "Brisbane Botanic Gardens",
    city: "Toowong",
    state: "QLD"
  },
  {
    name: "Brisbane Convention & Exhibition Centre",
    city: "South Brisbane",
    state: "QLD"
  },
  {
    name: "Brisbane Entertainment Centre",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Britannia Hotel",
    city: "Chippendale",
    state: "NSW"
  },
  {
    name: "Broadbeach Hotel",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Broadbeach International Resort",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Broadmeadow Bowl",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Broadmeadows Town Hall",
    city: "Broadmeadows",
    state: "VIC"
  },
  {
    name: "Broadway Ballroom",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Broadway Tavern",
    city: "Nedlands",
    state: "WA"
  },
  {
    name: "Broken Hill Civic Centre",
    city: "Broken Hill",
    state: "NSW"
  },
  {
    name: "Bronte RSL",
    city: "Waverley",
    state: "NSW"
  },
  {
    name: "Brooklyn Drive-In",
    city: "Brooklyn",
    state: "VIC"
  },
  {
    name: "Brooklyn Public School",
    city: "Brooklyn",
    state: "NSW"
  },
  {
    name: "Brookvale Oval",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Brown Jug Inn",
    city: "Fairfield Heights",
    state: "NSW"
  },
  {
    name: "Bruce Stadium",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Bryant's",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Budgewoi Soccer Club",
    city: "Budgewoi",
    state: "NSW"
  },
  {
    name: "Bulla State School",
    city: "Bulla",
    state: "VIC"
  },
  {
    name: "Bull Bar",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Bull & Bush Hotel",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Bulli Football Club",
    city: "Woonona",
    state: "NSW"
  },
  {
    name: "Bulli Workers Club",
    city: "Bulli",
    state: "NSW"
  },
  {
    name: "Bunbury Hotel",
    city: "Bunbury",
    state: "WA"
  },
  {
    name: "Bunbury Recreation Hall",
    city: "Bunbury",
    state: "WA"
  },
  {
    name: "Bundaberg Civic Centre",
    city: "Bundaberg",
    state: "QLD"
  },
  {
    name: "Bundaberg Showground",
    city: "Bundaberg",
    state: "QLD"
  },
  {
    name: "Bundanoon Hotel",
    city: "Bundanoon",
    state: "NSW"
  },
  {
    name: "Bundeena RSL Club",
    city: "Bundeena",
    state: "NSW"
  },
  {
    name: "Bundoora Hotel",
    city: "Bundoora",
    state: "VIC"
  },
  {
    name: "Bungool Festival Of Music",
    city: "Bungool",
    state: "NSW"
  },
  {
    name: "Burdekin Memorial Hall",
    city: "Home Hill",
    state: "QLD"
  },
  {
    name: "Burnie Civic Centre",
    city: "Burnie",
    state: "TAS"
  },
  {
    name: "Burnside Town Hall",
    city: "Glenside",
    state: "SA"
  },
  {
    name: "Burswood Dome",
    city: "Burswood",
    state: "WA"
  },
  {
    name: "Burswood Island Casino",
    city: "Burswood",
    state: "WA"
  },
  {
    name: "Burwood Hotel",
    city: "Burwood",
    state: "NSW"
  },
  {
    name: "Bushfield Recreation Reserve",
    city: "Bushfield",
    state: "VIC"
  },
  {
    name: "Bush Inn",
    city: "Toorak",
    state: "VIC"
  },
  {
    name: "Bussell Motor Hotel",
    city: "Bunbury",
    state: "WA"
  },
  {
    name: "Busselton Motor Inn",
    city: "Busselton",
    state: "WA"
  },
  {
    name: "Byron Community Centre",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "Cabarita Beach Hotel - Nicabella's",
    city: "Cabarita Beach",
    state: "NSW"
  },
  {
    name: "Cabbage Patch Beer Garden",
    city: "Coolangatta",
    state: "QLD"
  },
  {
    name: "Cabbage Tree Hotel",
    city: "Fairy Meadow",
    state: "NSW"
  },
  {
    name: "Cabramatta Civic Centre",
    city: "Cabramatta",
    state: "NSW"
  },
  {
    name: "Cabramatta High School",
    city: "Cabramatta",
    state: "NSW"
  },
  {
    name: "Cabramatta Rugby Leagues Club",
    city: "Cabramatta",
    state: "NSW"
  },
  {
    name: "Cabra Vale Diggers Club",
    city: "Cabramatta",
    state: "NSW"
  },
  {
    name: "Cairns Civic Centre",
    city: "Cairns",
    state: "QLD"
  },
  {
    name: "Cairns Convention Centre",
    city: "Cairns",
    state: "QLD"
  },
  {
    name: "Cairns Showgrounds",
    city: "Cairns",
    state: "QLD"
  },
  {
    name: "Calamvale Hotel",
    city: "Calamvale",
    state: "QLD"
  },
  {
    name: "Calder Park Raceway",
    city: "Calder Park",
    state: "VIC"
  },
  {
    name: "Caledonian Hotel",
    city: "Wonthaggi",
    state: "VIC"
  },
  {
    name: "Callan Park Hospital",
    city: "Lilyfield",
    state: "NSW"
  },
  {
    name: "Caloundra Civic Centre",
    city: "Caloundra",
    state: "QLD"
  },
  {
    name: "Caloundra RSL Club",
    city: "Caloundra",
    state: "QLD"
  },
  {
    name: "Camberwell Civic Centre",
    city: "Camberwell",
    state: "VIC"
  },
  {
    name: "Camberwell High School",
    city: "Canterbury",
    state: "VIC"
  },
  {
    name: "Cambridge Tavern",
    city: "Fairfield",
    state: "NSW"
  },
  {
    name: "Cambridge Tavern",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Camden Civic Centre",
    city: "Camden",
    state: "NSW"
  },
  {
    name: "Camden High School",
    city: "Camden",
    state: "NSW"
  },
  {
    name: "Camden Showground",
    city: "Camden",
    state: "NSW"
  },
  {
    name: "Camden Tavern",
    city: "Camden",
    state: "NSW"
  },
  {
    name: "Camelia Grove Hotel",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Camelot Lounge (Django Bar)",
    city: "Marrickville",
    state: "NSW"
  },
  {
    name: "Campbelltown Catholic Club",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Campbelltown CYO",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Campbelltown Golf Club",
    city: "Glen Alpine",
    state: "NSW"
  },
  {
    name: "Campbelltown Leagues Club",
    city: "Leumeah",
    state: "NSW"
  },
  {
    name: "Campbelltown Masonic Club",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Campbelltown RSL Club",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Canberra College Of Advanced Education",
    city: "Bruce",
    state: "ACT"
  },
  {
    name: "Canberra Deakin Football Club",
    city: "Deakin",
    state: "ACT"
  },
  {
    name: "Canberra Hotel",
    city: "Lismore",
    state: "NSW"
  },
  {
    name: "Canberra Raiders Football Club",
    city: "Gungahlin",
    state: "ACT"
  },
  {
    name: "Canberra Showground",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Canberra Southern Cross Club",
    city: "Phillip",
    state: "ACT"
  },
  {
    name: "Canberra Theatre",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Canberra University",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Canelands Sound Shelter",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Cannonvale Hotel",
    city: "Airlie Beach",
    state: "QLD"
  },
  {
    name: "Canopus",
    city: "Box Hill",
    state: "VIC"
  },
  {
    name: "Canterbury Court Ballroom",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Canterbury Hurlstone Park RSL",
    city: "Hurlstone Park",
    state: "NSW"
  },
  {
    name: "Canterbury Leagues Club",
    city: "Belmore",
    state: "NSW"
  },
  {
    name: "Capella Cultural Centre",
    city: "Capella",
    state: "QLD"
  },
  {
    name: "Capital Hall",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Capitol Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Capitol Theatre",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Captain Cook Hotel",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Captain Cook Hotel",
    city: "Kippa-Ring",
    state: "QLD"
  },
  {
    name: "Captain Cook Hotel",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Captain Magic's Amusement Centre",
    city: "Kogarah",
    state: "NSW"
  },
  {
    name: "Captain Stirling Hotel",
    city: "Nedlands",
    state: "WA"
  },
  {
    name: "Cardiff Panthers Club",
    city: "Cardiff",
    state: "NSW"
  },
  {
    name: "Cardiff Soccer Club",
    city: "Cardiff",
    state: "NSW"
  },
  {
    name: "Cardiff Workers Club",
    city: "Cardiff",
    state: "NSW"
  },
  {
    name: "Cargo's Nightclub",
    city: "Fremantle",
    state: "WA"
  },
  {
    name: "Carina Speedway",
    city: "Bunbdaberg",
    state: "QLD"
  },
  {
    name: "Caringbah Inn",
    city: "Caringbah",
    state: "NSW"
  },
  {
    name: "Caringbah RSL",
    city: "Caringbah",
    state: "NSW"
  },
  {
    name: "Caringbah YMCA",
    city: "Caringbah",
    state: "NSW"
  },
  {
    name: "Carlton Hotel",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Carlton Inn",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Carlyle Hotel",
    city: "Derwent Park",
    state: "TAS"
  },
  {
    name: "Carmen's Nightclub",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Carnaby Inn",
    city: "North Melbourne",
    state: "VIC"
  },
  {
    name: "Carnarvon Town Hall",
    city: "Carnarvon",
    state: "WA"
  },
  {
    name: "Carrington Park Sportsground",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Casino RSL",
    city: "Casino",
    state: "NSW"
  },
  {
    name: "Casino RSM Club",
    city: "Casino",
    state: "NSW"
  },
  {
    name: "Castle Hill Catholic College Of Advanced Education",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Castle Hill RSL Club",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Castle Hill Showground",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Castle Hill Tavern",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Castle Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Castle Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Castle Inn",
    city: "Campsie",
    state: "NSW"
  },
  {
    name: "Castlemaine Town Hall",
    city: "Castlemaine",
    state: "VIC"
  },
  {
    name: "Castle Park Country Club",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Castle Wine Bar",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Castrian Hill Bay Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Casula High School",
    city: "Casula",
    state: "NSW"
  },
  {
    name: "Cataract Scout Camp",
    city: "Cataract",
    state: "NSW"
  },
  {
    name: "Catcher",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Cat & Fiddle Hotel",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Cathedral Hall",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Caulfield Community Centre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Caulfield Grammar School",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Caulfield Institute Of Technology",
    city: "Caulfield",
    state: "VIC"
  },
  {
    name: "Caulfield Student Union",
    city: "Caulfield",
    state: "VIC"
  },
  {
    name: "Caulfield Technical High School",
    city: "Caulfield",
    state: "VIC"
  },
  {
    name: "Caves Beach Hotel",
    city: "Caves Beach",
    state: "NSW"
  },
  {
    name: "Caves Beach Surf Club",
    city: "Caves Beach",
    state: "NSW"
  },
  {
    name: "Ceasars Palace",
    city: "Ipswich",
    state: "QLD"
  },
  {
    name: "Cell Block Theatre - East Sydney Technical College",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Centenary Hall",
    city: "Norlane",
    state: "VIC"
  },
  {
    name: "Centenary Hall, Royal Melbourne Showgrounds",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Centennial Hall",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Centennial Hall",
    city: "Albany",
    state: "WA"
  },
  {
    name: "Centennial Park",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Centennial Vineyards",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Central Club Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Central Coast Leagues Club",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Central Coast Youth Centre",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Centre Club Hotel",
    city: "Morwell",
    state: "VIC"
  },
  {
    name: "Centre Square",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Cessnock Leagues Club",
    city: "Cessnock",
    state: "NSW"
  },
  {
    name: "Cessnock RSL",
    city: "Cessnock",
    state: "NSW"
  },
  {
    name: "Challenge Stadium",
    city: "Mt Claremont",
    state: "WA"
  },
  {
    name: "Champion Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Chandler Velodrome",
    city: "Chandler",
    state: "QLD"
  },
  {
    name: "Channel 7 Edgley Entertainment Centre",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Chapter House",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Charles Hotel",
    city: "North Perth",
    state: "WA"
  },
  {
    name: "Charles Hotel",
    city: "Fairy Meadow",
    state: "NSW"
  },
  {
    name: "Charles Sturt University",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Charlestown Community Memorial Hall",
    city: "Charlestown",
    state: "NSW"
  },
  {
    name: "Charlie Brown’s Tavern",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Chasers Nightclub",
    city: "South Yarra",
    state: "VIC"
  },
  {
    name: "Chatswood Charles Hotel",
    city: "Chatswood",
    state: "NSW"
  },
  {
    name: "Chelsea Civic Centre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Chelsea Heights Hotel",
    city: "Chelsea Heights",
    state: "VIC"
  },
  {
    name: "Chelsea Town Hall",
    city: "Chelsea",
    state: "VIC"
  },
  {
    name: "Chequers",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Chequer’s Place",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Cherry Bar",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Cherrybrook Communiy Hall",
    city: "Cherrybrook",
    state: "NSW"
  },
  {
    name: "Chester Hill - Carramar RSL",
    city: "Chester Hill",
    state: "NSW"
  },
  {
    name: "Chester Hill Hotel",
    city: "Chester Hill",
    state: "NSW"
  },
  {
    name: "Chevron Hotel",
    city: "Potts Point",
    state: "NSW"
  },
  {
    name: "Chevron Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Children’s Hospital",
    city: "Westmead",
    state: "NSW"
  },
  {
    name: "Choices Nightclub",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Christies Beach Hotel",
    city: "Christies Beach",
    state: "SA"
  },
  {
    name: "Chrysler Factory",
    city: "Tonsley Park",
    state: "SA"
  },
  {
    name: "Cinema 2",
    city: "Port Pirie",
    state: "SA"
  },
  {
    name: "Cityfest 2008 (Holroyd City Council)",
    city: "Merrylands",
    state: "NSW"
  },
  {
    name: "City Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "City Limits Nightclub",
    city: "Devonport",
    state: "TAS"
  },
  {
    name: "City Mall",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "City Of Sydney RSL",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "City Tattersalls Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Civic Hall",
    city: "Port Lincoln",
    state: "SA"
  },
  {
    name: "Civic Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Civic Park",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Civic Theatre",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Civic Theatre",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Civic Theatre",
    city: "South Townsville",
    state: "QLD"
  },
  {
    name: "Clarendon Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Clarendon Hotel",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Clayton Hall",
    city: "Clayton",
    state: "VIC"
  },
  {
    name: "Cleveland Sands Hotel",
    city: "Cleveland",
    state: "QLD"
  },
  {
    name: "Click",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Clipsal 500",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Clique Wine Bar",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Cloudland Dance Hall",
    city: "Bowen Hills",
    state: "QLD"
  },
  {
    name: "Clovelly Hotel",
    city: "Clovelly",
    state: "NSW"
  },
  {
    name: "Clovelly RSL & Air Force Club",
    city: "Clovelly",
    state: "NSW"
  },
  {
    name: "Cloverdale Hotel",
    city: "Cloverdale",
    state: "WA"
  },
  {
    name: "Club Burwood (Burwood RSL)",
    city: "Burwood",
    state: "NSW"
  },
  {
    name: "Club Central Hurstville",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Club Central Menai",
    city: "Menai",
    state: "NSW"
  },
  {
    name: "Club Chevron",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Club Cronulla",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Club Engadine",
    city: "Engadine",
    state: "NSW"
  },
  {
    name: "Club Forster",
    city: "Forster",
    state: "NSW"
  },
  {
    name: "Club Grandviews",
    city: "Peakhurst",
    state: "NSW"
  },
  {
    name: "Club Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Club Hotel Waterford",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Club Merrylands",
    city: "Merrylands",
    state: "NSW"
  },
  {
    name: "Club Nova Panthers",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Club Pacific, Australia Fair",
    city: "Southbank",
    state: "QLD"
  },
  {
    name: "Club Pacific Hotel",
    city: "Southport",
    state: "QLD"
  },
  {
    name: "Club Phoenix",
    city: "Mayfield",
    state: "NSW"
  },
  {
    name: "Club Ryde",
    city: "Ryde",
    state: "NSW"
  },
  {
    name: "Club Stockton (Stockton RSL)",
    city: "Stockton",
    state: "NSW"
  },
  {
    name: "Club Windang",
    city: "Windang",
    state: "NSW"
  },
  {
    name: "Coach and Horses Hotel",
    city: "Ringwood",
    state: "VIC"
  },
  {
    name: "Coach & Horses Hotel",
    city: "Randwick",
    state: "NSW"
  },
  {
    name: "Cobar Bowling Club",
    city: "Cobar",
    state: "NSW"
  },
  {
    name: "Cobra Club",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Coburg Lake Reserve",
    city: "Coburg",
    state: "VIC"
  },
  {
    name: "Coburg Town Hall",
    city: "Coburg",
    state: "VIC"
  },
  {
    name: "Cock & Bull Tavern",
    city: "Baulkham Hills",
    state: "NSW"
  },
  {
    name: "Cock 'N' Bull",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Cockpit, Essendon Airport",
    city: "Essenden",
    state: "VIC"
  },
  {
    name: "Coco's, Sundowner Inn",
    city: "Seaford",
    state: "VIC"
  },
  {
    name: "Coffs Harbour Civic Centre",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Coffs Harbour Ex-Services Club",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Coffs Harbour Showground",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Colac Civic Centre",
    city: "Colac",
    state: "VIC"
  },
  {
    name: "Colac High School",
    city: "Colac High",
    state: "VIC"
  },
  {
    name: "Collector Tavern",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Collegians Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Collendina Hotel",
    city: "Ocean Grove",
    state: "VIC"
  },
  {
    name: "Collingwood Hotel",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Collingwood Town Hall",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "Colonnades Tavern",
    city: "Noarlunga",
    state: "SA"
  },
  {
    name: "Colossus Hall",
    city: "Thebarton",
    state: "SA"
  },
  {
    name: "Comb and Cutter Hotel",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Come",
    city: "Lockleys",
    state: "SA"
  },
  {
    name: "Comedy Theatre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Commercial Hotel",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Commodore Hotel",
    city: "Sandringham",
    state: "VIC"
  },
  {
    name: "Concord RSL",
    city: "Concord West",
    state: "NSW"
  },
  {
    name: "Connections",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Continental Hotel",
    city: "Sorrento",
    state: "VIC"
  },
  {
    name: "Coogee Comedy Theatre",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Coogee Diggers",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Coogee Oceanic Hotel",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Coogee Randwick RSL",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Coogee Sports Club",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Coogee Surf Life Saving Club",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Cooinda Club",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Coolangatta Hotel",
    city: "Coolangatta",
    state: "QLD"
  },
  {
    name: "Cooper Street Fair",
    city: "Engadine",
    state: "NSW"
  },
  {
    name: "Cooroy Mountain Racetrack",
    city: "Cooroy Mountain",
    state: "QLD"
  },
  {
    name: "Cootamundra Country Club",
    city: "Cootamundra",
    state: "NSW"
  },
  {
    name: "Cootamundra Town Hall",
    city: "Cootamundra",
    state: "NSW"
  },
  {
    name: "Cootas Place",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Copacabana Nightclub",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Corbould Hall",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Corimal Leagues Club",
    city: "Corimal",
    state: "NSW"
  },
  {
    name: "Corner Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Corrimal High School",
    city: "Corrimal",
    state: "NSW"
  },
  {
    name: "Corrimal Leagues Club",
    city: "Corrimal",
    state: "NSW"
  },
  {
    name: "Cotton Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Council Club",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Council Club Hotel - aka Ritchies Nitespot",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Countdown",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Countdown (TV Show)",
    city: "Ripponlea",
    state: "VIC"
  },
  {
    name: "Countryclub Hotel",
    city: "Gympie",
    state: "QLD"
  },
  {
    name: "Country Comfort Hotel",
    city: "Mudgee",
    state: "NSW"
  },
  {
    name: "Country Paradise Resort",
    city: "Mudgee",
    state: "NSW"
  },
  {
    name: "Courthouse Hotel - Mojo's",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Cowra Civic Centre",
    city: "Cowra",
    state: "NSW"
  },
  {
    name: "Cramers",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Cranbourne Turf Club",
    city: "Cranbourne",
    state: "VIC"
  },
  {
    name: "Cronulla Community Hall",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla Hotel",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla Picture Theatre",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla RSL",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla Sutherland Leagues Club",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla Workers Club",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Cronulla Youth Club",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Crossing Theatre",
    city: "Narrabri",
    state: "NSW"
  },
  {
    name: "Cross Keys Hotel",
    city: "North Essendon",
    state: "VIC"
  },
  {
    name: "Crossroad Hotel",
    city: "Prestons",
    state: "NSW"
  },
  {
    name: "Crown Casino And Entertainment Complex",
    city: "Southbank",
    state: "VIC"
  },
  {
    name: "Crown Central",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Crows Nest Hotel",
    city: "Crows Nest",
    state: "NSW"
  },
  {
    name: "Croxton Park Hotel",
    city: "Thornbury",
    state: "VIC"
  },
  {
    name: "Croydon Hotel",
    city: "Croydon",
    state: "VIC"
  },
  {
    name: "Cruise Bar",
    city: "The Rocks",
    state: "NSW"
  },
  {
    name: "Crystal Ballroom",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Crystal Palace",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Crystals",
    city: "Caulfield",
    state: "VIC"
  },
  {
    name: "Cummins Theatre",
    city: "Merredin",
    state: "WA"
  },
  {
    name: "Cupid's",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Curl Curl Surf Club",
    city: "Curl Curl",
    state: "NSW"
  },
  {
    name: "Curl Curl Youth Club",
    city: "Curl Curl",
    state: "NSW"
  },
  {
    name: "Currarong Bowling & Recreation Club",
    city: "Currarong",
    state: "NSW"
  },
  {
    name: "Curtin University",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Daceyville Police Boys Club",
    city: "Daceyville",
    state: "NSW"
  },
  {
    name: "Dalby Community Centre",
    city: "Dalby",
    state: "QLD"
  },
  {
    name: "Dalby High School",
    city: "Dalby",
    state: "QLD"
  },
  {
    name: "Dallas Brooks Centre",
    city: "East Melbourne",
    state: "VIC"
  },
  {
    name: "Dalrymple Hotel",
    city: "Garbutt",
    state: "QLD"
  },
  {
    name: "Daly’s Court",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Dandaloo Hotel",
    city: "Dapto",
    state: "NSW"
  },
  {
    name: "Dandenong High School",
    city: "Dandenong",
    state: "VIC"
  },
  {
    name: "Dandenong Town Hall",
    city: "Dandenong",
    state: "VIC"
  },
  {
    name: "Dapto Leagues Club",
    city: "Dapto",
    state: "NSW"
  },
  {
    name: "Dapto Showgrounds",
    city: "Dapto",
    state: "NSW"
  },
  {
    name: "Darling Downs Institute Of Advanced Education",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Darwin Amphitheatre",
    city: "Darwin",
    state: "NT"
  },
  {
    name: "Darwin Performing Arts Centre",
    city: "Darwin",
    state: "NT"
  },
  {
    name: "Davidson High School",
    city: "Frenchs Forest",
    state: "NSW"
  },
  {
    name: "Davistown RSL Club",
    city: "Davistown",
    state: "NSW"
  },
  {
    name: "Deakin Inn",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Deakin University",
    city: "Burwood",
    state: "VIC"
  },
  {
    name: "Dean Park",
    city: "Townsville",
    state: "QLD"
  },
  {
    name: "Deception Bay Hotel",
    city: "Deception Bay",
    state: "QLD"
  },
  {
    name: "Deepwater Motor Boat Club",
    city: "Milperra",
    state: "NSW"
  },
  {
    name: "Deer Park Hotel",
    city: "Deer Park",
    state: "VIC"
  },
  {
    name: "Dee Why Hotel",
    city: "Dee Why",
    state: "NSW"
  },
  {
    name: "Dee Why RSL",
    city: "Dee Why",
    state: "NSW"
  },
  {
    name: "De Marco's Hotel",
    city: "Essendon",
    state: "VIC"
  },
  {
    name: "Dendy Cinema",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Deniliquin Town Hall",
    city: "Deniliquin",
    state: "VIC"
  },
  {
    name: "Denison Hotel",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Derwent Entertainment Centre",
    city: "Glenorchy",
    state: "TAS"
  },
  {
    name: "Devonport High School",
    city: "Devonport",
    state: "TAS"
  },
  {
    name: "Devonshire Rock",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Dianella Hotel",
    city: "Dianella",
    state: "WA"
  },
  {
    name: "Dicey Riley's Hotel",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Didi's - Brookvale Hotel",
    city: "Brookvale",
    state: "NSW"
  },
  {
    name: "Diggers",
    city: "The Entrance",
    state: "NSW"
  },
  {
    name: "Dingley Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Dobroyd Aquatic Club",
    city: "Rodd Point",
    state: "NSW"
  },
  {
    name: "Docks Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Dodds Hotel",
    city: "Cooma",
    state: "NSW"
  },
  {
    name: "Do It (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Dollan's Disco",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Doltone House",
    city: "Pyrmont",
    state: "NSW"
  },
  {
    name: "Doltone House",
    city: "Sylvania Waters",
    state: "NSW"
  },
  {
    name: "Domino's",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Donald Football Oval",
    city: "Donald",
    state: "VIC"
  },
  {
    name: "Doncaster Hotel",
    city: "Doncaster",
    state: "VIC"
  },
  {
    name: "Dooleys Sport Club",
    city: "Regents Park",
    state: "NSW"
  },
  {
    name: "Dorset Gardens Hotel",
    city: "Croydon",
    state: "VIC"
  },
  {
    name: "Double Diamond Night Club",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "Down Under Disco",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Doyalson RSL",
    city: "Doyalson",
    state: "NSW"
  },
  {
    name: "Dreamworld",
    city: "Coomera",
    state: "QLD"
  },
  {
    name: "Dr Redbird's Medicinal Inn",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Drummond College",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "Drummoyne Rowers Club",
    city: "Drummoyne",
    state: "NSW"
  },
  {
    name: "Drummoyne Rugby Union Club",
    city: "Drummoyne",
    state: "NSW"
  },
  {
    name: "Drummoyne Sailing Club",
    city: "Drummoyne",
    state: "NSW"
  },
  {
    name: "Dry Dock Hotel",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Dubbo Civic Centre",
    city: "Dubbo",
    state: "NSW"
  },
  {
    name: "Dubbo Showground",
    city: "Dubbo",
    state: "NSW"
  },
  {
    name: "Ducati Bike Club",
    city: "Londonderry",
    state: "NSW"
  },
  {
    name: "Duke Of Edinburgh Hotel",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Duke Of Edinburgh Hotel",
    city: "Pyrmont",
    state: "NSW"
  },
  {
    name: "Dundas Sports & Recreation Club",
    city: "Dundas",
    state: "NSW"
  },
  {
    name: "Dunsborough Tavern",
    city: "Dunsborough",
    state: "WA"
  },
  {
    name: "Dural Country Club",
    city: "Dural",
    state: "NSW"
  },
  {
    name: "Dysart Civic Centre",
    city: "Dysart",
    state: "QLD"
  },
  {
    name: "Earl Of Leicester Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Earls Court",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Earlwood-Bardwell Park RSL Club",
    city: "Bardwell Park",
    state: "NSW"
  },
  {
    name: "Earlwood CYO",
    city: "Earlwood",
    state: "NSW"
  },
  {
    name: "Earlwood Hotel",
    city: "Earlwood",
    state: "NSW"
  },
  {
    name: "East End Hotel",
    city: "Bundaberg",
    state: "QLD"
  },
  {
    name: "Eastern Creek International Raceway",
    city: "Eastern Creek",
    state: "NSW"
  },
  {
    name: "Eastern Suburbs Leagues Club",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Eastern Suburbs Rugby Union Club",
    city: "(Unknown)",
    state: "NSW"
  },
  {
    name: "Eastern Suburbs Tennis Club",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Easts Leagues Club",
    city: "Coorparoo",
    state: "QLD"
  },
  {
    name: "Eastwood Hotel",
    city: "Eastwood",
    state: "NSW"
  },
  {
    name: "Eatons Hill Hotel & Function Centre",
    city: "Eatons Hill",
    state: "QLD"
  },
  {
    name: "Edinburgh Castle Hotel",
    city: "Nth Melbourne",
    state: "VIC"
  },
  {
    name: "Edwards Tavern",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Eel Trap Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "El Cortez Hotel",
    city: "Canley Heights",
    state: "NSW"
  },
  {
    name: "Electric Ballroom",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Elizabethan Inn",
    city: "Darling Point",
    state: "NSW"
  },
  {
    name: "Elizabethan Theatre",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Elizabeth Hotel",
    city: "Elizabeth",
    state: "SA"
  },
  {
    name: "Elizabeth Matriculation College",
    city: "Hobart",
    state: "TAS"
  },
  {
    name: "Elizabeth Oval",
    city: "Elizabeth",
    state: "SA"
  },
  {
    name: "Elizabeth Rugby Club",
    city: "Elizabeth West",
    state: "SA"
  },
  {
    name: "El Rancho Hotel",
    city: "Eastwood",
    state: "NSW"
  },
  {
    name: "Eltham College",
    city: "Research",
    state: "VIC"
  },
  {
    name: "Eltham Shire BBQ",
    city: "Eltham",
    state: "VIC"
  },
  {
    name: "El Toro Hotel",
    city: "Warwick Farm",
    state: "NSW"
  },
  {
    name: "Embassy Ballroom",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Emerald Hotel",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Emerald Showgrounds",
    city: "Emerald",
    state: "QLD"
  },
  {
    name: "Empire Hotel",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Empire Hotel",
    city: "Annandale",
    state: "NSW"
  },
  {
    name: "Empire Theatre",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Endeavor Hotel",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Endeavour Field",
    city: "Woolooware",
    state: "NSW"
  },
  {
    name: "End Of American Tour",
    city: "America",
    state: "USA"
  },
  {
    name: "End Of European Tour",
    city: "Europe",
    state: "EU"
  },
  {
    name: "End Of German Tour",
    city: "Germany",
    state: "EU"
  },
  {
    name: "End Of Japanese Tour",
    city: "Japan",
    state: "Japan"
  },
  {
    name: "End Of New Zealand Tour",
    city: "New Zealand",
    state: "NZ"
  },
  {
    name: "Enfield Boulevard Hotel",
    city: "Enfield",
    state: "NSW"
  },
  {
    name: "Enfield Civic Centre",
    city: "Enfield",
    state: "SA"
  },
  {
    name: "Enfield RSL",
    city: "Enfield",
    state: "SA"
  },
  {
    name: "Engadine High School",
    city: "Engadine",
    state: "NSW"
  },
  {
    name: "Engadine Senior Citizens",
    city: "Engadine",
    state: "NSW"
  },
  {
    name: "Engadine Tavern",
    city: "Engadine",
    state: "NSW"
  },
  {
    name: "Enigma Bar",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Enmore Theatre",
    city: "Enmore",
    state: "NSW"
  },
  {
    name: "Epping Church Hall",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "Epping Memorial Hall",
    city: "Epping",
    state: "VIC"
  },
  {
    name: "Epping Presbyterian Church",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "Epping RSL",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "Epping School Of Arts",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "Erindale Vikings",
    city: "Wanniassa",
    state: "ACT"
  },
  {
    name: "Ermington Hotel",
    city: "Ermington",
    state: "NSW"
  },
  {
    name: "Esplanade Hotel (The Espy)",
    city: "St. Kilda",
    state: "VIC"
  },
  {
    name: "Essendon Football Club",
    city: "Essendon",
    state: "VIC"
  },
  {
    name: "Essendon YMCA",
    city: "Essendon",
    state: "VIC"
  },
  {
    name: "ETSA Hall",
    city: "Port Augusta",
    state: "SA"
  },
  {
    name: "Ettalong Beach War Memorial Club",
    city: "Ettalong Beach",
    state: "NSW"
  },
  {
    name: "Ettalong Community Hall",
    city: "Ettalong",
    state: "NSW"
  },
  {
    name: "Ettamogah Bar & Restaurant",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Eureka Hotel",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Eureka Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Evelyn Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Evening Star Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Excelsior Hotel",
    city: "Thomastown",
    state: "VIC"
  },
  {
    name: "Excelsior Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Exchange Hotel",
    city: "Taree",
    state: "NSW"
  },
  {
    name: "Exchange Hotel",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Exford Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Exit Club",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Exit Nightclub",
    city: "East Perth",
    state: "WA"
  },
  {
    name: "Fairfield Hotel",
    city: "Fairfield",
    state: "NSW"
  },
  {
    name: "Fairfield RSL",
    city: "Fairfield",
    state: "NSW"
  },
  {
    name: "Fairfield Showground",
    city: "Fairfield",
    state: "NSW"
  },
  {
    name: "Fairfield West High School",
    city: "Fairfield West",
    state: "NSW"
  },
  {
    name: "Fairvale High School",
    city: "Fairfield West",
    state: "NSW"
  },
  {
    name: "Family Inn",
    city: "Rydalmere",
    state: "NSW"
  },
  {
    name: "Fannys Night Club",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Fantales",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "Farmers Home Hotel",
    city: "Matong",
    state: "NSW"
  },
  {
    name: "Fawkner Technical School",
    city: "Fawkner",
    state: "VIC"
  },
  {
    name: "Feathers, Crows Nest Hotel",
    city: "Crows Nest",
    state: "NSW"
  },
  {
    name: "Fernando's Nightclub",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Ferntree Gully Hotel",
    city: "Ferntree Gully",
    state: "VIC"
  },
  {
    name: "Ferntree Gully Technical College",
    city: "Ferntree Gully",
    state: "VIC"
  },
  {
    name: "Festival Hall",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Festival Hall",
    city: "West Melbourne",
    state: "VIC"
  },
  {
    name: "Festival Theatre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Fiddler's Vine Winebar",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Fiesta Villa",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Figtree RSL Bowling Club",
    city: "Figtree",
    state: "NSW"
  },
  {
    name: "Findon High School",
    city: "Findon",
    state: "SA"
  },
  {
    name: "Findon Park Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Finnish Hall",
    city: "Altona",
    state: "VIC"
  },
  {
    name: "Fisherman’s Wharf",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Fitzroy Hotel",
    city: "Windsor",
    state: "NSW"
  },
  {
    name: "Fitzroy Town Hall",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Flamingo Hall",
    city: "Christies Beach",
    state: "SA"
  },
  {
    name: "Flamingo Nightclub",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Flashes",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Flicks",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Flinders Park",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Flinders University",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Florida Hotel",
    city: "Terrigal",
    state: "NSW"
  },
  {
    name: "Floyd's Nightclub",
    city: "Phillip",
    state: "ACT"
  },
  {
    name: "Fly By Night Musicians Club",
    city: "Fremantle",
    state: "WA"
  },
  {
    name: "Footbridge Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Footscray Football Club",
    city: "Footscray",
    state: "VIC"
  },
  {
    name: "Footscray Technical College",
    city: "Footscray",
    state: "VIC"
  },
  {
    name: "Forbes RSL Club",
    city: "Forbes",
    state: "NSW"
  },
  {
    name: "Forbes Town Hall",
    city: "Forbes",
    state: "NSW"
  },
  {
    name: "Forester's Arms Hotel",
    city: "Oakleigh",
    state: "VIC"
  },
  {
    name: "Forest Inn",
    city: "Bexley",
    state: "NSW"
  },
  {
    name: "Forest Lodge Hotel",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Forest Rugby Union Club",
    city: "Forestville",
    state: "NSW"
  },
  {
    name: "Forestville Youth Centre",
    city: "Forestville",
    state: "NSW"
  },
  {
    name: "Forrestville RSL",
    city: "Forrestville",
    state: "NSW"
  },
  {
    name: "Forster Community Hall",
    city: "Tuncurry",
    state: "NSW"
  },
  {
    name: "Forster Memorial Club",
    city: "Forster",
    state: "NSW"
  },
  {
    name: "Forum",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Founders Pavilion",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Foundry Arms Hotel",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Fountain Inn",
    city: "Port Melbourne",
    state: "VIC"
  },
  {
    name: "Fowler's Lane",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "Fox Studios",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Frankie's Pizza",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Frankston High School",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Frankston Police Boys Club",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Frankston Teachers' College",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Fraser Park Speedway",
    city: "Jerrabomberra",
    state: "NSW"
  },
  {
    name: "Fraternity Club",
    city: "Fairy Meadow",
    state: "NSW"
  },
  {
    name: "Freemasons Hotel",
    city: "Midland",
    state: "WA"
  },
  {
    name: "Fremantle Oval",
    city: "Fremantle",
    state: "WA"
  },
  {
    name: "Frenchs Forest High School",
    city: "Frenchs Forest",
    state: "NSW"
  },
  {
    name: "French's Wine Bar",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Freshwater Surf Life Saving Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Friendly Societies Oval",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Gaelic Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Galaxy Amusement Centre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Ganmain Bowling Club",
    city: "Ganmain",
    state: "NSW"
  },
  {
    name: "Garibaldi’s",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Garrison Discotheque",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Garters, Pendle Inn",
    city: "Pendle Hill",
    state: "NSW"
  },
  {
    name: "Gateway Disco - El Toro Hotel",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Gattie's",
    city: "Double Bay",
    state: "NSW"
  },
  {
    name: "Gawler Institute",
    city: "Gawler",
    state: "SA"
  },
  {
    name: "Gazebo Hotel",
    city: "Elizabeth Bay",
    state: "NSW"
  },
  {
    name: "Geelong Arena",
    city: "North Geelong",
    state: "VIC"
  },
  {
    name: "Geelong Performing Arts Centre",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Geelong Showgrounds",
    city: "Breakwater",
    state: "VIC"
  },
  {
    name: "Geelong Teachers College",
    city: "Waurn Ponds",
    state: "VIC"
  },
  {
    name: "General Bourke",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "George Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "George IV Inn",
    city: "Picton",
    state: "NSW"
  },
  {
    name: "Georges River 16Ft Sailing Club",
    city: "Sandringham",
    state: "NSW"
  },
  {
    name: "Geraldton Basketball Stadium",
    city: "Geraldton",
    state: "WA"
  },
  {
    name: "Geraldton Town Hall",
    city: "Geraldton",
    state: "WA"
  },
  {
    name: "Gerringong Bowling & Recreation Club",
    city: "Werri Beach",
    state: "NSW"
  },
  {
    name: "Ginninderra High School",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Gladstone City Theatre",
    city: "Gladstone",
    state: "QLD"
  },
  {
    name: "Gladstone Entertainment Centre",
    city: "Gladstone",
    state: "QLD"
  },
  {
    name: "Gladstone Skate Centre",
    city: "Gladstone",
    state: "QLD"
  },
  {
    name: "Gladstone Town Hall",
    city: "Gladstone",
    state: "QLD"
  },
  {
    name: "Glasshouse Tavern",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Glebe Town Hall",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Glenbrook Bowling Club",
    city: "Glenbrook",
    state: "NSW"
  },
  {
    name: "Glenelg Football Club",
    city: "Glenelg",
    state: "SA"
  },
  {
    name: "Glenelg Pier Hotel",
    city: "Glenelg",
    state: "SA"
  },
  {
    name: "Glenelg Sailing Club",
    city: "West Beach",
    state: "SA"
  },
  {
    name: "Glen Innes Town Hall",
    city: "Glen Innes",
    state: "NSW"
  },
  {
    name: "Glenroy High School",
    city: "Glenroy",
    state: "VIC"
  },
  {
    name: "Glen Waverley High School",
    city: "Glen Waverley",
    state: "VIC"
  },
  {
    name: "Globe Hotel",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Golden Gate Hotel",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Golden Sheaf Hotel",
    city: "Double Bay",
    state: "NSW"
  },
  {
    name: "Goldstein College",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "Golf View Hotel",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Good Friday Appeal",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Gordon Institute Of Technology",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Gordon Rugby Club",
    city: "Chatswood",
    state: "NSW"
  },
  {
    name: "Gosford Hotel",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Gosford Showground",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Gouger Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Goulburn College Of Advanced Education",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Goulburn Hall",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Goulburn Valley Hotel",
    city: "Shepparton",
    state: "VIC"
  },
  {
    name: "Goulburn Workers Club",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Government Pavilion Sydney Show Ground",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Governor Bourke Hotel",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "Governor Hindmarsh Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Governor's Pleasure",
    city: "The Rocks, Sydney",
    state: "NSW"
  },
  {
    name: "Grafton Bowling Club",
    city: "Grafton",
    state: "NSW"
  },
  {
    name: "Grafton Golf Club",
    city: "Grafton",
    state: "NSW"
  },
  {
    name: "Grafton Racecourse",
    city: "Westlawn",
    state: "NSW"
  },
  {
    name: "Grainstore Tavern",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Granada Tavern",
    city: "Berriedale",
    state: "TAS"
  },
  {
    name: "Grand Hotel",
    city: "Broadway, Sydney",
    state: "NSW"
  },
  {
    name: "Grand Hotel",
    city: "Coolangatta",
    state: "QLD"
  },
  {
    name: "Grand Hotel",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Grand Hotel",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Grand Hotel",
    city: "Glenelg",
    state: "SA"
  },
  {
    name: "Grange Discotheque",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Grange Golf Club",
    city: "Grange",
    state: "SA"
  },
  {
    name: "Grange Wine Bar",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Granville RSL",
    city: "Granville",
    state: "NSW"
  },
  {
    name: "Granville Showground",
    city: "Granville",
    state: "NSW"
  },
  {
    name: "Graphic Arts Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Grays Point Community Hall",
    city: "Grays Point",
    state: "NSW"
  },
  {
    name: "Great Keppel Island",
    city: "Queensland",
    state: "QLD"
  },
  {
    name: "Great Northern Hotel",
    city: "Chatswood",
    state: "NSW"
  },
  {
    name: "Great Northern Hotel",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "Green Elephant",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "Greenfield Tavern",
    city: "Greenfield Park",
    state: "NSW"
  },
  {
    name: "Greengate Hotel",
    city: "Killara",
    state: "NSW"
  },
  {
    name: "Greenwell Point Bowling & Sports Club",
    city: "Greenwell Point",
    state: "NSW"
  },
  {
    name: "Greta Workers Club",
    city: "Greta",
    state: "NSW"
  },
  {
    name: "Grey Gums Hotel",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Greyhound Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Greyhound Hotel",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Greystanes Hotel",
    city: "Greystanes",
    state: "NSW"
  },
  {
    name: "Griffith University",
    city: "Southport",
    state: "QLD"
  },
  {
    name: "Grosvenor Hotel",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "GTK  - Getting To Know (TV Show)",
    city: "Gore Hill",
    state: "NSW"
  },
  {
    name: "Guildford Leagues Club",
    city: "Guildford",
    state: "NSW"
  },
  {
    name: "Gunnamatta Park",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Guys And Dolls, Westminster Hotel",
    city: "Broadway",
    state: "NSW"
  },
  {
    name: "Guzurgan Bike Show",
    city: "Mudgee",
    state: "NSW"
  },
  {
    name: "Gymea Bay Public School",
    city: "Gymea Bay",
    state: "NSW"
  },
  {
    name: "Gymea Hotel",
    city: "Gymea",
    state: "NSW"
  },
  {
    name: "Gymea Miranda Bowling & Sports Club",
    city: "Gymea",
    state: "NSW"
  },
  {
    name: "Gymea Village Fair",
    city: "Gymea",
    state: "NSW"
  },
  {
    name: "Hadleys Hotel",
    city: "Hobart",
    state: "TAS"
  },
  {
    name: "Hahndorf Old Mill",
    city: "Hahndorf",
    state: "SA"
  },
  {
    name: "Hallam Hotel",
    city: "Hallam",
    state: "VIC"
  },
  {
    name: "Hamilton Hotel",
    city: "Hamilton",
    state: "QLD"
  },
  {
    name: "Hamilton Island",
    city: "Great Barrier Reef",
    state: "QLD"
  },
  {
    name: "Hamilton Rugby Club",
    city: "Hamilton",
    state: "NSW"
  },
  {
    name: "Hamilton Town Hall",
    city: "Hamilton",
    state: "VIC"
  },
  {
    name: "Harbord Diggers Club",
    city: "Harbord",
    state: "NSW"
  },
  {
    name: "Harbour Cruise",
    city: "Circular Quay",
    state: "NSW"
  },
  {
    name: "Harbourfest",
    city: "PortKembla",
    state: "NSW"
  },
  {
    name: "Harbourside Brasserie",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Harbourview",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Hard Rock Cafe",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Hard Rock Cafe",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Harmonie German Club",
    city: "Narrabundah",
    state: "ACT"
  },
  {
    name: "Harold Park Hotel",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Harrigan's Drift Inn",
    city: "Jacobs Well",
    state: "QLD"
  },
  {
    name: "Harristown State High School",
    city: "Harristown",
    state: "QLD"
  },
  {
    name: "Harvey Lowe Pavilion",
    city: "Castle Hill",
    state: "NSW"
  },
  {
    name: "Hawaiian Eye",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Hawkesbury Sports Club",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Headquarters",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Hearts",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Heathcote Oval",
    city: "Heathcote",
    state: "NSW"
  },
  {
    name: "Heaven II Nightclub",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Heidelberg Golf Club",
    city: "Lower Plenty",
    state: "VIC"
  },
  {
    name: "Heidelberg Technical College",
    city: "Heidelberg",
    state: "VIC"
  },
  {
    name: "Helensburgh Hotel",
    city: "Helensburgh",
    state: "NSW"
  },
  {
    name: "Helensburgh Rugby Leagues Club",
    city: "Helensburgh",
    state: "NSW"
  },
  {
    name: "Helensburgh Workers Sports & Social Club Ltd",
    city: "Helensburgh",
    state: "NSW"
  },
  {
    name: "Hellenic Club",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Hells Angels Club",
    city: "Broadford",
    state: "VIC"
  },
  {
    name: "Hells Angels Concert",
    city: "Ponde",
    state: "SA"
  },
  {
    name: "Hells Angels Rock Festival",
    city: "Broadford",
    state: "VIC"
  },
  {
    name: "Henerly Landing",
    city: "Yarra River",
    state: "VIC"
  },
  {
    name: "Herdsman Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Heritage Hotel",
    city: "Bulli",
    state: "NSW"
  },
  {
    name: "Heritage Theatre",
    city: "Gympie",
    state: "QLD"
  },
  {
    name: "Her Majesty's Theatre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Her Majesty's Theatre",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Her Majesty's Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Hermann's Bar",
    city: "Darlington",
    state: "NSW"
  },
  {
    name: "Hernando's",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Hero Of Waterloo Hotel",
    city: "Millers Point",
    state: "NSW"
  },
  {
    name: "Hey Hey It's Saturday (TV Show)",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Hibernian Hall",
    city: "Roma",
    state: "QLD"
  },
  {
    name: "Hidden Valley Raceway",
    city: "Hidden Valley",
    state: "NT"
  },
  {
    name: "Hi-Fi Bar & Ballroom",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Highway Hotel",
    city: "Wentworthville",
    state: "NSW"
  },
  {
    name: "Highway Inn",
    city: "Plympton",
    state: "SA"
  },
  {
    name: "Highwayman Hotel",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Hillcrest Basketball Stadium",
    city: "Hillcrest",
    state: "SA"
  },
  {
    name: "Hill Street Tavern",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Hilton Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Hilton Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Hilton Hotel",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Hilton Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Hipper Records",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Hit Scene (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Hit Scene (TV Show)",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "HMAS Cerberus",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "HMAS Penguin",
    city: "Balmoral",
    state: "NSW"
  },
  {
    name: "HM Prison Pentridge",
    city: "Coburg",
    state: "VIC"
  },
  {
    name: "Hobart City Hall",
    city: "Hobart",
    state: "TAS"
  },
  {
    name: "Hobart Entertainment Centre",
    city: "Glenorchy",
    state: "TAS"
  },
  {
    name: "Hobart University",
    city: "Sandy Bay",
    state: "TAS"
  },
  {
    name: "Holroyd High School",
    city: "Greystanes",
    state: "NSW"
  },
  {
    name: "Holsworthy Army Base",
    city: "Holsworthy",
    state: "NSW"
  },
  {
    name: "Homebush RSL",
    city: "Homebush",
    state: "NSW"
  },
  {
    name: "Homestead Tavern",
    city: "Boondall",
    state: "QLD"
  },
  {
    name: "Hope Estate",
    city: "Pokolbin",
    state: "NSW"
  },
  {
    name: "Hopetoun Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Hordern Pavillion",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Hornsby Hotel (City Limits)",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Hornsby Inn",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Hornsby Police Boys Club",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Hornsby RSL Club",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Horsham Theatre",
    city: "Horsham",
    state: "VIC"
  },
  {
    name: "Horsham Town Hall",
    city: "Horsham",
    state: "VIC"
  },
  {
    name: "Hotel Bondi",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Hotel Manly",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Hotel Tasmania",
    city: "Launceston",
    state: "TAS"
  },
  {
    name: "Hot Rocks",
    city: "Sorrento",
    state: "VIC"
  },
  {
    name: "Hot Tunes And Sand Dunes",
    city: "Noosa Heads",
    state: "QLD"
  },
  {
    name: "House On The Hill Nightclub",
    city: "Cairns",
    state: "QLD"
  },
  {
    name: "Hoyts Theatre",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Hume Hotel",
    city: "Yagoona",
    state: "NSW"
  },
  {
    name: "Hungarian Australian Club",
    city: "Narrabundah",
    state: "ACT"
  },
  {
    name: "Hunter Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Hunters Hill Rugby Union Club",
    city: "Hunters Hill",
    state: "NSW"
  },
  {
    name: "Hunters Humpy",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Hunts Theatre Restaurant",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Hurstville Civic Centre",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Hurstville Rivoli",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Huskisson RSL Club",
    city: "Huskisson",
    state: "NSW"
  },
  {
    name: "Hyatt Kingsgate Hotel",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Hyde Park",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Ice Arena",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Icelands",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "ID's Nitespot",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Illawara Catholic Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Illawarra Champion Hotel",
    city: "Towradgi",
    state: "NSW"
  },
  {
    name: "Illawarra Leagues Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Illawarra Master Builders Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Illawarra Yacht Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Illinois Hotel",
    city: "Five Dock",
    state: "NSW"
  },
  {
    name: "Illusions Wine Bar",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Images Disco",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Imperial Hotel",
    city: "Clifton",
    state: "NSW"
  },
  {
    name: "Imperial Hotel",
    city: "Erskineville",
    state: "NSW"
  },
  {
    name: "Inca’s Nightclub",
    city: "Pialba",
    state: "QLD"
  },
  {
    name: "Indi Bar",
    city: "Scarborough",
    state: "WA"
  },
  {
    name: "Inflation Session",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Ingham Town Hall",
    city: "Ingham",
    state: "QLD"
  },
  {
    name: "Ingleburn Bowling Club",
    city: "Ingleburn",
    state: "NSW"
  },
  {
    name: "Ingleburn RSL Club",
    city: "Ingleburn",
    state: "NSW"
  },
  {
    name: "Innisfail Shire Hall",
    city: "Innisfail",
    state: "QLD"
  },
  {
    name: "International Convention Centre Sydney",
    city: "Darling Harbour",
    state: "NSW"
  },
  {
    name: "International Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Intersection Hotel",
    city: "Ramsgate",
    state: "NSW"
  },
  {
    name: "In Time (TV Show)",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Inverell Town Hall",
    city: "Inverell",
    state: "NSW"
  },
  {
    name: "Inverloch Football Ground",
    city: "Inverloch",
    state: "VIC"
  },
  {
    name: "Irish Club Sports Oval",
    city: "Mt Isa",
    state: "QLD"
  },
  {
    name: "Iron Duke Hotel",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Isle Of Wight Hotel",
    city: "Phillip Island",
    state: "VIC"
  },
  {
    name: "Italo Australian Sports & Recreation Club",
    city: "North Lismore",
    state: "NSW"
  },
  {
    name: "Ivanhoe Hotel",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "Ivor Whittaker Lodge",
    city: "Mt Buller",
    state: "VIC"
  },
  {
    name: "Jaggers",
    city: "West Ryde",
    state: "NSW"
  },
  {
    name: "Jam Disco",
    city: "Leppington",
    state: "NSW"
  },
  {
    name: "James Craig Tavern",
    city: "Birkenhead Point",
    state: "NSW"
  },
  {
    name: "James Ruse Tavern",
    city: "Rouse Hill",
    state: "NSW"
  },
  {
    name: "Jam Factory",
    city: "Phillip",
    state: "ACT"
  },
  {
    name: "Jamieson Inn",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Jannali Girls High School",
    city: "Jannali",
    state: "NSW"
  },
  {
    name: "Jays Mainstream",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Jenny’s Joint",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Jet Club",
    city: "Coolangatta",
    state: "QLD"
  },
  {
    name: "Jet Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Jindabyne Bowling & Sports Club",
    city: "Jindabyne",
    state: "NSW"
  },
  {
    name: "Jindabyne Hotel",
    city: "Jindabyne",
    state: "NSW"
  },
  {
    name: "Jindalee Hotel",
    city: "Jindalee",
    state: "QLD"
  },
  {
    name: "John Barleycorn Hotel",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "John MacArthur Tavern",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Jolly Frog Hotel",
    city: "Windsor",
    state: "NSW"
  },
  {
    name: "Jolly Roger",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Journey’s End Wine Bar",
    city: "Woolloomooloo",
    state: "NSW"
  },
  {
    name: "Juliana's Nite Club",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Jump Club",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "Junction Hotel",
    city: "Newport",
    state: "VIC"
  },
  {
    name: "Jupiters Hotel & Casino",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Kalgoorlie Race Track",
    city: "Kalgoorlie",
    state: "WA"
  },
  {
    name: "Kalgoorlie Town Hall",
    city: "Kalgoorlie",
    state: "WA"
  },
  {
    name: "Kameraigal Restaurant",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Kardinia Park",
    city: "South Geelong",
    state: "VIC"
  },
  {
    name: "Kardomah Cafe",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Kareela Golf Club",
    city: "Kareela",
    state: "NSW"
  },
  {
    name: "Karma Hall",
    city: "Morwell",
    state: "VIC"
  },
  {
    name: "Katanning Town Hall",
    city: "Katanning",
    state: "WA"
  },
  {
    name: "Katoomba Golf Club",
    city: "Katoomba",
    state: "NSW"
  },
  {
    name: "KC's Cannonball Express",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Kealba High School",
    city: "Kealba",
    state: "VIC"
  },
  {
    name: "Kemps Creek Bowling Club",
    city: "Kemps Creek",
    state: "NSW"
  },
  {
    name: "Kempsey RSL Club",
    city: "Kempsey",
    state: "NSW"
  },
  {
    name: "Kempsey Workers Club",
    city: "Kempsey",
    state: "NSW"
  },
  {
    name: "Kensington Town Hall",
    city: "Kensington",
    state: "VIC"
  },
  {
    name: "Kentucky Tavern",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Kewdale Hotel",
    city: "Kewdale",
    state: "WA"
  },
  {
    name: "Kew Town Hall",
    city: "Kew",
    state: "VIC"
  },
  {
    name: "Kiama Bowling & Recreation Club",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Kiama Golf Club",
    city: "Kiama Downs",
    state: "NSW"
  },
  {
    name: "Kiama Inn",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Kiama Leagues Club",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Kiama Rugby Club",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Killester College",
    city: "Springvale",
    state: "VIC"
  },
  {
    name: "Kilmore Memorial Hall",
    city: "Kilmore",
    state: "VIC"
  },
  {
    name: "Kilsyth Memorial Hall",
    city: "Kilsyth",
    state: "VIC"
  },
  {
    name: "Kincumber Hotel",
    city: "Kincumber",
    state: "NSW"
  },
  {
    name: "Kingaroy Town Hall",
    city: "Kingaroy",
    state: "QLD"
  },
  {
    name: "King George V Oval",
    city: "Glenorchy",
    state: "TAS"
  },
  {
    name: "Kingsgrove Community Centre",
    city: "Kingsgrove",
    state: "NSW"
  },
  {
    name: "Kingsgrove RSL Club",
    city: "Kingsgrove",
    state: "NSW"
  },
  {
    name: "King's Head Tavern",
    city: "Sth Hurstville",
    state: "NSW"
  },
  {
    name: "Kings Head Tavern",
    city: "Sth Hurstville",
    state: "NSW"
  },
  {
    name: "Kingsley Tavern",
    city: "Kingsley",
    state: "WA"
  },
  {
    name: "Kings Park & Botanic Gardens",
    city: "West Perth",
    state: "WA"
  },
  {
    name: "King's Theatre",
    city: "Mount Gambier",
    state: "SA"
  },
  {
    name: "Kingston Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Kingston Rock Hotel",
    city: "Kingston",
    state: "ACT"
  },
  {
    name: "Kingswood High School",
    city: "Box Hill",
    state: "VIC"
  },
  {
    name: "Kinselas",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Kogarah Golf Club",
    city: "Arncliffe",
    state: "NSW"
  },
  {
    name: "Kogorah Masonic Hall",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "Kondari Resort",
    city: "Hervey Bay",
    state: "QLD"
  },
  {
    name: "Kooroora Lodge",
    city: "Mt Buller",
    state: "VIC"
  },
  {
    name: "Korumburra Showgrounds",
    city: "Korumburra",
    state: "VIC"
  },
  {
    name: "Kryal Castle",
    city: "Leigh Creek",
    state: "VIC"
  },
  {
    name: "Kuranda Amphitheatre",
    city: "Kuranda",
    state: "QLD"
  },
  {
    name: "Kuringai College",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Kyabram Football Oval",
    city: "Kyabram",
    state: "VIC"
  },
  {
    name: "Kyabram Recreation Reserve",
    city: "Kyabram",
    state: "VIC"
  },
  {
    name: "La Boite Theatre",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Labor Club",
    city: "Belconnen",
    state: "ACT"
  },
  {
    name: "Lady Bay Hotel",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Lady Gowrie Hotel",
    city: "Whyalla",
    state: "SA"
  },
  {
    name: "Lagoon Restaurant",
    city: "North Wollongong",
    state: "NSW"
  },
  {
    name: "Laird O'Cockpen Hotel",
    city: "Abbotsford",
    state: "VIC"
  },
  {
    name: "Lake Oval",
    city: "Albert Park",
    state: "VIC"
  },
  {
    name: "Lalor Park Community Centre",
    city: "Lalor Park",
    state: "NSW"
  },
  {
    name: "La Mama Theatre",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Lancelin Ocean Classic (Windsurfer Festival)",
    city: "Lancelin",
    state: "WA"
  },
  {
    name: "Landsdowne Hotel",
    city: "Chippendale",
    state: "NSW"
  },
  {
    name: "Lang Park",
    city: "Milton",
    state: "QLD"
  },
  {
    name: "Lansdowne Hotel",
    city: "Chippendale",
    state: "NSW"
  },
  {
    name: "L'Aqua",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Largs Pier Hotel",
    city: "Largs Bay",
    state: "SA"
  },
  {
    name: "Last Picture Show",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Late Edition",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Latrobe Union Hall",
    city: "Bundoora",
    state: "VIC"
  },
  {
    name: "La Trobe University",
    city: "Bundoora",
    state: "VIC"
  },
  {
    name: "Latrobe Valley Festival",
    city: "Rosedale",
    state: "VIC"
  },
  {
    name: "Launching Place Festival",
    city: "Launching Place",
    state: "VIC"
  },
  {
    name: "Lavington Sports Club",
    city: "Lavington",
    state: "NSW"
  },
  {
    name: "Lavington Sports Ground",
    city: "Lavington",
    state: "NSW"
  },
  {
    name: "Lawson Bowling Club",
    city: "Lawson",
    state: "NSW"
  },
  {
    name: "LazyBones Lounge Restaurant & Bar",
    city: "Marrickville",
    state: "NSW"
  },
  {
    name: "Leeton Ex-Services Club",
    city: "Leeton",
    state: "NSW"
  },
  {
    name: "Leeton Hotel",
    city: "Leeton",
    state: "NSW"
  },
  {
    name: "Leeton Oval",
    city: "Leeton",
    state: "NSW"
  },
  {
    name: "Leg Trap Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Leichhardt Business Club",
    city: "Leichhardt",
    state: "NSW"
  },
  {
    name: "Leichhardt Hotel",
    city: "Leichhardt",
    state: "NSW"
  },
  {
    name: "Le Mans Grand Prix",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Leongatha Memorial Hall",
    city: "Leongatha",
    state: "VIC"
  },
  {
    name: "Leppington Inn",
    city: "Leppington",
    state: "NSW"
  },
  {
    name: "Le Rox Nightclub",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Leumeah Hotel",
    city: "Leumeah",
    state: "NSW"
  },
  {
    name: "Lewisham Hotel",
    city: "Lewisham",
    state: "NSW"
  },
  {
    name: "Lidcombe Dancers Club",
    city: "Lidcombe",
    state: "NSW"
  },
  {
    name: "Lidcombe Hotel",
    city: "Lidcombe",
    state: "NSW"
  },
  {
    name: "Lidcombe Oval",
    city: "Lidcombe",
    state: "NSW"
  },
  {
    name: "Lilac Time Hall",
    city: "Goulburn",
    state: "NSW"
  },
  {
    name: "Lion Hotel",
    city: "North Adelaide",
    state: "SA"
  },
  {
    name: "Lismore City Hall",
    city: "Lismore",
    state: "NSW"
  },
  {
    name: "Lismore Civic Centre",
    city: "Lismore",
    state: "NSW"
  },
  {
    name: "Lismore RSL Sports Club",
    city: "Goonellabah",
    state: "NSW"
  },
  {
    name: "Lismore Workers Club",
    city: "Lismore",
    state: "NSW"
  },
  {
    name: "Lithgow Ball",
    city: "Lithgow Ball",
    state: "NSW"
  },
  {
    name: "Lithgow RSL Club",
    city: "Lithgow",
    state: "NSW"
  },
  {
    name: "Lithgow Showground",
    city: "Lithgow",
    state: "NSW"
  },
  {
    name: "Lithgow Workers Club",
    city: "Lithgow",
    state: "NSW"
  },
  {
    name: "Liverpool Golf Club",
    city: "Lansvale",
    state: "NSW"
  },
  {
    name: "Liverpool Speedway",
    city: "Green Valley",
    state: "NSW"
  },
  {
    name: "Liverpool Town Hall",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Liverpool Youth Centre",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Local Inn",
    city: "West Ryde",
    state: "NSW"
  },
  {
    name: "Logan Motel",
    city: "Logan",
    state: "VIC"
  },
  {
    name: "London Hotel",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "London Tavern",
    city: "Caulfield",
    state: "VIC"
  },
  {
    name: "Long Bay Correctional Centre",
    city: "Malabar",
    state: "NSW"
  },
  {
    name: "Longhorne Restaurant",
    city: "Ingleburn",
    state: "NSW"
  },
  {
    name: "Long Jetty Hotel",
    city: "Long Jetty",
    state: "NSW"
  },
  {
    name: "Longueville Hotel",
    city: "Lane Cove",
    state: "NSW"
  },
  {
    name: "Lord Roberts Hotel",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Los Muchachos Circus - Jubille Park",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Love Inn",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Lower Plenty Hotel",
    city: "Lower Plenty",
    state: "VIC"
  },
  {
    name: "Loxton Hotel",
    city: "Loxton",
    state: "SA"
  },
  {
    name: "Lucy's Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Luke's",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Luna Park",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Luna Park",
    city: "Milsons Point",
    state: "NSW"
  },
  {
    name: "Lyrebird Falls",
    city: "Kallista",
    state: "VIC"
  },
  {
    name: "Lyric Nightclub",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Macarthur Institute of Technology",
    city: "Milperra",
    state: "NSW"
  },
  {
    name: "Macarthur Tavern",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Mackay Entertainment Centre",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Mackay Park",
    city: "Batemans Bay",
    state: "NSW"
  },
  {
    name: "Mackay Showgrounds",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Macquarie Arms Hotel",
    city: "Windsor",
    state: "NSW"
  },
  {
    name: "Macquarie University",
    city: "Macquarie Park",
    state: "NSW"
  },
  {
    name: "Mac's Hotel",
    city: "Melton",
    state: "VIC"
  },
  {
    name: "Macy's - Her Majesty's Hotel",
    city: "South Yarra",
    state: "VIC"
  },
  {
    name: "Madigan's",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Maggies",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Magic Mountain",
    city: "Merimbula",
    state: "NSW"
  },
  {
    name: "Mainstream Rock",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Maitland RSL",
    city: "Maitland",
    state: "NSW"
  },
  {
    name: "Major Druitt Hotel",
    city: "Mt Druitt",
    state: "NSW"
  },
  {
    name: "Malabar RSL",
    city: "Malabar",
    state: "NSW"
  },
  {
    name: "Malthouse Tavern",
    city: "Balga",
    state: "WA"
  },
  {
    name: "Malvern Town Hall",
    city: "Malvern",
    state: "VIC"
  },
  {
    name: "Mandarin Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Mandurah Festival",
    city: "Mandurah Festival",
    state: "WA"
  },
  {
    name: "Mangrove Resort Hotel",
    city: "Broome",
    state: "WA"
  },
  {
    name: "Manhattan Hotel",
    city: "Ringwood",
    state: "VIC"
  },
  {
    name: "Manjimup Town Hall",
    city: "Manjimup",
    state: "WA"
  },
  {
    name: "Manly Beach",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly-Curl Curl Abbott Street Club",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Fishermans Sports Club",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Flix",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Leagues Club",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Pacific Hotel",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Rugby Union Club",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Vale Hotel",
    city: "Manly Vale",
    state: "NSW"
  },
  {
    name: "Manly Wharf Hotel",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manly Youth Centre",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "Manning Bar",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Manning River Hotel",
    city: "Taree",
    state: "NSW"
  },
  {
    name: "Mansfield High School",
    city: "Mansfield",
    state: "VIC"
  },
  {
    name: "Mansfield Park Hotel",
    city: "Mansfield Park",
    state: "SA"
  },
  {
    name: "Mansfield Tavern",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Manson Hotel",
    city: "Swansea",
    state: "NSW"
  },
  {
    name: "Manuka Football Club",
    city: "Manuka",
    state: "ACT"
  },
  {
    name: "Marayong Hotel",
    city: "Marayong",
    state: "NSW"
  },
  {
    name: "Marble Bar",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Marconi Club",
    city: "Bossley Park",
    state: "NSW"
  },
  {
    name: "Marconi Stadium",
    city: "Bossley Park",
    state: "NSW"
  },
  {
    name: "Marijuana House",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Marion Shopping Centre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Marion Shopping Centre",
    city: "Oaklands Park",
    state: "SA"
  },
  {
    name: "Marist Brothers Hall",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Marist Brothers Kogarah",
    city: "Bexley",
    state: "NSW"
  },
  {
    name: "Marks Point Sports Club",
    city: "Marks Point",
    state: "NSW"
  },
  {
    name: "Marlborough Hotel",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Marlin Hotel",
    city: "Ulladulla",
    state: "NSW"
  },
  {
    name: "Maroubra Bay Hotel",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Maroubra Beach",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Maroubra Beach Hotel",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Maroubra Junction Church Hall",
    city: "Maroubra Junction",
    state: "NSW"
  },
  {
    name: "Maroubra Junction Hotel",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Maroubra Sands Hotel",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Maroubra Seals Club",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "Marquee Club",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "Marquee Club",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Marquee - Stockade Hotel",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Marrickville RSL",
    city: "Marrickville",
    state: "NSW"
  },
  {
    name: "Marryatville Hotel",
    city: "Marryatville",
    state: "SA"
  },
  {
    name: "Mars",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Marsfield Scout Hall",
    city: "Marsfield",
    state: "NSW"
  },
  {
    name: "Martin Hall",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Martini's",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Martin Place",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Mary Ann Reserve",
    city: "Mannum",
    state: "SA"
  },
  {
    name: "Maryborough Showgrounds & Equestrian Park",
    city: "Maryborough",
    state: "QLD"
  },
  {
    name: "Maryborough Town Hall",
    city: "Maryborough",
    state: "QLD"
  },
  {
    name: "Mascot RSL",
    city: "Mascot",
    state: "NSW"
  },
  {
    name: "Matong Community Centre",
    city: "Matong",
    state: "NSW"
  },
  {
    name: "Matraville RSL",
    city: "Matraville",
    state: "NSW"
  },
  {
    name: "Matthew Flinders Assembly Hall",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Matthew Flinders Hotel",
    city: "Chadstone",
    state: "VIC"
  },
  {
    name: "Mawson Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Max Watts",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Mayne Hall - The University Of Queensland",
    city: "St Lucia",
    state: "QLD"
  },
  {
    name: "MCG - Melbourne Cricket Ground",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Meadowbank High School",
    city: "Meadowbank",
    state: "NSW"
  },
  {
    name: "Meadows Technicolour Fair",
    city: "Meadows",
    state: "SA"
  },
  {
    name: "Mechanics Institute",
    city: "Apollo Bay",
    state: "VIC"
  },
  {
    name: "Mediterranean Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Melanesia Village",
    city: "Hervey Bay",
    state: "QLD"
  },
  {
    name: "Melbourne CAE",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Melbourne Concert Hall",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbourne Convention And Exhibition Centre",
    city: "South Wharf",
    state: "VIC"
  },
  {
    name: "Melbourne Hotel",
    city: "South Brisbane",
    state: "QLD"
  },
  {
    name: "Melbourne Palace",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbourne Sports And Entertainment Centre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbourne Teachers College",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Melbourne Town Hall",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbourne Underground",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbourne University",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melbournian Restaurant",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Melton Hotel",
    city: "Melton",
    state: "VIC"
  },
  {
    name: "Melton Hotel",
    city: "Auburn",
    state: "NSW"
  },
  {
    name: "Memorial Club",
    city: "Alice Springs",
    state: "NT"
  },
  {
    name: "Memorial Drive Park",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Menai Hotel",
    city: "South Burnie",
    state: "TAS"
  },
  {
    name: "Mentone Hotel",
    city: "Mentone",
    state: "VIC"
  },
  {
    name: "Mercantile Hotel",
    city: "The Rocks",
    state: "NSW"
  },
  {
    name: "Mercury Lounge",
    city: "Southbank",
    state: "VIC"
  },
  {
    name: "Merimbula RSL Club",
    city: "Merimbula",
    state: "NSW"
  },
  {
    name: "Merrylands Masonic Hall",
    city: "Merrylands",
    state: "NSW"
  },
  {
    name: "Merrylands RSL Club",
    city: "Merrylands",
    state: "NSW"
  },
  {
    name: "Metro Nightclub",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Metropole Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Metropole Tavern",
    city: "Circular Quay",
    state: "NSW"
  },
  {
    name: "Metropole Tavern",
    city: "Cremorne",
    state: "NSW"
  },
  {
    name: "Metropolis Club",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Metropolis Tavern",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Metropolitan Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Metro Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Mezz Bar, Wallsend Diggers",
    city: "Wallsend",
    state: "NSW"
  },
  {
    name: "Miami State High School",
    city: "Miami",
    state: "QLD"
  },
  {
    name: "Middle Harbour Skiff Club",
    city: "Mosman",
    state: "NSW"
  },
  {
    name: "Middle Park Hotel",
    city: "Middle Park",
    state: "VIC"
  },
  {
    name: "Mildura Technical Hall",
    city: "Mildura",
    state: "VIC"
  },
  {
    name: "Millenium Night Club",
    city: "Townsville",
    state: "QLD"
  },
  {
    name: "Millers Hotel",
    city: "Fairfield",
    state: "NSW"
  },
  {
    name: "Millers Hotel",
    city: "Riverwood",
    state: "NSW"
  },
  {
    name: "Milton Hotel",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Milton Showgrounds",
    city: "Milton",
    state: "NSW"
  },
  {
    name: "Minchinbury Neighbourhood Centre",
    city: "Minchinbury",
    state: "NSW"
  },
  {
    name: "Miners Rest Hotel",
    city: "Wonthaggi",
    state: "VIC"
  },
  {
    name: "Mingara Recreation Club",
    city: "Tumbi Umbi",
    state: "NSW"
  },
  {
    name: "Mingara Recreation Club",
    city: "Tumbi Umbi",
    state: "NSW"
  },
  {
    name: "Mint Disco",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Miranda Hotel - Carmens",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Miranda RSL",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Miranda Youth Club",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Mitcham High School",
    city: "Mitcham",
    state: "VIC"
  },
  {
    name: "Mitcham Rock Concert",
    city: "Mitcham",
    state: "VIC"
  },
  {
    name: "Mitchell College Of Advanced Education",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "MIttagong RSL Club",
    city: "Mittagong",
    state: "NSW"
  },
  {
    name: "Moby Dicks",
    city: "Whale Beach",
    state: "NSW"
  },
  {
    name: "Moe Town Hall",
    city: "Moe",
    state: "VIC"
  },
  {
    name: "Mollymook Golf Club",
    city: "Mollymook",
    state: "NSW"
  },
  {
    name: "Monaghan's Wine Bar",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Monash Teachers College",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Monash University",
    city: "Clayton",
    state: "VIC"
  },
  {
    name: "Mona Vale Hotel",
    city: "Mona Vale",
    state: "NSW"
  },
  {
    name: "Mona Vale Memorial Hall",
    city: "Mona Vale",
    state: "NSW"
  },
  {
    name: "Montgomery Hotel",
    city: "Pyrmont",
    state: "NSW"
  },
  {
    name: "Mooloolaba Hotel",
    city: "Maroochydore",
    state: "QLD"
  },
  {
    name: "Moonee Ponds Tavern",
    city: "Moonee Ponds",
    state: "VIC"
  },
  {
    name: "Moonshine Dance",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Moorabbin Oval",
    city: "Moorabbin",
    state: "VIC"
  },
  {
    name: "Moorebank Sports Club",
    city: "Hammondville",
    state: "NSW"
  },
  {
    name: "Moree Town Hall",
    city: "Moree",
    state: "NSW"
  },
  {
    name: "Moreland Hotel",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Morley Park Hotel",
    city: "Morley",
    state: "WA"
  },
  {
    name: "Morning Star Estate",
    city: "Mt Eliza",
    state: "VIC"
  },
  {
    name: "Mornington High School",
    city: "Mornington",
    state: "VIC"
  },
  {
    name: "Mortdale Hotel - St George Rock Room",
    city: "Mortdale",
    state: "NSW"
  },
  {
    name: "Moruya RSL",
    city: "Moruya",
    state: "NSW"
  },
  {
    name: "Morwell Hotel",
    city: "Morwell",
    state: "VIC"
  },
  {
    name: "Morwell Technical School",
    city: "Morwell",
    state: "VIC"
  },
  {
    name: "Mosman High School",
    city: "Mosman",
    state: "NSW"
  },
  {
    name: "Mosman Hotel",
    city: "Mosman",
    state: "NSW"
  },
  {
    name: "Moss Vale RSL Club",
    city: "Moss Vale",
    state: "NSW"
  },
  {
    name: "Mountain View Hotel",
    city: "Glen Waverly",
    state: "VIC"
  },
  {
    name: "Mounties",
    city: "Mt Pritchard",
    state: "NSW"
  },
  {
    name: "Mount Lewis Bowling Club",
    city: "Greenacre",
    state: "NSW"
  },
  {
    name: "Mount Penang Training School for Boys",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Mount Scopus Memorial College",
    city: "Burwood",
    state: "VIC"
  },
  {
    name: "Mount Waverley High School",
    city: "Mount Waverley",
    state: "VIC"
  },
  {
    name: "Move (TV Show)",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Mt Druitt High School",
    city: "Mt Druitt",
    state: "NSW"
  },
  {
    name: "Mt Druitt Town Centre",
    city: "Mt Druitt",
    state: "NSW"
  },
  {
    name: "Mt Druitt Workers Club",
    city: "Dharruk",
    state: "NSW"
  },
  {
    name: "Mt. Erica Hotel",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Mt Isa Civic Centre",
    city: "Mt Isa",
    state: "QLD"
  },
  {
    name: "Mt Pleasant Sports Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Mulwala Water Ski Club",
    city: "Mulwala",
    state: "VIC"
  },
  {
    name: "Municipal Theatre",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Murray Bridge Town Hall",
    city: "Murray Bridge",
    state: "SA"
  },
  {
    name: "Murray Teachers College",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Murwillumbah Civic Centre",
    city: "Murwillumbah",
    state: "NSW"
  },
  {
    name: "Murwillumbah RSL Club",
    city: "Murwillumbah",
    state: "NSW"
  },
  {
    name: "Musicians Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Muswellbrook Golf Club",
    city: "Muswellbrook",
    state: "NSW"
  },
  {
    name: "Myer City Store",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Myer Store",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Myponga Music Festival",
    city: "Myponga",
    state: "SA"
  },
  {
    name: "Namatjira Hotel",
    city: "Rooty Hill",
    state: "NSW"
  },
  {
    name: "Nambour Civic Centre",
    city: "Nambour",
    state: "QLD"
  },
  {
    name: "Nambour Lind Lane Theatre",
    city: "Nambour",
    state: "QLD"
  },
  {
    name: "Nambucca Heads RSL Club",
    city: "Nambucca Heads",
    state: "NSW"
  },
  {
    name: "Napier Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Narara Music Festival",
    city: "Somersby",
    state: "NSW"
  },
  {
    name: "Nar Nar Goon Hotel",
    city: "Nar Nar Goon",
    state: "VIC"
  },
  {
    name: "Narooma Golf Club",
    city: "Narooma",
    state: "NSW"
  },
  {
    name: "Narrabeen RSL Club",
    city: "Narrabeen",
    state: "NSW"
  },
  {
    name: "Narrabeen Sands Hotel",
    city: "Narrabeen",
    state: "NSW"
  },
  {
    name: "Narrabri RSL Club",
    city: "Narrabri",
    state: "NSW"
  },
  {
    name: "National Hotel",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "National Tennis Centre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "National Theatre",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Nelson Hotel",
    city: "Woollahra",
    state: "NSW"
  },
  {
    name: "Nepean Colleges Of Advanced Education",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Nepean Hotel",
    city: "Emu Plains",
    state: "NSW"
  },
  {
    name: "Neutral Bay Club",
    city: "Neutral Bay",
    state: "NSW"
  },
  {
    name: "New Albury Hotel",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "New Brighton Hotel",
    city: "Kiama",
    state: "NSW"
  },
  {
    name: "Newcastle Arts School",
    city: "Newcastle West",
    state: "NSW"
  },
  {
    name: "Newcastle City Hall",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Newcastle Civic Centre",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Newcastle College Of Advanced Education",
    city: "Waratah West",
    state: "NSW"
  },
  {
    name: "Newcastle Entertainment Centre",
    city: "Broadmeadow",
    state: "NSW"
  },
  {
    name: "Newcastle International Sports Centre",
    city: "New Lambton",
    state: "NSW"
  },
  {
    name: "Newcastle Leagues Club",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Newcastle Motordome",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Newcastle Panthers Club",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Newcastle University",
    city: "Callaghan",
    state: "NSW"
  },
  {
    name: "Newcastle Workers Club",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "New College",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "New Norfolk War Memorial Hall",
    city: "New Norfolk",
    state: "TAS"
  },
  {
    name: "Newport Wine Bar",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "News Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "New South Wales Institute Of Technology",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Newtown Hotel",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Newtown Leagues Club",
    city: "Stanmore",
    state: "NSW"
  },
  {
    name: "Newtown RSL Club",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Newtown Rules Club",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "New York Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Nicabellas Hotel",
    city: "Malvern",
    state: "VIC"
  },
  {
    name: "Noble Park High School",
    city: "Noble Park",
    state: "VIC"
  },
  {
    name: "Noise Bar - Railway Hotel",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Nomads Clubhouse",
    city: "Kellyville",
    state: "NSW"
  },
  {
    name: "Noosa Australian Football Club",
    city: "Noosaville",
    state: "QLD"
  },
  {
    name: "Noosa Picnic Race Track",
    city: "Noosa",
    state: "QLD"
  },
  {
    name: "North Bondi RSL",
    city: "North Bondi",
    state: "NSW"
  },
  {
    name: "Northbridge Hotel",
    city: "Northbridge",
    state: "NSW"
  },
  {
    name: "Northbridge Sailing Club",
    city: "Northbridge",
    state: "NSW"
  },
  {
    name: "North Cronulla Hotel",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Northern Suburbs Leagues",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Northern Suburbs Leagues Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Northern Suburbs Leagues Club",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "North Gardens",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Northmead High School",
    city: "Northmead",
    state: "NSW"
  },
  {
    name: "North Melbourne Football Club",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "North Nowra Tavern",
    city: "North Nowra",
    state: "NSW"
  },
  {
    name: "North Richmond Hotel",
    city: "North Richmond",
    state: "NSW"
  },
  {
    name: "North Rocks Community Centre",
    city: "North Rocks",
    state: "NSW"
  },
  {
    name: "North Ryde Community Centre",
    city: "North Ryde",
    state: "NSW"
  },
  {
    name: "North Ryde RSL",
    city: "North Ryde",
    state: "NSW"
  },
  {
    name: "North Steyne Surf Life Saving Club",
    city: "Manly",
    state: "NSW"
  },
  {
    name: "North Sydney Boys High",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "North Sydney Teachers College",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "North Wollongong Hotel",
    city: "North Wollongong",
    state: "NSW"
  },
  {
    name: "North Wollongong Surf Life Saving Club",
    city: "North Wollongong",
    state: "NSW"
  },
  {
    name: "Norwood Football Club",
    city: "Norwood",
    state: "SA"
  },
  {
    name: "Norwood High School",
    city: "Ringwood",
    state: "VIC"
  },
  {
    name: "Norwood Morialta High School",
    city: "Magill",
    state: "SA"
  },
  {
    name: "Norwood Town Hall",
    city: "Norwood",
    state: "SA"
  },
  {
    name: "Notes",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Novotel",
    city: "North Wollongong",
    state: "NSW"
  },
  {
    name: "NSW Leagues Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Nunawading Skate Ranch",
    city: "Nunawading",
    state: "VIC"
  },
  {
    name: "Nyngan RSL",
    city: "Nyngan",
    state: "NSW"
  },
  {
    name: "Oakdale Workers Club",
    city: "Oakdale",
    state: "NSW"
  },
  {
    name: "Oasis Hotel",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Oatlands House",
    city: "Oatlands",
    state: "NSW"
  },
  {
    name: "Oatley Hotel",
    city: "Oatley",
    state: "NSW"
  },
  {
    name: "Oberon RSL",
    city: "Oberon",
    state: "NSW"
  },
  {
    name: "Ocean Beach Hotel",
    city: "Umina",
    state: "NSW"
  },
  {
    name: "Ocean Grove Hotel",
    city: "Ocean Grove",
    state: "VIC"
  },
  {
    name: "Octagon Theatre",
    city: "Elizabeth",
    state: "SA"
  },
  {
    name: "Office Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Olde Tudor Hotel",
    city: "Launceston",
    state: "TAS"
  },
  {
    name: "Old Greek Theatre",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Old Lion Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Old Mariner Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Old Melbourne Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Old Melbourne Motor Inn",
    city: "North Melbourne",
    state: "VIC"
  },
  {
    name: "Old Windsor Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Olympic Hotel",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Olympic Park Stadium",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Olympic Telethon (TV Show)",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Ombo Surf Lifesaving Club",
    city: "Glenelg",
    state: "SA"
  },
  {
    name: "Orama Ballroom",
    city: "Footscray",
    state: "VIC"
  },
  {
    name: "Orana Hotel",
    city: "Blacksmiths",
    state: "NSW"
  },
  {
    name: "Orange Century Theatre",
    city: "Orange",
    state: "NSW"
  },
  {
    name: "Orange Civic Centre",
    city: "Orange",
    state: "NSW"
  },
  {
    name: "Orange Ex-Services Club",
    city: "Orange",
    state: "NSW"
  },
  {
    name: "Orange Function Centre",
    city: "Orange",
    state: "NSW"
  },
  {
    name: "Orange Grove Hotel",
    city: "Leichhardt",
    state: "NSW"
  },
  {
    name: "Oriental Hotel",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Orient Hotel",
    city: "Fremantle",
    state: "WA"
  },
  {
    name: "Orient Hotel",
    city: "The Rocks, Sydney",
    state: "NSW"
  },
  {
    name: "Ormond Hall",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "O.T.I.S. Holy Family Hall",
    city: "Mount Waverley",
    state: "VIC"
  },
  {
    name: "Our Lady Help Of Christians Church",
    city: "East Brunswick",
    state: "VIC"
  },
  {
    name: "Overlander Hotel",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Oxford Funhouse",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Oxford Hotel",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Oxford Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Pacific Ballroom",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Pacific Cabaret",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "Pacific Hotel",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "Pacific Hotel",
    city: "Lorne",
    state: "VIC"
  },
  {
    name: "Pacific Palm",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Paddington Green Hotel",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Paddington RSL Club",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Paddington Town Hall",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Padstow Bowling Club",
    city: "Padstow",
    state: "NSW"
  },
  {
    name: "Padstow Park Hotel",
    city: "Padstow",
    state: "NSW"
  },
  {
    name: "Padstow RSL Club",
    city: "Padstow",
    state: "NSW"
  },
  {
    name: "Pakenham Public Hall",
    city: "Pakenham",
    state: "VIC"
  },
  {
    name: "Palace Hotel",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Palais Hotel",
    city: "Ipswich",
    state: "QLD"
  },
  {
    name: "Palais Royal",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Palais Royal Theatre",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Palais Theatre",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Palais Theatre",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Palm Beach RSL Club",
    city: "Palm Beach",
    state: "NSW"
  },
  {
    name: "Palm's Disco",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Pambula Town Hall",
    city: "Pambula",
    state: "NSW"
  },
  {
    name: "Panthers Leagues Club",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Paradise Club",
    city: "Sunshine",
    state: "VIC"
  },
  {
    name: "Paradise Lounge",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Paradise Nightclub",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Para Vista High School",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Parish Hall",
    city: "Maitland",
    state: "NSW"
  },
  {
    name: "Paris Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Park Beach Hotel",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Parker Villa Amphitheatre",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Parkes Community Centre",
    city: "Parkes",
    state: "NSW"
  },
  {
    name: "Parkes RSL Club",
    city: "Parkes",
    state: "NSW"
  },
  {
    name: "Park Hall Hotel",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Parkinson (TV Show)",
    city: "Gore Hill",
    state: "NSW"
  },
  {
    name: "Parklands Resort & Conference Centre",
    city: "Mudgee",
    state: "NSW"
  },
  {
    name: "Park Royal Hotel",
    city: "Darling Harbour",
    state: "NSW"
  },
  {
    name: "Park Royal Hotel",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Parkview Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Parkway Hotel",
    city: "French's Forest",
    state: "NSW"
  },
  {
    name: "Parkwood Tavern",
    city: "Parkwood",
    state: "QLD"
  },
  {
    name: "Parliament House",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Parramatta Bowling Club",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta High School",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta Jail",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta Leagues Club",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta Park",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta Rivoli Ballroom",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Parramatta Stadium",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Patches",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "Paynesville Country Club",
    city: "Paynesville",
    state: "VIC"
  },
  {
    name: "Paynesville Hotel",
    city: "Paynesville",
    state: "VIC"
  },
  {
    name: "Peaches & Cream Festival",
    city: "Cobram",
    state: "VIC"
  },
  {
    name: "Peakhurst Hotel",
    city: "Peakhurst",
    state: "NSW"
  },
  {
    name: "Pearly Shells",
    city: "Moruya",
    state: "NSW"
  },
  {
    name: "Peninsula Gardens",
    city: "Rosebud",
    state: "VIC"
  },
  {
    name: "Peninsula Hotel",
    city: "Mandurah",
    state: "WA"
  },
  {
    name: "Pennant Hills Hotel",
    city: "Pennant Hills",
    state: "NSW"
  },
  {
    name: "Pennant Hills Inn",
    city: "Pennant Hills",
    state: "NSW"
  },
  {
    name: "Penrith Gaels Cultural & Sporting Association",
    city: "Kingswood",
    state: "NSW"
  },
  {
    name: "Penrith Leagues Club",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Penrith Paceway",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Penrith Park",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Penrith RSL",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Penshurst Girls High School",
    city: "Penshurst",
    state: "NSW"
  },
  {
    name: "Penshurst Hotel",
    city: "Penshurst",
    state: "NSW"
  },
  {
    name: "Penthouse Club",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Perth Arena",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Perth Concert Hall",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Perth Entertainment Centre",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Petersham Inn - Max's",
    city: "Petersham",
    state: "NSW"
  },
  {
    name: "Pete's Hideaway",
    city: "Bega",
    state: "NSW"
  },
  {
    name: "Phillip Island Surf Club",
    city: "Phillip Island",
    state: "VIC"
  },
  {
    name: "Phoenician Club",
    city: "Ultimo",
    state: "NSW"
  },
  {
    name: "Phoenix Hotel",
    city: "Spearwood",
    state: "WA"
  },
  {
    name: "Piccadilly Hotel",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Pickwick Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Picton Bowling Club",
    city: "Picton",
    state: "NSW"
  },
  {
    name: "Picton Entertainment Centre",
    city: "Picton",
    state: "NSW"
  },
  {
    name: "Pier Hotel",
    city: "Botany",
    state: "NSW"
  },
  {
    name: "Pier Hotel",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Pier Hotel",
    city: "Esperance",
    state: "WA"
  },
  {
    name: "Pier One",
    city: "Dawes Point",
    state: "NSW"
  },
  {
    name: "Pig City: Brisbane’s Historical Soundtrack",
    city: "St Lucia",
    state: "QLD"
  },
  {
    name: "Pilbeam Theatre",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Pilgrimage For Pop",
    city: "Ourimbah",
    state: "NSW"
  },
  {
    name: "Pinocchios Disco",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Pint On Punt",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Pioneer Hall",
    city: "Moana",
    state: "SA"
  },
  {
    name: "Pioneer Tavern",
    city: "South Penrith",
    state: "NSW"
  },
  {
    name: "Pips Nightclub",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Pitt Street Gardens Disco",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "PJ’s Irish Pub",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Plantation Hotel",
    city: "Coffs Harbour",
    state: "NSW"
  },
  {
    name: "Playday",
    city: "Port Douglas",
    state: "QLD"
  },
  {
    name: "Players Bar",
    city: "Mandurah",
    state: "WA"
  },
  {
    name: "Playpen International Night Club",
    city: "Cairns",
    state: "QLD"
  },
  {
    name: "Plaza Theatre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Plaza Theatre",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Plaza Theatre",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Pleasures Wine Bar",
    city: "Kogarah",
    state: "NSW"
  },
  {
    name: "Plympton High School",
    city: "Plympton Park",
    state: "SA"
  },
  {
    name: "Polaris Inn",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Pooraka Hotel",
    city: "Pooraka",
    state: "SA"
  },
  {
    name: "Port Adelaide Football Club",
    city: "Alberton",
    state: "SA"
  },
  {
    name: "Portadowne Hotel",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Port Augusta Football Club",
    city: "Port Augusta",
    state: "SA"
  },
  {
    name: "Port Kembla Leagues Club",
    city: "Port Kembla",
    state: "NSW"
  },
  {
    name: "Portland Civic Centre",
    city: "Portland",
    state: "VIC"
  },
  {
    name: "Port Lincoln Hotel",
    city: "Port Lincoln",
    state: "SA"
  },
  {
    name: "Port Macquarie Hotel",
    city: "Port Macquarie",
    state: "NSW"
  },
  {
    name: "Port Macquarie RSL",
    city: "Port Macquarie",
    state: "NSW"
  },
  {
    name: "Port Pirie Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Port Pirie Y.M.C.A.",
    city: "Port Pirie",
    state: "SA"
  },
  {
    name: "Powerhouse",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Poynton's Carlton Club Hotel",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Prahran Festival",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Prahran Technical School",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Prahran Town Hall",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "Pram Factory",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Precinct Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Preston Football Club",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Preston Institute Of Technology",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Preston Town Hall",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Pretoria Hotel",
    city: "Mannum",
    state: "SA"
  },
  {
    name: "Prince Alfred College",
    city: "Kent Town",
    state: "SA"
  },
  {
    name: "Prince Alfred Hotel",
    city: "Booval",
    state: "QLD"
  },
  {
    name: "Prince Of Wales",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Prince Regent Theatre",
    city: "Hamilton",
    state: "VIC"
  },
  {
    name: "Princes Park",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Princess Theatre",
    city: "Launceston",
    state: "TAS"
  },
  {
    name: "Princess Theatre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Princeton",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Pritchards Hotel",
    city: "Mount Pritchard",
    state: "NSW"
  },
  {
    name: "Prospect Hill Hotel",
    city: "Kew",
    state: "VIC"
  },
  {
    name: "Prospect Hotel",
    city: "Prospect",
    state: "NSW"
  },
  {
    name: "Pumphouse Hotel",
    city: "Darling Harbour",
    state: "NSW"
  },
  {
    name: "Punchbowl District RSL",
    city: "Punchbowl",
    state: "NSW"
  },
  {
    name: "Punters Club",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Q Club",
    city: "Kew",
    state: "VIC"
  },
  {
    name: "Qirkz In The Hunter",
    city: "Abermain",
    state: "NSW"
  },
  {
    name: "Qld Lions",
    city: "Richlands",
    state: "QLD"
  },
  {
    name: "Quakers Inn",
    city: "Quakers Hill",
    state: "NSW"
  },
  {
    name: "Quay One",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Queanbeyan Leagues Club",
    city: "Queanbeyan",
    state: "NSW"
  },
  {
    name: "Queensbury Hotel",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Queenscliff Surf Life Saving Club",
    city: "Queenscliff",
    state: "NSW"
  },
  {
    name: "Queens Hotel",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Raby Tavern",
    city: "Raby",
    state: "NSW"
  },
  {
    name: "Racecourse Hotel",
    city: "Randwick",
    state: "NSW"
  },
  {
    name: "Rafferties Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Raffles Hotel",
    city: "Applecross",
    state: "WA"
  },
  {
    name: "Rag & Famish Hotel",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Railway Hotel",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Railway Hotel",
    city: "Stawell",
    state: "VIC"
  },
  {
    name: "Ramada Inn",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Ramsgate R.S.L. Memorial Club",
    city: "Sans Souci",
    state: "NSW"
  },
  {
    name: "Randwick Rugby Club",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Randwick Town Hall",
    city: "Randwick",
    state: "NSW"
  },
  {
    name: "Ranelagh Club",
    city: "Mt Eliza",
    state: "VIC"
  },
  {
    name: "Ravenswood Hotel",
    city: "Ravenswood",
    state: "WA"
  },
  {
    name: "Razor",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Rebels Club House",
    city: "Leppington",
    state: "NSW"
  },
  {
    name: "Recreation Centre",
    city: "Bunbury",
    state: "WA"
  },
  {
    name: "Redfern Town Hall",
    city: "Redfern",
    state: "NSW"
  },
  {
    name: "Redhead Surf Life Saving Club",
    city: "Redhead",
    state: "NSW"
  },
  {
    name: "Reedy Lake Festival",
    city: "Kerang",
    state: "VIC"
  },
  {
    name: "Refectory – Sydney University",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Reflections Winebar",
    city: "Burwood",
    state: "NSW"
  },
  {
    name: "Regal Theatre",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Regent Hotel",
    city: "Kingsford",
    state: "NSW"
  },
  {
    name: "Regent Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Regent Theatre",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Regent Theatre",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Rembrandt Dutch Club St Marys LTD",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "Rembrandts",
    city: "Wantirna South",
    state: "VIC"
  },
  {
    name: "Rendevous",
    city: "Mitcham",
    state: "VIC"
  },
  {
    name: "Renown Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Research Hall",
    city: "Eltham",
    state: "VIC"
  },
  {
    name: "Reservoir Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Rest Hotel",
    city: "Milsons Point",
    state: "NSW"
  },
  {
    name: "Retreat Hotel",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Revesby Roundhouse",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "Revesby Workers Club",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "Revesby YMCA",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "Rex Hotel",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Richmond Club Limited - Sonic Bar",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Richmond Ex-Services Club",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Richmond Henty Hotel",
    city: "Portland",
    state: "VIC"
  },
  {
    name: "Richmond Inn",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Richmond Riverboat",
    city: "Sydney Harbour",
    state: "NSW"
  },
  {
    name: "Richmond Social Club",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Richmond Town Hall",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Right On (TV Show)",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Ringwood Iceland",
    city: "Docklands",
    state: "VIC"
  },
  {
    name: "Ringwood Town Hall",
    city: "Ringwood",
    state: "VIC"
  },
  {
    name: "Rising Sun Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Ritchie's",
    city: "Preston",
    state: "VIC"
  },
  {
    name: "Ritz",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Ritz Carlton",
    city: "Double Bay",
    state: "NSW"
  },
  {
    name: "Riverina Australian Football Club",
    city: "Glenfield Park",
    state: "NSW"
  },
  {
    name: "Riverina College",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Riverside Inn",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Riverstage",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Riverstone High School",
    city: "Riverstone",
    state: "NSW"
  },
  {
    name: "Riverstone Schofields Memorial Club",
    city: "Riverstone",
    state: "NSW"
  },
  {
    name: "Riverstone Tavern",
    city: "Riverstone",
    state: "NSW"
  },
  {
    name: "Riverwood Hotel",
    city: "Riverwood",
    state: "NSW"
  },
  {
    name: "Rivoli Theatre",
    city: "Berri",
    state: "SA"
  },
  {
    name: "RMIT Glasshouse Theatre",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Robert Oatley Vineyards",
    city: "Mudgee",
    state: "NSW"
  },
  {
    name: "Rochford Wines",
    city: "Coldstream, Yarra Valley",
    state: "VIC"
  },
  {
    name: "Rock Cafe",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Rockdale Businessmen's Club Ltd",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "Rockdale RSL",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "Rock Garden",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Rock Garden",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Rockhampton Civic Centre",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Rockhampton Music Bowl",
    city: "North Rockhampton",
    state: "QLD"
  },
  {
    name: "Rockhampton Police Boys Club",
    city: "North Rockhampton",
    state: "QLD"
  },
  {
    name: "Rockhampton Showgrounds",
    city: "Rockhampton",
    state: "QLD"
  },
  {
    name: "Rock Inn",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Rock 'N' Roll Circus (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Rock On Main",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Rock Show (TV Show)",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Rocks Push or Old Push",
    city: "The Rocks",
    state: "NSW"
  },
  {
    name: "Rock Village",
    city: "KIngs Cross",
    state: "NSW"
  },
  {
    name: "Rocky Cape Tavern",
    city: "Rocky Cape",
    state: "TAS"
  },
  {
    name: "Rod Laver Arena",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Ron Toll’s Steakhouse",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Rooty Hill High School",
    city: "Rooty Hill",
    state: "NSW"
  },
  {
    name: "Rooty Hill RSL",
    city: "Rooty Hill",
    state: "NSW"
  },
  {
    name: "Rosebud Hotel",
    city: "Rosebud",
    state: "VIC"
  },
  {
    name: "Rosebud Memorial Hall",
    city: "Rosebud",
    state: "VIC"
  },
  {
    name: "Rosebud Sound Shell",
    city: "Rosebud",
    state: "VIC"
  },
  {
    name: "Rose Hill Race Course",
    city: "Rose Hill",
    state: "NSW"
  },
  {
    name: "Rose Of Australia Hotel",
    city: "Erskineville",
    state: "NSW"
  },
  {
    name: "Rose, Shamrock & Thistle",
    city: "Rozelle",
    state: "NSW"
  },
  {
    name: "Rostrevor College",
    city: "Woodforde",
    state: "SA"
  },
  {
    name: "Rothman’s Theatrette",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Roundabout Hotel",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Roundhouse",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Roxy Hotel",
    city: "Sth Melbourne",
    state: "VIC"
  },
  {
    name: "Royal Antler Hotel",
    city: "Narrabeen",
    state: "NSW"
  },
  {
    name: "Royal Ballroom",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Royal Derby Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Royal Exhibition Building",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Royal Hotel",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Tewantin",
    state: "QLD"
  },
  {
    name: "Royal Hotel",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Taree",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Bondi",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Windsor",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Springwood",
    state: "NSW"
  },
  {
    name: "Royal Hotel",
    city: "Essendon",
    state: "VIC"
  },
  {
    name: "Royal Hotel",
    city: "Portland",
    state: "VIC"
  },
  {
    name: "Royal Hotel",
    city: "Bowral",
    state: "NSW"
  },
  {
    name: "Royal Mail Hotel",
    city: "Noosa Heads",
    state: "QLD"
  },
  {
    name: "Royal Melbourne Institute Of Technology",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Royal Melbourne Showgrounds",
    city: "Ascot Vale",
    state: "VIC"
  },
  {
    name: "Royal Oak Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Royal Randwick Racecourse",
    city: "Randwick",
    state: "NSW"
  },
  {
    name: "Royals Football Club",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Royal Standard Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Royal Tavern",
    city: "Riverstone",
    state: "NSW"
  },
  {
    name: "Royal Theatre",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Royal Victoria Hotel",
    city: "Wangaratta",
    state: "VIC"
  },
  {
    name: "Rozelle Hotel",
    city: "Rozelle",
    state: "NSW"
  },
  {
    name: "Rumours",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Rusden College",
    city: "Clayton",
    state: "VIC"
  },
  {
    name: "Rydalmere Bowling Club",
    city: "Rydalmere",
    state: "NSW"
  },
  {
    name: "Ryde Civic Centre",
    city: "Ryde",
    state: "NSW"
  },
  {
    name: "Ryde Youth Club",
    city: "Ryde",
    state: "NSW"
  },
  {
    name: "Rydges",
    city: "Rosehill",
    state: "NSW"
  },
  {
    name: "Rymill Park",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Saint Ignatius' College",
    city: "Athelstone",
    state: "SA"
  },
  {
    name: "Saint Ignatius' College, Riverview",
    city: "Lane Cove",
    state: "NSW"
  },
  {
    name: "Salamander Hotel",
    city: "Salamander Bay",
    state: "NSW"
  },
  {
    name: "Sale Memorial Hall",
    city: "Sale",
    state: "VIC"
  },
  {
    name: "Salisbury High School",
    city: "Salisbury North",
    state: "SA"
  },
  {
    name: "Salisbury Youth Centre",
    city: "Salisbury",
    state: "SA"
  },
  {
    name: "Samantha's",
    city: "Richmond",
    state: "NSW"
  },
  {
    name: "Sancta Sophia College",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "Sandgroper Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Sandown Park Hotel",
    city: "Noble Park",
    state: "VIC"
  },
  {
    name: "Sandringham Hotel",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Sandringham Hotel",
    city: "Sandringham",
    state: "VIC"
  },
  {
    name: "San Miguel Hotel",
    city: "Cammeray",
    state: "NSW"
  },
  {
    name: "San Remo Ballroom",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "San Remo Hotel Motel",
    city: "San Remo",
    state: "VIC"
  },
  {
    name: "Sans Souci Hotel",
    city: "Sans Souci",
    state: "NSW"
  },
  {
    name: "Sarah Bernhardt’s",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Sarah Sands Hotel",
    city: "Brunswick",
    state: "VIC"
  },
  {
    name: "Sarat’s Image",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Satchmo’s Winebar Bistro",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Savoy Theatre Nightclub",
    city: "Lambton",
    state: "NSW"
  },
  {
    name: "Sawdust Hotel",
    city: "Gladesville",
    state: "NSW"
  },
  {
    name: "Sawtell Bowling Club",
    city: "Sawtell",
    state: "NSW"
  },
  {
    name: "Sawtell RSL Club",
    city: "Sawtell",
    state: "NSW"
  },
  {
    name: "Scandals Nightclub",
    city: "Campbelltown",
    state: "NSW"
  },
  {
    name: "Scarborough Hotel",
    city: "Scarborough",
    state: "WA"
  },
  {
    name: "Scene",
    city: "Canterbury",
    state: "VIC"
  },
  {
    name: "Scotch College",
    city: "Hawthorn",
    state: "VIC"
  },
  {
    name: "Scotts Head RSL",
    city: "Scotts Head",
    state: "NSW"
  },
  {
    name: "Seabreeze Hotel",
    city: "Nelson Bay",
    state: "NSW"
  },
  {
    name: "Seaford Carrum High School",
    city: "Carrum",
    state: "VIC"
  },
  {
    name: "Seagulls",
    city: "Tweed Heads West",
    state: "NSW"
  },
  {
    name: "Seaview Ballroom",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Sebastians",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Sebel Townhouse Hotel",
    city: "Elizabeth Bay",
    state: "NSW"
  },
  {
    name: "Sefton Hotel",
    city: "Sefton",
    state: "NSW"
  },
  {
    name: "Selina's - Coogee Bay Hotel",
    city: "Coogee",
    state: "NSW"
  },
  {
    name: "Sentimental Bloke",
    city: "Bulleen",
    state: "VIC"
  },
  {
    name: "Sentimental Bloke Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Sergeant Peppers",
    city: "Klemzig",
    state: "SA"
  },
  {
    name: "Settlers Arms Hotel",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Seven Creeks Run",
    city: "Euroa",
    state: "VIC"
  },
  {
    name: "Seven Hills Hotel",
    city: "Seven Hills",
    state: "NSW"
  },
  {
    name: "Seven Hills RSL",
    city: "Seven Hills",
    state: "NSW"
  },
  {
    name: "Seven Seas Hotel",
    city: "Carrington",
    state: "NSW"
  },
  {
    name: "Sgt Pepper's Rock Café",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Shadows Wine Bar",
    city: "Crows Nest",
    state: "NSW"
  },
  {
    name: "Shakespeare Hotel",
    city: "North Melbourne",
    state: "VIC"
  },
  {
    name: "Shalvey Youth Recreation Centre",
    city: "Shalvey",
    state: "NSW"
  },
  {
    name: "Shandon Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Shanney's",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "Sheiks",
    city: "?",
    state: "NSW"
  },
  {
    name: "Sheila's - North Sydney Tavern",
    city: "North Sydney",
    state: "NSW"
  },
  {
    name: "Shellharbour Inn",
    city: "Shellharbour",
    state: "NSW"
  },
  {
    name: "Shellharbour Workers Club",
    city: "Shellharbour",
    state: "NSW"
  },
  {
    name: "Shenton Park Hotel",
    city: "Shenton Park",
    state: "WA"
  },
  {
    name: "Shepparton Civic Centre",
    city: "Shepparton",
    state: "VIC"
  },
  {
    name: "Shepparton High School",
    city: "Shepparton",
    state: "VIC"
  },
  {
    name: "Shepparton Showgrounds",
    city: "Shepparton",
    state: "VIC"
  },
  {
    name: "Shepparton Town Hall",
    city: "Shepparton",
    state: "VIC"
  },
  {
    name: "Sheraton On The Park Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sheraton Wentworth Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Shoalhaven Entertainment Centre",
    city: "Nowra",
    state: "NSW"
  },
  {
    name: "Shoalhaven Heads Hotel",
    city: "Shoalhaven Heads",
    state: "NSW"
  },
  {
    name: "Shoalhaven Skateway",
    city: "Bomaderry",
    state: "NSW"
  },
  {
    name: "Shoppingtown Hotel",
    city: "Doncaster",
    state: "VIC"
  },
  {
    name: "Shortland Rock Cabaret",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Sidney Myer Music Bowl",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Silver Dollar Disco",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Silverdome",
    city: "Prospect",
    state: "TAS"
  },
  {
    name: "Silver Jubilee Pavilion - Claremont Showground",
    city: "Claremont",
    state: "WA"
  },
  {
    name: "Silvers Nightclub",
    city: "Toorak",
    state: "VIC"
  },
  {
    name: "Silverwater Speedboat Club",
    city: "Silverwater",
    state: "NSW"
  },
  {
    name: "Silverwater Women's Correctional Centre",
    city: "Silverwater",
    state: "NSW"
  },
  {
    name: "Simone's Nightclub",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Singleton Town Hall",
    city: "Singleton",
    state: "NSW"
  },
  {
    name: "Sirromet Wines",
    city: "Mt Cotton",
    state: "QLD"
  },
  {
    name: "Sir William Wallace Hotel",
    city: "Birchgrove",
    state: "NSW"
  },
  {
    name: "Skinner Reserve",
    city: "Braybrook",
    state: "VIC"
  },
  {
    name: "Ski Rider Hotel",
    city: "Wilsons Valley",
    state: "NSW"
  },
  {
    name: "Skyline Amphitheatre",
    city: "Bathurst",
    state: "NSW"
  },
  {
    name: "Sky Room",
    city: "Miranda",
    state: "NSW"
  },
  {
    name: "Skyways",
    city: "Katoomba",
    state: "NSW"
  },
  {
    name: "Smithfield RSL Club",
    city: "Smithfield",
    state: "NSW"
  },
  {
    name: "Snoopy’s Hollow",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Sonic Stairway Adult Disco",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Soul 33 Nite Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sound Shell",
    city: "South Townsville",
    state: "QLD"
  },
  {
    name: "Sounds (TV Show)",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "South Augusta Football Club",
    city: "Port Augusta",
    state: "SA"
  },
  {
    name: "Southern Aurora Hotel",
    city: "Dandenong",
    state: "VIC"
  },
  {
    name: "Southern Cross Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Southern Districts Tennis Club",
    city: "Leumeah",
    state: "NSW"
  },
  {
    name: "Southern Queensland Institute Of Tafe",
    city: "East Toowoomba",
    state: "QLD"
  },
  {
    name: "South Gambier Football Club",
    city: "Mount Gambier",
    state: "SA"
  },
  {
    name: "South Grafton Ex-Services Club",
    city: "South Grafton",
    state: "NSW"
  },
  {
    name: "South Grafton Leagues Club",
    city: "South Grafton",
    state: "NSW"
  },
  {
    name: "South Hurstville RSL",
    city: "South Hurstville",
    state: "NSW"
  },
  {
    name: "South Melbourne Cricket Ground",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "South Melbourne Town Hall",
    city: "South Melbourne",
    state: "VIC"
  },
  {
    name: "Southside Six",
    city: "Moorabbin",
    state: "VIC"
  },
  {
    name: "Southside Six Hotel",
    city: "Moorabbin",
    state: "VIC"
  },
  {
    name: "South Sydney Junior Rugby League Club Ltd",
    city: "Kingsford",
    state: "NSW"
  },
  {
    name: "South Sydney Leagues Club",
    city: "Redfern",
    state: "NSW"
  },
  {
    name: "Sovereign Hotel",
    city: "Frankston",
    state: "VIC"
  },
  {
    name: "Sportsworks Basketball Stadium",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Springfields",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Springvale Town Hall",
    city: "Springvale",
    state: "VIC"
  },
  {
    name: "Springwood Civic Centre",
    city: "Springwood",
    state: "NSW"
  },
  {
    name: "Springwood RSL Club",
    city: "Springwood",
    state: "NSW"
  },
  {
    name: "Spruance Hall",
    city: "East Elizabeth",
    state: "SA"
  },
  {
    name: "Spurs",
    city: "Canberra",
    state: "ACT"
  },
  {
    name: "Stadium Australia",
    city: "Sydney Olympic Park",
    state: "NSW"
  },
  {
    name: "Stagecoach Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Stage Door",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Stage Door",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Stagedoor Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "St Albans Hotel",
    city: "St Albans",
    state: "VIC"
  },
  {
    name: "St Albans Sacred Heart Church Hall",
    city: "St Albans",
    state: "VIC"
  },
  {
    name: "St Albans Secondary College",
    city: "St Albans",
    state: "VIC"
  },
  {
    name: "Stallions",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Stallions",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "St. Andrew's College",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "Stanwell Park Community Hall",
    city: "Stanwell Park",
    state: "NSW"
  },
  {
    name: "Star City",
    city: "Pyrmont",
    state: "NSW"
  },
  {
    name: "Stardust Hotel aka Sweethearts",
    city: "Cabramatta",
    state: "NSW"
  },
  {
    name: "Stargazer Drive Inn",
    city: "Albury",
    state: "NSW"
  },
  {
    name: "Start Of American Tour",
    city: "America",
    state: "USA"
  },
  {
    name: "Start Of European Tour",
    city: "Europe",
    state: "EU"
  },
  {
    name: "Start Of German Tour",
    city: "Germany",
    state: "EU"
  },
  {
    name: "Start Of Japanese Tour",
    city: "Japan",
    state: "Japan"
  },
  {
    name: "Start Of New Zealand Tour",
    city: "New Zealand",
    state: "NZ"
  },
  {
    name: "Statesman Hotel",
    city: "Curtin",
    state: "ACT"
  },
  {
    name: "State Sports Centre",
    city: "Homebush",
    state: "NSW"
  },
  {
    name: "State Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Station Hotel",
    city: "Prahran",
    state: "VIC"
  },
  {
    name: "St Augustine's College",
    city: "Brookvale",
    state: "NSW"
  },
  {
    name: "St Bede's College",
    city: "Mentone",
    state: "VIC"
  },
  {
    name: "St. Clair Youth Centre",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Steps Nightclub",
    city: "Cremorne",
    state: "NSW"
  },
  {
    name: "St. Francis Xavier's Hall",
    city: "Box Hill",
    state: "VIC"
  },
  {
    name: "St George Budapest Soccer Club",
    city: "Mortdale",
    state: "NSW"
  },
  {
    name: "St George Hotel",
    city: "Belmore",
    state: "NSW"
  },
  {
    name: "St George Leagues Club",
    city: "Kogarah",
    state: "NSW"
  },
  {
    name: "St George Motor Boat Club",
    city: "Sans Souci",
    state: "NSW"
  },
  {
    name: "St George Sailing Club",
    city: "Sans Souci",
    state: "NSW"
  },
  {
    name: "St George's Basin Country Club",
    city: "Sanctuary Point",
    state: "NSW"
  },
  {
    name: "St George Tavern",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "St Helen`s Park Community Hall",
    city: "St Helens Park",
    state: "NSW"
  },
  {
    name: "St Ives Girls School",
    city: "Pennant Hills",
    state: "NSW"
  },
  {
    name: "St James Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "St John's College",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "St. John’s Hall",
    city: "Salisbury",
    state: "SA"
  },
  {
    name: "St Judes Hall",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "St Kilda Town Hall",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "St Leonards College",
    city: "Brighton East",
    state: "VIC"
  },
  {
    name: "St Leonards Hotel",
    city: "Glenelg",
    state: "SA"
  },
  {
    name: "St Leonards Tavern",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "St Marys Band Club",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "St Marys Church Hall",
    city: "Waverley",
    state: "NSW"
  },
  {
    name: "St Mary's Hall",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "St Marys Hotel",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "St Mary's Leagues Club",
    city: "St Mary's",
    state: "NSW"
  },
  {
    name: "St Marys RSL & Ex-Servicemen's Club",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "St Marys Rugby League Club",
    city: "St Marys",
    state: "NSW"
  },
  {
    name: "St Michael's College",
    city: "Henley Beach",
    state: "SA"
  },
  {
    name: "Stockade Hotel",
    city: "Lalor Park",
    state: "NSW"
  },
  {
    name: "Stoned Crow",
    city: "North Fremantle",
    state: "WA"
  },
  {
    name: "Storey Hall",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Storey Park Hall",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "St Patricks Tavern",
    city: "Seven Hills",
    state: "NSW"
  },
  {
    name: "St. Paul's College",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "St Peter's Boys College",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "St Peter's Girls School",
    city: "Stonyfell",
    state: "SA"
  },
  {
    name: "St. Peter's Hall",
    city: "Bentleigh",
    state: "VIC"
  },
  {
    name: "Stranded Niteclub",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Strata Motor Inn",
    city: "Cremorne",
    state: "NSW"
  },
  {
    name: "Strathdale Hall",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Strathpine Hotel",
    city: "Strathpine",
    state: "QLD"
  },
  {
    name: "Strawberry Hills Hotel",
    city: "Strawberry Hills",
    state: "NSW"
  },
  {
    name: "St. Theresa's Hall",
    city: "Essendon",
    state: "VIC"
  },
  {
    name: "Student Prince Hotel",
    city: "Camperdown",
    state: "NSW"
  },
  {
    name: "Studio One (TV Show)",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Studz",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sturt CAE",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Sturt Lacross Club",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "St Vincent de Paul Parish Church Hall",
    city: "Strathmore",
    state: "VIC"
  },
  {
    name: "Subiaco Hotel",
    city: "Subiaco",
    state: "WA"
  },
  {
    name: "Subiaco Oval",
    city: "Subiaco",
    state: "WA"
  },
  {
    name: "Sub-Terrain",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Sucrogen Townsville 400",
    city: "Townsville",
    state: "QLD"
  },
  {
    name: "Sugarland Hotel",
    city: "Bundaberg",
    state: "QLD"
  },
  {
    name: "Summer Fest",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Summerhill Hotel",
    city: "Resevoir",
    state: "VIC"
  },
  {
    name: "Sunbury Pop Festival",
    city: "Sunbury",
    state: "VIC"
  },
  {
    name: "Sunday (TV Show)",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "Sundeck Hotel",
    city: "Perisher Valley",
    state: "NSW"
  },
  {
    name: "Sundowner Hotel",
    city: "Punchbowl",
    state: "NSW"
  },
  {
    name: "Sundowner Hotel",
    city: "Whyalla",
    state: "SA"
  },
  {
    name: "Sundowner Hotel",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Sundowner Hotel",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Sunrise (TV Show)",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sunshine Heights Hotel",
    city: "Sunshine Heights",
    state: "VIC"
  },
  {
    name: "Sunshine Town Hall",
    city: "Sunshine",
    state: "VIC"
  },
  {
    name: "Super Flying Fun Show (TV Show)",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "Surfair International Hotel Motel",
    city: "Mudjimba",
    state: "QLD"
  },
  {
    name: "Surfers Paradise International Raceway",
    city: "Gold Coast",
    state: "QLD"
  },
  {
    name: "Surf Riders Ball",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Surveyor General Inn",
    city: "Berrima",
    state: "NSW"
  },
  {
    name: "Sussex Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sussex Inlet RSL Club",
    city: "Sussex Inlet",
    state: "NSW"
  },
  {
    name: "Sutherland Community Hall",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Sutherland Entertainment Centre",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Sutherland Shire Soccer Club",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Sutherland Trade Union Club",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Sutherland United Services Club / Club On East",
    city: "Sutherland",
    state: "NSW"
  },
  {
    name: "Swagman Restaurant",
    city: "Ferntree Gully",
    state: "VIC"
  },
  {
    name: "Swanbourne Hotel",
    city: "Swanbourne",
    state: "WA"
  },
  {
    name: "Swan Hill High School",
    city: "Swan Hill",
    state: "VIC"
  },
  {
    name: "Swansea Workers Club",
    city: "Swansea",
    state: "NSW"
  },
  {
    name: "Sweet Fanny Adams",
    city: "Collaroy",
    state: "NSW"
  },
  {
    name: "Sweethearts - Hotel Finsbury",
    city: "Woodville North",
    state: "SA"
  },
  {
    name: "Swinburne Institute Of Technology",
    city: "Hawthorn",
    state: "VIC"
  },
  {
    name: "Swinger Disco",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Swizzles",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Sydenham Hotel",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Sydney Convention & Exhibition Centre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney Cove Tavern",
    city: "Circular Quay",
    state: "NSW"
  },
  {
    name: "Sydney Cricket Ground",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Sydney Entertainment Centre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney Harbour",
    city: "Dawes Point",
    state: "NSW"
  },
  {
    name: "Sydney Institute Of Technology",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney Masonic Centre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney Motor Show",
    city: "Darling Harbour",
    state: "NSW"
  },
  {
    name: "Sydney Opera House",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney Royal Easter Show",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Sydney Showground",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Sydney Sports Ground",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "Sydney Stadium",
    city: "Rushcutters Bay",
    state: "NSW"
  },
  {
    name: "Sydney Super Dome",
    city: "Sydney Olympic Park",
    state: "NSW"
  },
  {
    name: "Sydney Town Hall",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sydney University",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Sylvania Community Centre",
    city: "Sylvania",
    state: "NSW"
  },
  {
    name: "Sylvania Community Hall",
    city: "Sylvania",
    state: "NSW"
  },
  {
    name: "Sylvania High School",
    city: "Sylvania",
    state: "NSW"
  },
  {
    name: "Sylvania Hotel",
    city: "Sylvania",
    state: "NSW"
  },
  {
    name: "Tall Timbers Hotel",
    city: "Ourimbah",
    state: "NSW"
  },
  {
    name: "Tamburlaine",
    city: "Pokolbin",
    state: "NSW"
  },
  {
    name: "Tamworth Festival",
    city: "Tamworth",
    state: "NSW"
  },
  {
    name: "Tamworth Regional Entertainment Centre",
    city: "Hillvue",
    state: "NSW"
  },
  {
    name: "Tamworth Town Hall",
    city: "Tamworth",
    state: "NSW"
  },
  {
    name: "Tamworth Workers Club",
    city: "Tamworth",
    state: "NSW"
  },
  {
    name: "Tanelorn Music Festival",
    city: "Stroud",
    state: "NSW"
  },
  {
    name: "Tankerville Arms Hotel",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "Taree RSL",
    city: "Taree",
    state: "NSW"
  },
  {
    name: "Taren Point Bowling Club",
    city: "Taren Point",
    state: "NSW"
  },
  {
    name: "Taren Point Youth Centre",
    city: "Taren Point",
    state: "NSW"
  },
  {
    name: "Tarmac Hotel",
    city: "Laverton",
    state: "VIC"
  },
  {
    name: "Taronga Zoo",
    city: "Mosman",
    state: "NSW"
  },
  {
    name: "Tasmanian College Of Advanced Education",
    city: "Mount Nelson",
    state: "TAS"
  },
  {
    name: "Tathra Hotel",
    city: "Tathra",
    state: "NSW"
  },
  {
    name: "Tathra Town Hall",
    city: "Tathra",
    state: "NSW"
  },
  {
    name: "Tattersalls Hotel",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "TC's Sports Bar (Penrith Panthers)",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "Tea Gardens Hotel",
    city: "Bondi Junction",
    state: "NSW"
  },
  {
    name: "Tea Tree Gully Hotel",
    city: "Tea Tree Gully",
    state: "SA"
  },
  {
    name: "Teazer",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Teen Scene",
    city: "Port Noarlunga",
    state: "SA"
  },
  {
    name: "Temptations Nightclub",
    city: "Mount Druitt",
    state: "NSW"
  },
  {
    name: "Tempus Two",
    city: "Pokolbin",
    state: "NSW"
  },
  {
    name: "Terrey Hills Community Centre",
    city: "Terrey Hills",
    state: "NSW"
  },
  {
    name: "Terrigal Theatre",
    city: "Terrigal",
    state: "NSW"
  },
  {
    name: "Tewantin Hotel",
    city: "Tewantin",
    state: "QLD"
  },
  {
    name: "T & G Building",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "That's Life",
    city: "Windsor",
    state: "VIC"
  },
  {
    name: "The Arena",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "The Arlberg",
    city: "Mt Buller",
    state: "VIC"
  },
  {
    name: "The Astor Theatre",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "Theatre Royal",
    city: "Mackay",
    state: "QLD"
  },
  {
    name: "Theatre Royal Hotel",
    city: "Broken Hill",
    state: "NSW"
  },
  {
    name: "The Bald Face Stag Hotel",
    city: "Leichhardt",
    state: "NSW"
  },
  {
    name: "Thebarton Oval",
    city: "Torrensville",
    state: "SA"
  },
  {
    name: "Thebarton Theatre",
    city: "Torrensville",
    state: "SA"
  },
  {
    name: "Thebarton Town Hall",
    city: "Torrensville",
    state: "SA"
  },
  {
    name: "The Basement",
    city: "Circular Quay",
    state: "NSW"
  },
  {
    name: "The Beach Club",
    city: "Collaroy",
    state: "NSW"
  },
  {
    name: "The Beaches (Beaches Hotel)",
    city: "Thirroul",
    state: "NSW"
  },
  {
    name: "The Biting Eye Discotheque",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Blue Note Disco",
    city: "Brookvale",
    state: "NSW"
  },
  {
    name: "The Bridge Hotel",
    city: "Rozelle",
    state: "NSW"
  },
  {
    name: "The Burdekin Theatre",
    city: "Ayre",
    state: "QLD"
  },
  {
    name: "The Canecutter Tavern",
    city: "Innisfail",
    state: "QLD"
  },
  {
    name: "The Castle",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "The Club",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "The Continental Hotel",
    city: "Cowes",
    state: "VIC"
  },
  {
    name: "The Crest Hotel",
    city: "Sylvania",
    state: "NSW"
  },
  {
    name: "The Domain",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Don Lane Show (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Entrance District Sporting And Community Centre",
    city: "The Entrance",
    state: "NSW"
  },
  {
    name: "The Ernie Sigley Show (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Factory Theatre",
    city: "Marrickville",
    state: "NSW"
  },
  {
    name: "The Fairlight Festival",
    city: "Fairlight",
    state: "NSW"
  },
  {
    name: "The Flying Saucer Club",
    city: "Moorabbin",
    state: "VIC"
  },
  {
    name: "The Footy Show (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Generator",
    city: "Perth",
    state: "WA"
  },
  {
    name: "The Gippsland Institute Of Advanced Education",
    city: "Yallourn",
    state: "VIC"
  },
  {
    name: "The Gov",
    city: "Hindmarsh",
    state: "SA"
  },
  {
    name: "The Graham Kennedy Show (TV Show)",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "The Granee",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Green Room",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Haymarket",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Hideaway Bar",
    city: "Enmore",
    state: "NSW"
  },
  {
    name: "The Hi-Fi Bar",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Hills Inn",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Irish Club",
    city: "Mt Isa",
    state: "QLD"
  },
  {
    name: "The Ivy",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Jam Club",
    city: "Morwell",
    state: "VIC"
  },
  {
    name: "The Juke Of Earl",
    city: "Earlwood",
    state: "NSW"
  },
  {
    name: "The Jungle Room",
    city: "Penrith",
    state: "NSW"
  },
  {
    name: "The Juniors",
    city: "Maroubra",
    state: "NSW"
  },
  {
    name: "The Last Resort",
    city: "Darlinghurst",
    state: "NSW"
  },
  {
    name: "The Lubritorium - Nite Club",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Man Hotel",
    city: "Falls Creek",
    state: "VIC"
  },
  {
    name: "The Manzil Room",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "The Menzies",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Mike Walsh Show (TV Show)",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "The Moncrieff Theatre",
    city: "Bundaberg",
    state: "QLD"
  },
  {
    name: "The Nepean Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Norman Gunston Show (TV Show)",
    city: "Gore Hill",
    state: "NSW"
  },
  {
    name: "The Overflow",
    city: "Perth",
    state: "WA"
  },
  {
    name: "The Palace",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "The Patch",
    city: "Coolangatta",
    state: "QLD"
  },
  {
    name: "The Paul Hogan Show (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "The Pickled Parrot",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Piggery",
    city: "Byron Bay",
    state: "NSW"
  },
  {
    name: "The Place",
    city: "Hervey Bay",
    state: "QLD"
  },
  {
    name: "The Playroom",
    city: "Tallebudgera",
    state: "QLD"
  },
  {
    name: "Therapy",
    city: "Nth Melbourne",
    state: "VIC"
  },
  {
    name: "The Red Parrot Nightclub",
    city: "Northbridge",
    state: "WA"
  },
  {
    name: "The Rev",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "The Roundhouse Nightclub",
    city: "Revesby",
    state: "NSW"
  },
  {
    name: "The Roxy",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "The Saloon",
    city: "Launceston",
    state: "TAS"
  },
  {
    name: "The Scene",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "The Settlement",
    city: "Cippendale",
    state: "NSW"
  },
  {
    name: "The Spanish Club",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Stag Horn",
    city: "?",
    state: "NSW"
  },
  {
    name: "The Station Resort",
    city: "Jindabyne",
    state: "NSW"
  },
  {
    name: "The Thredbo International Express",
    city: "Thredbo",
    state: "NSW"
  },
  {
    name: "The Tivoli",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "The Tivoli",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "The Tote Hotel",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "The Triffid",
    city: "Newstead",
    state: "QLD"
  },
  {
    name: "The Ugly Dave Gray Show (TV Show)",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "The Vanguard",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "The Vault",
    city: "Port Kembla",
    state: "NSW"
  },
  {
    name: "The Venue",
    city: "Dee Why",
    state: "NSW"
  },
  {
    name: "The Venue",
    city: "St Kilda",
    state: "VIC"
  },
  {
    name: "The Venue",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "The Village Hotel",
    city: "Mount Druitt",
    state: "NSW"
  },
  {
    name: "The Wills Pavilion - Sydney Showground",
    city: "Moore Park",
    state: "NSW"
  },
  {
    name: "The Women's College",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "The Wool Exchange",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "The Zoo",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "Thirroul Hotel",
    city: "Thirroul",
    state: "NSW"
  },
  {
    name: "Thirroul Leagues Club",
    city: "Thirroul",
    state: "NSW"
  },
  {
    name: "This Day Tonight (TV Show)",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Thomastown High School",
    city: "Thomastown",
    state: "VIC"
  },
  {
    name: "Thomastown Roller Disco",
    city: "Thomastown",
    state: "VIC"
  },
  {
    name: "Thompson's Hotel",
    city: "Murwillumbah",
    state: "QLD"
  },
  {
    name: "Thompsons Hotel",
    city: "Mooloolaba",
    state: "QLD"
  },
  {
    name: "Thredbo Alpine Hotel",
    city: "Thredbo",
    state: "NSW"
  },
  {
    name: "Three Swallows Hotel",
    city: "Bankstown",
    state: "NSW"
  },
  {
    name: "Thumpin' Tum",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Tiffany's",
    city: "Blacktown",
    state: "NSW"
  },
  {
    name: "Tiger Lil's Wine Bar",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Tiger Lounge aka The Tiger Room",
    city: "Richmond",
    state: "VIC"
  },
  {
    name: "Time & Tide Hotel",
    city: "Dee Why",
    state: "NSW"
  },
  {
    name: "Tivoli Hotel",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Tivoli Theatre",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Tokyo Song Festival (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Tollgate Hotel",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Tom Mann Theatre",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Tommy Bent's Tavern",
    city: "Brighton",
    state: "VIC"
  },
  {
    name: "Tom Tom Club",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Tonsley Park Hotel",
    city: "Tonsley Park",
    state: "SA"
  },
  {
    name: "Toongabbie Sports Club",
    city: "Toongabbie",
    state: "NSW"
  },
  {
    name: "Toorak College",
    city: "Mt Eliza",
    state: "VIC"
  },
  {
    name: "Toora Town Hall",
    city: "Toora",
    state: "VIC"
  },
  {
    name: "Toowoomba Institute",
    city: "Toowoomba",
    state: "QLD"
  },
  {
    name: "Top Hat Night Club",
    city: "Northbridge",
    state: "WA"
  },
  {
    name: "Torquay Hotel",
    city: "Torquay",
    state: "VIC"
  },
  {
    name: "Torquay Surf Club",
    city: "Torquay",
    state: "VIC"
  },
  {
    name: "Torwood Lounge",
    city: "Sans Souci",
    state: "NSW"
  },
  {
    name: "Tottenham Hotel",
    city: "Tottenham",
    state: "VIC"
  },
  {
    name: "Toukley RSL",
    city: "Toukley",
    state: "NSW"
  },
  {
    name: "Tourmaline Hotel",
    city: "Vineyard",
    state: "NSW"
  },
  {
    name: "Tower Hotel",
    city: "Kalgoorlie",
    state: "WA"
  },
  {
    name: "Tower Hotel",
    city: "Collingwood",
    state: "VIC"
  },
  {
    name: "Townsville Civic Centre",
    city: "Townsville",
    state: "QLD"
  },
  {
    name: "Townsville Entertainment And Convention Centre",
    city: "Townsville",
    state: "QLD"
  },
  {
    name: "Townsville Showgrounds",
    city: "West End",
    state: "QLD"
  },
  {
    name: "Tracks, Epping Hotel",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "Trade Union Club",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Traeger Park",
    city: "The Gap",
    state: "NT"
  },
  {
    name: "Tragear Community Hall",
    city: "Tragear",
    state: "NSW"
  },
  {
    name: "Trains Bistro",
    city: "Rockdale",
    state: "NSW"
  },
  {
    name: "Trak Cinema",
    city: "Toorak",
    state: "VIC"
  },
  {
    name: "Tralee Speedway",
    city: "Jerrabomberra",
    state: "NSW"
  },
  {
    name: "Transformers",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Transformers Nightclub",
    city: "Moorabbin",
    state: "VIC"
  },
  {
    name: "Traralgon Hotel",
    city: "Traralgon",
    state: "VIC"
  },
  {
    name: "Traralgon Town Hall",
    city: "Traralgon",
    state: "VIC"
  },
  {
    name: "Triglav",
    city: "St Johns Park",
    state: "NSW"
  },
  {
    name: "Trinity Bay High School",
    city: "Manunda",
    state: "QLD"
  },
  {
    name: "Trocadero",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Tropicana Hotel",
    city: "Wlberforce",
    state: "NSW"
  },
  {
    name: "Tuggeranong Valley Rugby Union Club",
    city: "Wanniassa",
    state: "ACT"
  },
  {
    name: "Tumbalong Park",
    city: "Darling Harbour",
    state: "NSW"
  },
  {
    name: "Tuncurry Beach Bowling Club",
    city: "Tuncurry",
    state: "NSW"
  },
  {
    name: "Tuross Head Country Club (Club Tuross)",
    city: "Tuross Head",
    state: "NSW"
  },
  {
    name: "TV Week King Of Pop (TV Show)",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Twin Restaurant",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Twin Towns Services Club",
    city: "Tweed Heads",
    state: "NSW"
  },
  {
    name: "Two Moon Junction",
    city: "Macarthur",
    state: "NSW"
  },
  {
    name: "Ulladulla Civic Centre",
    city: "Ulladulla",
    state: "NSW"
  },
  {
    name: "Ulladulla Surf Club",
    city: "Ulladulla",
    state: "NSW"
  },
  {
    name: "Uncle Bucks Saloon",
    city: "Mount Druitt",
    state: "NSW"
  },
  {
    name: "Union Hotel",
    city: "Gosford",
    state: "NSW"
  },
  {
    name: "Unity Hall Hotel",
    city: "Balmain",
    state: "NSW"
  },
  {
    name: "Universal Theatre",
    city: "Fitzroy",
    state: "VIC"
  },
  {
    name: "University Of New England",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "University of NSW",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "University Of NSW Roundhouse",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "University Of Queensland",
    city: "St Lucia",
    state: "QLD"
  },
  {
    name: "Unley High School",
    city: "Wayville",
    state: "SA"
  },
  {
    name: "Upwey Club",
    city: "Upwey",
    state: "VIC"
  },
  {
    name: "Urrbrae Agricultural High School",
    city: "Netherby",
    state: "SA"
  },
  {
    name: "Users Club",
    city: "Carlton",
    state: "VIC"
  },
  {
    name: "Valley Inn",
    city: "Perisher Valley",
    state: "NSW"
  },
  {
    name: "Valley Inn",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Vauxhall Inn",
    city: "Granville",
    state: "NSW"
  },
  {
    name: "Venetian Room, Hotel Francis",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Veneto Club",
    city: "Bulleen",
    state: "VIC"
  },
  {
    name: "Venturer's Scout Hall - The Epping Scout Group",
    city: "Epping",
    state: "NSW"
  },
  {
    name: "VFL Park",
    city: "Mulgrave",
    state: "VIC"
  },
  {
    name: "Vicar Of Wakefield Hotel",
    city: "Dural",
    state: "NSW"
  },
  {
    name: "Vic On The Park Hotel",
    city: "Marrickville",
    state: "NSW"
  },
  {
    name: "Victor Harbour Hotel",
    city: "Victor Harbour",
    state: "SA"
  },
  {
    name: "Victor Harbour Theatre",
    city: "Victor Harbour",
    state: "SA"
  },
  {
    name: "Victoria Barracks",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Victoria Hall",
    city: "Colac",
    state: "VIC"
  },
  {
    name: "Victoria Hotel",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Victoria Park",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Victoria Park Racecourse",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Viking Tavern",
    city: "Milperra",
    state: "NSW"
  },
  {
    name: "Village Green Hotel",
    city: "Mulgrave",
    state: "VIC"
  },
  {
    name: "Villawood Hotel",
    city: "Villawood",
    state: "NSW"
  },
  {
    name: "Vinegar Hill Woolshed",
    city: "Rouse Hill",
    state: "NSW"
  },
  {
    name: "Vista Theatre",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Vulcan Hotel",
    city: "Ultimo",
    state: "NSW"
  },
  {
    name: "WACA Ground (Western Australian Cricket Association)",
    city: "East Perth",
    state: "WA"
  },
  {
    name: "Wagga Australian Rules Club",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Wagga Leagues Club",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Wagga Wagga Agricultural Institute",
    city: "Wagga Wagga",
    state: "NSW"
  },
  {
    name: "Wagon Wheel Hotel",
    city: "St Mary's",
    state: "NSW"
  },
  {
    name: "Waldorf Nightclub",
    city: "Perth",
    state: "WA"
  },
  {
    name: "Wallacia Golf Club",
    city: "Wallacia",
    state: "NSW"
  },
  {
    name: "Wall Street",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Waltzing Matilda Hotel",
    city: "Springvale",
    state: "VIC"
  },
  {
    name: "Wanda Beach",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Wanda Surf Life Saving Club",
    city: "Cronulla",
    state: "NSW"
  },
  {
    name: "Wangaratta City Hall",
    city: "Wangaratta",
    state: "VIC"
  },
  {
    name: "War and Peace",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "Waratah Central Hotel",
    city: "Surry Hills",
    state: "NSW"
  },
  {
    name: "Warehouse",
    city: "Alexandria",
    state: "NSW"
  },
  {
    name: "Warehouse Music",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Warilla Bowls & Recreation Club",
    city: "Barrack Heights",
    state: "NSW"
  },
  {
    name: "War Pigs",
    city: "Kurri Kurri",
    state: "NSW"
  },
  {
    name: "Warrane College",
    city: "Kensington",
    state: "NSW"
  },
  {
    name: "Warrawong Community Hall",
    city: "Warrawong",
    state: "NSW"
  },
  {
    name: "Warrnambool Racecourse",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Warrnambool Speedway",
    city: "Allansford",
    state: "VIC"
  },
  {
    name: "Warrnambool Surf Life Saving Club",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Warrnambool Town Hall",
    city: "Warrnambool",
    state: "VIC"
  },
  {
    name: "Warwick Community Theatre",
    city: "Warwick",
    state: "QLD"
  },
  {
    name: "Warwick Farm Racecourse",
    city: "Warwick Farm",
    state: "NSW"
  },
  {
    name: "Warwick Hotel",
    city: "Warwick",
    state: "WA"
  },
  {
    name: "Warwick Hotel",
    city: "Newcastle",
    state: "NSW"
  },
  {
    name: "Waterloo Corner",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "Waterloo Cup Hotel",
    city: "Moonee Ponds",
    state: "VIC"
  },
  {
    name: "WatersEdge",
    city: "Walsh Bay",
    state: "NSW"
  },
  {
    name: "Wauchope RSL Club",
    city: "Wauchope",
    state: "NSW"
  },
  {
    name: "Waurn Ponds Hotel",
    city: "Geelong",
    state: "VIC"
  },
  {
    name: "Waverley High School",
    city: "Waverley",
    state: "NSW"
  },
  {
    name: "Waves - Towradgi Beach Hotel",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wayback Football Club",
    city: "Port Lincoln",
    state: "SA"
  },
  {
    name: "Welshpool Hotel",
    city: "Welshpool",
    state: "VIC"
  },
  {
    name: "Wendouree Municipal Centre",
    city: "Ballarat",
    state: "VIC"
  },
  {
    name: "Wentworth Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "Wentworth Park",
    city: "Glebe",
    state: "NSW"
  },
  {
    name: "Wentworthville Hotel",
    city: "Wentworthville",
    state: "NSW"
  },
  {
    name: "Wentworthville Leagues Club",
    city: "Wentworthville",
    state: "NSW"
  },
  {
    name: "Werrikimbi Music Festival",
    city: "Wauchope",
    state: "NSW"
  },
  {
    name: "West Croydon YMCA",
    city: "West Croydon",
    state: "SA"
  },
  {
    name: "Westend Nightclub",
    city: "Sunshine",
    state: "VIC"
  },
  {
    name: "Western Australian Institute Of Technology",
    city: "Bentley",
    state: "WA"
  },
  {
    name: "Western Australia University",
    city: "Crawley",
    state: "WA"
  },
  {
    name: "Westernport Hotel",
    city: "San Remo",
    state: "VIC"
  },
  {
    name: "Western Suburbs Leagues",
    city: "Ashfield",
    state: "NSW"
  },
  {
    name: "Western Suburbs Leagues Club",
    city: "Leumeah",
    state: "NSW"
  },
  {
    name: "Western Suburbs Leagues Club",
    city: "New Lambton",
    state: "NSW"
  },
  {
    name: "Western Suburbs Leagues Club",
    city: "Unanderra",
    state: "NSW"
  },
  {
    name: "Westfield Plaza",
    city: "Hornsby",
    state: "NSW"
  },
  {
    name: "West Gippsland Arts Centre",
    city: "Warragul",
    state: "VIC"
  },
  {
    name: "Westin Hotel",
    city: "Sydney",
    state: "NSW"
  },
  {
    name: "West Lakes Shore Oval",
    city: "West Lakes",
    state: "SA"
  },
  {
    name: "Westlands Hotel",
    city: "Whyalla",
    state: "SA"
  },
  {
    name: "Westower Tavern",
    city: "Parramatta",
    state: "NSW"
  },
  {
    name: "West Port Park",
    city: "Port Macquarie",
    state: "NSW"
  },
  {
    name: "Westside Hotel",
    city: "Laverton",
    state: "VIC"
  },
  {
    name: "West Tamworth League Club",
    city: "Tamworth West",
    state: "NSW"
  },
  {
    name: "Whiskey A Go Go",
    city: "Kings Cross",
    state: "NSW"
  },
  {
    name: "Whispers",
    city: "Fortitude Valley",
    state: "QLD"
  },
  {
    name: "White Bay Hotel",
    city: "Rozelle",
    state: "NSW"
  },
  {
    name: "Whitefriars College",
    city: "Donvale",
    state: "VIC"
  },
  {
    name: "Whitehall Hotel",
    city: "Rushcutters Bay",
    state: "NSW"
  },
  {
    name: "White Hills Technical School",
    city: "Bendigo",
    state: "VIC"
  },
  {
    name: "Whitehorse Hotel",
    city: "Mitcham",
    state: "VIC"
  },
  {
    name: "White Horse Hotel",
    city: "Hurstville",
    state: "NSW"
  },
  {
    name: "White Horse Hotel",
    city: "Newtown",
    state: "NSW"
  },
  {
    name: "White House Inn",
    city: "Kingsford",
    state: "NSW"
  },
  {
    name: "White Sands",
    city: "Scarborough",
    state: "WA"
  },
  {
    name: "Whyalla Cinema",
    city: "Whyalla",
    state: "SA"
  },
  {
    name: "Whyalla Town Hall",
    city: "Whyalla",
    state: "SA"
  },
  {
    name: "Wickham Park Hotel",
    city: "Islington",
    state: "NSW"
  },
  {
    name: "Wiley Park Hotel",
    city: "Wiley Park",
    state: "NSW"
  },
  {
    name: "Willoughby Civic Centre",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "Willoughby Legion Ex-Services Club Ltd",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "Willoughby Town Hall",
    city: "Willoughby",
    state: "NSW"
  },
  {
    name: "Willunga Town Hall",
    city: "Willunga",
    state: "SA"
  },
  {
    name: "Windsor Castle Hotel",
    city: "Paddington",
    state: "NSW"
  },
  {
    name: "Windsor Hotel",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Windsor Leagues Club",
    city: "Windsor South",
    state: "NSW"
  },
  {
    name: "Windsor Picture Theatre",
    city: "Windsor",
    state: "NSW"
  },
  {
    name: "Windsor Regis Receptions",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "WIN Entertainment Centre",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Winsound",
    city: "Windsor",
    state: "SA"
  },
  {
    name: "Wintersun Hotel",
    city: "Bluff Point",
    state: "WA"
  },
  {
    name: "Wirreanda High School",
    city: "Morphett Vale",
    state: "SA"
  },
  {
    name: "Wollongong Hotel",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong Leagues Club",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong Minor",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong Showground",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong Teachers College",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong Town Hall",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wollongong University",
    city: "Wollongong",
    state: "NSW"
  },
  {
    name: "Wonderland",
    city: "Corrimal",
    state: "NSW"
  },
  {
    name: "Wongawilli Community Hall",
    city: "Wongawilli",
    state: "NSW"
  },
  {
    name: "Wonthaggi Hotel",
    city: "Wonthaggi",
    state: "VIC"
  },
  {
    name: "Woodridge Plaza",
    city: "Woodridge",
    state: "QLD"
  },
  {
    name: "Woodville High School",
    city: "Sinclair",
    state: "SA"
  },
  {
    name: "Woodville Town Hall",
    city: "Woodville",
    state: "SA"
  },
  {
    name: "Woodward Park",
    city: "Liverpool",
    state: "NSW"
  },
  {
    name: "Woolloomooloo Bay Hotel",
    city: "Woolloomooloo",
    state: "NSW"
  },
  {
    name: "Woolooware Golf Club",
    city: "Woolooware",
    state: "NSW"
  },
  {
    name: "Wool Shed",
    city: "Armidale",
    state: "NSW"
  },
  {
    name: "Woonoona Bulli RSL",
    city: "Woonoona",
    state: "NSW"
  },
  {
    name: "Workshop Disco",
    city: "Adelaide",
    state: "SA"
  },
  {
    name: "World Expo 88",
    city: "Brisbane",
    state: "QLD"
  },
  {
    name: "Woronora River RSL",
    city: "Woronora",
    state: "NSW"
  },
  {
    name: "Worrigee House Reception Centre",
    city: "Worrigee",
    state: "NSW"
  },
  {
    name: "Woy Woy Leagues Club",
    city: "Woy Woy",
    state: "NSW"
  },
  {
    name: "Wrest Point Hotel Casino",
    city: "Sandy Bay",
    state: "TAS"
  },
  {
    name: "Wyong Leagues Club",
    city: "Wyong",
    state: "NSW"
  },
  {
    name: "Wyong Memorial Hall",
    city: "Wyong",
    state: "NSW"
  },
  {
    name: "Yagoona Hotel",
    city: "Yagoona",
    state: "NSW"
  },
  {
    name: "Yallah Woolshed",
    city: "Yallah",
    state: "NSW"
  },
  {
    name: "Yankalilla Community Hall",
    city: "Yankalilla",
    state: "SA"
  },
  {
    name: "Yarra Bank",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Yarra Valley College",
    city: "Ringwood",
    state: "VIC"
  },
  {
    name: "Yarrawonga Showgrounds",
    city: "Yarrawonga",
    state: "VIC"
  },
  {
    name: "Yoogali Club",
    city: "Griffith",
    state: "NSW"
  },
  {
    name: "York On Lillydale",
    city: "Melbourne",
    state: "VIC"
  },
  {
    name: "Young Ex-Services Club",
    city: "Young",
    state: "NSW"
  },
  {
    name: "Young S&C Club",
    city: "Young",
    state: "NSW"
  },
  {
    name: "Young Town Hall",
    city: "Young",
    state: "NSW"
  },
  {
    name: "Yugal Soccer Club",
    city: "Haymarket",
    state: "NSW"
  },
  {
    name: "Zuzu's",
    city: "Melbourne",
    state: "VIC"
  }
];