async function fetchNewsData() {
	const data = await fetch(
		// "https://gnews.io/api/v4/search?q=nasa&country=us&language=en&token=5c72d223e8cefeb8e540657a176433a9"
	
		  "https://newsapi.org/v2/everything?q=nasa&from=&sortBy=publishedAt/language=en/&apiKey=6acaa9b934d54b039a523d604ed51b38"
	);
	const newsData = await data.json();
	const newsArticles = document.querySelector(".newsArt");
	for (let article of newsData.articles) {
	//   console.log(article);
	  const articleCont = document.createElement("div");
	  articleCont.className = "article";
	  const header = document.createElement("h2");
	  const textBody = document.createElement("p");
	  const image = document.createElement("img");
  
	  
	 
	  header.innerText = article.title;
	  textBody.innerText = article.description;
	//   image.src = article.image
	  image.src = article.urlToImage
		? article.urlToImage
		// article.image
		: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
	  
		
		
		
		articleCont.append(image, header, textBody);
	  newsArticles.append(articleCont);
	}
  }
  fetchNewsData();