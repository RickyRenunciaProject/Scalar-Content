function changePageLang( lang ) {
    var contents = document.getElementsByClassName( "lang-content" );
    for ( i=0; i < contents.length; i++ ) {
        if( contents[i].lang == lang )
            contents[i].style.display = "block";
        else
            contents[i].style.display = "none";
    }
}

function getPageLang(groupName){
    var radios = document.getElementsByName( groupName );
    for ( i=0; i < radios.length; i++ ) {
        if( radios[i].checked )
            changePageLang(radios[i].value);
    }
}
