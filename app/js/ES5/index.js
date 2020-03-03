"use strict";

//fetch handlebars template and .compile it
//fetch API data and .json it
fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc').then(function (jsonData) {
  return jsonData.json();
}).then(function (githubApiData) {
  fetch('template.hbs').then(function (handlebarsTemplateData) {
    return handlebarsTemplateData.text();
  }).then(function (repoTemplate) {
    var htmlTemplate = Handlebars.compile(repoTemplate);
    var gitRepos = htmlTemplate(githubApiData);
    document.querySelector('.repoContainer').textContent = gitRepos;
  });
});