import fetch from 'node-fetch';

fetch('http://viewyt.xyz/api/taonote.php', {
    method: 'POST',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'wschkid=4bccba47d72de0414b3bb434392813bc3754550c.1656339934.1',
        'Origin': 'http://viewyt.xyz',
        'Referer': 'http://viewyt.xyz/index.php',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37'
    },
    body: new URLSearchParams({
        'text_or_id_page': 'demo t\u1EA1o note',
        'action': 'create'
    })
});