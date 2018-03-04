var Instagram = require('./instafetch');

Instagram = new Instagram();

async function fetch() {

	var hashtagdata = await Instagram.getDataByHashtag("phuket");
    //console.log('hashtag data:', JSON.stringify(hashtagdata));
    var entries = hashtagdata.graphql.hashtag.edge_hashtag_to_media.edges;
    console.log('Entries: ' + entries.length);
    console.log('hashtag data:', JSON.stringify(entries[0]));
    // for(var i = 0; 1 < entries.length; i++){
        
    // }

}

fetch();