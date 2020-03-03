//fetch handlebars template and .compile it
//fetch API data and .json it

fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
.then((jsonData)=>{
    return jsonData.json()
}).then((githubApiData)=> {
    fetch('template.hbs')
        .then((handlebarsTemplateData)=> {
            return handlebarsTemplateData.text()
        }).then((repoTemplate)=> {
            let htmlTemplate = Handlebars.compile(repoTemplate)
            let topThreeRepos = {}

            topThreeRepos.items = githubApiData.items.slice(0,3)

            //another way of grabbing the first 3 from array (add these to an object with key name of items and and array inside
            // topThreeRepos.items.push(githubApiData.items[0])
            // topThreeRepos.items.push(githubApiData.items[1])
            // topThreeRepos.items.push(githubApiData.items[2])

// console.log(topThreeRepos)
            let gitRepos = htmlTemplate(topThreeRepos)
            document.querySelector('.container').innerHTML = gitRepos
    })
})

