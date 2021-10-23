const linksSocialMedia ={
 
    youtube: 'channel/UCs8waI4XC0pmiFNr3dVauFQ',
    facebook:'walissonsouza712',
    instagram:'walissons',
    twitter:'Walisso98631257',
    github:'walissonsou'
    

}


let changeSocialMediaLinks = () => {
// document.getElementById('myName').textContent = 'José' maneira completa
// myName.textContent = "Walisson Souza"  maneira simplificada
    for(let li of socialLinks.children) { // .children acessa os filhos da ID
        const social = li.getAttribute('class'); // acessa os atributos da LI 
        
    
     li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}
console.log(changeSocialMediaLinks());

// função para ir no gitHUB API
let getGitHubProfile = () =>{
    const UrlGit =`https://api.github.com/users/${linksSocialMedia.github}`
    fetch(UrlGit)
        .then(response => response.json()) //1*
        .then(biografia => {myName.textContent = biografia.name
     myBio.textContent = biografia.bio
     myPhoto.src = biografia.avatar_url
     myLink.textContent = biografia.login
    })  //2*
   
}
        //1* informando que é um JSON com arrowFunction com 1 argumento só
   //2*é JSON POIS NAO MUDEI COM .JSON
    

console.log(getGitHubProfile());



