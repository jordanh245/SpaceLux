async function fetchNewsData() {
	const data = await fetch(
	  "https://newsapi.org/v2/everything?q=nasa&from=2021-09-01&sortBy=publishedAt/language=en/&apiKey=6acaa9b934d54b039a523d604ed51b38"
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
	  image.src = article.urlToImage
		? article.urlToImage
		: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
	  
		
		
		
		articleCont.append(image, header, textBody);
	  newsArticles.append(articleCont);
	}
  }
  fetchNewsData();