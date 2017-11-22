https://wt-f53ed98deaa147f9e3c2efce2246ef5b-0.run.webtask.io/email-verify

## sample usage

```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://wt-f53ed98deaa147f9e3c2efce2246ef5b-0.run.webtask.io/email-verify",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "8a23378a-ca8c-7990-38a6-81559a23b4d7"
  },
  "data": {
    "firstName": "jacob",
    "lastName": "goh",
    "nickName": "",
    "middleName": "",
    "domain1": "gmail.com",
    "domain2": "",
    "domain3": ""
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
