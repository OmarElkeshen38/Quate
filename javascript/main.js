var quatesBox = [ 
    {
        quate: "“Be yourself; everyone else is already taken.”",
        quateAuthor: "-- Oscar Wilde",
    },
    {
        quate: "“So many books, so little time.”",
        quateAuthor: "-- Frank Zappa",
    },
    {
        quate: "“You only live once, but if you do it right, once is enough.”",
        quateAuthor: "-- Mae West",
    },
    {
        quate: "“Be the change that you wish to see in the world.”",
        quateAuthor: "-- Mahatma Gandhi",
    },
    {
        quate: "“If you tell the truth, you don't have to remember anything.”",
        quateAuthor: "-- Mark Twain",
    },
    {
        quate: "“A friend is someone who knows all about you and still loves you.”",
        quateAuthor: "-- Elbert Hubbard",
    },
    {
        quate: "“Men mock the gods until they need them, Kaz.”",
        quateAuthor: "-- Leigh Bardugo",
    },
    {
        quate: "“Ortus would never rhyme melancholy with my mortal folly again.”",
        quateAuthor: "-- Tamsyn Muir",
    },
    {
        quate: "“A room without books is like a body without a soul.”",
        quateAuthor: "-- Marcus Tullius Cicero"
    }
]

function printQuate() {
    var x = Math.floor(Math.random()*quatesBox.length)

        document.getElementById("prg").innerHTML=quatesBox[x].quate;
        document.getElementById("prgag").innerHTML=quatesBox[x].quateAuthor;
}