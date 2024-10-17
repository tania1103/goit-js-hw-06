//The script creates a list of <li> elements containing <img> elements from the images array using map()

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

//creates an array of HTML strings for each image
const galleryMarkup = images.map(({ url, alt }) => 
`<li><img src="${url}" alt="${alt}" width="300"></li>`  //generates a string for each image, wrapping it in an <li>
).join(''); //combines all strings into one

gallery.insertAdjacentHTML('beforeend', galleryMarkup); //adds the generated markup to the end of the gallery