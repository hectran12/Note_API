const axios = require('axios');

const response = await axios.post(
    'http://viewyt.xyz/api/taonote.php',
    new URLSearchParams({
        'text_or_id_page': 'demo t\u1EA1o note',
        'action': 'create'
    }),
    {
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Origin': 'http://viewyt.xyz',
            'Referer': 'http://viewyt.xyz/index.php',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37'
        }
    }
);
