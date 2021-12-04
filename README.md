## Express vs Flask: A Comparison of Speed

![](https://cdn-images-1.medium.com/max/3840/1*q02n0nJTxJTm_KKWLtsLYA.png)

In this article, we are going to create a RESTful API with MongoDB as the database, we will be testing some of the API methods: GET and POST. We will be using the same piece of code in both languages so that the comparison would be fair.

I have created some of the worst functions that could consume more space and more time so that the response time would be large enough for us to find out easily. Don’t miss the final result at the end. The GitHub link for both the codes is given below.

Note: I have posted only the Python code for reference here since both hold the same logic. You can get the full code on GitHub, the link has been provided below.

## Database

* MongoDB

## API Methods

* GET

* POST

* DELETE

## POST

I have created a POST route where a count integer variable is sent a URL parameter. The method will create three data types: str, arr, obj. Str will consist of a randomly generated string of count which we get from the params. Obj will consist of an object of numbers as keys and values as some random strings of the same count. The array does the same. The below is the Schema of the documents we are going to insert into the MongoDB:

![](https://cdn-images-1.medium.com/max/2720/1*yqwoQuEb3r7gBNtXM5vpRg.png)

A sample data is given below for count 4.

![](https://cdn-images-1.medium.com/max/2720/1*3R1hF6Pp6CvaBUDP3O8AhQ.png)

This data will be created using three for loops and will be inserted into MongoDB through the insert_many() function. The logic behind the code is the same in both languages. So I just posted only the Python code. Some of you may get frustrated with the running time of the below code. But I found no way other than this to check out.

![](https://cdn-images-1.medium.com/max/2720/1*FzqdX29KcyGJbNgwKSH24w.png)

## DELETE

The DELETE route will delete all the data in the collection.

![](https://cdn-images-1.medium.com/max/2720/1*f-NaQDogEH4-lO9bAGG1Eg.png)

## GET

Finally the GET route. In this, all the data inside the collection will be retrieved and returned as a response.

![](https://cdn-images-1.medium.com/max/2720/1*WwTSdRiVPdsr7yz6YL1AyA.png)

I thought of using Postman for getting the response time of each call. But as a programmer, I thought of automating things so I used Axios with Node to get the response times of each call. I have shared the code for getting the response time below.
{% gist https://gist.github.com/NaveenkumarMD/3729aff47cdec6ac2c0b88a3eb25ea2b.js %}
And finally, the results were as follows, the times are noted in milliseconds:

![](https://cdn-images-1.medium.com/max/2000/1*68NGcv4t8U7_qoPhYpMnpA.png)

![](https://cdn-images-1.medium.com/max/2000/1*LMXf9FMGLOYy4qnA-Ohnkw.png)

From the above graph, it's obvious that Express is much faster than Python’s Flask.
[**GitHub - NaveenkumarMD/Node-vs-Flask**](https://github.com/NaveenkumarMD/Node-vs-Flask)

And with that, we come to the end of this post. Thank you for reading.
