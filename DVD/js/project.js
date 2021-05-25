// Name: Taehyung Kim
// Date: Apr 2020
// Purpose: Final Project

// Global..
var storeItems = []; // Item Object
var categories = []; // Category Array
var exchangeRates = []; // For Exchange Rate
var cartItems = []; // Cart array

var movieReviewContent = document.createElement("p"); // For Review Area

function initialize() {

    backGronudImg(); // Random Background Img
    loadExchangeRate(); // Set ExchangeRate
    initializeStoreItem(); // Set Items
    makeCategory(); // Make Category
    showStoreItem(); // Show Items
    updateClock(); // RealTime Clock

}

class storeItem {
    constructor(id, name, price, stock, limitQty, category, shippingCost, reviews, description, image, trailer) {
        this.id = id; // String
        this.name = name; // String
        this.price = price; // Float
        this.stock = stock; // Qty on Hand // Int
        this.limitQty = limitQty; //Max per customer // Int
        this.category = category; // String
        this.shippingCost = shippingCost; //Cost of Shipping // Float
        this.reviews = reviews; // Array
        this.description = description; // String
        this.image = image; // String
        this.trailer = trailer; // String
    }
}

function initializeStoreItem() {
    storeItems.push(new storeItem("D0001", "Failan", 12.2, 20, 2, "Drama", 2, ["The best movie I've ever seen.", "Who's the actress?"], "Failan (Korean: 파이란; RR: Pairan) is a 2001 South Korean film written and directed by Song Hae-sung. The film was adapted from the Japanese novel Love Letter by Jirō Asada. It stars Choi Min-sik and Hong Kong actress Cecilia Cheung.", "img/poster/failan.jpg", "ClD-Tzrk4v4"));
    storeItems.push(new storeItem("D0002", "Late Autumn", 13, 22, 2, "Drama", 2, ["i love this movie, it's feel like autumn sad but beauty.. you should watch.", "This is a sad yet beautiful love story.   I have seen this movie for twice.  Just 3 days, the memory will accompany her whole rest of life.   Isn't it too cruel to Anna?"], "Late Autumn (Korean: 만추; Hanja: 晚秋; RR: Manchu) is a 2010 English-language film directed by Kim Tae-yong. It stars Tang Wei as Anna, a prisoner who is given a 72 hours parole to visit family in Seattle, and who meets and befriends a South Korean man on-the-run (Hyun Bin). A co-production between South Korea, Hong Kong, China and the United States, it is the fourth remake of the now-lost 1966 Lee Man-hee melodrama classic of the same title.", "img/poster/lateautumn.jpg", "Hzz9oZHUmAo"));
    storeItems.push(new storeItem("D0003", "The Handmaiden", 11, 19, 2, "Drama", 2, ["This movie = 11/10", "The master returns to show western audiences what a real movie is."], "The Handmaiden (Korean: 아가씨; RR: Agassi; lit. Lady) is a 2016 South Korean erotic psychological thriller film directed by Park Chan-wook and starring Kim Min-hee, Kim Tae-ri, Ha Jung-woo and Cho Jin-woong. It is inspired by the novel Fingersmith by Welsh writer Sarah Waters, with the setting changed from Victorian era Britain to Korea under Japanese colonial rule. The film was selected to compete for the Palme d'Or at the 2016 Cannes Film Festival. It was released in South Korea on 1 June 2016, to critical acclaim. It grossed over $38 million worldwide. At the 71st British Academy Film Awards, the film won the category of Best Film Not in the English Language.", "img/poster/handmaiden.jpg", "whldChqCsYk"));
    storeItems.push(new storeItem("D0004", "Masquerade", 12.3, 13, 2, "Classic", 2, ["Beautiful movie.", "I would rate this 10/10! One of korea's best movies ever!"], "Masquerade (Korean: 광해: 왕이 된 남자; Hanja: 光海: 王이 된 男子; RR: Gwanghae: Wang-i Doen Namja; lit. Gwanghae: The Man Who Became King) is a 2012 South Korean period drama film starring Lee Byung-hun in dual role as the bizarre King Gwanghae and the humble acrobat Ha-sun, who stands in for the monarch when he faces the threat of being poisoned. With 12.3 million tickets sold, Masquerade is the ninth highest-grossing South Korean film. Also, it swept the 49th Grand Bell Awards, winning in 15 categories, including Best Film, Director, Screenplay and Actor.", "img/poster/Masquerade.jpg", "1TnfM5XWOtI"));
    storeItems.push(new storeItem("D0005", "The Berlin File", 14, 10, 1, "Thriller", 2, ["This is action in a whole new level. After watching this, you wont even like Bourne movies anymore.", "Pretty good movie. The action scenes are amazing. I would recommend it."], "The Berlin File (Korean: 베를린; RR: Bereullin; lit. Berlin) is a 2013 South Korean action thriller film written and directed by Ryoo Seung-wan. Ha Jung-woo stars as a North Korean agent in Berlin who is betrayed and cut loose when a weapons deal is exposed. Together with his wife, a translator at the North Korean embassy in Berlin played by Jun Ji-hyun, they try to escape being purged, with Ryoo Seung-bum and Han Suk-kyu playing North and South Korean operatives on their trail.", "img/poster/Berlin.jpg", "7BtN4SKFjOU"));
    storeItems.push(new storeItem("D0006", "Snowpiercer", 13, 20, 2, "Thriller", 2, ["Yes, I came here after the Oscars.", "Snowpiecer is  a small world.  There are a lot of symbols in this movie."], "Snowpiercer (Korean: 설국열차; Hanja: 雪國列車; RR: Seolgungnyeolcha) is a 2013 science fiction action film based on the French graphic novel Le Transperceneige by Jacques Lob, Benjamin Legrand and Jean-Marc Rochette. The film is directed by Bong Joon-ho and written by Bong and Kelly Masterson. A South Korean-Czech co-production, the film marks Bong's English-language debut; approximately 80% of the film was shot in English.", "img/poster/snowpoercer.jpg", "nX5PwfEMBM0"));
    storeItems.push(new storeItem("D0007", "Parasite", 15, 23, 1, "Dark Comedy", 2, ["This film is a masterpiece. This trailer is also a masterpiece.", "The movie doesn’t need an oscar to get hype. It’s genuinely amazing."], "Parasite (Korean: 기생충; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun and follows the members of a poor family who scheme to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.", "img/poster/Parasite.jpg", "5xH0HfJHsaY"));
    storeItems.push(new storeItem("D0008", "The Age of Shadows", 13, 30, 2, "Thriller", 2, ["This movie is being chosen as South Korea's Oscar entry for Best Foreign Film so you already know this movie is amazing.", "Gong Yoo is just getting better and better...and better!"], "The Age of Shadows (Korean: 밀정; RR: Miljeong; lit. Emissary) is a 2016 South Korean period action thriller film directed by Kim Jee-woon and written by Lee Ji-min and Park Jong-dae. The film stars Song Kang-ho and Gong Yoo. It was selected as the South Korean entry for the Best Foreign Language Film at the 89th Academy Awards, but it was not nominated.", "img/poster/Shadows.jpg", "zoYsQcGV4b4"));
    storeItems.push(new storeItem("D0009", "New world", 12, 43, 3, "Thriller", 1.3, ["i watched this movie at night in my laptop at home....after the credit rolled at the end, i gave this movie a standing ovation.......", "this is a great movie, must watch movie "], "New World (Korean: 신세계; RR: Sinsegye) is a 2013 South Korean crime drama film written and directed by Park Hoon-jung. Starring Choi Min-sik, Hwang Jung-min and Lee Jung-jae, the film is a melodrama revolving around an undercover cop who finds it difficult to play both a cop and a goon. New World is the first entry in a planned trilogy.", "img/poster/Newworld.jpg", "rln9Hx_wPFw"));
    storeItems.push(new storeItem("D0010", "Thirst", 12, 42, 2, "Horror", 1.4, ["A romantic horror film. Tae jun is probably the prettiest vampire ever.", "14k upvotes on reddit, 6k views on youtube. people on reddit just mindlessly upvote and don't even bother watching."], "Thirst (Korean: 박쥐; Bakjwi; literally 'bat') is a 2009 South Korean horror film produced, written and directed by Park Chan-wook. It is loosely based on the novel Thérèse Raquin by Émile Zola. The film tells the story of a Catholic priest—who is in love with his friend's wife—turning into a vampire through a failed medical experiment. Park has stated, 'This film was originally called 'The Bat' to convey a sense of horror. After all, it is about vampires. But it is also more than that. It is about passion and a love triangle. I feel that it is unique because it is not just a thriller, and not merely a horror film, but an illicit love story as well.' The film won the Jury Prize at the 2009 Cannes Film Festival. It is the first mainstream Korean film to feature full-frontal male nudity.", "img/poster/Thirst.jpg", "yutZo3VDI6M"));
    storeItems.push(new storeItem("D0011", "The Admiral", 12.1, 40, 2, "War", 1.8, ["And he didn't even lose a single ship. What a God.", "Watched this from start to finish and I'm the type of person who dont finish movies more than half of the time because I get bored easily.....Great movie in my eyes"], "The Admiral: Roaring Currents (Korean: 명량; Hanja: 鳴梁; RR: Myeongryang), or simply The Admiral, is a 2014 South Korean epic action-war film directed and co-written by Kim Han-min. Based on the historical Battle of Myeongnyang, it stars an ensemble cast led by Choi Min-sik as the Korean naval commander Yi Sun-sin. The film was released theatrically in South Korea on July 30, 2014. The film recorded 10 million admissions only 12 days after its premiere and set a record for achieving such a high number of viewers in the shortest amount of time. The movie also surpassed Avatar’s record of 13 million viewers to become the most-watched and highest-grossing film of all time in South Korea, until it was surpassed by Parasite (2019), with 17.6 million admissions and a worldwide gross of US$138.3 million.", "img/poster/The-Admiral-Roaring-Currents.jpg", "7PBIHkKi0wM"));
    storeItems.push(new storeItem("D0012", "The Man from Nowhere", 13.20, 21, 3, "Action", 2.1, ["Finish watch this movie about 15 mins ago and i gotta said this movie is great reminds me of John Wick meets Taken"], "The Man from Nowhere (Korean: 아저씨; RR: Ajeossi) (English: Mister) is a 2010 South Korean action thriller film starring Won Bin and written and directed by Lee Jeong-beom. It was South Korea's highest grossing film in 2010 and had 6.2 million admissions. The film was released in the United States and Canada on October 1, 2010. The film follows the story of a mysterious and shady man (Won Bin) who embarks on a bloody rampage when the only person who seems to understand him is kidnapped. It also marks the final on-screen appearance of Won Bin since 2010.", "img/poster/The-Man-from-Nowhere.jpg", "FZMa1CjCKuw"));
    storeItems.push(new storeItem("D0013", "The Host", 13.15, 21, 2, "Horror", 2.1, ["Love this Movie!!!", "Just watched this film for the first time in ages. Still phenomenally scary!! Something different and not hyped up is what makes it awesome."], "The Host (Korean: 괴물; RR: Gwoemul; lit. 'Monster') is a 2006 South Korean monster film directed by Bong Joon-ho and starring Song Kang-ho, Byun Hee-bong, Park Hae-il, Bae Doona and Go Ah-sung. The film concerns a monster kidnapping a man's daughter, and his attempts to rescue her. According to the director, his inspiration came from a local article about a deformed fish with an S-shaped spine caught in the Han River. Following the success of the director's work Memories of Murder, The Host was highly anticipated. It was released on a record number of screens in its home country on July 27, 2006. By the end of its run on November 8, 13 million tickets had been sold, making it (at the time) the highest-grossing South Korean film of all time. The film was released on a limited basis in the United States on March 9, 2007, and on DVD, Blu-ray, and HD DVD formats on July 24, 2007. It won several awards including Best Film at the Asian Film Awards and at the Blue Dragon Film Awards.", "img/poster/the-host.jpg", "1HRTy26s4hw"));
    storeItems.push(new storeItem("D0014", "Memoir of a Murderer", 14.1, 42, 1, "Drama", 3.1, ["Korean film industry is slowly dominating the world.", "So I just spent 2 hours watching memories of murder thinking it was this movie, waiting for the characters to appear."], "Memoir of a Murderer (Hangul: 살인자의 기억법; lit: A Murderer's Guide to Memorization) is a 2017 South Korean action thriller film directed by Won Shin-yun. It is based on a bestselling fiction book by author Kim Young-ha. The film stars Sol Kyung-gu and Kim Nam-gil in the lead roles, with Kim Seol-hyun and Oh Dal-su in the supporting roles. Filming began in late 2015. The film released in South Korean theatres on 6 September 2017.", "img/poster/Murderer.jpg", "zqWdrispQuE"));
    storeItems.push(new storeItem("D0015", "I Saw the Devil", 12.8, 41, 2, "Thriller", 2.8, ["Best way to decide to watch a movie is looking at the comments on a trailer on youtube. Looks like u guys liked it so here we go", "Once you watch Korean suspense horror, you can't go back to shitty Hollywood movies"], "I Saw the Devil (Korean: 악마를 보았다; Hanja: 惡魔를 보았다; RR: Akmareul boatda) is a 2010 South Korean action thriller film directed by Kim Jee-woon and written by Park Hoon-jung. Starring Lee Byung-hun and Choi Min-sik, the film follows NIS agent Kim Soo-hyun (Lee), who embarks on a quest of revenge when his fiancée is brutally murdered by the psychopathic serial killer Jang Kyung-chul (Choi). I Saw the Devil made its premiere in the United States at the 2011 Sundance Film Festival and had a limited U.S theatrical release.", "img/poster/devil.jpg", "xwWgp1bqVwE"));
    storeItems.push(new storeItem("D0016", "Oldboy", 31.2, 33, 2, "Thriller", 2.8, ["In a perfect world this movies should have won the Oscar before Parasite", "i don't know why, but he kinda looks like the korean johnny depp"], "Oldboy (Korean: 올드보이; RR: Oldeuboi; MR: Oldŭboi) is a 2003 South Korean neo-noir action thriller film co-written and directed by Park Chan-wook. It is based on the Japanese comic of the same name written by Garon Tsuchiya and illustrated by Nobuaki Minegishi. Oldboy is the second installment of The Vengeance Trilogy, preceded by Sympathy for Mr. Vengeance and followed by Lady Vengeance. The film follows the story of Oh Dae-su, who is imprisoned in a cell which resembles a hotel room for 15 years without knowing the identity of his captor or his captor's motives. When he is finally released, Dae-su finds himself still trapped in a web of conspiracy and violence. His own quest for vengeance becomes tied in with romance when he falls in love with an attractive young sushi chef.The film won the Grand Prix at the 2004 Cannes Film Festival and high praise from the President of the Jury, director Quentin Tarantino. The film has been well received by critics in the United States, with film critic Roger Ebert stating that Oldboy is a 'powerful film not because of what it depicts, but because of the depths of the human heart which it strips bare'. It has been listed among the best films of the 2000s in several publications.", "img/poster/old-boy-movie-poster.jpg", "2HkjrJ6IK5E"));
}

class cartItem {
    constructor(id, name, price, qty, shipping) {
        this.id = id; // String
        this.name = name; // String
        this.price = price; // float
        this.qty = qty; // int
        this.shipping = shipping; // float
    }
}

// Make a Category from Item Object.
function makeCategory() {
    var category = "";
    for (var i = 0; i < storeItems.length; i++) {
        category = storeItems[i].category;
        // Category Duplicate Check
        if (categories.indexOf(category) == -1) {
            categories.push(category);
        }
    }
    // store to Category
    for (var i = 0; i < categories.length; i++) {
        var tempOption = document.createElement("option");
        tempOption.innerText = categories[i];
        selectBox.appendChild(tempOption);

    }
}

// Get Exchange Rete from API..
function loadExchangeRate() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://earthquake.kr:23490/query/CADUSD,CADKRW,CADGBP,CADEUR');
    xhr.send();
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) { // 200: OK => https://httpstatuses.com
            exchangeRates = JSON.parse(this.responseText);
            //"USDKRW" : [Price, Change, ChangePercent, PreviousClose, Open, DayLow, DayHigh]
            //exchangeDate.innerHTML = "(Applied Date/Time : " + changeMonth(new Date(exchangeRates.update)) + " " + new Date(exchangeRates.update).getDate() + " " + new Date(exchangeRates.update).getFullYear() + "/" + new Date(exchangeRates.update).getHours() + ":" + new Date(exchangeRates.update).getMinutes() + ")";
            //console.log(exchangeRates);
        } else {
            console.log("Loading Exchange Rate Error!");
        }
    };
}

function changeMonth(date) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()];
}

function showStoreItem() {

    displayItem.innerHTML = "";
    for (var i = 0; i < storeItems.length; i++) {

        if (selectBox.value == storeItems[i].category || selectBox.value == 'All') {

            // For Mobile...(Movie Name Banner)
            var innnerMobileNameDiv = document.createElement("div");
            innnerMobileNameDiv.setAttribute("class", "inner-mobile-name-div");
            innnerMobileNameDiv.innerHTML = storeItems[i].name;

            // For Mobile...(Movie Detail Banner)
            var innerMobileDetailDiv = document.createElement("div");
            innerMobileDetailDiv.setAttribute("class", "inner-mobile-detail-div");
            var infoId = storeItems[i].id;
            var infoPrice = convertCurrency(storeItems[i].price); // Currency Exchange
            var infoQOH = storeItems[i].stock;
            var infoMAX = storeItems[i].limitQty;
            var infoCategory = storeItems[i].category;
            innerMobileDetailDiv.innerHTML = "<span id='minibanner'>ID</span>" + infoId + "<br>" +
                "<span id='minibanner'>Genre</span>" + infoCategory + "<br>" +
                "<span id='minibanner'>Price</span>" + infoPrice + "<br>" +
                "<span id='minibanner'>Stock/Max</span>" + infoQOH + "/" + infoMAX;

            // Make div
            var posterDiv = document.createElement("div");
            // generate id for poster div
            posterDiv.setAttribute("class", "posterdiv");
            posterDiv.setAttribute("id", storeItems[i].id);
            posterDiv.setAttribute("onmouseover", "mouesOnThePoster(this.id)");
            posterDiv.setAttribute("onmouseout", "mouesOutThePoster(this.id)");
            //posterDiv.setAttribute("onclick", "alert(this.id)");

            // image load(backgroud)...
            posterDiv.setAttribute("style", "background-image: url('" + storeItems[i].image + "');");

            // add to the div element
            displayItem.appendChild(posterDiv);

            // For Mobile...
            posterDiv.appendChild(innnerMobileNameDiv);
            posterDiv.appendChild(innerMobileDetailDiv);

            //Image load... --> Change to Background of Div
        }
    }
    modalPopup(); // Ready Movie Detail Popup
}


// Item Information - For Desktop
function mouesOnThePoster(id) {
    // Upper DIV(Movie Name)
    var posterDiv = document.getElementById(id);
    var innerNameDiv = document.createElement("div");
    innerNameDiv.setAttribute("class", "inner-name-div");

    // For remove
    innerNameDiv.setAttribute("id", "innerName" + id);
    // Get movie name from object
    var movieName = storeItems.filter(function(movie) { return movie.id == id });
    innerNameDiv.innerHTML = movieName[0].name;
    posterDiv.appendChild(innerNameDiv);

    // lower DIV(Movie Information, ID, Price, QOH, MAX, Catergory, shipping cost
    var innerInfoDiv = document.createElement("div");
    innerInfoDiv.setAttribute("class", "inner-info-div");
    // For remove
    innerInfoDiv.setAttribute("id", "innerInfo" + id);
    // Get movie name from object
    var movieName = storeItems.filter(function(movie) { return movie.id == id });
    var infoId = id;
    // Currency Exchange
    var infoPrice = convertCurrency(movieName[0].price);
    var infoQOH = movieName[0].stock;
    var infoMAX = movieName[0].limitQty;
    var infoCategory = movieName[0].category;
    // Cart
    // var cartNumber = document.createElement("input");
    // cartNumber.setAttribute("type", "number");
    // cartNumber.setAttribute("id", "addItemQty" + id);
    innerInfoDiv.innerHTML = "<span id='minibanner'>ID</span>" + infoId + "<br>" +
        "<span id='minibanner'>Genre</span>" + infoCategory + "<br>" +
        "<span id='minibanner'>Price</span>" + infoPrice + "<br>" +
        "<span id='minibanner'>Stock/Max</span>" + infoQOH + "/" + infoMAX;
    posterDiv.appendChild(innerInfoDiv);

}
// When onmouseout, Remove Item Information
function mouesOutThePoster(id) {
    // Upper
    var nameDiv = document.getElementById("innerName" + id);
    // Lower
    var infoDiv = document.getElementById("innerInfo" + id);
    // Cart
    // var infoDivQty = document.getElementById("addItemQty" + id);
    nameDiv.remove();
    infoDiv.remove();
    // infoDivQty.remove();
}

function convertCurrency(price) {
    var excRate;
    if (selectedCurrency.value == "USD") {
        excRate = exchangeRates.CADUSD[0];
    } else if (selectedCurrency.value == "GBP") {
        excRate = exchangeRates.CADGBP[0];
    } else if (selectedCurrency.value == "KRW") {
        excRate = exchangeRates.CADKRW[0];
    } else if (selectedCurrency.value == "EUR") {
        excRate = exchangeRates.CADEUR[0];
    } else if (selectedCurrency.value == "CAD") {
        excRate = 1;
    }
    var convertedPrice = price * excRate;
    convertedPrice = numberWithCommas(convertedPrice);
    return convertedPrice;
}
// Price Comma
function numberWithCommas(x) {
    var Curr = "";
    if (selectedCurrency.value != "CAD") {
        var Curr = "(" + selectedCurrency.value + ")";
    }
    // Use prototype.toLocaleString() for Comma and Sign
    return x.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: selectedCurrency.value }) + Curr;
}

function changeFlag() {
    flagImg.setAttribute("src", "./img/flag/" + selectedCurrency.value + ".png");
    //cartTable.childNodes[1].childNodes[2].remove();
    showCart();
}

function modalPopup() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");
    var trailerWindow = document.getElementById("trailer");

    // Movie Description Div
    var descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "description-div");

    // Movie Information Div(price, cart)
    var inputContainer = document.createElement("div");
    inputContainer.setAttribute("class", "input-container");

    // Movie Information Div(review textarea)
    var inputContainerTextarea = document.createElement("div");
    inputContainerTextarea.setAttribute("class", "input-container-textarea");

    // Movie Information Div(review button)
    var inputContainerReviewButton = document.createElement("div");
    inputContainerReviewButton.setAttribute("class", "input-container-review-button");

    for (var i = 0; i < document.getElementsByClassName("posterdiv").length; i++) {

        // Get the button that opens the modal
        var btn = document.getElementsByClassName("posterdiv")[i];

        //console.log(btn);
        // When the user clicks the button, open the modal
        btn.onclick = function(event) {
            modal.style.display = "block";
            // Get Movie ID by event
            var movieInfo = storeItems.filter(function(movie) { return movie.id == event.srcElement.id });
            //console.log(modalContent.childNodes);
            // Set trailer
            trailerWindow.setAttribute("src", "https://www.youtube.com/embed/" + movieInfo[0].trailer + "?enablejsapi=1&version=3&playerapiid=ytplayer");

            // Movie Name
            var movieName = document.createElement("h1");
            movieName.setAttribute("id", "movie-name");
            movieName.innerHTML = movieInfo[0].name;
            //console.log(modalContent.childNodes[5]);
            modalContent.appendChild(movieName); // 5.0 name
            // console.log(modalContent.childNodes[5].childNodes[0]);

            // Create input-container div
            modalContent.appendChild(descriptionDiv); // 5.1 descriptionDiv

            // Movie Description
            var movieDesc = document.createElement("p");
            movieDesc.setAttribute("id", "movie-desc");

            // Read More Read Less Button
            var description = movieInfo[0].description;

            // Read More
            if (description.length > 100) {
                var descriptionFirst = description.slice(0, 100);
                var descriptionSecond = description.slice(101, description.length);
                descriptionFirst = descriptionFirst + "<span id='dots'>...</span><span id='more'>";
                description = descriptionFirst + descriptionSecond + "</span>&nbsp;<button onclick='readMore()' id='readMoreBtn'>Read more</button>";
            }
            movieDesc.innerHTML = description;

            //console.log(modalContent.childNodes[6]); div.description-div

            modalContent.childNodes[6].appendChild(movieDesc);

            // Create input-container div
            //modalContent.childNodes[5].appendChild(inputContainer); // 5.2 inputContainer

            // Item Price
            var priceDiv = document.createElement("div");
            priceDiv.setAttribute("id", "price-div");
            //console.log(modalContent.childNodes[5]);
            modalContent.appendChild(priceDiv);

            var moviePriceIcon = document.createElement("i");
            moviePriceIcon.setAttribute("class", "fa fa-money icon");
            moviePriceIcon.setAttribute("id", "price-icon");
            modalContent.childNodes[7].appendChild(moviePriceIcon);

            var moviePrice = document.createElement("p");
            moviePrice.setAttribute("id", "price");
            moviePrice.innerHTML = convertCurrency(movieInfo[0].price);
            modalContent.childNodes[7].appendChild(moviePrice);
            // console.log(modalContent.childNodes[5].childNodes[1]);
            // addItemtoCart
            // Cart Icon
            var cartDiv = document.createElement("div");
            cartDiv.setAttribute("id", "cart-qty-div");
            modalContent.appendChild(cartDiv);

            var movieCartIcon = document.createElement("i");
            movieCartIcon.setAttribute("class", "fa fa-cart-arrow-down icon");
            movieCartIcon.setAttribute("id", "cart-icon");
            //console.log(modalContent.childNodes[5].childNodes[2].childNodes[1]); //cart-qty-div
            modalContent.childNodes[8].appendChild(movieCartIcon);
            // Cart Number Input
            // <span class="stepper">
            //   <button>–</button>
            //   <input type="number" id="stepper" value="1" min="0" max="100" step="1" readonly>
            //   <button>+</button>
            // </span>
            var movieCartSpan = document.createElement("span");
            movieCartSpan.setAttribute("class", "stepper");
            modalContent.childNodes[8].appendChild(movieCartSpan);

            // Cart Qty use "+", "-"
            //console.log(modalContent.childNodes[5].childNodes[2].childNodes[2]); // span id stepper
            var movieCartButton = document.createElement("button");
            movieCartButton.innerHTML = "-";
            modalContent.childNodes[8].childNodes[1].appendChild(movieCartButton);
            //console.log(modalContent.childNodes[5].childNodes[2].childNodes[1].childNodes[1]);
            var movieCartNumber = document.createElement("input");
            movieCartNumber.setAttribute("type", "number");
            movieCartNumber.setAttribute("id", "stepper");
            movieCartNumber.setAttribute("value", "1");
            movieCartNumber.setAttribute("min", "1");
            movieCartNumber.setAttribute("max", "10");
            movieCartNumber.setAttribute("step", "1");
            movieCartNumber.readOnly = true;
            modalContent.childNodes[8].childNodes[1].appendChild(movieCartNumber);

            var movieCartButton = document.createElement("button");
            movieCartButton.innerHTML = "+";
            modalContent.childNodes[8].childNodes[1].appendChild(movieCartButton);

            // Cart Submit
            var movieCartSubmit = document.createElement("input");
            movieCartSubmit.setAttribute("type", "submit");
            movieCartSubmit.setAttribute("value", "Submit");
            movieCartSubmit.setAttribute("id", "movie-cart-submit");
            movieCartSubmit.setAttribute("onclick", "addItemtoCart('" + event.srcElement.id + "')");

            modalContent.childNodes[8].appendChild(movieCartSubmit);

            // Review Title
            var movieReviewTitle = document.createElement("h2");
            movieReviewTitle.setAttribute("id", "movie-review-title");
            movieReviewTitle.innerHTML = "Review";
            modalContent.appendChild(movieReviewTitle);

            // Create inputContainerTextarea div
            // modalContent.appendChild(inputContainerTextarea); // 5.3 inputContainerTextarea

            modalContent.appendChild(inputContainerTextarea); // Review TextArea Div

            // Review textarea
            var movieReviewTextArea = document.createElement("textarea");
            movieReviewTextArea.setAttribute("id", "movie-review-textarea");
            movieReviewTextArea.setAttribute("onclick", "removeTextarea()");
            movieReviewTextArea.innerText = "Please enter your Review.."
            modalContent.childNodes[10].appendChild(movieReviewTextArea);
            // console.log(modalContent.childNodes[5].childNodes[3].childNodes[0]);

            // Create input-container div
            //modalContent.childNodes[10].appendChild(inputContainerReviewButton); // 5.4 inputContainerReviewButton Div

            var movieReviewSubmit = document.createElement("input"); // Review Submit Button
            movieReviewSubmit.setAttribute("type", "submit");
            movieReviewSubmit.setAttribute("value", "Submit");
            movieReviewSubmit.setAttribute("id", "movie-review-submit");
            movieReviewSubmit.setAttribute("onclick", "reviewSubmit('" + event.srcElement.id + "')");
            modalContent.childNodes[10].appendChild(movieReviewSubmit);

            var movieReviewErrMsg = document.createElement("p"); // Review Error Message
            movieReviewErrMsg.setAttribute("id", "review-err-msg");
            modalContent.appendChild(movieReviewErrMsg);

            // Show Review
            showReview(event.srcElement.id);
            cartNumberAdjust();

        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        // video stop
        stopVideo();
        // modalContent.childNodes
        // length:13
        // 0:#text {wholeText: "
        // 1:span.close {title: "", lang: "", translate: true, …}
        // 2:#text {wholeText: "
        // 3:div#youtube {align: "", title: "", lang: "", …}
        // 4:#text {wholeText: " --------------------------------------------------------------------- At here Created by Html File..
        // 5:h1#movie-name {align: "", title: "", lang: "", …} <-- Remove --------------------------- Start Dynamically Generated Elements...
        // 6:div.description-div {align: "", title: "", lang: "", …} <-- Remove
        // 7:div#price-div {align: "", title: "", lang: "", …} <-- Remove
        // 8:div#cart-qty-div {align: "", title: "", lang: "", …} <-- Remove
        // 9:h2#movie-review-title {align: "", title: "", lang: "", …} <-- Remove
        // 10:div.input-container-textarea {align: "", title: "", lang: "", …} <-- Remove (have child)
        // 11:p#review-err-msg {align: "", title: "", lang: "", …} <-- Remove
        // 12:p#movie-review-content {align: "", title: "", lang: "", …} <-- Remove (have child)

        //Remove ChildNodes of Popup..
        if (modalContent.childNodes.length != 0) {
            for (var i = modalContent.childNodes.length - 1; i > 4; i--) {
                if (modalContent.childNodes[i].childNodes.length != 0) { // if ChildNode have ChildNode
                    for (var j = 0; j <= modalContent.childNodes[i].childNodes.length; j++) { // Child of Child
                        modalContent.childNodes[i].removeChild(modalContent.childNodes[i].firstChild);
                    }
                }
                modalContent.childNodes[i].remove();
            }
        }
    }

    // When the user clicks anywhere outside of the Popup, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            // video stop
            stopVideo();
            // remove movie information

            if (modalContent.childNodes.length != 0) {
                for (var i = modalContent.childNodes.length - 1; i > 4; i--) {
                    if (modalContent.childNodes[i].childNodes.length != 0) {
                        for (var j = 0; j <= modalContent.childNodes[i].childNodes.length; j++) {
                            modalContent.childNodes[i].removeChild(modalContent.childNodes[i].firstChild);
                        }
                    }
                    modalContent.childNodes[i].remove();
                }
            }

        }

    }

}
//removeTextarea
function removeTextarea() {
    var movieReviewTextArea = document.getElementById("movie-review-textarea");
    if (movieReviewTextArea.value == "Please enter your Review..") {
        movieReviewTextArea.innerHTML = "";
    }
}

// When the user close the Popup, video stop.
function stopVideo() {
    var div = document.getElementById("youtube");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function showReview(id) {
    var movieInfo = storeItems.filter(function(movie) { return movie.id == id });
    var modalContent = document.getElementById("modal-content");

    // Review Content
    movieReviewContent.innerHTML = "";
    for (var i = 0; i < movieInfo[0].reviews.length; i++) {
        // var movieReviewContent = document.createElement("p");
        movieReviewContent.setAttribute("id", "movie-review-content");
        movieReviewContent.innerHTML = movieReviewContent.innerHTML + " - " + movieInfo[0].reviews[i] + "<br>";
        modalContent.appendChild(movieReviewContent);
    }

}

function reviewSubmit(id) {
    var movieInfo = storeItems.filter(function(movie) { return movie.id == id });

    var movieReviewTextArea = document.getElementById("movie-review-textarea");
    var movieReviewErrMsg = document.getElementById("review-err-msg");

    if (movieReviewTextArea.value != null && movieReviewTextArea.value != "" && movieReviewTextArea.value != "Please enter your Review..") {
        movieInfo[0].reviews.unshift(movieReviewTextArea.value);
        movieReviewTextArea.value = "Please enter your Review..";
    } else {

        // Change the Background Color of Textarea
        movieReviewTextArea.setAttribute("style", "background-color: #ed0b0e");
        // Show the Error Message
        movieReviewErrMsg.innerHTML = "Must Enter Review!"
        movieReviewErrMsg.setAttribute("style", "color: #ed0b0e");
        setTimeout(function() {
            movieReviewTextArea.removeAttribute("style");
            movieReviewErrMsg.innerHTML = "";
        }, 1000);
    }
    showReview(id);
}

// Cart Windows
function openForm() {
    document.getElementById("cart-form").style.display = "block";
}

function closeForm() {
    document.getElementById("cart-form").style.display = "none";
}

function addItemtoCart(id) {
    var movieInfo = storeItems.filter(function(movie) { return movie.id == id });
    //var qty = document.getElementById("movie-cart-number").value;
    var qtyarea = document.getElementById("stepper");
    var movieReviewErrMsg = document.getElementById("review-err-msg");

    var stockQty = movieInfo[0].stock;
    var limitQty = movieInfo[0].limitQty;
    var videoName = movieInfo[0].name;
    // Check the same product
    function checkSameProduct() {
        var boo = true;
        for (var i = 0; i < cartItems.length; i++) {
            if (videoName == cartItems[i].name) {
                boo = false;
                return boo;
                break;
            }
        }
    }

    // Validate Check(Zero, Max number, In stock)
    if (qtyarea.value <= 0 || qtyarea.value == null || qtyarea.value == "") {
        qtyarea.setAttribute("style", "background-color: #ed0b0e");
        movieReviewErrMsg.innerHTML = "Qty must be greater than 0";
        movieReviewErrMsg.setAttribute("style", "color: #ed0b0e");
        // change back ground color
        setTimeout(function() {
            qtyarea.removeAttribute("style");
            movieReviewErrMsg.innerHTML = "";
            qtyarea.value = "1";
        }, 1500);
    } else if (checkSameProduct() == false) {
        qtyarea.setAttribute("style", "background-color: #ed0b0e");
        movieReviewErrMsg.innerHTML = "The same product already exists in the cart.";
        movieReviewErrMsg.setAttribute("style", "color: #ed0b0e");
        // change back ground color
        setTimeout(function() {
            qtyarea.removeAttribute("style");
            movieReviewErrMsg.innerHTML = "";
            qtyarea.value = "1";
        }, 1500);
    } else if (qtyarea.value > stockQty) {
        qtyarea.setAttribute("style", "background-color: #ed0b0e");
        movieReviewErrMsg.innerHTML = "Not enough in stock!";
        movieReviewErrMsg.setAttribute("style", "color: #ed0b0e");
        // change back ground color
        setTimeout(function() {
            qtyarea.removeAttribute("style");
            movieReviewErrMsg.innerHTML = "";
            qtyarea.value = "1";
        }, 1500);
    } else if (qtyarea.value > limitQty) {
        qtyarea.setAttribute("style", "background-color: #ed0b0e");
        movieReviewErrMsg.innerHTML = "Maximum " + movieInfo[0].limitQty + " per customer!";
        movieReviewErrMsg.setAttribute("style", "color: #ed0b0e");
        // change back ground color
        setTimeout(function() {
            qtyarea.removeAttribute("style");
            movieReviewErrMsg.innerHTML = "";
            qtyarea.value = "1";
        }, 1500);
    } else {
        //  push to Cart Infomation
        cartItems.push(new cartItem(movieInfo[0].id, movieInfo[0].name, movieInfo[0].price, qtyarea.value, movieInfo[0].shippingCost));

        // Remove from Store Items
        movieInfo[0].stock = movieInfo[0].stock - qtyarea.value;

        qtyarea.value = "";
        movieReviewErrMsg.setAttribute("style", "color: #00cc00");
        movieReviewErrMsg.innerHTML = qtyarea.value + " product(s) are putted in the cart.";
        setTimeout(function() {
            movieReviewErrMsg.innerHTML = "";
            qtyarea.value = "1";
        }, 1500);
    }

    // refresh
    showCart();
    // 'Cart(number)' refresh
}

function deleteCart() {
    //Delete
    var cartTr = document.getElementsByClassName("cart-table-content-tr");
    if (cartTr.length != 0) {
        for (var i = cartTr.length - 1; i >= 0; i--) {
            cartTr[i].remove();
        }
    }
}

// Show the cart
function showCart() {
    var cartTable = document.getElementById("cart-table");

    //add tax & sub total..
    var itemSubtotal = 0;
    var itemShippingCost = 0;
    var subtotal = 0;
    var rateHst = 0.13;
    var estTax = 0;
    var total = 0;

    var totalQty = 0;
    //console.log(cartTable.childNodes[1]);

    deleteCart(); // If the user want Show Popup and Cart at the same time. Using Delete and Re-make Like refresh.

    if (cartItems.length != 0) {

        //add in Table(On the cart page)
        for (var i = 0; i < cartItems.length; i++) {
            var cartTr = document.createElement("tr");
            cartTr.setAttribute("class", "cart-table-content-tr");
            cartTr.innerHTML = "<td>(" + cartItems[i].id + ")" + cartItems[i].name + "<br>" + convertCurrency(cartItems[i].price) + "</td><td>" + cartItems[i].qty + "</td><td>" + convertCurrency(cartItems[i].shipping * cartItems[i].qty) + "</td><td id='adjust'><input type='number' class='cart-adjust' id=cart-adjust-qty-" + cartItems[i].id + " value=" + cartItems[i].qty + "><i class='fa fa-arrow-circle-right icon-tax' onclick='adjustItemtoCart(" + cartItems[i].id + ");'></i></td > ";
            cartTable.appendChild(cartTr); // add tr

            itemSubtotal = itemSubtotal + cartItems[i].price;
            itemShippingCost = itemShippingCost + (cartItems[i].qty * cartItems[i].shipping);
            subtotal = itemSubtotal + itemShippingCost;
            estTax = subtotal * rateHst;
            total = subtotal + estTax;

            totalQty = totalQty + parseInt(cartItems[i].qty);
        }

        // Price Detail

        priceSubTotalItem.innerHTML = "";
        priceSubTotalItem.innerHTML = "Items Subtotal: " + convertCurrency(itemSubtotal);

        priceSubTotalShipping.innerHTML = "";
        priceSubTotalShipping.innerHTML = "Estimated Shipping: " + convertCurrency(itemShippingCost);

        priceSubTotal.innerHTML = "";
        priceSubTotal.innerHTML = "Subtotal: " + convertCurrency(subtotal);

        priceSubTotalTax.innerHTML = "";
        priceSubTotalTax.innerHTML = "Estimated Tax: " + convertCurrency(estTax);

        priceTotal.innerHTML = "";
        priceTotal.innerHTML = "Order Total: " + convertCurrency(total);

        cartHeader.innerHTML = "";
        cartHeader.innerHTML = "Your Cart(" + totalQty + ")";

        cartCheckOut.innerHTML = "";
        cartCheckOut.innerHTML = "Checkout(" + convertCurrency(total) + ")";

        cartButton.innerHTML = "";
        cartButton.innerHTML = "Your Cart(" + totalQty + ")";
    } else if (cartItems.length == 0) {

        //if User delete All items from Cart...

        priceSubTotalItem.innerHTML = "Items Subtotal: " + convertCurrency(0);
        priceSubTotalShipping.innerHTML = "Estimated Shipping: " + convertCurrency(0);
        priceSubTotal.innerHTML = "Subtotal: " + convertCurrency(0);
        priceSubTotalTax.innerHTML = "Estimated Tax: " + convertCurrency(0);
        priceTotal.innerHTML = "Order Total: " + convertCurrency(0);
        priceTotal.innerHTML = "Order Total: " + convertCurrency(0);
        cartCheckOut.innerHTML = "Checkout(" + convertCurrency(0) + ")";
        cartHeader.innerHTML = "Your Cart(0)";
        cartButton.innerHTML = "Your Cart(0)";

        var trHeader = document.getElementById("cart-table");

        var noItemMsgTr = document.createElement("tr");
        noItemMsgTr.setAttribute("class", "cart-table-content-tr");

        trHeader.appendChild(noItemMsgTr); // Create Tr

        var noItemMsgTd = document.createElement("td");
        noItemMsgTd.setAttribute("colspan", "4");
        noItemMsgTd.setAttribute("id", "no-msg");
        noItemMsgTd.innerHTML = "No Items in Cart";
        trHeader.childNodes[2].appendChild(noItemMsgTd);

    }
}

function adjustItemtoCart(id) {
    var idx = id.id;
    // Get Adjusted qty
    var AdjustedQty = document.getElementById("cart-adjust-qty-" + idx);

    // Get stock qty, linit qty
    var movieInfo = storeItems.filter(function(movie) { return movie.id == idx });
    var stockQty = movieInfo[0].stock;
    var limitQty = movieInfo[0].limitQty;

    // Get Cart Qty
    var cartInfo = cartItems.filter(function(cart) { return cart.id == idx });
    var cartQty = cartInfo[0].qty;

    // Get Error Msg Element
    var errMsg = document.getElementById("cart-err-msg");

    // Validate Check(Zero, Max number, In stock)
    if (AdjustedQty.value < 0 || AdjustedQty.value == null || AdjustedQty.value == "") {
        AdjustedQty.setAttribute("style", "background-color: #ed0b0e");
        errMsg.innerHTML = "Qty must be greater than Negative";
        errMsg.setAttribute("style", "color: #252527; background-color: #ed0b0e;");
        // errMsg.setAttribute("style", "background-color: #ed0b0e");
        // change back ground color
        setTimeout(function() {
            AdjustedQty.removeAttribute("style");
            errMsg.innerHTML = "";
            AdjustedQty.value = AdjustedQty.value;
        }, 1500);
    } else if (AdjustedQty.value > stockQty) {
        AdjustedQty.setAttribute("style", "background-color: #ed0b0e")
        errMsg.innerHTML = "Not enough in stock!"
        errMsg.setAttribute("style", "color: #252527; background-color: #ed0b0e;");
        // change back ground color
        setTimeout(function() {
            errMsg.innerHTML = "";
            AdjustedQty.removeAttribute("style");
            AdjustedQty.value = AdjustedQty.value;
        }, 1500);
    } else if (AdjustedQty.value > limitQty) {
        AdjustedQty.setAttribute("style", "background-color: #ed0b0e")
        errMsg.innerHTML = "Maximum " + movieInfo[0].limitQty + " per customer!";
        errMsg.setAttribute("style", "color: #252527; background-color: #ed0b0e;");
        // change back ground color
        setTimeout(function() {
            AdjustedQty.removeAttribute("style");
            errMsg.innerHTML = "";
            AdjustedQty.value = AdjustedQty.value;
        }, 1500);
    } else if (AdjustedQty.value == 0) {
        // Delete specific item in the cart.
        const itemToFind = cartItems.find(function(cart) { return cart.id === idx });
        const idx1 = cartItems.indexOf(itemToFind);
        if (idx1 > -1) {
            cartItems.splice(idx1, 1);
        }
        // add Qty to StoreItem List
        movieInfo[0].stock = movieInfo[0].stock + (cartQty - parseInt(AdjustedQty.value));

        errMsg.setAttribute("style", "background-color: #252527; color: #bbb8b5;");
        errMsg.innerHTML = idx + " product(s) are deleted in the cart.";
        setTimeout(function() {
            errMsg.innerHTML = "";
        }, 1500);

    } else {
        // Adjust Order Qty in the Cart
        const itemToFind = cartItems.find(function(cart) { return cart.id === idx });
        const idx1 = cartItems.indexOf(itemToFind);
        if (idx1 > -1) {
            cartItems[idx1].qty = AdjustedQty.value;
        }
        // add Qty to StoreItem List
        movieInfo[0].stock = movieInfo[0].stock + (cartQty - parseInt(AdjustedQty.value));

        errMsg.setAttribute("style", "background-color: #252527; color: #bbb8b5;");
        errMsg.innerHTML = idx + " product(s) are adjuested in the cart.";
        setTimeout(function() {
            errMsg.innerHTML = "";
        }, 1500);
    }

    // refresh
    showCart();
    // 'Cart(number)' refresh
}

// Read More in Detail Popup
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// Cart Number Action...
function cartNumberAdjust() {
    var inc = document.getElementsByClassName("stepper");
    for (i = 0; i < inc.length; i++) {
        var incI = inc[i].querySelector("input"),
            id = incI.getAttribute("id"),
            min = incI.getAttribute("min"),
            max = incI.getAttribute("max"),
            step = incI.getAttribute("step");
        document
            .getElementById(id)
            .previousElementSibling.setAttribute(
                "onclick",
                "stepperInput('" + id + "', -" + step + ", " + min + ")"
            );
        document
            .getElementById(id)
            .nextElementSibling.setAttribute(
                "onclick",
                "stepperInput('" + id + "', " + step + ", " + max + ")"
            );
    }

}

// "+", "-" Button Action
function stepperInput(id, s, m) {
    var el = document.getElementById(id);
    if (s > 0) {
        if (parseInt(el.value) < m) {
            el.value = parseInt(el.value) + s;
        }
    } else {
        if (parseInt(el.value) > m) {}
    }
}

// Random Background Img
function backGronudImg() {
    var bg = new Array();
    bg[bg.length] = './img/banner/b1.jpg';
    bg[bg.length] = './img/banner/b2.jpg';
    bg[bg.length] = './img/banner/b3.jpg';
    // bg[bg.length] = './img/banner/b4.jpg';
    // bg[bg.length] = './img/banner/b5.jpg';
    bg[bg.length] = './img/banner/b6.jpg';
    //bg[bg.length] = './img/banner/b7.jpg';
    //bg[bg.length] = './img/banner/b8.jpg';

    var obj = document.getElementById('wrap');
    var size = Math.floor(Math.random() * (bg.length));
    j = (isNaN(size)) ? 0 : size;
    obj.style.backgroundImage = 'url(' + bg[size] + ')';
}

// Readtime Data and Time
function updateClock() {
    var d = new Date();
    var s = ""; // for Desktop
    var v = ""; // for Mobile

    s += d.getDate() + " ";
    v += d.getDate() + " ";
    s += changeMonth(new Date) + " ";
    v += changeMonth(new Date) + " ";
    s += d.getFullYear() + "<br>";
    v += d.getFullYear() + " ";
    s += ((d.getHours() + 11) % 12 + 1) + ":";
    v += ((d.getHours() + 11) % 12 + 1) + ":";
    s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
    v += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
    s += (10 > d.getSeconds() ? "0" : "") + d.getSeconds() + "\u00A0";
    v += (10 > d.getSeconds() ? "0" : "") + d.getSeconds() + "\u00A0";
    s += d.getHours() >= 12 ? "pm" : "am";
    v += d.getHours() >= 12 ? "pm" : "am";
    textElem.innerHTML = s;
    textElemMobile.innerHTML = v;

    setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20); // For Realtime
}