To setup this project

cli
- git clone git@github.com:sudarshanb11/github-profile.git
- cd github-profile
- npm install
- npm start

Currently the app show up my github profile details, to change that 
- find the file github-profile/src/App.js
- line 17 : change the authorization token to get respective github proifile detail

While creating ther auth token, the app requires these details given below
- public_repo  Access public repositories
- read:user  Read all user profile data
- user:email  Access user email addresses (read-only)
