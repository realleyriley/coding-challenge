Currently I'm able to send requests to the API but it will sometimes work and sometimes not work. If I try a complicated request it might return "message":"query exceeds complexity limit" when the same query will work in the web browser. Other times the web browser will return an error with an iframe: www.herokucdn.com/error-pages/application-error.html.

I can't figure out what the 'sort' parameter requires. I checked the docs and all it tells me is the data type. I've tried 'asc' 'ascending' and their counterparts but no luck.

I've got pagination to work but I can't figure out how to get the total number of launches returned. I'm just using a hard coded value of 100 for now.