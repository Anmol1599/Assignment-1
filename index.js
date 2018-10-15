let thanks =
[
    {"name":"Anabal Lott","subject":"engineer killer users","pic":"https://robohash.org/voluptatemquiavoluptas.jpg?size=50x50\u0026set=set1","paragraph":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."},

    {"name":"Ivor Dewdeny","subject":"disintermediate robust vortals","pic":"https://robohash.org/corporisautasperiores.png?size=50x50\u0026set=set1","paragraph":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."},

    {"name":"Claiborne Partner","subject":"whiteboard sexy bandwidth","pic":"https://robohash.org/voluptatemeligendiesse.jpg?size=50x50\u0026set=set1","paragraph":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl."},
];

let linkCompose = document.getElementById('compose');
let linktrash = document.getElementById("linkTrash");
let linkinbox = document.getElementById("inbox");
linkCompose.addEventListener('click', composeform);

let selectedanime = 0;

linkinbox.addEventListener('click', function(e)
{
    e.preventDefault();
    let wonder = thanks.filter(anime => anime.deleted);
    selectedanime= 0;
    render(wonder);
});

linktrash.addEventListener('click', function(e)
{
    e.preventDefault();
    let abox=thanks.filter(anime => !anime.deleted);
    selectedanime= 0;
    render(abox);
});

linkCompose.addEventListener('click', function(e)
{
    e.preventDefault();
    console.log('clicked');
})

function composeform(entery) 
{
entery.preventDefault();
let form = 
`<div class="pure-U-1">
<form id="anmie" id="composeform" class="pure-form pure-form-aligned" name="animedata">
<fieldset>
    <div class="pure-control-group">
        <label for="title">Full Name </label>
        <input id="title" type="text" placeholder="animename" >
        <span class="pure-form-message-inline"></span>
    </div>

    <div class="pure-control-group">
        <label for="publisher">Subject</label>
        <input id="publisher" type="text" placeholder="Publisher">
    </div>

    <div class="pure-control-group">
        <label for="desbody">Message</label>
        <textarea id="discript" input id="discript1" type="desbody" class="pure-input-1-2" rows="5" cols="1000"> </textarea>
    </div>

    <div>
        <button id="send" type="submit" class="pure-button pure-button-primary">SEND</button>
    </div>

</fieldset>
</form>
</div>`;

let what = document.getElementById('main');
what.innerHTML = form;
    
let go = document.getElementById('newanime');
go.addEventListener('submit', function(e)

{
e.preventDefault();

let rot =
{
    name : document.forms.animedata.title.value,
    subject : document.forms.animedata.publisher.value,
    avatar : "https://avatars3.githubusercontent.com/u/41354985?v=4"
}

thanks.unshift(rot);
setlocalStorage();
linkinbox.click();

});
}

function render(thanks) 
{
let watchanime = 
`${thanks.map( (anime, index) => `
<div class=" email-item pure-g" data-id="${index}">
        <div class="pure-u">
             <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${anime.avatar}">
        </div>

        <div class="pure-u-3-4">

         <h5 class="email-name">${anime.name}</h5>

         <h4 class="email-subject">${anime.subject}</h4>

          <p class="email-desc">

     ${anime.paragraph}
    </p>
    </div>
</div>
` ).join('')}
`;

let alx = document.getElementById("list");
alx.innerHTML = watchanime;
initialize(thanks);
}

function initialize(thanks) 
{
let animeList = [... (document.querySelectorAll ('[data-id]'))];
animeList.map( (anime, index) => anime.addEventListener('click', function(g) {

    animeList[selectedanime].classList.remove('email-item-selected');
    anime.classList.add('email-item-selected');
    selectedanime = index;
    showAnimebody(index, thanks);
}));

if (thanks.length)  
     {
    animeList[selectedanime].classList.add('email-item-selected');
    showAnimebody(selectedanime, thanks);
    }

else
    {
    let what = document.getElementById("main");
    what.innerHTML='<h1>NO Thanks</h1>';
    }
}

function showAnimebody(idx, thanks)
{
    let displayAnimebody = `
    <div class="email-content">
    <div class="email-content-header pure-g">
            <div class="pure-u-1-2">
            <h1 class="email-content-title">${thanks[idx].subject}</h1>
            <p class="email-content-subtitle">
            From <a>${thanks[idx].name}</a> <span>${thanks[idx].date}</span>
            </p>
    </div>

    <div class="email-content-controls pure-u-1-2">
            <button id="delete" data-id="${idx}" class="secondary-button pure-button">${thanks[idx].deleted == true ? 'Deleted' : 'delete'}</button>
            <button class="secondary-button pure-button">Archieve</button>
            <button class="secondary-button pure-button">Unread</button>
    </div>
    </div>

    <div class="email-content-body">
    <p>
         ${thanks[idx].paragraph}
    </p>
    </div>
    </div>
    `;

let what = document.getElementById('main');
what.innerHTML = displayAnimebody;

let ask = document.getElementById("delete");
ask.addEventListener('click', () => deleteanime(ask.dataset.id, thanks));

}
    
function deleteanime(index, thanks)
{
            if(!thanks[index].deleted)
            {
                thanks[index].deleted = true;
                 setlocalStorage();
                 let abox = thanks.filter(anime => !anime.deleted)
                selectedanime= 0;
                render(abox);
            }
        else
        {
            delete thanks[index].deleted;
            let wonder=thanks.filter(anime => anime.deleted);
            selectedanime= 0;
            render(wonder);
         }
}
    
function setlocalStorage()
    {
    localStorage.setItem('items', JSON.stringify(thanks));
    }

if(localStorage.getItem('items'))
{
     thanks = JSON.parse(localStorage.getItem('items'));
     let wonder = thanks.filter(anime => !anime.deleted);
     render(wonder);
}
else
{
     render(thanks);
}
render(thanks);