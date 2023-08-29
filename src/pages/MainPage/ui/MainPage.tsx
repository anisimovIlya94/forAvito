import cls from "./MainPage.module.scss"
import { MainContent } from 'widgets/MainContent/ui/MainContent';

// const data = {
//     id: 540,
//     title: "Overwatch 2",
//     thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
//     short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
//     game_url: "https://www.freetogame.com/open/overwatch-2",
//     genre: "Shooter",
//     platform: "PC (Windows)",
//     publisher: "Activision Blizzard",
//     developer: "Blizzard Entertainment",
//     release_date: "2022-10-04",
//     freetogame_profile_url: "https://www.freetogame.com/overwatch-2"
//     }

// const array = [
//     {
//     id: 540,
//     title: "Overwatch 2",
//     thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
//     short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
//     game_url: "https://www.freetogame.com/open/overwatch-2",
//     genre: "Shooter",
//     platform: "PC (Windows)",
//     publisher: "Activision Blizzard",
//     developer: "Blizzard Entertainment",
//     release_date: "2022-10-04",
//     freetogame_profile_url: "https://www.freetogame.com/overwatch-2"
//     },
//     {
//     id: 521,
//     title: "Diablo Immortal",
//     thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
//     short_description: "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
//     game_url: "https://www.freetogame.com/open/diablo-immortal",
//     genre: "MMOARPG",
//     platform: "PC (Windows)",
//     publisher: "Blizzard Entertainment",
//     developer: "Blizzard Entertainment",
//     release_date: "2022-06-02",
//     freetogame_profile_url: "https://www.freetogame.com/diablo-immortal"
//     },
//     {
//     id: 517,
//     title: "Lost Ark",
//     thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
//     short_description: "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
//     game_url: "https://www.freetogame.com/open/lost-ark",
//     genre: "ARPG",
//     platform: "PC (Windows)",
//     publisher: "Amazon Games",
//     developer: "Smilegate RPG",
//     release_date: "2022-02-11",
//     freetogame_profile_url: "https://www.freetogame.com/lost-ark"
//     },
//     {
//     id: 516,
//     title: "PUBG: BATTLEGROUNDS",
//     thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
//     short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
//     game_url: "https://www.freetogame.com/open/pubg",
//     genre: "Shooter",
//     platform: "PC (Windows)",
//     publisher: "KRAFTON, Inc.",
//     developer: "KRAFTON, Inc.",
//     release_date: "2022-01-12",
//     freetogame_profile_url: "https://www.freetogame.com/pubg"
//     },
//     {
//     id: 508,
//     title: "Enlisted",
//     thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
//     short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
//     game_url: "https://www.freetogame.com/open/enlisted",
//     genre: "Shooter",
//     platform: "PC (Windows)",
//     publisher: "Gaijin Entertainment",
//     developer: "Darkflow Software",
//     release_date: "2021-04-08",
//     freetogame_profile_url: "https://www.freetogame.com/enlisted"
//     },
//     {
//         id: 345,
//         title: "Forge of Empires",
//         thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
//         short_description: "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
//         game_url: "https://www.freetogame.com/open/forge-of-empires",
//         genre: "Strategy",
//         platform: "Web Browser",
//         publisher: "InnoGames",
//         developer: "InnoGames",
//         release_date: "2012-04-17",
//         freetogame_profile_url: "https://www.freetogame.com/forge-of-empires"
//         },
//         {
//         id: 427,
//         title: "Drakensang Online",
//         thumbnail: "https://www.freetogame.com/g/427/thumbnail.jpg",
//         short_description: "A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",
//         game_url: "https://www.freetogame.com/open/drakensang-online",
//         genre: "MMORPG",
//         platform: "Web Browser",
//         publisher: "Bigpoint",
//         developer: "Bigpoint",
//         release_date: "2011-08-08",
//         freetogame_profile_url: "https://www.freetogame.com/drakensang-online"
//         },
//         {
//         id: 525,
//         title: "MultiVersus",
//         thumbnail: "https://www.freetogame.com/g/525/thumbnail.jpg",
//         short_description: "The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.",
//         game_url: "https://www.freetogame.com/open/multiversus",
//         genre: "Fighting",
//         platform: "PC (Windows)",
//         publisher: "Warner Bros. Games",
//         developer: "Player First Games",
//         release_date: "2022-07-19",
//         freetogame_profile_url: "https://www.freetogame.com/multiversus"
//         },
//         {
//         id: 475,
//         title: "Genshin Impact",
//         thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
//         short_description: "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
//         game_url: "https://www.freetogame.com/open/genshin-impact",
//         genre: "Action RPG",
//         platform: "PC (Windows)",
//         publisher: "miHoYo",
//         developer: "miHoYo",
//         release_date: "2020-09-28",
//         freetogame_profile_url: "https://www.freetogame.com/genshin-impact"
//         },
//         {
//         id: 523,
//         title: "Fall Guys",
//         thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
//         short_description: "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
//         game_url: "https://www.freetogame.com/open/fall-guys",
//         genre: "Battle Royale",
//         platform: "PC (Windows)",
//         publisher: "Mediatonic",
//         developer: "Mediatonic",
//         release_date: "2020-08-04",
//         freetogame_profile_url: "https://www.freetogame.com/fall-guys"
//         },
//         {
//         id: 340,
//         title: "Game Of Thrones Winter Is Coming",
//         thumbnail: "https://www.freetogame.com/g/340/thumbnail.jpg",
//         short_description: "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
//         game_url: "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
//         genre: "Strategy",
//         platform: "Web Browser",
//         publisher: "GTArcade",
//         developer: "YOOZOO Games ",
//         release_date: "2019-11-14",
//         freetogame_profile_url: "https://www.freetogame.com/game-of-thrones-winter-is-coming"
//         },
//         {
//         id: 347,
//         title: "Elvenar",
//         thumbnail: "https://www.freetogame.com/g/347/thumbnail.jpg",
//         short_description: "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
//         game_url: "https://www.freetogame.com/open/elvenar",
//         genre: "Strategy",
//         platform: "Web Browser",
//         publisher: "InnoGames",
//         developer: "InnoGames",
//         release_date: "2015-04-08",
//         freetogame_profile_url: "https://www.freetogame.com/elvenar"
//         },
//         {
//         id: 11,
//         title: "Neverwinter",
//         thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
//         short_description: "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
//         game_url: "https://www.freetogame.com/open/neverwinter",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Perfect World Entertainment",
//         developer: "Cryptic Studios",
//         release_date: "2013-12-06",
//         freetogame_profile_url: "https://www.freetogame.com/neverwinter"
//     },
//     {
//         id: 380,
//         title: "Dark Orbit Reloaded",
//         thumbnail: "https://www.freetogame.com/g/380/thumbnail.jpg",
//         short_description: "A browser-based 3D space-combat MMO with a massive playerbase!",
//         game_url: "https://www.freetogame.com/open/darkorbit",
//         genre: "Shooter",
//         platform: "Web Browser",
//         publisher: "Bigpoint",
//         developer: "Bigpoint",
//         release_date: "2006-12-11",
//         freetogame_profile_url: "https://www.freetogame.com/darkorbit"
//         },
//         {
//         id: 515,
//         title: "Halo Infinite",
//         thumbnail: "https://www.freetogame.com/g/515/thumbnail.jpg",
//         short_description: "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
//         game_url: "https://www.freetogame.com/open/halo-infinite",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Xbox Game Studios",
//         developer: "343 Industries",
//         release_date: "2021-11-15",
//         freetogame_profile_url: "https://www.freetogame.com/halo-infinite"
//         },
//         {
//         id: 455,
//         title: "Eternal Fury",
//         thumbnail: "https://www.freetogame.com/g/455/thumbnail.jpg",
//         short_description: "A free-to-play ARPG from R2 Games!",
//         game_url: "https://www.freetogame.com/open/eternal-fury",
//         genre: "MMORPG",
//         platform: "Web Browser",
//         publisher: "R2 Games",
//         developer: "R2 Games",
//         release_date: "2019-05-21",
//         freetogame_profile_url: "https://www.freetogame.com/eternal-fury"
//         },
//         {
//         id: 522,
//         title: "Flyff Universe",
//         thumbnail: "https://www.freetogame.com/g/522/thumbnail.jpg",
//         short_description: "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
//         game_url: "https://www.freetogame.com/open/flyff-universe",
//         genre: "MMORPG",
//         platform: "Web Browser",
//         publisher: "Gala Lab",
//         developer: "Gala Lab",
//         release_date: "2022-06-14",
//         freetogame_profile_url: "https://www.freetogame.com/flyff-universe"
//         },
//         {
//         id: 511,
//         title: "Phantasy Star Online 2 New Genesis",
//         thumbnail: "https://www.freetogame.com/g/511/thumbnail.jpg",
//         short_description: "The legacy of Phantasy Star Online 2 continues a thousand years later!",
//         game_url: "https://www.freetogame.com/open/pso2-new-genesis",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Sega",
//         developer: "Sega",
//         release_date: "2021-06-09",
//         freetogame_profile_url: "https://www.freetogame.com/pso2-new-genesis"
//         },
//         {
//         id: 5,
//         title: "Crossout",
//         thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
//         short_description: "A post-apocalyptic MMO vehicle combat game! ",
//         game_url: "https://www.freetogame.com/open/crossout",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Targem",
//         developer: "Gaijin",
//         release_date: "2017-05-30",
//         freetogame_profile_url: "https://www.freetogame.com/crossout"
//         },
//         {
//         id: 9,
//         title: "World of Warships",
//         thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
//         short_description: "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
//         game_url: "https://www.freetogame.com/open/world-of-warships",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Wargaming",
//         developer: "Wargaming",
//         release_date: "2015-07-02",
//         freetogame_profile_url: "https://www.freetogame.com/world-of-warships"
//         },
//         {
//         id: 12,
//         title: "War Thunder",
//         thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
//         short_description: "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
//         game_url: "https://www.freetogame.com/open/war-thunder",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Gaijin Entertainment",
//         developer: "Gaijin Entertainment",
//         release_date: "2013-08-15",
//         freetogame_profile_url: "https://www.freetogame.com/war-thunder"
//         },
//         {
//         id: 2,
//         title: "World of Tanks",
//         thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
//         short_description: "If you like blowing up tanks, with a quick and intense game style you will love this game!",
//         game_url: "https://www.freetogame.com/open/world-of-tanks",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Wargaming",
//         developer: "Wargaming",
//         release_date: "2011-04-12",
//         freetogame_profile_url: "https://www.freetogame.com/world-of-tanks"
//         },
//         {
//         id: 458,
//         title: "League of Angels - Heaven's Fury",
//         thumbnail: "https://www.freetogame.com/g/458/thumbnail.jpg",
//         short_description: "A free-to-play, browser-based fantasy online action RPG based loosely on Western mythology!",
//         game_url: "https://www.freetogame.com/open/league-of-angels-heavens-fury",
//         genre: "MMORPG",
//         platform: "Web Browser",
//         publisher: "Gtarcade",
//         developer: "Yoozoo Games",
//         release_date: "2020-01-09",
//         freetogame_profile_url: "https://www.freetogame.com/league-of-angels-heavens-fury"
//         },
//         {
//         id: 529,
//         title: "Tower of Fantasy",
//         thumbnail: "https://www.freetogame.com/g/529/thumbnail.jpg",
//         short_description: "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
//         game_url: "https://www.freetogame.com/open/tower-of-fantasy",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Level Infinite",
//         developer: "Hotta Studio",
//         release_date: "2022-08-10",
//         freetogame_profile_url: "https://www.freetogame.com/tower-of-fantasy"
//         },
//         {
//         id: 528,
//         title: "Noah’s Heart",
//         thumbnail: "https://www.freetogame.com/g/528/thumbnail.jpg",
//         short_description: "Noah’s Heart is an open-world MMORPG game with a focus on exploration and socialization.",
//         game_url: "https://www.freetogame.com/open/noahs-heart",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Archosaur Games",
//         developer: "Archosaur Games",
//         release_date: "2022-07-28",
//         freetogame_profile_url: "https://www.freetogame.com/noahs-heart"
//         },
//         {
//         id: 466,
//         title: "Valorant",
//         thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
//         short_description: "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
//         game_url: "https://www.freetogame.com/open/valorant",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Riot Games",
//         developer: "Riot Games",
//         release_date: "2020-06-02",
//         freetogame_profile_url: "https://www.freetogame.com/valorant"
//         },
//         {
//         id: 467,
//         title: "Phantasy Star Online 2",
//         thumbnail: "https://www.freetogame.com/g/467/thumbnail.jpg",
//         short_description: "Welcome to ARKS, and elite task force searching dangerous planets for the corrupted Falspawn in Phantasy Star 2 Online, Sega’s popular, free-to-play sci-fi MMORPG.",
//         game_url: "https://www.freetogame.com/open/pso2",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "SEGA",
//         developer: "SEGA",
//         release_date: "2020-05-27",
//         freetogame_profile_url: "https://www.freetogame.com/pso2"
//         },
//         {
//         id: 452,
//         title: "Call Of Duty: Warzone",
//         thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
//         short_description: "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
//         game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Activision",
//         developer: "Infinity Ward",
//         release_date: "2020-03-10",
//         freetogame_profile_url: "https://www.freetogame.com/call-of-duty-warzone"
//         },
//         {
//         id: 21,
//         title: "Destiny 2",
//         thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
//         short_description: "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
//         game_url: "https://www.freetogame.com/open/destiny-2",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Bungie",
//         developer: "Bungie",
//         release_date: "2019-10-01",
//         freetogame_profile_url: "https://www.freetogame.com/destiny-2"
//         },
//         {
//         id: 1,
//         title: "Dauntless",
//         thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
//         short_description: "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
//         game_url: "https://www.freetogame.com/open/dauntless",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Phoenix Labs",
//         developer: "Phoenix Labs, Iron Galaxy",
//         release_date: "2019-05-21",
//         freetogame_profile_url: "https://www.freetogame.com/dauntless"
//         },
//         {
//         id: 23,
//         title: "Apex Legends",
//         thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
//         short_description: "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
//         game_url: "https://www.freetogame.com/open/apex-legends",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Electronic Arts",
//         developer: "Electronic Arts",
//         release_date: "2019-02-04",
//         freetogame_profile_url: "https://www.freetogame.com/apex-legends"
//         },
//         {
//         id: 57,
//         title: "Fortnite",
//         thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
//         short_description: "A free-to-play, standalone mode of Epic Game's Fortnite. ",
//         game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Epic Games",
//         developer: "Epic Games",
//         release_date: "2017-09-26",
//         freetogame_profile_url: "https://www.freetogame.com/fortnite-battle-royale"
//         },
//         {
//         id: 449,
//         title: "Albion Online",
//         thumbnail: "https://www.freetogame.com/g/449/thumbnail.jpg",
//         short_description: "A free-to-play cross-platform sandbox MMO developed and published by Sandbox Interactive GmbH. ",
//         game_url: "https://www.freetogame.com/open/albion-online",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Sandbox Interactive GmbH",
//         developer: "Sandbox Interactive GmbH",
//         release_date: "2017-07-17",
//         freetogame_profile_url: "https://www.freetogame.com/albion-online"
//         },
//         {
//         id: 6,
//         title: "Blade and Soul",
//         thumbnail: "https://www.freetogame.com/g/6/thumbnail.jpg",
//         short_description: "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
//         game_url: "https://www.freetogame.com/open/blade-and-soul",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "NCSoft",
//         developer: "NCSoft",
//         release_date: "2016-01-19",
//         freetogame_profile_url: "https://www.freetogame.com/blade-and-soul"
//         },
//         {
//         id: 212,
//         title: "Brawlhalla",
//         thumbnail: "https://www.freetogame.com/g/212/thumbnail.jpg",
//         short_description: "A free-to-play 2D platform fighter inspired by the Smash Bros.",
//         game_url: "https://www.freetogame.com/open/brawlhalla",
//         genre: "Fighting",
//         platform: "PC (Windows)",
//         publisher: "Blue Mammoth Games",
//         developer: "Blue Mammoth Games",
//         release_date: "2015-11-03",
//         freetogame_profile_url: "https://www.freetogame.com/brawlhalla"
//         },
//         {
//         id: 8,
//         title: "Trove",
//         thumbnail: "https://www.freetogame.com/g/8/thumbnail.jpg",
//         short_description: "A free to play Sandbox massively multiplayer online role-playing game! ",
//         game_url: "https://www.freetogame.com/open/trove",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Trion Worlds",
//         developer: "Trion Worlds",
//         release_date: "2015-07-09",
//         freetogame_profile_url: "https://www.freetogame.com/trove"
//         },
//         {
//         id: 202,
//         title: "Heroes & Generals",
//         thumbnail: "https://www.freetogame.com/g/202/thumbnail.jpg",
//         short_description: "A World War II-based MMOFPS that mixes infantry, armor, and aircraft.",
//         game_url: "https://www.freetogame.com/open/heroes-and-generals",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Reto-Moto",
//         developer: "Reto-Moto",
//         release_date: "2014-07-11",
//         freetogame_profile_url: "https://www.freetogame.com/heroes-and-generals"
//         },
//         {
//         id: 207,
//         title: "Warface",
//         thumbnail: "https://www.freetogame.com/g/207/thumbnail.jpg",
//         short_description: "A free-to-play multiplayer online FPS from Crytek, makers of the Far Cry and Crysis series of games.",
//         game_url: "https://www.freetogame.com/open/warface",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Crytek",
//         developer: "Crytek",
//         release_date: "2014-07-01",
//         freetogame_profile_url: "https://www.freetogame.com/warface"
//         },
//         {
//         id: 217,
//         title: "Smite",
//         thumbnail: "https://www.freetogame.com/g/217/thumbnail.jpg",
//         short_description: "A popular free-to-play 3D MOBA where you take on the role of an ancient god.",
//         game_url: "https://www.freetogame.com/open/smite",
//         genre: "MOBA",
//         platform: "PC (Windows)",
//         publisher: "Hi-Rez Studios",
//         developer: "Hi-Rez Studios",
//         release_date: "2014-03-25",
//         freetogame_profile_url: "https://www.freetogame.com/smite"
//         },
//         {
//         id: 3,
//         title: "Warframe",
//         thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
//         short_description: "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
//         game_url: "https://www.freetogame.com/open/warframe",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Digital Extremes",
//         developer: "Digital Extremes",
//         release_date: "2013-03-25",
//         freetogame_profile_url: "https://www.freetogame.com/warframe"
//         },
//         {
//         id: 243,
//         title: "PlanetSide 2",
//         thumbnail: "https://www.freetogame.com/g/243/thumbnail.jpg",
//         short_description: "A free-to-play open-world FPS that pits three factions against each other in a never-ending war.",
//         game_url: "https://www.freetogame.com/open/planetside-2",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Daybreak Games",
//         developer: "Daybreak Games",
//         release_date: "2012-11-21",
//         freetogame_profile_url: "https://www.freetogame.com/planetside-2"
//         },
//         {
//         id: 13,
//         title: "Guild Wars 2",
//         thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
//         short_description: "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
//         game_url: "https://www.freetogame.com/open/guild-wars-2",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "NCsoft",
//         developer: "ArenaNet",
//         release_date: "2012-08-28",
//         freetogame_profile_url: "https://www.freetogame.com/guild-wars-2"
//         },
//         {
//         id: 350,
//         title: "Goodgame Empire",
//         thumbnail: "https://www.freetogame.com/g/350/thumbnail.jpg",
//         short_description: "A free to play medieval strategy browser game. Build you own castle and create a powerful army! ",
//         game_url: "https://www.freetogame.com/open/goodgame-empire",
//         genre: "Strategy",
//         platform: "Web Browser",
//         publisher: "Goodgame Studios",
//         developer: "Goodgame Studios",
//         release_date: "2011-08-14",
//         freetogame_profile_url: "https://www.freetogame.com/goodgame-empire"
//         },
//         {
//         id: 14,
//         title: "Star Trek Online",
//         thumbnail: "https://www.freetogame.com/g/14/thumbnail.jpg",
//         short_description: "A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.",
//         game_url: "https://www.freetogame.com/open/star-trek-online",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Perfect World Entertainment",
//         developer: " Cryptic Studios",
//         release_date: "2010-02-02",
//         freetogame_profile_url: "https://www.freetogame.com/star-trek-online"
//         },
//         {
//         id: 433,
//         title: "RuneScape",
//         thumbnail: "https://www.freetogame.com/g/433/thumbnail.jpg",
//         short_description: "A popular 3D browser MMORPG boasting a huge player base and 15 years of content.",
//         game_url: "https://www.freetogame.com/open/runescape",
//         genre: "MMORPG",
//         platform: "PC (Windows), Web Browser",
//         publisher: "Jagex",
//         developer: "Jagex",
//         release_date: "2001-01-04",
//         freetogame_profile_url: "https://www.freetogame.com/runescape"
//         },
//         {
//         id: 558,
//         title: "Hawked",
//         thumbnail: "https://www.freetogame.com/g/558/thumbnail.jpg",
//         short_description: "A free-to-play PvPvE treasure hunting shooter.",
//         game_url: "https://www.freetogame.com/open/hawked",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "My.Games",
//         developer: "My.Games",
//         release_date: "2023-08-03",
//         freetogame_profile_url: "https://www.freetogame.com/hawked"
//         },
//         {
//         id: 559,
//         title: "Tales Of Yore",
//         thumbnail: "https://www.freetogame.com/g/559/thumbnail.jpg",
//         short_description: "A 2D MMORPG with lots of RPG tropes.",
//         game_url: "https://www.freetogame.com/open/tales-of-yore",
//         genre: "MMORPG",
//         platform: "PC (Windows), Web Browser",
//         publisher: "Coke And Code",
//         developer: "Coke And Code",
//         release_date: "2023-08-08",
//         freetogame_profile_url: "https://www.freetogame.com/tales-of-yore"
//         },
//         {
//         id: 560,
//         title: "Palia",
//         thumbnail: "https://www.freetogame.com/g/560/thumbnail.jpg",
//         short_description: "A cozy MMO with homebuilding and some adventure.",
//         game_url: "https://www.freetogame.com/open/palia",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "Singularity Six",
//         developer: "Singularity Six",
//         release_date: "2023-08-10",
//         freetogame_profile_url: "https://www.freetogame.com/palia"
//         },
//         {
//         id: 562,
//         title: "Waven",
//         thumbnail: "https://www.freetogame.com/g/562/thumbnail.jpg",
//         short_description: "A free-to-play online tactical RPG from Ankama.",
//         game_url: "https://www.freetogame.com/open/waven",
//         genre: "Strategy",
//         platform: "PC (Windows)",
//         publisher: "Ankama Studio",
//         developer: "Ankama Games",
//         release_date: "2023-08-16",
//         freetogame_profile_url: "https://www.freetogame.com/waven"
//         },
//         {
//         id: 556,
//         title: "Naraka: Bladepoint",
//         thumbnail: "https://www.freetogame.com/g/556/thumbnail.jpg",
//         short_description: "A free-to-play melee focused battle royale.",
//         game_url: "https://www.freetogame.com/open/naraka-bladepoint",
//         genre: "Battle Royale",
//         platform: "PC (Windows)",
//         publisher: "24 Entertainment",
//         developer: "NetEase",
//         release_date: "2023-07-13",
//         freetogame_profile_url: "https://www.freetogame.com/naraka-bladepoint"
//         },
//         {
//         id: 554,
//         title: "Undawn",
//         thumbnail: "https://www.freetogame.com/g/554/thumbnail.jpg",
//         short_description: "A free-to-play open-world survival RPG developed by LightSpeed studios and published by Level Infinite.",
//         game_url: "https://www.freetogame.com/open/undawn",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Level Infinite",
//         developer: "LightSpeed Studios",
//         release_date: "2023-06-15",
//         freetogame_profile_url: "https://www.freetogame.com/undawn"
//         },
//         {
//         id: 555,
//         title: "Temtem Showdown",
//         thumbnail: "https://www.freetogame.com/g/555/thumbnail.jpg",
//         short_description: "A 2v2 competitive multiplayer battle simulator set in the Temtem universe.",
//         game_url: "https://www.freetogame.com/open/temtem-showdown",
//         genre: "Fighting",
//         platform: "PC (Windows)",
//         publisher: "Humble Games",
//         developer: "Crema",
//         release_date: "2023-06-26",
//         freetogame_profile_url: "https://www.freetogame.com/temtem-showdown"
//         },
//         {
//         id: 268,
//         title: "Eden Eternal",
//         thumbnail: "https://www.freetogame.com/g/268/thumbnail.jpg",
//         short_description: "A free to play fantasy MMORPG with cute anime-inspired graphics.",
//         game_url: "https://www.freetogame.com/open/eden-eternal",
//         genre: "MMORPG",
//         platform: "PC (Windows)",
//         publisher: "X-Legend Entertainment",
//         developer: "X-Legend Entertainment",
//         release_date: "2023-05-10",
//         freetogame_profile_url: "https://www.freetogame.com/eden-eternal"
//         },
//         {
//         id: 551,
//         title: "Veiled Experts",
//         thumbnail: "https://www.freetogame.com/g/551/thumbnail.jpg",
//         short_description: "A free-to-play multiplayer shooter game focused on the search and destroy mode of classic shooters.",
//         game_url: "https://www.freetogame.com/open/veiled-experts",
//         genre: "Shooter",
//         platform: "PC (Windows)",
//         publisher: "Nexon Games Co., LTC",
//         developer: "Nexon",
//         release_date: "2023-05-18",
//         freetogame_profile_url: "https://www.freetogame.com/veiled-experts"
//         },
// ]

function MainPage() {
    // const navigate = useNavigate()
    // const handleGoToGame = (id: number) => {
    //     navigate(`/game/${id}`)
    // }
    // const handleChangeSort = (sort: string) => {

    // }
    // const handleChangePlatform = (platform: string) => {

    // }
    // const handleChangeCategory = (category: string) => {

    // }
    return (
        <div className={cls.pageWrapper}>
            
            <div className={cls.row}>
                <h1 className={cls.title}>Top Free Open World Games for PC and Browser In 2023!</h1>
                <MainContent/>
                {/* <MainFilters
                    onChangeSortby={handleChangeSort}
                    onChangePlatform={handleChangePlatform}
                    onChangeCategory={handleChangeCategory}
                    platform='all'
                    sort='relevance'
                    category='all'
                />
        <Row className={cls.rowUp} gutter={[16, 24]}>
            {
                array.map((item) => {
                    return (
                        <div onClick={() => handleGoToGame(item.id)} key={item.id}>
                            <Col className="gutter-row" span={6}>
                                <GameCard data={item} key={item.id} />
                            </Col>
                        </div>
                        
                    )
                })
            }
        </Row> */}
        </div>  
        </div>
          
        
    );
    
}

export default MainPage