const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const containerCard = document.querySelector('.list-card');

function createCards(transactions) {
  return transactions.map(transaction => createMovieCard(transaction));
}

function createMovieCard({img, title, text, link}) {
  const container = document.createElement('div');
  container.classList.add('movie');
  
  const imagesCard = document.createElement('img');
  imagesCard.classList.add('.movie__image');
  imagesCard.src = img;
  imagesCard.alt = 'movie images';
  
  
  const containerBody = document.createElement('div');
  containerBody.classList.add('movie__body')
  
  const containerTitle = document.createElement('h2');
  containerTitle.classList.add('movie__title');
  containerTitle.textContent = title;
  
  const containerDescriptions = document.createElement('p');
  containerDescriptions.classList.add('movie__description');
  containerDescriptions.textContent = text;
  
  const containerDate = document.createElement('p');
  containerDate.classList.add('movie__date');
  containerDate.textContent = link;
  
  

  containerBody.append(containerTitle, containerDescriptions, containerDate);
  container.append(imagesCard, containerBody);
  containerCard.append(container);
}

createCards(posts);