import matlab.net.*
import matlab.net.http.*
import matlab.net.http.io.*

header = [
    field.AcceptField([
        MediaType('text/html')
        MediaType('application/xhtml+xml')
        MediaType('application/xml;q=0.9')
        MediaType('image/webp')
        MediaType('image/apng')
        MediaType('*/*;q=0.8')
        MediaType('application/signed-exchange;v=b3;q=0.9')
    ])
    HeaderField('Accept-Language', 'en-US,en;q=0.9')
    HeaderField('Cache-Control', 'max-age=0')
    HeaderField('Connection', 'keep-alive')
    HeaderField('Content-Type', 'application/x-www-form-urlencoded')
    HeaderField('Origin', 'http://viewyt.xyz')
    HeaderField('Referer', 'http://viewyt.xyz/index.php')
    HeaderField('Upgrade-Insecure-Requests', '1')
    HeaderField('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37')
]';
uri = URI('http://viewyt.xyz/api/taonote.php');
options = HTTPOptions('VerifyServerName', false);
body = FormProvider('text_or_id_page', 'demo+t%E1%BA%A1o+note', 'action', 'create');
response = RequestMessage('post', header, body).send(uri.EncodedURI, options);
