# Poshan Abhiyaan

## About

This is a Node.js/Express web application and a corresponding Android application built to enhance the features of [Poshan Abhiyaan](http://poshanabhiyaan.gov.in/) (a scheme initiated by the Ministry of Women and Child Development, India)

This was built during an internal hackathon conducted for SIH 2020. This application features adding/removing users, health workers, adding/removing camps set up and adding/removing doses.

If a user misses his/her dose, the health worker has a feature of sending a reminder to the health worker via a SMS.

## Technology Stack

1. Frontend built using HTML, CSS, JS and Bootstrap
1. Backend built using Node.js/Express
1. Data stored on MongoDB Atlas
1. SMS Feature implemented using [Nexmo API](https://www.nexmo.com/)

## Build

1. To install the required dependencies

   ```javascript
   npm install
   ```

1. Create a `default.json` in `config/`
   ```json
   {
      "mongoURI": "YOUR_MONGO_CONNECT_URI",
      "nexmoApiKey": "YOUR_NEXMO_API_KEY",
      "nexmoApiSecret": "YOUR_NEXMO_API_SECRET"
   }
   ```

## Developers

> Bhavesh Singh
> [github.com/bhaveshsingh0206](https://github.com/bhaveshsingh0206)

> Adnan Hakim
> [github.com/adnanhakim](https://github.com/adnanhakim)

> Ali Abbas Rizvi
> [github.com/rizvialiabbas](https://github.com/rizvialiabbas)

> Arsh Shaikh
> [github.com/arshshaikh06](https://github.com/arshshaikh06)


> Priya Shah
> [github.com/priyashah31](https://github.com/priyashah31)

> Rahil Desai
> [github.com/Rahildesai7](https://github.com/Rahildesai7)

## MIT LICENSE

> Copyright (c) 2020 Team Void
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
