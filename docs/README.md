# Dream API
> Starter API for a text based journaling


[![Made with latest Docsify](https://img.shields.io/npm/v/docsify/latest?label=docsify)](https://docsify.js.org/)


## About
Dream API was built with the user in mind. We set out to create a text based editor for anyone to use and start journaling their experiences.



<!-- ## Preview


https://docs.thecatapi.com/api-reference/breeds/breeds-search

## Installation



## Usage -->

# (GET) /dreams
> List all posts 

The properties of call include an id to identify certain posts and category to identify sentiment

<strong>Request Parameters</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  post_id (optional, default ALL) | integer   | 
| category(optional, default ALL)   | string | 


## (POST) /new
> Create new post

The properties of call include a id for the post created, a title for name of post, body for text of post, and category which can be 'positive' or 'negative'.

<strong>Request Parameters</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  post_id (optional, default ALL) | integer   | 
|  title (required) | string   | 
|  body (required) | string   | 
| category(required, default ALL)   | string | 
|  created_on (required) | datetime   | 
|  created_by (required) | integer   | 



## (GET) /id
> Search posts

Search for a dream post by using part of it’s name as the query parameter.

e.g 3 to search for 3rd post in feed - http://localhost:3000/dream/3


| Responses       | 
| :------------- | 
|  post_id (integer) |
|  title (string) |
|  body (string) |
|  category (string) |
|  created_on (datetime) |
|  created_by (datetime) |



## (GET) /negative
> View Negative or "Nightmare" posts

Search for negative posts by using part of it’s name as the query parameter.

http://localhost:3000/negative

| Responses       | 
| :------------- | 
|  post_id (integer) |
|  title (string) |
|  body (string) |
|  category (string) |
|  created_on (datetime) |
|  created_by (datetime) |


## (GET) /positive
> View Postive or "Dream" posts

Search for postive posts by using part of it’s name as the query parameter.

http://localhost:3000/postive

| Responses       | 
| :------------- | 
|  post_id (integer) |
|  title (string) |
|  body (string) |
|  category (string) |
|  created_by (datetime) |
|  created_by (datetime) |


## (DELETE) /delete
> Remove a post

Delete the post with the ID passed if it belongs to your Account.

<strong>Request Parameters</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  post_id (optional, default ALL) | integer   | 


# (GET) /user
> Shows User of active account 

Show your profile by using part of it’s name as the query parameter.

e.g  To view active user profile - http://localhost:3000/user

<strong>Request Responses (200)</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  user_id (required) | integer   | 
|  username (required) | string   | 
| posts(optional)   | string | 
| created_on (required) | datetime   | 

## (GET) /user/id
> Search for a user

Search for a user by using part of it’s id as the query parameter.

e.g 5 to look fo user of ID 5  - http://localhost:3000/user/5

<strong>Request Parameters</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  user_id (required) | integer   | 



<strong>Request Responses (200)</strong>

| Field       | Type     |
| :------------- | :----------: | 
|  user_id  | integer   | 
|  username  | string   | 
| posts   | string | 
| created_on  | datetime   | 







