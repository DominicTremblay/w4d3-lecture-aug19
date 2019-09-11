const ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';

// create the HTML dynamically
const createArticle = articleObj => {
  // <div class="post-preview" data-article-id="">
  //   <a href="#">
  //     <h2 class="post-title">title</h2>
  //     <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
  //   </a>
  //   <p class="post-meta">

  //     content
  // <p>
  //     Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
  // </p>
  //   </p>
  // </div>
  // <hr />
  // creating the top level container div
  const $articleDiv = $('<div>')
    .addClass('post-preview')
    .attr('data-article-id', articleObj.id);

  // creating the link
  const $link = $('<a>').attr('href', '#');

  // adding an h2 to the link
  $('<h2>')
    .addClass('post-title')
    .text(articleObj.title)
    .appendTo($link);

  //adding the h3 to the link
  $('<h3>')
    .addClass('post-subtitle')
    .text('This is the sub-title')
    .appendTo($link);

  //adding the link to the parent div
  $articleDiv.append($link);

  // creating the content
  const $content = $('<p>')
    .addClass('post-meta')
    .text(articleObj.body);

  // adding the posted by to the content
  $('<p>')
    .html('Posted by <a href="#">Start Bootstrap</a> on September 24, 2014')
    .appendTo($content);

  // adding the content to the top level div
  $articleDiv.append($content);

  return $articleDiv;
};

const renderArticles = articleArr => {
  $.each(articleArr, (index, articleObj) => {
    $('#articles').append(createArticle(articleObj));
  });
};

// Create the ajax request
const requestPosts = (method, url, cb) => {
  $.ajax({
    method,
    url,
  })
    .done(response => {
      // $('#articles').append(createArticle(response[0]));

      cb(response);

      // loop over the array of objects

      // Create an HTML element out of each object

      // append it to the #articles div
    })
    .fail(err => console.log(err))
    .always(() => console.log('request completed.'));
};

// Document.ready
$(() => {
  // make the request to load the posts

  requestPosts('GET', ROOT_URL, renderArticles);

  // create an event handler to load more post on a click of #load-more
  $('#load-more').on('click', function(event) {
    // preventing the default behavior of the click
    event.preventDefault();
    // performing another Ajax requests to get 100 more articles
    requestPosts('GET', ROOT_URL, renderArticles);
  });
}); // End of document ready
