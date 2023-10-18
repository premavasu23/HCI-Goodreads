const BookList = [
    {
        title: "Percy Jackson and the Lightning Theif",
        author: "Rick Riordan",
        cover: require('../images/pjo_1.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Percy Jackson and the Sea of Monsters",
        author: "Rick Riordan",
        cover: require('../images/pjo_2.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },    
    {
        title: "Percy Jackson and the Titans Curse",
        author: "Rick Riordan",
        cover: require('../images/pjo_3.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: true, 
        isTBR: false,
        isAlreadyRead: false,
        isRecommended: true
    },    
    {
        title: "Percy Jackson and the Battle of the Labrynth",
        author: "Rick Riordan",
        cover: require('../images/pjo_4.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: true,
        isAlreadyRead: false,
        isRecommended: true
    },    
    {
        title: "Percy Jackson and the Last Olympian",
        author: "Rick Riordan",
        cover: require('../images/pjo_5.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: true,
        isAlreadyRead: false,
        isRecommended: true
    },    
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        cover: require('../images/hunger_games.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },    
    {
        title: "Catching Fire",
        author: "Suzanne Collins",
        cover: require('../images/catching_fire.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: true, 
        isTBR: false,
        isAlreadyRead: false,
        isRecommended: true
    },    
    {
        title: "MockingJay",
        author: "Suzanne Collins",
        cover: require('../images/mockingjay.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: true,
        isAlreadyRead: false,
        isRecommended: true
    },
    {
        title: "All About Love",
        author: "bell hooks",
        cover: require('../images/all_about_love.png'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Children of Blood and Bone",
        author: "Tomi Adeyemi",
        cover: require('../images/children_of_blood_and_bone.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Children of Virtue and Vengence ",
        author: "Tomi Adeyemi",
        cover: require('../images/children_of_v_v.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Get a life Chloe Brown",
        author: "Talia Hibbert",
        cover: require('../images/chloe_brown.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Take a Hint Dani Brown",
        author: "Talia Hibbert",
        cover: require('../images/dani_brown.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Act Your Age Eve Brown",
        author: "Talia Hibbert",
        cover: require('../images/eve_brown.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Circe",
        author: "Madeline Miller",
        cover: require('../images/circe.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        cover: require('../images/fourth_wing.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austin",
        cover: require('../images/pride_and_prejudice.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Sense and Sensibility",
        author: "Jane Austin",
        cover: require('../images/sense_sensibility.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Six of Crows",
        author: "Leigh Bardugo",
        cover: require('../images/six_of_crows.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "Crooked Kingdom",
        author: "Leigh Bardugo",
        cover: require('../images/croocked_kingdom.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    {
        title: "The No Show",
        author: "Beth O'Leary",
        cover: require('../images/the_no_show.jpg'),
        generalRating: 0,
        personalRating: 0,
        isCurrentlyReading: false, 
        isTBR: false,
        isAlreadyRead: true,
        isRecommended: true
    },
    
  ];
  
  module.exports = BookList;