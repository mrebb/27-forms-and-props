![cf](http://i.imgur.com/7v5ASc8.png) 27: Forms and Props
===


#### Documentation 

#### Reddit App
This is a simple react app that makes a API call to reddit and return results. App has a search form and result set that comes back.
```
App
  SearchForm
  SearchResultList
``` 

###### SearchForm Component
* Provide a text input like any reddit board to look up
* Enter a number input to limit the number of results to return 
  * the number must be more than 0 and less than 100
  * `onSubmit` the form makes a request to reddit using `https://wwwreddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
  * on success it displayes the results on screen
  * on failure it turns the form's input borders red

###### SearchResultList Component
* If there are topics received it displays an unordered list 
* Each list item in the unordered list contains the following
  * an anchor tag with a href to the topic.url 
    * inside the anchor a heading tag with the topic.title 
    * inside the anchor a p tag with the number of topic.ups 

###### Technologies used
  * React & React component architecture
  * Node.js
  * Webpack
  * Reddit API